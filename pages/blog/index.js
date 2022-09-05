import FeaturedBlogs from "../../components/blogs/FeaturedBlogs"
import BlogList from "../../components/blogs/BlogList"
import client from "../../sanity"

export default function BlogsPage({ blogs }) {
    return <div className="blogs">
        <FeaturedBlogs blogs={blogs.filter(b => b.isFeatured)} />
        <BlogList blogs={blogs} />
    </div>
}

export async function getStaticProps() {
    const data = await client.fetch("*[_type=='post']")
    return {
        props: {
            blogs: data
        }
    }
}