// home page
import Navbar from '@/components/Navbar';
import NavigationBar from '@/components/client/NavigationBar';
import Sidebar from '@/components/client/Sidebar';
import Feed from '@/components/renders/Feed';
// import Feed from '@/components/renders/Feed';
import React from 'react';

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col bg-white">
      <Navbar />
      <div className="flex max-h-[calc(100%-64px)] flex-1">
        <Sidebar />
        <main className="flex w-full flex-1 flex-col">
          <NavigationBar />
          <div className="flex-1 overflow-y-auto max-xl:px-1">
            <Feed />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
