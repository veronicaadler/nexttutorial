import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

    //the next Image component is optimized.  It "lazily" loads the image only when we scroll to it.
    //Width and height must be added, and the image is automatically made responsive based on the given w x h.
    return (
        <nav>
            <div className="logo">
                <Image alt="logo" src="/favicon.ico" width={100} height={100} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    );
}

export default Navbar;