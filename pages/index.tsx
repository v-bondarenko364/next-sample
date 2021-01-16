import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/sample">Sample link</Link>
        <SampleText>Sample text</SampleText>
      </main>
    </div>
  );
};

const SampleText = styled.p`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
`;

export default Home;
