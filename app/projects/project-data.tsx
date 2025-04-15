export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "MusicChart",
    year: 2024,
    description: "This project is a Java application that aggregates music data using the Spotify API.",
    url: "https://github.com/navin1573/MusicChart",
  },
  {
    title: "Spotify Album Cover fetcher",
    year: 2025,
    description: "This site fetches the album cover of your desired song.",
    url: "https://spotifycoverdownloader.vercel.app/",
  },
];
