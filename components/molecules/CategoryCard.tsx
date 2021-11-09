import React from 'react';
import { JsIcon } from '../atoms/JsIcon';

export const CategoryCard = ({
  category,
  category2,
  categories,
}: {
  category: any;
  category2: string;
  categories: string[];
}) => {
  const categoryIcon: any = { JavaScript: <JsIcon /> };
  console.log(categoryIcon);

  return (
    <div className='flex items-center'>
      カテゴリー<span className='mx-1'>:</span>
      {categoryIcon[category]}
    </div>
  );
};
