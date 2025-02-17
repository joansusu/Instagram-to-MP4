import { Video, Film, UserRoundPen, Blocks, AudioLines } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Instagram to MP4",
    description: "Instagram to MP4 Downloader Tools | Best Ways to Convert Instagram Videos",
    icon: Video,
    href: "/",
  },
  {
    title: "Instagram to MP3",
    description: "Best Instagram to MP3 Converter Tools",
    icon: AudioLines,
    href: "/instagram-to-mp3",
  },
  {
    title: "Instagram Reel Downloader",
    description: "Top Instagram Reel Downloader Tools - Your Ultimate Navigation Guide",
    icon: Film,
    href: "/instagram-reel-downloader",
  },
  {
    title: "Extensions For Instagram",
    description: "Explore the best Extensions for Instagram with our comprehensive navigation guide",
    icon: Blocks,
    href: "/extensions-for-instagram",
  },
  {
    title: "Instagram Username Generator",
    description: "Free Instagram Username Generator – Create Your Unique Name Today",
    icon: UserRoundPen,
    href: "/instagram-name-generator",
  },
];

interface FourCategoriesProps {
  excludeWords: string;
}
export default function FourCategories({ excludeWords }: FourCategoriesProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Featured Instagram Tool Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories
          .filter((category) => category.title !== excludeWords)
          .map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
