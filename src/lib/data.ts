import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export type Technology = 'React' | 'Next.js' | 'TypeScript' | 'Tailwind CSS' | 'Firebase' | 'Shadcn UI';

export type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  image: ImagePlaceholder;
  links: {
    github?: string;
    live?: string;
  };
};

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A feature-rich e-commerce platform with a modern UI, product management, and a secure checkout process.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: findImage('project-1'),
    links: {
      github: 'https://github.com',
      live: '#',
    },
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'An interactive dashboard for visualizing complex data sets, with real-time updates and customizable widgets.',
    technologies: ['React', 'TypeScript', 'Shadcn UI', 'Tailwind CSS'],
    image: findImage('project-2'),
    links: {
      github: 'https://github.com',
      live: '#',
    },
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application designed for teams to organize, track, and complete projects efficiently.',
    technologies: ['Next.js', 'React', 'Firebase', 'Tailwind CSS'],
    image: findImage('project-3'),
    links: {
      github: 'https://github.com',
      live: '#',
    },
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with a focus on design and user experience.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Shadcn UI'],
    image: findImage('project-4'),
    links: {
      github: 'https://github.com',
    },
  },
];
