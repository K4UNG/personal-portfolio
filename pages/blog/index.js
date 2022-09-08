import FeaturedBlogs from "../../components/blogs/FeaturedBlogs";
import BlogList from "../../components/blogs/BlogList";
import client from "../../sanity";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { animationActions } from "../../store/animationSlice";
import { motion } from "framer-motion";

export default function BlogsPage({ blogs }) {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(animationActions.removeState());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="blogs"
    >
      <FeaturedBlogs blogs={blogs.filter((b) => b.isFeatured)} />
      <BlogList blogs={blogs} />
    </motion.div>
  );
}

export async function getStaticProps() {
  const data = await client.fetch("*[_type=='post'] | order(publishedAt desc){title, _id, mainImage, overview, isFeatured, slug, timeToRead}");
  return {
    props: {
      blogs: data,
    },
    revalidate: 3600,
  };
}
