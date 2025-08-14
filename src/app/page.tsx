// home page
import NavigationBar from '@/components/client/NavigationBar';
import Feed from '@/components/renders/Feed';
import React from 'react';

const Home = () => {
  return (
    <main className="flex w-full flex-1 flex-col">
      <NavigationBar />
      <div className="flex-1 overflow-y-auto max-xl:px-1">
        <Feed />
      </div>
    </main>
  );
};

export default Home;
