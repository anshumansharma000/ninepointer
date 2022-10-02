import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Protected = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.startsWith('/admin')) {
      if (
        !localStorage.getItem('token') &&
        localStorage.getItem('role') !== 'admin'
      ) {
        router.push('/login');
      }
    }
  }, []);
  return <>{children}</>;
};

export default Protected;
