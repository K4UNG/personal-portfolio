import Blog from "../../components/blogItem/Blog";
import client, { urlFor } from "../../sanity";
import { motion } from "framer-motion";
import Head from "next/head";

export default function BlogDetailPage({ blog }) {
  return (
    <>
      <Head>
        <title>{blog[0].title}</title>
        <meta name="description" content={blog[0].overview} />
        <meta
          property="og:title"
          content={blog[0].title}
        />
        <meta property="og:description" content={blog[0].overview} />
        <meta
          property="og:image"
          content={urlFor(blog[0].mainImage).url()}
        />
      </Head>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Blog blog={blog[0]} />
      </motion.div>
    </>
  );
}

export async function getStaticPaths() {
  const data = await client.fetch(`*[_type=='post']{slug}`);

  const paths = data.map((s) => {
    return { params: { slug: s.slug.current } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await client.fetch(
    `*[_type=='post' && slug.current=='${slug}']{mainImage,overview,title,_id,body,publishedAt,'comments':*[_type=='comment'&&post._ref==^._id&&approved==true] | order(_createdAt desc)}`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: data,
    },
    revalidate: 1800,
  };
}
