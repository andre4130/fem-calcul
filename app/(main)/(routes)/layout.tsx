import React from 'react';

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-100 flex flex-col items-center p-6">
      <div className="min-w-[1360px] max-w-[1360px] align-center">{children}</div>
    </div>
  );
}
