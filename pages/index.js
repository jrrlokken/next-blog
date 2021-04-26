import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <>
          <p>
          Hi, I'm Joshua, a software engineer, cook and music enthusiast.
          <br />
          My code is on <a href="https://github.com/jrrlokken" rel="noreferrer" target="blank">Github</a>.
          <br />
          This is my <span id="blog-header">blog</span>.
          </p>
        </>
        <hr />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} posts-section`}>
        {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightItalic}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
