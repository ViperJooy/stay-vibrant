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
    title: "《中國說唱巔峰對決》EP01純享：Psy P楊俊逸《劉玉玲+街頭藝術家》 熱門單曲串燒重磅来襲｜愛奇藝",
    dj: "Psy P",
    videos: [
      {
        id: "t2T34_n_DOE",
        filename: "",
      },
    ],
  },
  {
    title: "纯享丨早安《麒麟》 秀到天花板的flow | 中国说唱巅峰对决 EP7 | THE RAP OF CHINA | iQIYI精选",
    dj: "早安",
    videos: [
      {
        id: "xmDXZCqkKSY",
        filename: "",
      },
    ],
  },
];
