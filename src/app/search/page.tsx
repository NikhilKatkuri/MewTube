'use client';
import { useSuper } from '@/context/SuperContext';
import { MoreIcon } from '@/icons/MewIcons';
import myMoment from '@/utils/Moment';
import RoundedFormat from '@/utils/RoundedFormat';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Search = () => {
  // const params = useSearchParams();
  // const query = params.get('query');
  const { searchData } = useSuper();
  if (!searchData) return null;
  return (
    <main className="flex w-full flex-1 flex-col">
      <div className="flex-1 overflow-y-auto max-xl:px-1">
        <div className={`grid h-auto min-h-screen grid-cols-1 gap-y-2 py-2 pl-2`}>
          {searchData !== null &&
            searchData.map((VideoData, index) => {
              return (
                <Link
                  key={index}
                  href={`/watch?v=${
                    typeof VideoData.id === 'object' && VideoData.id !== null
                      ? VideoData.id.videoId
                      : VideoData.id
                  }&ref=search`}
                >
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-[280px_auto] md:grid-cols-[480px_auto]">
                    <div className="aspect-video w-full">
                      <Image
                        src={VideoData.snippet.thumbnails.high.url}
                        alt=""
                        height={9 * 160}
                        width={16 * 160}
                        className="h-full w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-[auto_38px] items-start">
                      <div className="space-y-1 text-xs">
                        <h1 className="line-clamp-2 text-sm font-bold">
                          {VideoData.snippet.title}
                        </h1>
                        <p className="font-medium text-gray-500">
                          {VideoData.snippet.channelTitle}
                        </p>
                        <p>
                          <span>{RoundedFormat(Number(22)) + ' Views '}</span>
                          <span>&middot;</span>
                          <span>{' ' + myMoment(VideoData.snippet.publishedAt).format()}</span>
                        </p>
                      </div>
                      <button className="">
                        <MoreIcon className="size-6" />
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Search;
