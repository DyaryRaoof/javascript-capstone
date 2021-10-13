import '../assets/style.css';
import './comments.js';
import { TvGetters, getLikes } from './api.js';
import DomPopulating from './domPop.js';

const seasonListener = (info) => {
  const seasonItems = document.querySelectorAll('#bottom-header li');
  seasonItems.forEach((li, index) => {
    li.addEventListener('click', async (event) => {
      const { id } = info[index];
      const episodeList = await TvGetters.getEpisodes(id);
      const arr = await getLikes();
      episodeList.forEach((episode) => {
        const key = Object.keys(arr).find((key) => arr[key].item_id === `${episode.id}`);
        if (arr[key] !== undefined) {
          episode.likes = arr[key].likes;
        } else {
          episode.likes = 0;
        }
      });
      DomPopulating.createEpisodes(episodeList);
      DomPopulating.episodeCounter(event.target);
    });
  });
};

document.addEventListener('click', async (event) => {
  const { target } = event;
  if (target.innerText === 'Stranger Things') {
    const seasonInfo = await TvGetters.getSeasons(2993);
    const seasonN = seasonInfo.length;
    DomPopulating.createSeason(seasonN);
    DomPopulating.seasonCounter(event.target);
    seasonListener(seasonInfo);
  } else if (target.innerText === 'Heroes') {
    const seasonInfo = await TvGetters.getSeasons(134);
    const seasonN = seasonInfo.length;
    DomPopulating.createSeason(seasonN);
    DomPopulating.seasonCounter(event.target);
    seasonListener(seasonInfo);
  } else if (target.innerText === 'Lost') {
    const seasonInfo = await TvGetters.getSeasons(123);
    const seasonN = seasonInfo.length;
    DomPopulating.createSeason(seasonN);
    DomPopulating.seasonCounter(event.target);
    seasonListener(seasonInfo);
  }
});

document.addEventListener('DOMContentLoaded', async () => {
  const seasonInfo = await TvGetters.getSeasons(2993);
  const seasonN = seasonInfo.length;
  const firstShow = document.querySelectorAll('#top-header li');
  DomPopulating.createSeason(seasonN);
  DomPopulating.seasonCounter(firstShow[1]);
  seasonListener(seasonInfo);
  const seasonItems = document.querySelectorAll('#bottom-header li');
  seasonItems[0].click();
});