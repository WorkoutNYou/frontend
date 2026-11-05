const API_BASE = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000/api/workouts'
  : '/api/workouts';

async function parseResponse(response) {
  const text = await response.text();
  const contentType = response.headers.get('content-type') || '';

  if (!response.ok) {
    throw new Error(text || `API request failed with status ${response.status}`);
  }

  if (!contentType.includes('application/json')) {
    throw new Error(`Expected JSON but received: ${text.slice(0, 200)}`);
  }

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Invalid JSON response: ${text.slice(0, 200)}`);
  }
}

async function request(path = '', options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE}${path}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
  } catch (err) {
    throw new Error(`Network error: ${err.message}`);
  }

  return parseResponse(response);
}

export function fetchWorkouts() {
  return request('');
}

export function createWorkout(workout) {
  return request('', {
    method: 'POST',
    body: JSON.stringify(workout),
  });
}

export function updateWorkout(id, workout) {
  return request(`/${id}`, {
    method: 'PUT',
    body: JSON.stringify(workout),
  });
}

export function deleteWorkout(id) {
  return request(`/${id}`, {
    method: 'DELETE',
  });
}
