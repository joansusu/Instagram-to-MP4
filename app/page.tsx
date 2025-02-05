import { Video, Film, Instagram, Image } from "lucide-react"
import Link from "next/link"
import { FeaturedTools } from "@/components/featured-tools"

export default function Home() {
  const features = [
    {
      title: "Instagram Videos to MP4",
      description: "Convert and download Instagram videos to MP4 format",
      icon: Video,
      href: "#",
    },
    {
      title: "Instagram Reels to MP4",
      description: "Transform Instagram Reels into downloadable MP4 files",
      icon: Film,
      href: "#",
    },
    {
      title: "Instagram Stories to MP4",
      description: "Save Instagram Stories as MP4 videos easily",
      icon: Instagram,
      href: "#",
    },
    {
      title: "Instagram Photos",
      description: "Download Instagram photos in high resolution",
      icon: Image,
      href: "#",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Instagram to MP4 Converter & Downloader</h1>
            <p className="text-xl text-gray-600 mb-8">
              Convert and download Instagram videos, reels, and stories to MP4 format for free
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <FeaturedTools />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Our Instagram to MP4 Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose InstagramToMP4.com?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Fast MP4 Conversion:</strong> Convert Instagram content to MP4 in seconds
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>High-Quality Output:</strong> Download Instagram videos in the best available quality
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>User-Friendly:</strong> Simple interface for easy Instagram to MP4 conversion
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Free & Unlimited:</strong> No registration or software installation required
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Multi-Platform Support:</strong> Works on all devices - mobile, tablet, and desktop
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">How to Convert Instagram to MP4</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Copy Instagram URL</h3>
                  <p className="text-gray-600">
                    Find the Instagram video, reel, or story you want to convert and copy its URL
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  2
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Paste URL</h3>
                  <p className="text-gray-600">Paste the copied URL into the input field on InstagramToMP4.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  3
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Convert to MP4</h3>
                  <p className="text-gray-600">
                    Click the "Convert to MP4" button and wait for the conversion to complete
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  4
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Download MP4</h3>
                  <p className="text-gray-600">Once converted, click the "Download MP4" button to save your video</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Convert Instagram to MP4?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Start using InstagramToMP4.com now and enjoy your favorite Instagram content offline!
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

