import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export function AboutSection() {
  const avatar = PlaceHolderImages.find((img) => img.id === 'avatar');
  if (!avatar) return null;

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-lg text-primary font-semibold mb-2">Hello, I'm a Developer</p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Full-Stack Developer & UI Enthusiast
          </h1>
          <p className="mt-6 max-w-[700px] text-muted-foreground md:text-xl">
            I specialize in building exceptional digital experiences. With a strong background in modern web technologies, I focus on creating responsive, scalable, and user-friendly applications. My passion lies in crafting clean code and elegant designs.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
               <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" />
                GitHub
              </a>
            </Button>
             <Button variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        <div className="mx-auto">
            <Image
              src={avatar.imageUrl}
              alt={avatar.description}
              data-ai-hint={avatar.imageHint}
              width={250}
              height={250}
              className="rounded-full object-cover aspect-square shadow-lg"
            />
        </div>
      </div>
    </section>
  );
}
