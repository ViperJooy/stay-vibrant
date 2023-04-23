export interface Video {
  id: string;
  filename?: string;
  startTime?: number;
  remark?: string;
  showGreyLayer?: boolean;
  specialBigTitle?: string;
}

export interface Playlist {
  title: string;
  dj: string;
  showGreyLayer?: boolean;
  specialBigTitle?: string;
  videos: Video[];
}

export const playlists: Playlist[] = [
  {
    title: "synthwave radio 🌌 - beats to chill/game to",
    dj: "Lofi Girl",
    videos: [
      {
        id: "MVPTGNGiI-4",
        filename: "",
      },
    ],
  },
  {
    title: "lofi hip hop radio 💤 - beats to sleep/chill to",
    dj: "Lofi Girl",
    videos: [
      {
        id: "rUxyKA_-grg",
        filename: "",
      },
    ],
  },
  {
    title: "lofi hip hop radio 📚 - beats to relax/study to",
    dj: "Lofi Girl",
    videos: [
      {
        id: "jfKfPfyJRdk",
        filename: "",
      },
    ],
  }
];
