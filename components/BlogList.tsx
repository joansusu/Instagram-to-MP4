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
}

export default function BlogList({ blogs }: BlogListProps) {

  const newBlogs= blogs.sort((a,b)=>b.date.localeCompare(a.date));

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
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        post.title
                      )}&url=${encodeURIComponent(
                        `https://example.com/blog/${post.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        `https://example.com/blog/${post.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={`https://reddit.com/submit?url=${encodeURIComponent(
                        `https://example.com/blog/${post.slug}`
                      )}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer">
                      <MessageSquare className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
