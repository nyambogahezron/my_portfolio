'use client';
import React, { useEffect, useState, ReactNode } from 'react';
import Loading from './Loading';

interface LoadingWrapperProps {
  children: ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
}
