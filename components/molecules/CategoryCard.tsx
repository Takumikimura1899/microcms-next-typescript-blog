import React from 'react';
import { GithubIcon } from '../atoms/GithubIcon';
import { GitIcon } from '../atoms/GitIcon';
import { JournalIcon } from '../atoms/JournalIcon';
import { JsIcon } from '../atoms/JsIcon';
import { NextJsIcon } from '../atoms/NextJsIcon';
import { TsIcon } from '../atoms/TsIcon';

export const CategoryCard = ({
  category,
  category2,
  categories,
}: {
  category: string;
  category2: string;
  categories: string[];
}) => {
  const categoryIcon: { [category: string]: {} } = {
    JavaScript: <JsIcon />,
    TypeScript: <TsIcon />,
    'Next.js': <NextJsIcon />,
    Git: <GitIcon />,
    Github: <GithubIcon />,
    日記: <JournalIcon />,
  };

  return (
    <div className='flex items-center'>
      カテゴリー<span className='mx-1'>:</span>
      {categoryIcon[category]}
    </div>
  );
};
