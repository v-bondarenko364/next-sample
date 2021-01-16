import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Link href="/sample">Sample link</Link>
			</main>
		</div>
	);
};

export default Home;
