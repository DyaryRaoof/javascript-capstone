export default class TvGetters {
  static async getSeasons(id) {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`, {
      method: 'GET',
      headers: {
        'User-Agent': 'SchoolProject/1.0 This is a school project about working with APIS',
        Accept: '*',
      },
    });
    return response.json()
  }

  static async getEpisodes(id) {
    const response = await fetch(`https://api.tvmaze.com/seasons/${id}/episodes`, {
      method: 'GET',
      headers: {
        'User-Agent': 'SchoolProject/1.0 This is a school project about working with APIS',
        Accept: '*',
      },
    });
    return response.json()
  }
};