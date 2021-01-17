import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { loginAction } from '../redux/actions/authActions';
import { isLoggedInSelector } from '../redux/selectors/auth';

const Home = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(isLoggedInSelector);

  console.log(isLoggedIn);
  useEffect(() => {
    dispatch(loginAction());
  }, [dispatch]);
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

      <p>You are authorized person: {isLoggedIn ? 'true' : 'false'}</p>
    </div>
  );
};

const SampleText = styled.p`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
`;

export default Home;
