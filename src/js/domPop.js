import NoImage from '../assets/no_image.png';

export default class DomPopulating {
  static createSeason(n) {
    const bHeader = document.getElementById('bottom-header');
    bHeader.innerHTML = '';
    let i = 0;
    while (i < n) {
      bHeader.innerHTML += `<li>Season ${i + 1}</li>`;
      i += 1;
    }
  }

  static createEpisodes(list) {
    const epCont = document.querySelector('.container');
    epCont.innerHTML = '';
    list.forEach((ep) => {
      if (ep.image === null) {
        epCont.innerHTML += `<div class="episode"><img src="${NoImage}" alt=""><div class="d-flex"><p>${ep.name}</p> <span class="likes"><span class="material-icons">favorite_border</span>0 likes</span></div><button class="comment-btn" type="button">Comments</button></div>`;
      } else {
        epCont.innerHTML += `<div class="episode"><img src="${ep.image.medium}" alt=""><div class="d-flex"><p>${ep.name}</p> <span class="likes"><span class="material-icons">favorite_border</span>0 likes</span></div><button class="comment-btn" type="button">Comments</button></div>`;
      }
    });
  }
}