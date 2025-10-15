import type { Technology } from '@/lib/data';

const iconSize = "h-5 w-5";

const icons: Record<Technology, JSX.Element> = {
  'React': (
    <svg role="img" viewBox="0 0 113 100" className={iconSize} fill="currentColor">
      <g fill="currentColor">
        <ellipse rx="110" ry="45" transform="rotate(60)"></ellipse>
        <ellipse rx="110" ry="45" transform="rotate(120)"></ellipse>
        <ellipse rx="110" ry="45" transform="rotate(180)"></ellipse>
      </g>
      <circle cx="0" cy="0" r="10" fill="#000"></circle>
    </svg>
  ),
  'Next.js': (
    <svg role="img" viewBox="0 0 128 128" className={iconSize} fill="currentColor">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm21.4 108.6c-2.3 0-4.5-.5-6.6-1.4L45.4 87V74.2l12.6-9.4v22.8l20.4-12.2V32.4h7v75c0 .6-.2 1.2-.6 1.7-.4.5-1 .8-1.6.8h-.2zM85.1 24.1c-2.1 0-4.1.6-5.8 1.8-1.7 1.2-3 2.9-3.7 4.9-.7 2-." fill="#fff"></path>
    </svg>
  ),
  'TypeScript': (
    <svg role="img" viewBox="0 0 48 48" className={iconSize} fill="currentColor">
      <path d="M24,2A22,22,0,1,0,46,24,22,22,0,0,0,24,2Zm11,24.59a2.07,2.07,0,0,1-2.06,2.06H15.06a2.06,2.06,0,0,1-2.06-2.06V15.06a2.06,2.06,0,0,1,2.06-2.06H29.41a2.06,2.06,0,0,1,2.06,2.06v9.52h3.53ZM29.41,26.59H24.89V15.06h4.52Zm-6.58,0v2.06H15.06V15.06h2.06v11.53Z"></path>
    </svg>
  ),
  'Tailwind CSS': (
    <svg role="img" viewBox="0 0 24 24" className={iconSize} fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
    </svg>
  ),
  'Firebase': (
    <svg role="img" viewBox="0 0 24 24" className={iconSize} fill="currentColor">
      <path d="M4.12,3.37,3.13,4.45,15.2,19.33,20.89,11.5l-9-9.58ZM16.33,20.7,15.4,22,12.33,18,14.47,15Z"></path>
    </svg>
  ),
  'Shadcn UI': (
    <svg role="img" viewBox="0 0 24 24" className={iconSize} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c-2 0-4-1-4-4s2-4 4-4 4 1 4 4-2 4-4 4zM20.59 12c0 2-1 4-4 4s-4-2-4-4 1-4 4-4"></path>
      <path d="M3.41 12c0 2 1 4 4 4s4-2 4-4-1-4-4-4"></path>
    </svg>
  ),
};

export function TechnologyIcon({ technology }: { technology: Technology }) {
  return icons[technology] || null;
}
