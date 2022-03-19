import Link from 'next/link'

const Nav = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
    </li>
    <li>
      <Link href="/products">
        <a>Todos produtos</a>
      </Link>
    </li>
    <li>
      <Link href="/products/glasses">
        <a>Óculos</a>
      </Link>
    </li>
  </ul>
)

export default Nav
