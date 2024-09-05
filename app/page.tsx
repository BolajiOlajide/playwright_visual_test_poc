'use client'

import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <nav>
        <Link href="/page1">Go to Page 1</Link>
      </nav>
      <hr />
      <h1>Random Fact - Home Page</h1>
      <h2>Hello World</h2>
      <p>A group of flamingos is called a "flamboyance."</p>
      <button onClick={() => setShowText(!showText)}>{showText ? 'Hide' : 'Show'}</button>
      {showText && (
        <p data-testid='hidden-text'>I am a hidden text.</p>
      )}
    </div>
  );
};

export default Home;
