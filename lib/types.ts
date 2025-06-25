export type Project = {
  id: string;
  name: string;
  used: string[];
  github: string;
  live: string;
  image: string;
  video: string;
  description: {
    title: string;
    Features: string[];
    technologies: string[];
  };
};

export type Projects = Project[];
