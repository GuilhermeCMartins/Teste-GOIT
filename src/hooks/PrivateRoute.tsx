import { ComponentType, useEffect } from 'react';
import Router from 'next/router';

type Props = {};

const withPrivateRoute = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const ComponentWithPrivateRoute = (props: P & Props) => {
    useEffect(() => {
      const isLoggedIn = localStorage.getItem('token');
      if (!isLoggedIn) {
        Router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return ComponentWithPrivateRoute;
};

export default withPrivateRoute;
