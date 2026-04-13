const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');
const loading = document.getElementById('loading')

const base_URL = 'https://api.github.com'

btnSearch.addEventListener('click', async () => {
  const userName = inputSearch.value;



  if (userName) {
    loading.style.display = 'block';
    profileResults.innerHTML = '';

    try {
        const response = await fetch(`${base_URL}/users/${userName}`)

        if(!response.ok) {
            alert('User not found, please use a valid username.')
            loading.style.display = 'none';
            return;
        }

        const userData = await response.json();
        console.log(userData)

        profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio}</p>
                </div>
            </div>
        `;
        loading.style.display = 'none';

    } catch (error) {
        console.error('Error: Failed to get user profile')
        alert('An error occured trying to get user profile. Please verify username and try again')
        loading.style.display = 'none';
    }


  } else {
    alert('Please write a valid Github username');
  }

});



    // console.log(data.avatar_url)
    // console.log(data.name)
    // console.log(data.bio)
    // console.log(data.followers)
    // console.log(data.following)