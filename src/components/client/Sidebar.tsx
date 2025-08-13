/* eslint-disable @next/next/no-img-element */
'use client';
import { useSidebar } from '@/context/SidebarContext';
import Link from 'next/link';
import ToggleBar from './TogglerBar';
import { JSX } from 'react';
import {
  ChevronRightIcon,
  GithubIcon,
  HistoryIcon,
  HomeIcon,
  HomeIconFill,
  LikeIcon,
  LinkedinIcon,
  SettingIcon,
  ShortIcon,
  ShortIconFill,
  SubscriptionIcon,
  SubscriptionIconFill,
  WatchLaterIcon,
} from '@/icons/MewIcons';

const Sidebar = () => {
  const BoxUI = ({
    Icon,
    text,
    className,
  }: {
    Icon: JSX.Element;
    text: string;
    className?: string;
  }) => {
    return (
      <button
        className={`flex ${!isDesktopSidebarOpen ? '2xl:flex-col 2xl:items-center 2xl:justify-center' : ''} cursor-pointer items-center ${isDesktopSidebarOpen ? 'gap-6 hover:bg-black/5' : 'gap-1'} rounded-2xl px-3 py-2 ${className}`}
      >
        <span>{Icon}</span>

        <span
          className={`${isDesktopSidebarOpen ? '2xl:text-sm' : '2xl:text-[10px]'} text-sm font-semibold`}
        >
          {text}
        </span>
      </button>
    );
  };
  const { isSidebarOpen, isDesktopSidebarOpen } = useSidebar();
  return (
    <aside
      className={`h-full w-72 max-2xl:fixed max-2xl:top-0 max-2xl:z-10 ${
        isDesktopSidebarOpen ? '2xl:w-64' : '2xl:w-20'
      } ${isSidebarOpen ? 'max-2xl:-left-72' : 'max-2xl:left-0'} flex flex-col justify-between border-r border-neutral-500/10 bg-white px-2 py-3`}
    >
      <div className="flex flex-col">
        <div className="hidden items-center gap-3 pl-2 max-2xl:flex">
          <ToggleBar />
          <Link href="/">
            <img src="/brand/logo.svg" alt="logo" className="aspect-[277/48] h-6" />
          </Link>
        </div>
        <div className="mt-2 flex flex-col gap-0.5">
          <BoxUI
            Icon={true ? <HomeIconFill className="size-6" /> : <HomeIcon className="size-6" />}
            text="Home"
            className={isDesktopSidebarOpen ? 'bg-black/4' : ''}
          />
          <BoxUI
            Icon={!true ? <ShortIconFill className="size-6" /> : <ShortIcon className="size-6" />}
            text="Shorts"
          />
          <BoxUI
            Icon={
              !true ? (
                <SubscriptionIconFill className="size-6" />
              ) : (
                <SubscriptionIcon className="size-6" />
              )
            }
            text="Subscriptions"
          />
        </div>
        <div
          className={`${isDesktopSidebarOpen ? '2xl:block' : '2xl:hidden'} my-2 h-[1px] w-full rounded-full bg-neutral-500/10`}
        />
        <div
          className={`${isDesktopSidebarOpen ? '2xl:flex' : '2xl:hidden'} flex-col gap-0.5 max-2xl:flex`}
        >
          <button className="mb-2 flex items-center gap-3 px-3 font-semibold">
            <span className="text-2xl">You</span>
            <span className={isDesktopSidebarOpen ? '2xl:block' : '2xl:hidden'}>
              <ChevronRightIcon className="" />
            </span>
          </button>
          <BoxUI Icon={<HistoryIcon className="size-6" />} text="History" className="" />
          <BoxUI Icon={<LikeIcon className="size-6" />} text="Liked Videos" />
          <BoxUI Icon={<WatchLaterIcon className="size-6" />} text="Watch Later" />
          <BoxUI Icon={<SettingIcon className="size-6" />} text="Setting" />
        </div>
      </div>
      <footer
        className={`${isDesktopSidebarOpen ? '2xl:flex' : '2xl:hidden'} flex flex-col gap-2 rounded-2xl bg-gray-100 px-2 py-3`}
      >
        <div className="flex w-full flex-col items-center">
          <span className="">Get in Touch</span>
          <div className="my-2 flex items-center gap-5">
            <Link href="https://github.com/NikhilKatkuri" target="_blank" className="">
              <GithubIcon className="size-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/katkurinikhil" target="_blank" className="">
              <LinkedinIcon className="size-5" />
            </Link>
          </div>
        </div>
        <p className="mx-auto text-sm text-gray-600">
          &copy;{new Date().getFullYear()} Nikhil | MewTube
        </p>
      </footer>
    </aside>
  );
};

export default Sidebar;
