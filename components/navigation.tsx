import Link from "next/link"

export function Navigation() {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            InstagramToMP4
          </Link>
          <div className="hidden md:flex space-x-6">
            {/* <Link href="#" className="text-white hover:text-gray-200">
              About
            </Link> */}
            <Link href="/instagram-name-generator" className="text-white hover:text-gray-200">
            Instagram Name Generator
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-200">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

