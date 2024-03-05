import Link from "next/link"

const Links = () => {
  return (
    <nav>
        <Link href="/"> <a>Logo</a></Link>
        <ul>
            <li><Link legacyBehavior  href="/"><a>Home</a></Link></li>
            <li><Link legacyBehavior  href="/about"><a>About</a></Link></li>

        </ul>
    </nav>
  )
}

export default Links