import '../assets/style.css';
import './comments.js';
import { TvGetters, getLikes } from './api.js';
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
      await TvGetters.getEpisodes(id).then(async (ep) => {
        const episodeList = ep;
        await getLikes().then((arr) => {
          episodeList.forEach(episode => {
            let key = Object.keys(arr).find(key => arr[key].item_id === `${episode.id}`);
            if (arr[key] !== undefined){
              episode.likes = arr[key].likes
            } else {
              episode.likes = 0
            }
          })
          DomPopulating.createEpisodes(episodeList);
        })
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

document.addEventListener('DOMContentLoaded', async () => {
  await TvGetters.getSeasons(2993).then(async (s) => {
    const seasonInfo = s;
    const seasonN = seasonInfo.length;
    DomPopulating.createSeason(seasonN);
    seasonListener(seasonInfo);
    const seasonItems = document.querySelectorAll('#bottom-header li');
    seasonItems[0].click()
  })
})