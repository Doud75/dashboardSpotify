export const mockStats = {
    most_popular_song: {
        title: "Flowers",
        artist: "Miley Cyrus",
    },
    most_popular_language: "English",
    most_danceable_song: {
        title: "Blinding Lights",
        artist: "The Weeknd",
    },
    top_10_songs: [
        { title: "Flowers", artist: "Miley Cyrus", popularity: 95 },
        { title: "As It Was", artist: "Harry Styles", popularity: 92 },
        { title: "Blinding Lights", artist: "The Weeknd", popularity: 90 },
        { title: "Good 4 U", artist: "Olivia Rodrigo", popularity: 89 },
        { title: "Shivers", artist: "Ed Sheeran", popularity: 88 },
        { title: "Stay", artist: "Justin Bieber & The Kid LAROI", popularity: 87 },
        { title: "Levitating", artist: "Dua Lipa", popularity: 86 },
        { title: "Montero", artist: "Lil Nas X", popularity: 85 },
        { title: "Peaches", artist: "Justin Bieber", popularity: 84 },
        { title: "Heat Waves", artist: "Glass Animals", popularity: 83 },
    ],
    songs_by_duration: [
        { title: "Flowers", duration_ms: 200000, popularity: 95 },
        { title: "As It Was", duration_ms: 230000, popularity: 92 },
        { title: "Blinding Lights", duration_ms: 210000, popularity: 90 },
        { title: "Good 4 U", duration_ms: 180000, popularity: 89 },
        { title: "Shivers", duration_ms: 220000, popularity: 88 },
    ],
};

export const mockLanguageStats = {
    stats_by_language: {
        English: { average_popularity: 90, average_danceability: 0.8 },
        Spanish: { average_popularity: 85, average_danceability: 0.75 },
        Korean: { average_popularity: 80, average_danceability: 0.7 },
        Japanese: { average_popularity: 78, average_danceability: 0.68 },
        French: { average_popularity: 76, average_danceability: 0.65 },
    },
};
