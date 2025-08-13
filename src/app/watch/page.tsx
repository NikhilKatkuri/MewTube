'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Watch = () => {
  const params = useSearchParams();
  const VideoId = params.get('v');
  return (
    <main className="flex w-full flex-1 flex-col">
      <div className="flex-1 overflow-y-auto p-2">
        <div className="aspect-[11/8] h-auto max-h-[561px] w-full overflow-hidden rounded-lg bg-black md:rounded-2xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${VideoId ?? 'gyagxPoll2k'}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Watch;
