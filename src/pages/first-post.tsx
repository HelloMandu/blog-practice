import styles from '@/pages/temp.module.css';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <Layout title="firstpost">
      <h1 className={styles.temp}>First Post</h1>;
      <h2>
        <Link href="/Users/sungminjo/Project/blog-project/blog-practice/src/pages">← Back to home</Link>
      </h2>
    </Layout>
  );
}
