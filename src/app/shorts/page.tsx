'use client';

import { redirect } from 'next/navigation';

const Shorts = () => {
  redirect('/shorts/4fqQk8Xqu8A');

  return (
    <>
      <div className="grid min-h-full w-full grid-cols-1 items-end justify-center sm:p-3">
        <div className="mx-auto flex h-full w-full overflow-hidden min-[500px]:w-[90%] sm:max-w-96 sm:rounded-xl">
          <div className="h-full w-full animate-pulse bg-black/50"></div>
        </div>
      </div>
    </>
  );
};

export default Shorts;
