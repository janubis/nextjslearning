import {useRouter} from 'next/router'
function BlogDetail(){
    const router = useRouter();
    const blogId = router.query.blogId;
    return <h1>Blog ID = {blogId}</h1>
}
export default BlogDetail