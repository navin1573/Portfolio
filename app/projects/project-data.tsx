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
    description: "This project is a Java application that aggregates<br> music data using the Spotify API.",
    url: "https://github.com/navin1573/MusicChart",
  },
  {
    title: "Obsidian Theme Plugin",
    year: 2025,
    description: "Designed and developed a custom theme plugin for Obsidian.",
    url: "https://example.com",
  },
];
