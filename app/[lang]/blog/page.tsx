import BlogList from "@/components/BlogList"
import { blogs } from "@/lib/blogs"
import { Metadata } from "next"
import { getDictionary } from "@/lib/getDictionary";
import { i18n } from "@/i18n.config";
import { generateHreflang } from "@/lib/generateHreflangs";

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(lang);
  return {
    title: dict.blogPage.title,
    description: dict.blogPage.description,
    alternates: generateHreflang(lang, "blog"),
  };
}

export default async function BlogPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang); 
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.blogPage.h1}</h1>
        <p className="text-xl text-muted-foreground">
        {dict.blogPage.p}
        </p>
      </div>

     <BlogList blogs={blogs} currentLang={lang}/>

    </div>
  )
}