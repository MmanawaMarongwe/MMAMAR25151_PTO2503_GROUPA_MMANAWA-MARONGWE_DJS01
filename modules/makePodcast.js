/**
 * This function creates a simple Podcast object.
 *
 * @param {object} podcastData - Each podcast object item from the podcasts array.
 * @param {Array<Object>} genres - All genre objects to match IDs and return their names.
 * @returns {Object} A podcast object with formatted data and utility functions
 */
export function makePodcast(podcastData, genres, seasons) {
  const genreTitleById = (id) => genres.find((g) => g.id === id)?.title;
  const seasonsById = (id) => seasons.find((s) => s.id === id)?.seasonDetails;

  return {
    id: podcastData.id,
    title: podcastData.title,
    image: podcastData.image,
    seasons: podcastData.seasons || [],
    description: podcastData.description || "",
    updated: podcastData.updated,

    genreNames() {
      const ids = podcastData.genres || [];
      return ids.map(genreTitleById).filter(Boolean); //return an array of titles if their id
    },

    formattedUpdatedAt() {
      const lastUpdate = podcastData.updated;
      if (!lastUpdate) return "—";
      const updatedDate = new Date(lastUpdate);
      const now = new Date();
      const diffInMonths = now - updatedDate;
      const diffInDays = Math.floor(diffInMonths / (1000 * 60 * 60 * 24));

      if (diffInDays < 1) return "Today";
      if (diffInDays === 1) return "1 day ago";
      if (diffInDays < 7) return `${diffInDays} days ago`;
      if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
      return `${Math.floor(diffInDays / 30)} months ago`;
    },
    seasonTitles() {
      const seasonInfo = seasonsById(podcastData.id);
      return seasonInfo;
    },
  };
}
