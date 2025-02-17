
import { FeaturedTools } from "@/components/FeaturedTools";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { featuredTools } from "@/lib/featuredTools";
import type { Metadata } from "next";
import FourCategories from "@/components/FourCategories";

export const metadata: Metadata = {
  title:
    "Best Instagram to MP3 Converter Tools - Your Ultimate Navigation Guide",
  description:
    "Explore the best Instagram to MP3 converter tools with our comprehensive navigation guide. Find reliable websites to convert Instagram videos to high-quality MP3 files easily. No registration required, free to use, and compatible with all devices. Start converting now!",

    alternates: {
      canonical: "https://instagramtomp4.com/instagram-to-mp3",
    },
  };



const insMP3Sites = featuredTools.filter((site) =>
  site.tag.includes("instagram to mp3")
);

export default function InstagramToMP3Page() {
  const description =
    " Discover our handpicked selection of the best Instagram video downloaders and converters";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-10">
              Instagram to MP3 Downloader Tools Nav
            </h1>

            <p className="text-0.5xl text-gray-600 mb-1">
              Enhance your social media experience with our expertly curated selection of websites offering Instagram to MP3 converter tools. As a dedicated navigation site for social media download tools, we guide you to the best and most reliable websites for converting Instagram videos into high-quality MP3 files effortlessly. Whether you're a content creator, music enthusiast, or someone who loves saving audio from Instagram, our navigation site helps you find the perfect tools to meet your needs with precision and ease.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <FeaturedTools featuredTools={insMP3Sites} description={description} />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Services Section */}
          <FourCategories excludeWords="Instagram to MP3"/>

          <section className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Why Choose Our Instagram to MP4 Tool Nav?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span>
                  <strong>Curated Selection:</strong> Handpicked top Instagram
                  to MP4 converter tools for you.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span>
                  <strong>Comprehensive Coverage:</strong> Tools for all
                  Instagram content: videos, Stories, and Reels.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span>
                  <strong>Regular Updates:</strong> Our Instagram video
                  downloader list is constantly refreshed.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span>
                  <strong>Free Access:</strong> No registration needed - start
                  converting Instagram to MP4 now!
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span>
                  <strong>Multi-Platform Support:</strong> Works on all devices
                  - mobile, tablet, and desktop
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              How to Convert Instagram to MP4
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Browse</h3>
                  <p className="text-gray-600">
                    Browse our list of Instagram to MP4 downloader tools
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  2
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Read</h3>
                  <p className="text-gray-600">
                    Read descriptions and user ratings of each Instagram video
                    converter
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  3
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Choose</h3>
                  <p className="text-gray-600">
                    Choose your preferred Instagram to MP4 tool
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  4
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Converting</h3>
                  <p className="text-gray-600">
                    Follow our link to start downloading and converting
                    Instagram videos to MP4
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Testimonials Section */}
          <section className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "I found the perfect Instagram to MP4 converter in minutes thanks to Instagram to MP4 Nav!",
                  author: "Mark R.",
                },
                {
                  quote:
                    "This site saved me hours of searching. The Instagram video downloaders here are reliable and fast!",
                  author: "Emily S.",
                },
                {
                  quote:
                    "As a content creator, I rely on InstaToolNav for all my Instagram to MP4 conversion needs. It's a game-changer!",
                  author: "Alex T.",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="text-left">
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-[#4285F4] mb-4" />
                    <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                    <p className="font-semibold text-[#4285F4]">
                      - {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Are these Instagram to MP4 tools safe?
                </AccordionTrigger>
                <AccordionContent>
                  We vet all tools for safety, but always use caution when
                  downloading.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do I need to pay for these Instagram video converters?
                </AccordionTrigger>
                <AccordionContent>
                  Many Instagram to MP4 tools are free, but some offer premium
                  features.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How often do you update the Instagram to MP4 tool list?
                </AccordionTrigger>
                <AccordionContent>
                  We review and update our list weekly to ensure all Instagram
                  video downloaders are functional.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-16">
              Explore Instagram to MP4 Tools Now!
            </h2>
            <p className="text-0.1xl text-gray-600 mb-0">
              Remember: Always respect copyright laws when converting Instagram
              videos to MP4.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
