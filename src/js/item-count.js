export const episodeCount = () => {
  const countEpisodes = document.querySelectorAll('.episode').length;
  return countEpisodes;
};

export const seasonCount = () => {
  const countSeasons = document.querySelectorAll('#bottom-header li').length;
  return countSeasons;
};