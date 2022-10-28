import { Link, useMatch, useResolvedPath } from "react-router-dom"

/**
 * Explain what this code does
 * 
 */
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title"> {/** insert logo here */}
        Righteous Space
      </Link>
      <ul>
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
      </ul>
    </nav>
  )
}

/**
 * Explain what this code does
 * 
 */
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}