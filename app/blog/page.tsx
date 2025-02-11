import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Share2, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"
import BlogList from "@/components/BlogList"
import { blogs } from "@/lib/blogs"

export const metadata:Metadata={
  title:'Blogs - InstagramToMP4',
  description:'Discover top Instagram to MP4 converter tools. Our curated list helps you easily download and convert Instagram videos to MP4 format. Find the best Instagram video downloaders here!',
  alternates: {
    canonical: "https://instagramtomp4.com/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Blogs</h1>
        <p className="text-xl text-muted-foreground">
        Discover the ultimate guide to download and convert media from Instagram. Stay ahead with the best tools in 2025. Click to learn more!
        </p>
      </div>

     <BlogList blogs={blogs}/>

    </div>
  )
}