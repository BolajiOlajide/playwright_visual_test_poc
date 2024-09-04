import Link from 'next/link';

const Home = () => {
  const randomFacts = [
    'Bananas are berries, but strawberries are not.',
    'Octopuses have three hearts.',
    'A group of flamingos is called a "flamboyance."'
  ];

  const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];

  return (
    <div>
      <h1>Random Fact - Home Page</h1>
      <h2>Hello World</h2>
      <p>{randomFact}</p>
      <nav>
        <Link href="/page1">Go to Page 1</Link>
      </nav>
    </div>
  );
};

export default Home;
