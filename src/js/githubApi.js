const base_URL = 'https://api.github.com';

export async function fetchUserProfile(userName) {
  const response = await fetch(`${base_URL}/users/${userName}`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return await response.json();
}