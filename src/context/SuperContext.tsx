'use client';

import YouTubeFeedData from '@/models/Youtube_api_models';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface SuperContextType {
  FeedData: YouTubeFeedData[] | null;
  setFeedData: (FeedData: YouTubeFeedData[] | null) => void;
}

const SuperContext = createContext<SuperContextType | undefined>(undefined);

export const SuperProvider = ({ children }: { children: ReactNode }) => {
  const [FeedData, setFeedData] = useState<YouTubeFeedData[] | null>(null);
  async function loader() {
    const req = await fetch('/api/videos/', {
      headers: {
        'x-api-key': `nik-12-08-2025`,
      },
    });
    const res = await req.json();
    setTimeout(() => {
      setFeedData(res.Data);
    }, 1000);
  }
  useEffect(() => {
    loader();
  }, []);

  return (
    <SuperContext.Provider value={{ FeedData, setFeedData }}>{children}</SuperContext.Provider>
  );
};

export const useSuper = () => {
  const context = useContext(SuperContext);
  if (!context) throw new Error('useSuper must be used within SuperProvider');
  return context;
};
