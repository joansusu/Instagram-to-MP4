
import { FeaturedTools } from "@/components/FeaturedTools";
import { featuredTools } from "@/lib/featuredTools";
import type { Metadata } from "next";
import FourCategories from "@/components/FourCategories";
import { WhyChoose, HowToConvert, Testimonials, FAQ, CAT } from "@/components/pageContents";
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
    title: dict.home.title,
    description: dict.home.description,
    alternates: generateHreflang(lang, ""),
  };
}

const insMP4Sites = featuredTools.filter((site) =>
  site.tag.includes("instagram to mp4")
);

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  const ftdescription =
    dict.home.ftdescription;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-10">
              {dict.home.heroTitle}
            </h1>
            <h2 className="text-2xl font-bold mb-6">
              {dict.home.heroSubtitle}
            </h2>
            <p className="text-0.5xl text-gray-600 mb-1">
              {dict.home.heroText}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <FeaturedTools featuredTools={insMP4Sites} description={ftdescription} dict={dict} />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Services Section */}
          <FourCategories excludeWords="Instagram to MP4" currentLang={lang}/>

           {/* why choose  */}
           <WhyChoose currentLang={lang} />

          {/* How to Convert */}
          <HowToConvert currentLang={lang} />

          {/* Testimonials Section */}
          <Testimonials currentLang={lang} />

          {/* FAQ Section */}
          <FAQ currentLang={lang} />

          {/* CAT */}
          <CAT currentLang={lang} />

        </div>
      </div>
    </>
  );
}
