'use client';
import colorGetter from '@/utils/getColor';
import { useSidebar } from '@/context/SidebarContext';
import { useSuper } from '@/context/SuperContext';
import myMoment from '@/utils/Moment';
import RoundedFormat from '@/utils/RoundedFormat';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LazyLoader = () => {
  return (
    <div className="aspect-video w-full p-3">
      <div className="h-[90%] w-full animate-pulse rounded-xl bg-black/10"></div>
      <div className="mt-2 grid grid-cols-[48px_auto] items-center">
        <div className="h-10 w-10 animate-pulse rounded-full bg-black/10"></div>
        <div className="flex flex-col gap-2">
          <div className="h-6 w-full animate-pulse rounded-md bg-black/10"></div>
          <div className="flex items-center gap-3">
            <div className="h-6 w-full animate-pulse rounded-md bg-black/10"></div>
            <div className="h-6 w-full animate-pulse rounded-md bg-black/10"></div>
            <div className="h-6 w-full animate-pulse rounded-md bg-black/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Feed = () => {
  const { isDesktopSidebarOpen } = useSidebar();
  const { FeedData } = useSuper();
  const [avgColors, setAvgColors] = useState<Record<number, string>>({});

  useEffect(() => {
    if (FeedData) {
      FeedData.forEach(async (item, index) => {
        const imgUrl = item.snippet.thumbnails.maxres?.url ?? item.snippet.thumbnails.high.url;

        const req = await colorGetter(imgUrl);
        setAvgColors((prev) => ({ ...prev, [index]: `${req}` }));
      });
    }
  }, [FeedData]);
  return (
    <div
      className={`grid h-auto min-h-screen grid-cols-1 gap-y-2 px-3 py-2 min-[686px]:grid-cols-2 min-[1000px]:grid-cols-3 ${isDesktopSidebarOpen ? 'min-[1600px]:grid-cols-3' : 'min-[1600px]:grid-cols-4'}`}
    >
      {FeedData === null
        ? [...new Array(20)].map((_, index) => {
            return <LazyLoader key={index} />;
          })
        : Object.keys(avgColors).length > 0
          ? FeedData.map((item, index) => {
              return (
                <div
                  key={index}
                  data-hover-color={avgColors[index] ?? 'rgba(0, 128, 255, 0.3)'}
                  style={{
                    ['--hover-color' as string]: avgColors[index] ?? 'rgba(0, 128, 255, 0.3)',
                  }}
                  className="aspect-video w-full rounded-2xl p-3"
                >
                  <div className="semi-dynamic-hover h-full w-full overflow-hidden rounded-xl bg-black/10">
                    <Image
                      src={item.snippet.thumbnails.maxres?.url ?? item.snippet.thumbnails.high.url}
                      alt=""
                      height={3000}
                      width={4400}
                      className="aspect-video h-[110%] w-full"
                      priority
                    />
                  </div>
                  <div className="mt-2 grid grid-cols-[48px_auto]">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-black/10">
                      <Image
                        src={item.channelData.snippet.thumbnails.high.url}
                        alt=""
                        height={4400}
                        width={4400}
                        className="h-full w-full"
                        priority
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="h-auto w-full rounded-md font-semibold">
                        <h2 className="line-clamp-2">{item.snippet.title}</h2>
                      </div>
                      <div className="w-full text-sm font-medium text-black/80">
                        {item.snippet.channelTitle}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium text-black/50">
                        <span>{RoundedFormat(Number(item.statistics.viewCount)) + ' '} views</span>
                        &middot;
                        <span>{myMoment(item.snippet.publishedAt).format()} </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : [...new Array(20)].map((_, index) => {
              return <LazyLoader key={index} />;
            })}
    </div>
  );
};

export default Feed;
