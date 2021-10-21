import NoImage from '../assets/no_image.png';
import showCommentsPopup from './comments.js';
import { sendLike } from './api.js';
import { episodeCount, seasonCount } from './item-count.js';

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
      let image;

      if (ep.image === null) {
        image = NoImage;
      } else {
        image = ep.image.medium;
      }

      const html = `
      <div  id="${ep.id}" class="card episode">
      <img class="card-img-top" src="${image}" alt="${ep.name}"/>
      <div class="card-body">
        <h5 class="card-title">${ep.name}</h5>
        <div class="comment-btn-wrapper">
        <span class="likes"><span class="material-icons">favorite_border</span>${ep.likes} likes</span>
        <button id="${ep.id}" class="comment-btn btn" type="button">Comments</button>
        </div>
      </div>
    </div>`;
      epCont.innerHTML += html;
    });

    const commentButtons = document.querySelectorAll('.comment-btn');
    commentButtons.forEach((commentbtn) => {
      commentbtn.addEventListener('click', (event) => {
        const { id } = event.target;
        const episode = list.filter((a) => a.id.toString() === id)[0];
        showCommentsPopup(episode);
      });
    });
    const likeButtons = document.querySelectorAll('span .material-icons');
    likeButtons.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const { id } = event.path[3];
        const tgt = event.target;
        if (tgt.innerHTML === 'favorite_border') {
          tgt.innerHTML = 'favorite';
          tgt.style.color = 'red';
          const likes = tgt.parentNode.lastChild.nodeValue;
          const number = parseInt(likes.split(' ')[0], 10);
          tgt.parentNode.lastChild.textContent = `${number + 1} likes`;
          sendLike(id);
        }
      });
    });
  }

  static episodeCounter(item) {
    const counter = episodeCount();
    const seasonSave = document.querySelectorAll('#bottom-header li');
    seasonSave.forEach((child) => {
      const [temp] = child.innerText.split('(', 10);
      child.innerText = temp;
    });
    const save = item.innerHTML;
    item.innerHTML = `${save}(${counter} episodes)`;
  }

  static seasonCounter(item) {
    const counter = seasonCount();
    const showSave = document.querySelectorAll('#top-header li');
    showSave.forEach((child) => {
      if (child.id !== 'logo') {
        const [temp] = child.innerText.split('(', 10);
        child.innerText = temp;
      }
    });
    const save = item.innerHTML;
    item.innerHTML = `${save}(${counter} seasons)`;
  }
}
