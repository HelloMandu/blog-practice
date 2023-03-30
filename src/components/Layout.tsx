import { PropsWithChildren } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
}

export default function Layout({ title, children }: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div style={{ padding: '20px' }}>{children}</div>;
    </>
  );
}
