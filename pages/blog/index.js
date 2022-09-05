import FeaturedBlogs from "../../components/blogs/FeaturedBlogs"
import BlogList from "../../components/blogs/BlogList"

export default function BlogsPage() {
    return <div className="blogs">
        <FeaturedBlogs />
        <BlogList />
    </div>
}