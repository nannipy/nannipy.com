'use client';

import React from 'react';
import { useOsmoScroll } from '../hooks/useOsmoScroll';

export default function OsmoScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useOsmoScroll();

  return (
    <>
      <div className="osmo-noise" aria-hidden="true" />
      {children}
    </>
  );
}
