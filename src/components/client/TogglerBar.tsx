'use client';
import { useSidebar } from '@/context/SidebarContext';
import React, { useEffect, useState } from 'react';

const ToggleBar = () => {
  const { setisSidebarOpen, setisDesktopSidebarOpen } = useSidebar();
  const [isDesktop, setisDesktop] = useState<boolean | null>(null);
  useEffect(() => {
    function update() {
      setisDesktop(window.innerWidth >= 1536);
    }
    update();
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  });
  function setSidebar() {
    if (isDesktop) {
      setisDesktopSidebarOpen((prev) => !prev);
    } else {
      setisSidebarOpen((prev) => !prev);
    }
  }
  return (
    <button onClick={setSidebar} className="rounded-full p-1.5 hover:bg-black/5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
    </button>
  );
};

export default ToggleBar;
