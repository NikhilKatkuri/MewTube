'use client';

import YouTubeFeedData, { YouTubeSearchData } from '@/models/Youtube_api_models';
import useApiUrls from '@/utils/useAPIurl';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface SuperContextType {
  FeedData: YouTubeFeedData[] | null;
  setFeedData: (FeedData: YouTubeFeedData[] | null) => void;
  searchData: YouTubeSearchData[] | null;
  setSearchData: (searchData: YouTubeSearchData[] | null) => void;
}

const SuperContext = createContext<SuperContextType | undefined>(undefined);

export const SuperProvider = ({ children }: { children: ReactNode }) => {
  const [FeedData, setFeedData] = useState<YouTubeFeedData[] | null>(null);
  async function loader() {
    const req = new useApiUrls();
    const res = await req.useFeed();
    setTimeout(() => {
      setFeedData(res.Data);
    }, 1000);
  }
  useEffect(() => {
    loader();
  }, []);
  const [searchData, setSearchData] = useState<YouTubeSearchData[] | null>(null);
  return (
    <SuperContext.Provider value={{ FeedData, setFeedData, searchData, setSearchData }}>
      {children}
    </SuperContext.Provider>
  );
};

export const useSuper = () => {
  const context = useContext(SuperContext);
  if (!context) throw new Error('useSuper must be used within SuperProvider');
  return context;
};
