
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
    title: dict.extensionspage.title,
    description: dict.extensionspage.description,
    alternates: generateHreflang(lang, "extensions-for-instagram"),
  };
}

const extensionsSites = featuredTools.filter((site) =>
  site.tag.includes("extensions for instagram")
);

export default async function ExtensionsPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  const ftdescription =
    dict.extensionspage.ftdescription;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-10">
              {dict.extensionspage.heroTitle}
            </h1>

            <p className="text-0.5xl text-gray-600 mb-1">
              {dict.extensionspage.heroText}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <FeaturedTools
        featuredTools={extensionsSites}
        description={ftdescription}
        dict={dict}
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Services Section */}
          <FourCategories excludeWords="Extensions For Instagram" currentLang={lang} />

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
