import { MoreIcon } from '@/icons/MewIcons';
import YouTubeFeedData, { YouTubeSearchData } from '@/models/Youtube_api_models';
import myMoment from '@/utils/Moment';
import RoundedFormat from '@/utils/RoundedFormat';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TrayBox = ({
  VideoData,
  ref,
}: {
  VideoData: YouTubeFeedData | YouTubeSearchData;
  ref?: boolean;
}) => {
  return (
    <Link
      href={`/watch?v=${typeof VideoData.id === 'object' ? VideoData.id.videoId + '&ref=search' : VideoData.id}`}
    >
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-[280px_auto] md:grid-cols-[380px_auto] xl:grid-cols-[160px_auto]">
        <div className="w-full">
          <Image
            src={VideoData.snippet.thumbnails.maxres?.url || VideoData.snippet.thumbnails.high.url}
            alt=""
            height={9 * 16}
            width={16 * 16}
            className="aspect-video w-full rounded-lg"
          />
        </div>
        <div className="grid grid-cols-[auto_48px] items-start">
          <div className="space-y-1 text-xs">
            <h1 className="line-clamp-2 text-sm font-bold">{VideoData.snippet.title}</h1>
            <p className="font-medium text-gray-500">{VideoData.snippet.channelTitle}</p>

            <p>
              {!ref && (
                <>
                  <span>{RoundedFormat(Number(VideoData.statistics.viewCount)) + ' Views '}</span>
                  <span>&middot;</span>
                </>
              )}
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
};

export default TrayBox;
