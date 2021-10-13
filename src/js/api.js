class TvGetters {
  static async getSeasons(id) {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`, {
      method: 'GET',
      headers: {
        'User-Agent': 'SchoolProject/1.0 This is a school project about working with APIS',
        Accept: '*',
      },
    });
    return response.json();
  }

  static async getEpisodes(id) {
    const response = await fetch(`https://api.tvmaze.com/seasons/${id}/episodes`, {
      method: 'GET',
      headers: {
        'User-Agent': 'SchoolProject/1.0 This is a school project about working with APIS',
        Accept: '*',
      },
    });
    return response.json();
  }
}

const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const APP_ID = 'LFw4C11a2n9Ev9vjBV5l';

const sendComment = async (userName, comment, itemId) => {
  const endpoint = `apps/${APP_ID}/comments`;
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

const getComments = async (itemId) => {
  const endpoint = `apps/${APP_ID}/comments?item_id=${itemId}`;
  let result;
  try {
    result = await fetch(BASE_URL + endpoint);
    if (result.status === 400) {
      throw new Error("couldn't fetch");
    } else {
      const json = await result.json();
      return [json];
    }
  } catch (e) {
    return [e];
  }
};

module.exports.sendComment = sendComment;
module.exports.getComments = getComments;
module.exports.TvGetters = TvGetters;
