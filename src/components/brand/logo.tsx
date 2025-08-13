import Image from 'next/image';
import React from 'react';

const MewTubeImg = () => {
  return (
    <Image
      src="/brand/logo.svg"
      alt="logo"
      width={277}
      height={48}
      className="h-6 w-auto"
      priority
    />
  );
};

export default MewTubeImg;
