import '../assets/style.css';
import './comments.js';
import { createNewApp } from './api.js';

const saveAppId = async () => {
  let appId;
  appId = localStorage.getItem('appId');
  if (!appId) {
    appId = await createNewApp();
    localStorage.setItem('appId', appId);
  }
};

window.addEventListener('load', () => {
  saveAppId();
});
