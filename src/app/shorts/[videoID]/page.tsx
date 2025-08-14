'use client';
import ShortView from '@/components/renders/ShortsView';
import React, { useEffect, useRef, useState } from 'react';

const Short = () => {
  const vid = ['4fqQk8Xqu8A', '6NNNCZK-sbg', 'OOta2hs0eE4', 'rEzraUPC798', 'UwVhzNOh-gQ'];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="grid h-full flex-1 grid-cols-1">
      <div ref={containerRef} className="h-full w-full snap-y snap-mandatory overflow-y-scroll">
        <ShortView />
      </div>
    </main>
  );
};

export default Short;
