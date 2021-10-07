import Link from 'next/link'

function Blog({ blogId = 100 }){
    return (
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <h1>Blog Page</h1>
            <Link href={`/blog/${blogId}`}>
                <a>Blog {blogId}</a>
            </Link>
            
            <Link href='/blog/2' replace>
                <a>Blog 2</a>
            </Link>
            <Link href='/blog/3'>
                <a>Blog 3</a>
            </Link>
        </div>
    )
}
export default Blog;