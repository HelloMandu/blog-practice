import Layout from '@/components/Layout';
import utilStyles from '@/styles/utils.module.css';
import { getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = () => ({ props: { allPostsData: getSortedPostsData() } });

export default function Home({ allPostsData }) {
  return (
    <Layout title="home">
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
