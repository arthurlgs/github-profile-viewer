import { fetchUserProfile } from './githubApi.js';
import {
  getUserName,
  showLoading,
  hideLoading,
  clearProfileResults,
  renderProfile,
  addSearchListener,
  showAlert
} from './dom.js';

addSearchListener(async () => {
  const userName = getUserName();

  if (userName) {
    showLoading();
    clearProfileResults();

    try {
      const userData = await fetchUserProfile(userName);
      renderProfile(userData);
    } catch (error) {
      console.error('Error: Failed to get user profile', error);
      showAlert('An error occurred trying to get user profile. Please verify username and try again');
    } finally {
      hideLoading();
    }
  } else {
    showAlert('Please write a valid Github username');
  }
});