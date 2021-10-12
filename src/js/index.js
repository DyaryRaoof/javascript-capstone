import '../assets/style.css';
import './comments.js';
import { TvGetters, createNewApp } from './api.js';
import DomPopulating from './domPop.js';

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

const seasonListener = (info) => {
  const seasonItems = document.querySelectorAll('#bottom-header li');
  seasonItems.forEach((li, index) => {
    li.addEventListener('click', async () => {
      const { id } = info[index];
      await TvGetters.getEpisodes(id).then((ep) => {
        const episodeList = ep;
        DomPopulating.createEpisodes(episodeList);
      });
    });
  });
};

document.addEventListener('click', async (event) => {
  const { target } = event;
  if (target.innerText === 'Stranger Things') {
    await TvGetters.getSeasons(2993).then((s) => {
      const seasonInfo = s;
      const seasonN = seasonInfo.length;
      DomPopulating.createSeason(seasonN);
      seasonListener(seasonInfo);
    });
  } else if (target.innerText === 'Heroes') {
    await TvGetters.getSeasons(134).then((s) => {
      const seasonInfo = s;
      const seasonN = seasonInfo.length;
      DomPopulating.createSeason(seasonN);
      seasonListener(seasonInfo);
    });
  } else if (target.innerText === 'Lost') {
    await TvGetters.getSeasons(123).then((s) => {
      const seasonInfo = s;
      const seasonN = seasonInfo.length;
      DomPopulating.createSeason(seasonN);
      seasonListener(seasonInfo);
    });
  }
});
