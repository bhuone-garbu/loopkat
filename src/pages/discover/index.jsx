import { useEffect } from 'react';
import Router from 'next/router';

export default function Redirect() {
  useEffect(() => {
    Router.push('/discover/intro');
  }, []);

  return null;
}
