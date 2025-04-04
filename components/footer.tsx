import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer({ currentLang, dict }: { currentLang: string; dict: any }) {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Instagram className="h-6 w-6" />        
            <Link href={`/${currentLang}`} className="font-semibold text-xl">
              InstagramToMP4
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              {dict.footer.about}
            </Link>
            <Link href={`/${currentLang}/privacy-policy`} className="text-gray-600 hover:text-gray-900">
              {dict.footer.privacy}
            </Link>
            <Link href={`/${currentLang}/terms-of-service`} className="text-gray-600 hover:text-gray-900">
              {dict.footer.terms}
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} InstagramToMP4.com. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

