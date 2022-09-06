import Blog from "../../components/blogItem/Blog";
import client from '../../sanity';

export default function BlogDetailPage({ data }) {
    return <div>
        <Blog blog={data[0]} />
    </div>
}

export async function getStaticPaths() {
    const data = await client.fetch(`*[_type=='post']{slug}`)

    const paths = data.map(s => {
        return { params: { slug: s.slug.current }}
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug;
    const data = await client.fetch(`*[_type=='post' && slug.current=='${slug}']`)

    return {
        props: {
            data
        },
        revalidate: 3600
    }
}