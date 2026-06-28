import { useState, useEffect } from 'react';

const PageLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Give a brief moment for React to hydrate and paint the DOM
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading overlay */}
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#050816',
            transition: 'opacity 0.5s ease',
          }}
        >
          <div className="canvas-loader" />
          <p
            style={{
              marginTop: 40,
              fontSize: 16,
              color: '#aaa6c3',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            Loading Shubham&apos;s Portfolio...
          </p>
        </div>
      )}
      {children}
    </>
  );
};

export default PageLoader;
