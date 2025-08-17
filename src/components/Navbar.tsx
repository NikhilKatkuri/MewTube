'use client';
import Link from 'next/link';
import React from 'react';
import ToggleBar from './client/TogglerBar';
import MewTubeImg from './brand/logo';
import { MicIcon, SearchIcon } from '@/icons/MewIcons';
import useApiUrls from '@/utils/useAPIurl';
import { useSuper } from '@/context/SuperContext';
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const router = useRouter();
  const { setSearchData } = useSuper();
  const [query, setQuery] = React.useState('');
  const search = async (q: string) => {
    q = q.toLowerCase();
    if (q.trim() === '') return;
    try {
      const data = new useApiUrls();
      const res = await data.useSearchKey(q);
      console.log(res.results);
      setSearchData(res.results);
      router.push(`/search?q=${q}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="z-[2] flex max-h-16 w-full items-center justify-between bg-gray-100/30 p-2 py-3 backdrop-blur-2xl sm:px-3">
      <div className="flex items-center gap-3 pl-2 sm:pl-1">
        <ToggleBar />
        <Link href="/">
          <MewTubeImg />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end md:justify-around">
        <button className="rounded-full p-2 hover:bg-black/5 sm:hidden">
          <SearchIcon className="size-5" />
        </button>
        <div className="flex gap-4 max-sm:hidden">
          <div className="flex h-10 items-center justify-center gap-3 rounded-full border border-neutral-200 bg-white px-3 pl-6">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="outline-none md:w-96"
              placeholder="Search here.."
            />
            <button
              onClick={async () => await search(query)}
              className="rounded-full p-2 hover:bg-black/5"
            >
              <SearchIcon className="size-5" />
            </button>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
            <MicIcon className="size-6 fill-neutral-800" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
