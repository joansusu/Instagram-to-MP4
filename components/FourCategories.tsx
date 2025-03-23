import { Video, Film, UserRoundPen, Blocks, AudioLines } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";
interface FourCategoriesProps {
  excludeWords: string; 
  currentLang: string;
}
export default async function FourCategories({ excludeWords, currentLang }: FourCategoriesProps) {
  const dict = await getDictionary(currentLang);

  const categories = [
    {
      title: dict.fourCategories.title1,        
      description: dict.fourCategories.description1,
      icon: Video,
      href: "/",
    },
    {
      title: dict.fourCategories.title2,
      description: dict.fourCategories.description2,
      icon: AudioLines,
      href: `/${currentLang}/instagram-to-mp3`,
    },
    {
      title: dict.fourCategories.title3,
      description: dict.fourCategories.description3,
      icon: Film,
      href: `/${currentLang}/instagram-reel-downloader`,
    },
    {
      title: dict.fourCategories.title4,
      description: dict.fourCategories.description4,
      icon: Blocks,
      href: `/${currentLang}/extensions-for-instagram`,
    },
    {
      title: dict.fourCategories.title5,
      description: dict.fourCategories.description5,
      icon: UserRoundPen,
      href: `/${currentLang}/instagram-name-generator`,
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        {dict.fourCategories.title}
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
