import {useRouter} from 'next/router'
function Review(){
    const router = useRouter();
    const {blogId, reviewId} = router.query;
    return <h1>Review ID = {blogId} for blog {reviewId}</h1>
}
export default Review