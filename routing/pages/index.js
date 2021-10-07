import Link from 'next/link'

function Home(){
    return (
        <div>
            <Link href='/about'>
                <a>About</a>
            </Link>
            <Link href='/blog'>
                <a>Blog</a>
            </Link>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home