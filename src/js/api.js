const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const createNewApp = async () => {
  const endpoint = 'apps';
  const result = await fetch(BASE_URL + endpoint, {
    method: 'POST',
  });
  const appId = await result.text();
  return appId;
};

const sendComment = async (userName, comment, itemId) => {
  const appId = localStorage.getItem('appId');
  const endpoint = `apps/${appId}/comments`;
  console.log(userName);
  const data = { username: userName, comment, item_id: itemId };
  const result = await fetch(BASE_URL + endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; Charset=UTF-8',
    },
  });
  const text = await result.text();
  return text;
};

const getCommnets = async (itemId) => {
  const appId = localStorage.getItem('appId');
  const endpoint = `apps/${appId}/comments?item_id=${itemId}`;
  const result = await fetch(BASE_URL + endpoint);
  const text = await result.json();
  return [text, result.status];
};

module.exports.createNewApp = createNewApp;
module.exports.sendComment = sendComment;
module.exports.getCommnets = getCommnets;
