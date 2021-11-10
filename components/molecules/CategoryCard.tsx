import React from 'react';
import { JsIcon } from '../atoms/JsIcon';

export const CategoryCard = ({
  category,
  category2,
  categories,
}: {
  category: string;
  category2: string;
  categories: string[];
}) => {
  const categoryIcon: { [category: string]: {} } = { JavaScript: <JsIcon /> };

  return (
    <div className='flex items-center'>
      カテゴリー<span className='mx-1'>:</span>
      {categoryIcon[category]}
    </div>
  );
};
