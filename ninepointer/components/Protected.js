import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const Protected = ({ children }) => {
  const router = useRouter();
  let [decoded, setDecoded] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    if (router.pathname.startsWith('/admin')) {
      if (
        !localStorage.getItem('token') &&
        localStorage.getItem('role') !== 'admin'
      ) {
        router.push('/login');
      } else {
        const decodedToken = jwt_decode(localStorage.getItem('token'));
        if (!decodedToken) {
          router.push('/login');
        }
        setDecoded(decodedToken);
        console.log(decoded);
        console.log(router.pathname);
        // router.push(`${router.pathname}`);
      }
    }
  }, []);
  return router.pathname.startsWith('/admin') && !decoded?.id ? (
    <div>.</div>
  ) : (
    <>{children}</>
  );
};

export default Protected;
