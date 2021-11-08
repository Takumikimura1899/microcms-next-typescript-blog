import React from 'react';
import { JsIcon } from '../atoms/JsIcon';

export const CategoryCard = ({
  category,
  category2,
}: {
  category: string;
  category2: string;
}) => {
  return (
    <div className='flex items-center'>
      カテゴリー<span className='mx-1'>:</span>
      {category === 'JavaScript' && <JsIcon />}
    </div>
  );
};
