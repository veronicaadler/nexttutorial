//naming a page 404.js automatically indicates to next that this component
//will be used in the case of a 404 not found.

import Link from 'next/link'
import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

const NotFound = () => {


useEffect(() => {
    setTimeout(() => {
        Router.push('/');
    }, 3000)
}, [])

    return (
        <div className="not-found">
            <h1>Oops...that page cannot be found.</h1>
            <p>Go back to the <Link href="/">homepage</Link></p>
        </div>
      );
}
 
export default NotFound;