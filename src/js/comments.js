import { sendComment, getComments } from './API.js';

const addCommentsForm = document.querySelector('#add-comments-form');
const commentsTable = document.querySelector('#comments-table');
const commentsPopup = document.querySelector('#comments');

const addComment = async () => {
  const name = addCommentsForm.elements[0];
  const comment = addCommentsForm.elements[1];
  const date = new Date().toLocaleDateString();
  const data = `${date} ${name.value} : ${comment.value}`;

  const div = document.createElement('div');
  div.innerText = data;
  const res = await sendComment(name.value, comment.value, '1234');
  if (res === 'Created') {
    commentsTable.appendChild(div);
  }
};

addCommentsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addComment();
});

const renderComments = async (comments) => {
  comments.forEach((comment) => {
    const data = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    const div = document.createElement('div');
    div.innerText = data;
    commentsTable.appendChild(div);
  });
};

// const populatePopup = (episode) => {
//   //   const episodeImage = document.querySelector('#episode-name img');
//   //   const episodeName = document.querySelector('#episode-name');
//   const episodeDescriptionItems = document.querySelector('.episode-description-item');
//   //   episodeImage.src = '';
//   //   episodeName.textContent = episode.name;
//   episodeDescriptionItems[0].textContent = '';
//   episodeDescriptionItems[1].textContent = '';
//   episodeDescriptionItems[2].textContent = '';
//   episodeDescriptionItems[3].textContent = '';
// };

const implementCloseButton = () => {
  const closeButton = document.querySelector('#close-button');
  closeButton.addEventListener('click', () => {
    commentsPopup.classList.add('hide-popup');
  });
};

const showCommentsPopup = async () => {
  commentsPopup.classList.remove('hide-popup');
  implementCloseButton();
  //   populatePopup(episode);
  const [comments, status] = await getComments('1234');
  if (status === 200) {
    renderComments(comments);
  }
};

showCommentsPopup();

export default showCommentsPopup;
