import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Share2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  description: string;
  date: string;
  slug: string;
  author: string;
}

interface BlogListProps {
  blogs: Blog[];
  currentLang: string;
}

export default function BlogList({ blogs, currentLang }: BlogListProps) {
  // Sort blogs by date using ISO string comparison
  const newBlogs = blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Get the base URL for sharing
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://instagramtomp4.com';

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {newBlogs.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString(currentLang)}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title
                    )}&url=${encodeURIComponent(
                      `${baseUrl}/${currentLang}/blog/${post.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `${baseUrl}/${currentLang}/blog/${post.slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={`https://reddit.com/submit?url=${encodeURIComponent(
                      `${baseUrl}/${currentLang}/blog/${post.slug}`
                    )}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <Button asChild>
                <Link href={`/${currentLang}/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
