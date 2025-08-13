'use client';
import TrayBox from '@/components/renders/TrayBox';
import { useSuper } from '@/context/SuperContext';
import { CommentIcon, LikeIcon } from '@/icons/MewIcons';
import YouTubeFeedData from '@/models/Youtube_api_models';
import RoundedFormat from '@/utils/RoundedFormat';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const Watch = () => {
  const { FeedData } = useSuper();
  const params = useSearchParams();
  const VideoId = params.get('v');
  const [subscribe, setsubscribe] = useState<boolean>(false);
  const Months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'june',
    'july',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];
  const [showMore, setshowMore] = useState<boolean>(false);

  if (!FeedData) {
    return <div className="py-10 text-center">Loading...</div>;
  }

  const videoData: YouTubeFeedData | undefined = FeedData?.find((a) => a.id === VideoId);
  const SidevideoData: YouTubeFeedData[] | undefined = FeedData?.filter((a) => a.id !== VideoId);
  if (!videoData) {
    return (
      <div className="py-10 text-center text-red-600">
        Error: Video not found. Please check the video ID or try again later.
      </div>
    );
  }

  const PublisedDate = videoData?.snippet?.publishedAt
    ? new Date(videoData.snippet.publishedAt)
    : new Date();
  return (
    <main className="flex w-full flex-1 flex-col">
      <div className="flex-1 overflow-y-scroll p-2">
        <div className="aspect-[11/8] h-auto max-h-72 w-full overflow-hidden rounded-lg bg-black sm:max-h-96 md:max-h-[600px] md:rounded-2xl">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${VideoId ?? 'gyagxPoll2k'}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 py-4 lg:grid-cols-[auto_400px]">
          <div className={'max-w-4xl px-1'}>
            <div className="space-y-3">
              <h1 className="text-xl font-bold">{videoData.snippet.title}</h1>
              <div className="flex flex-col max-sm:gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="grid grid-cols-[48px_auto]">
                  <Image
                    src={videoData.channelData.snippet.thumbnails.high.url}
                    alt={videoData.channelData.snippet.id}
                    height={36}
                    width={36}
                    className="rounded-full"
                  />
                  <div className="flex items-center gap-3">
                    <div className="-space-y-0.5">
                      <h1 className="font-bold">{videoData.channelData.snippet.title}</h1>
                      <p className="text-sm">
                        <span>
                          {RoundedFormat(Number(videoData.channelData.statistics.subscriberCount))}
                        </span>{' '}
                        <span>subscribers</span>
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setsubscribe((prev) => !prev);
                      }}
                      className="rounded-full bg-black px-6 py-2 text-white transition-all duration-150 ease-in-out active:scale-95"
                    >
                      <span className="text-sm font-bold">
                        {subscribe ? 'Subscribed' : 'Subscribe'}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex cursor-pointer items-center space-x-1 rounded-full border border-black/10 bg-black/5 px-3 py-2 text-sm font-semibold hover:bg-black/10">
                    <LikeIcon className="size-5" />

                    <span>{RoundedFormat(Number(videoData.statistics.likeCount))}</span>
                  </div>
                  <div className="flex cursor-pointer items-center space-x-2 rounded-full border border-black/10 bg-black/5 px-3 py-2 text-sm font-semibold hover:bg-black/10">
                    <CommentIcon className="size-5" />

                    <span>{' ' + RoundedFormat(Number(videoData.statistics.commentCount))}</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-xl bg-black/5 p-2.5 text-sm font-medium">
                <p className="space-x-3 font-bold">
                  <span>{RoundedFormat(Number(videoData.statistics.viewCount))} views</span>
                  <span>
                    {Months[PublisedDate.getMonth()].charAt(0).toUpperCase() +
                      Months[PublisedDate.getMonth()].slice(1) +
                      ' '}
                    {PublisedDate.getDate() + ', '}
                    {PublisedDate.getFullYear()}
                  </span>
                </p>
                <div
                  className={`${showMore ? '' : 'line-clamp-4'} transition-all duration-150 ease-in-out`}
                  dangerouslySetInnerHTML={{
                    __html: videoData.snippet.description
                      .replaceAll('\n', '<br/>')
                      .replaceAll(
                        /(#\w+)/g,
                        '<span class="text-blue-600 font-bold cursor-pointer">$1</span>',
                      )
                      .replaceAll(
                        /(https?:\/\/\S+)/g,
                        '<a href="$1" target="_blank" class="text-blue-600 font-bold cursor-pointer">$1</a>',
                      ),
                  }}
                ></div>
                <button
                  onClick={() => {
                    setshowMore((prev) => !prev);
                  }}
                  className="font-bold"
                >
                  <span>{!showMore ? 'Show More' : 'Show Less'}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 overflow-y-scroll">
            {SidevideoData.map((data, index) => {
              return <TrayBox VideoData={data} key={index} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Watch;
