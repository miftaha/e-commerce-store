import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center container mx-auto">
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer">NextShope</h1>
        </Link>
        <nav>
          <ul className="flex gap-x-4">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-gray-400">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
