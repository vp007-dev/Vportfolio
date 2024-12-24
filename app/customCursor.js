'use client';

import { useEffect } from 'react';
import './cursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      const cursorSize = 500; // Half of your custom cursor's size (if it's 100px)
      cursor.style.left = `${e.clientX - cursorSize}px`;
      cursor.style.top = `${e.clientY - cursorSize}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
