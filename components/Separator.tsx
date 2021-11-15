import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const SeparatorStyle = SeparatorPrimitive.Root;

export const Separator = () => {
  return (
    <div className=' max-w-xl mx-auto bg-teal-300'>
      <div className='inline-block ml-2 '>Radix</div>
      <SeparatorStyle
        decorative
        orientation='horizontal'
        className='bg-white my-1  h-0.5 '
      />
      <div className='flex h-5 items-center justify-around'>
        <p className='text-white'>blog</p>
        <SeparatorStyle
          decorative
          orientation='vertical'
          className=' h-full w-0.5 bg-white '
        />
        <p className='text-white'>about</p>
        <SeparatorStyle
          decorative
          orientation='vertical'
          className=' h-full w-0.5 mx-0 bg-white  '
        />
        <p className='text-white'>source</p>
      </div>
    </div>
  );
};
