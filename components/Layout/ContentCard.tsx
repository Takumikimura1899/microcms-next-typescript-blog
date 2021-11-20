import React from 'react';

export const ContentCard: React.FC = ({ children }) => {
  return (
    <div className='mx-2 py-1 px-2 flex items-center border rounded-xl bg-white shadow font-semibold'>
      {children}
    </div>
  );
};
