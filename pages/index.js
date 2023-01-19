import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm a cat. I say "meow" when I'm hungry. I say "meow" when I'm
          angry. I'm a cat so it's all I can say.
        </p>
        <p>
          Read more <Link href="/posts/first-post">here</Link>.
        </p>
      </section>
    </Layout>
  );
}
