const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');
const loading = document.getElementById('loading');

export function getUserName() {
  return inputSearch.value;
}

export function showLoading() {
  loading.style.display = 'block';
}

export function hideLoading() {
  loading.style.display = 'none';
}

export function clearProfileResults() {
  profileResults.innerHTML = '';
}

export function renderProfile(userData) {
  profileResults.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4>👥 Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👥 Seguidores</h4>
        <span>${userData.following}</span>
      </div>
    </div>
  `;
}

export function addSearchListener(callback) {
  btnSearch.addEventListener('click', callback);
}

export function showAlert(message) {
  alert(message);
}