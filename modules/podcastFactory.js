/**
 * This function creates a simple Podcast object.
 *
 * @param {object} podcastData - Each podcast object item from the podcasts array.
 * @param {Array<Object>} genres - All genre objects to match IDs and return their names.
 * @returns {Object} A podcast object with formatted data and utility functions
 */
export function makePodcast(podcastData, genres) {
  const genreTitleById = (id) => genres.find((g) => g.id === id)?.title;

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
      if (!podcastData.updated) return "—";
      return new Date(podcastData.updated).toLocaleDateString();
    },

    seasonSummaries() {
      const seasons = podcastData.seasons || [];
      return seasons.map((s) => ({
        title: s.title,
        count: (s.episodes || []).length,
      }));
    },
  };
}
