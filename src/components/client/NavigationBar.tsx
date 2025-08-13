'use client';
import { TopNav } from '@/data/TopLink';
import { useState } from 'react';

export default function NavigationBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="scrollbar-none sticky top-0 flex w-full overflow-x-scroll bg-gray-100/30 px-3 py-3 backdrop-blur-xl">
      <ul className="flex w-auto items-center gap-3">
        {TopNav.map((item, index) => (
          <li key={index} className="shrink-0">
            <button
              onClick={() => setActiveIndex(index)}
              className={`rounded-md px-4 py-1.5 text-sm font-semibold transition-colors duration-200 ${
                activeIndex === index ? 'bg-black text-white' : 'bg-black/5 hover:bg-black/10'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
