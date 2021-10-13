import { sendComment, getComments } from './api.js';
import NoImage from '../assets/no_image.png';

const addCommentsForm = document.querySelector('#add-comments-form');
const commentsTable = document.querySelector('#comments-table');
const commentsPopup = document.querySelector('#comments');
const submitButton = document.querySelector('#submit-button');

const addComment = async (commentId) => {
  const name = addCommentsForm.elements[0];
  const comment = addCommentsForm.elements[1];
  const date = new Date().toLocaleDateString();
  const data = `${date} ${name.value} : ${comment.value}`;

  const div = document.createElement('div');
  div.innerText = data;
  const res = await sendComment(name.value, comment.value, commentId);
  if (res === 'Created') {
    commentsTable.appendChild(div);
  }
};

addCommentsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addComment(submitButton.id);
});

const renderComments = async (comments) => {
  commentsTable.innerHTML = '';
  if (comments.length > 0) {
    comments.forEach((comment) => {
      const data = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
      const div = document.createElement('div');
      div.innerText = data;
      commentsTable.appendChild(div);
    });
  }
};

const populatePopup = (episode) => {
  const episodeImage = document.querySelector('#episode-img');
  const episodeName = document.querySelector('#episode-name');
  const episodeDescriptionItems = document.querySelectorAll('.episode-description-item');
  const img = episode.image ? episode.image.medium : null;
  if (!img) {
    episodeImage.src = NoImage;
  } else {
    episodeImage.src = img;
  }
  episodeName.textContent = episode.name;
  episodeDescriptionItems[0].textContent = `Duration : ${episode.runtime} minutes`;
  episodeDescriptionItems[1].textContent = `Season No. : ${episode.number}`;
  episodeDescriptionItems[2].textContent = `Episode No. : ${episode.season}`;
  episodeDescriptionItems[3].textContent = `Release Date : ${episode.airdate}`;
};

const implementCloseButton = () => {
  const closeButton = document.querySelector('#close-button');
  closeButton.addEventListener('click', () => {
    commentsPopup.classList.add('hide-popup');
  });
};

const showCommentsPopup = async (episode) => {
  submitButton.id = episode.id;
  commentsPopup.classList.remove('hide-popup');
  implementCloseButton();
  populatePopup(episode);
  const [comments] = await getComments(episode.id);
  renderComments(comments);
};

export default showCommentsPopup;
