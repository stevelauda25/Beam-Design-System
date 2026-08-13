import { useEffect, useState } from 'react';
import { cn } from '@beam/ui';

interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const found: Heading[] = [];
    document
      .querySelectorAll<HTMLElement>('.mdx-content h2[id], .mdx-content h3[id]')
      .forEach((el) => {
        found.push({
          id: el.id,
          text: el.textContent?.trim() ?? '',
          level: el.tagName === 'H2' ? 2 : 3,
        });
      });
    setHeadings(found);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;
    setActiveId(headings[0]?.id ?? '');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length > 0) {
          setActiveId(visible[0]?.target.id ?? '');
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-full min-w-[216px] max-w-[266px] flex-1 sticky top-0 self-start max-h-[calc(100vh-1rem)] overflow-y-auto pb-8 pr-4 pt-[58px] text-xs leading-[18px]">
      <p className="mb-1 font-normal text-[#0a0a0a]">
        On this page
      </p>
      <ul className="relative flex flex-col gap-1 border-l border-[#d6d6d6]">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          return (
            <li key={h.id} className="relative">
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute left-[-1px] top-0 h-full w-px bg-[#0a0a0a]"
                />
              )}
              <a
                href={`#${h.id}`}
                className={cn(
                  'mx-2 block rounded px-2 py-0.5 text-xs font-normal leading-[18px] text-[#0a0a0a] transition-colors duration-fast',
                  h.level === 3 ? 'ml-4' : '',
                  isActive
                    ? 'bg-[#ebebeb]'
                    : 'hover:bg-[#f5f5f5]',
                )}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
