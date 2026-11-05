import React, { useState } from 'react';
import { createWorkout, updateWorkout } from '../api/workoutService';
import './WorkoutEditor.css';

const defaultPart = () => ({ id: Date.now(), name: '', notes: '', repetition: 1, distance: 0, timingMode: 'interval', interval: '', restTime: '', expectedTime: '' });
const defaultSet = () => ({ id: Date.now(), name: '', parts: [defaultPart()] });

const WorkoutEditor = ({ initial = null, onSave }) => {
  const [workout, setWorkout] = useState(
    initial || {
      id: null,
      name: '',
      meta: { pooltype: 'SCY', distance: '', time: '', tags: [] },
      sets: [defaultSet()]
    }
  );

  function updateMeta(key, value) {
    setWorkout((w) => ({ ...w, meta: { ...w.meta, [key]: value } }));
  }

  function addSet() {
    setWorkout((w) => ({ ...w, sets: [...w.sets, defaultSet()] }));
  }

  function removeSet(setIndex) {
    setWorkout((w) => ({ ...w, sets: w.sets.filter((_, i) => i !== setIndex) }));
  }

  function updateSet(setIndex, key, value) {
    setWorkout((w) => {
      const sets = [...w.sets];
      sets[setIndex] = { ...sets[setIndex], [key]: value };
      return { ...w, sets };
    });
  }

  function addPart(setIndex) {
    setWorkout((w) => {
      const sets = [...w.sets];
      sets[setIndex] = { ...sets[setIndex], parts: [...sets[setIndex].parts, defaultPart()] };
      return { ...w, sets };
    });
  }

  function removePart(setIndex, partIndex) {
    setWorkout((w) => {
      const sets = [...w.sets];
      const parts = sets[setIndex].parts.filter((_, i) => i !== partIndex);
      sets[setIndex] = { ...sets[setIndex], parts };
      return { ...w, sets };
    });
  }

  function updatePart(setIndex, partIndex, key, value) {
    setWorkout((w) => {
      const sets = [...w.sets];
      const parts = sets[setIndex].parts.map((p, i) => i === partIndex ? { ...p, [key]: value } : p);
      sets[setIndex] = { ...sets[setIndex], parts };
      return { ...w, sets };
    });
  }

  function addTag(value) {
    if (!value) return;
    setWorkout((w) => ({ ...w, meta: { ...w.meta, tags: Array.from(new Set([...w.meta.tags, value])) } }));
  }

  function removeTag(tag) {
    setWorkout((w) => ({ ...w, meta: { ...w.meta, tags: w.meta.tags.filter((t) => t !== tag) } }));
  }

  async function handleSave() {
    const payload = { ...workout, id: workout.id ?? `${Date.now()}-${Math.random().toString(36).slice(2, 8)}` };
    if (onSave) {
      onSave(payload);
      return;
    }

    try {
      setSaving(true);
      if (workout.id) {
        await updateWorkout(payload.id, payload);
      } else {
        await createWorkout(payload);
      }
      alert('Workout saved successfully');
      setWorkout(payload);
    } catch (error) {
      alert(`Unable to save workout: ${error.message}`);
    } finally {
      setSaving(false);
    }
  }

  function handleCancel() {
    if (initial) setWorkout(initial);
    else setWorkout({ id: null, name: '', meta: { pooltype: 'SCY', distance: '', time: '', tags: [] }, sets: [defaultSet()] });
  }

  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);

  return (
    <div className="workout-editor-container">
      <div className="workout-editor-panel">
        <div className="workout-editor-form">
          <label className="field">
            <span className="label">Workout Name</span>
            <input value={workout.name} onChange={(e) => setWorkout((w) => ({ ...w, name: e.target.value }))} placeholder="Workout name" />
          </label>

          <div className="meta-row">
            <label className="field small">
              <span className="label">Distance</span>
              <input value={workout.meta.distance} onChange={(e) => updateMeta('distance', e.target.value)} placeholder="e.g. x1000" />
            </label>
            <label className="field small">
              <span className="label">Time</span>
              <input value={workout.meta.time} onChange={(e) => updateMeta('time', e.target.value)} placeholder="e.g. ~26 min" />
            </label>
            <label className="field small">
              <span className="label">Pool Type</span>
              <select value={workout.meta.pooltype} onChange={(e) => updateMeta('pooltype', e.target.value)}>
                <option>SCY</option>
                <option>SCM</option>
                <option>LCM</option>
              </select>
            </label>
          </div>

          <div className="tags-control">
            <span className="label">Tags</span>
            <div className="tags-input">
              <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Add tag and press Enter" onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(tagInput.trim()); setTagInput(''); } }} />
              <div className="tags-list">
                {workout.meta.tags.map((t) => (
                  <button key={t} type="button" className="tag" onClick={() => removeTag(t)}>{t} ×</button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounds">
            {workout.sets.map((set, setIdx) => (
              <div key={set.id} className="round">
                <div className="round-header">
                  <input 
                    type="text" 
                    className="set-name-input"
                    value={set.name} 
                    onChange={(e) => updateSet(setIdx, 'name', e.target.value)} 
                    placeholder={`Set ${setIdx + 1} name`} 
                  />
                  <button type="button" className="set-remove" onClick={() => removeSet(setIdx)}>Remove Set</button>
                </div>

                <div className="segments">
                  {set.parts.map((part, partIdx) => (
                    <div key={part.id} className="segment">
                      <label className="seg-field">
                        <span className="seg-label">Name</span>
                        <input className="seg-name" value={part.name} onChange={(e) => updatePart(setIdx, partIdx, 'name', e.target.value)} placeholder="Part name" />
                      </label>
                      <label className="seg-field">
                        <span className="seg-label">Notes</span>
                        <input className="seg-notes" value={part.notes} onChange={(e) => updatePart(setIdx, partIdx, 'notes', e.target.value)} placeholder="Notes" />
                      </label>
                      <label className="seg-field">
                        <span className="seg-label">Reps</span>
                        <input className="seg-rep" type="number" min="1" value={part.repetition} onChange={(e) => updatePart(setIdx, partIdx, 'repetition', Number(e.target.value) || 1)} placeholder="Reps" />
                      </label>
                      <label className="seg-field">
                        <span className="seg-label">Distance</span>
                        <input className="seg-dist" type="number" value={part.distance} onChange={(e) => updatePart(setIdx, partIdx, 'distance', Number(e.target.value) || 0)} placeholder="Distance" />
                      </label>
                      <label className="seg-field">
                        <span className="seg-label">Timing Mode</span>
                        <select className="seg-timing" value={part.timingMode || 'interval'} onChange={(e) => updatePart(setIdx, partIdx, 'timingMode', e.target.value)}>
                          <option value="interval">On Interval</option>
                          <option value="rest">On Fixed Rest</option>
                        </select>
                      </label>
                      {(part.timingMode || 'interval') === 'interval' ? (
                        <label className="seg-field">
                          <span className="seg-label">Interval</span>
                          <input className="seg-interval" value={part.interval} onChange={(e) => updatePart(setIdx, partIdx, 'interval', e.target.value)} placeholder="e.g. 1:30" />
                        </label>
                      ) : (
                        <>
                          <label className="seg-field">
                            <span className="seg-label">Rest Time</span>
                            <input className="seg-rest" value={part.restTime} onChange={(e) => updatePart(setIdx, partIdx, 'restTime', e.target.value)} placeholder="e.g. 0:30" />
                          </label>
                          <label className="seg-field">
                            <span className="seg-label">Expected Time</span>
                            <input className="seg-expected" value={part.expectedTime} onChange={(e) => updatePart(setIdx, partIdx, 'expectedTime', e.target.value)} placeholder="e.g. 1:00" />
                          </label>
                        </>
                      )}
                      <button type="button" className="seg-remove" onClick={() => removePart(setIdx, partIdx)}>×</button>
                    </div>
                  ))}
                  <button type="button" className="seg-add" onClick={() => addPart(setIdx)}>Add Part</button>
                </div>
              </div>
            ))}
            <button type="button" className="set-add" onClick={addSet}>Add Set</button>
          </div>

          <div className="form-actions">
            <button className="btn primary" onClick={handleSave} disabled={saving}>
              {saving ? 'Saving…' : 'Save'}
            </button>
            <button className="btn" onClick={handleCancel} type="button">Cancel</button>
          </div>
        </div>

        <div className="workout-preview">
          <h3>Live Preview</h3>
          <pre>{JSON.stringify(workout, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default WorkoutEditor;