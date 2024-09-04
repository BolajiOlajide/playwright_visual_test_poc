import Link from 'next/link';

const Page1 = () => {
  return (
    <div>
    <nav>
        <Link href="/">Go home</Link>
      </nav>
      <hr />
      <h1>Page 1</h1>
      <p>This is the first page, maybe?</p>
    </div>
  );
};

export default Page1;
