import React from 'react';
import { GithubIcon } from '../atoms/GithubIcon';
import { GitIcon } from '../atoms/GitIcon';
import { JournalIcon } from '../atoms/JournalIcon';
import { JsIcon } from '../atoms/JsIcon';
import { NextJsIcon } from '../atoms/NextJsIcon';
import { TailwindCssIcon } from '../atoms/TailwindCssIcon';
import { TsIcon } from '../atoms/TsIcon';
import { ContentCard } from '../Layout/ContentCard';

export const CategoryCard = ({
  category,
  category2,
  categories,
}: {
  category?: string;
  category2?: string;
  categories: string[];
}) => {
  const categoryIcon: { [category: string]: {} } = {
    JavaScript: <JsIcon />,
    TypeScript: <TsIcon />,
    'Next.js': <NextJsIcon />,
    Git: <GitIcon />,
    Github: <GithubIcon />,
    日記: <JournalIcon />,
    TailwindCSS: <TailwindCssIcon />,
  };

  return (
    <div className='flex items-center'>
      カテゴリー<span className='mx-1'>:</span>
      <ContentCard>
        <span className='mr-2'>{category}</span>
        {categoryIcon[category!]}
      </ContentCard>
      <ContentCard>
        <span className='mr-2'>{category2}</span>
        {categoryIcon[category2!]}
      </ContentCard>
    </div>
  );
};
