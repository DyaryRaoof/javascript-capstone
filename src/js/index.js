import '../assets/style.css';
import TvGetter from './API';
import DomPopulating from './domPop';

const seasonListener = (info) => {
  const seasonItems = document.querySelectorAll('#bottom-header li')
  seasonItems.forEach((li, index)=> {
    li.addEventListener('click', async () => {
      const id = info[index].id;
      await TvGetter.getEpisodes(id).then((ep) => {
        const episodeList = ep 
        DomPopulating.createEpisodes(episodeList)
      })
    })
  })
}

document.addEventListener('click', async (event) => {
  const target = event.target;
  if (target.innerText === 'Stranger Things')  {
    await TvGetter.getSeasons(2993).then((s) => {
      const seasonInfo = s
      const seasonN = seasonInfo.length
      DomPopulating.createSeason(seasonN)
      seasonListener(seasonInfo)
    });
  } else if (target.innerText === 'Heroes')  {
    await TvGetter.getSeasons(134).then((s) => {
      const seasonInfo = s
      const seasonN = seasonInfo.length
      DomPopulating.createSeason(seasonN)
      seasonListener(seasonInfo)
    });
  } else if (target.innerText === 'Lost') {
    await TvGetter.getSeasons(123).then((s) => {
      const seasonInfo = s
      const seasonN = seasonInfo.length
      DomPopulating.createSeason(seasonN)
      seasonListener(seasonInfo)
    });
  }
})