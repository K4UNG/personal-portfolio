import Blog from "../../components/blogItem/Blog";
import client from "../../sanity";
import { motion } from "framer-motion";

export default function BlogDetailPage({ data }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Blog blog={data[0]} />
    </motion.div>
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
    `*[_type=='post' && slug.current=='${slug}']{mainImage,title,_id,body,publishedAt,'comments':*[_type=='comment'&&post._ref==^._id&&approved==true]}`
  );

  return {
    props: {
      data,
    },
    revalidate: 1800,
  };
}
