import React from 'react';
import { ContentCard } from '../Layout/ContentCard';
import { Date } from '../date';

export const PublishedAtCard = ({ dateString }: { dateString: string }) => {
  return (
    <div className='flex items-center ml-4'>
      <p>
        投稿日時<span className='mx-1'>:</span>
      </p>
      <ContentCard>
        <Date dateString={dateString} />
      </ContentCard>
    </div>
  );
};
