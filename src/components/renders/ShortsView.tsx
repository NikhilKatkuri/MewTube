'use client';
import { ArrowDownIcon, ArrowUpIcon } from '@/icons/MewIcons';
import { usePathname } from 'next/navigation';
import React from 'react';

const ShortView = () => {
  const pn = usePathname();
  const id = pn.split('/').reverse()[0];
  return (
    <div className="grid min-h-full w-full grid-cols-1 items-end justify-center sm:p-3">
      <div className="grid h-full grid-cols-[auto_48px] gap-2">
        <div className="mx-auto flex h-full w-full overflow-hidden min-[500px]:w-[90%] sm:max-w-96 sm:rounded-xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${id ?? '4fqQk8Xqu8A'}`}
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
            <ArrowUpIcon className="size-6" />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
            <ArrowDownIcon className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortView;
