import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
      <div>
        <div className="flex gap-2">
          <Image src="/assets/logo.png" alt="Logo" width={50} height={100}></Image>
          <h1 className='text-primary font-bold text-xl md:text-2xl '>ItemHub</h1>
        </div>
      </div>
    );
};

export default Logo;