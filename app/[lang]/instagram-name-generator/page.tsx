import { InstagramNameGenerator } from '@/components/instagram-name-generator';
import { Instagram } from 'lucide-react';
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
    title: dict.nameGeneratorPage.title,
    description: dict.nameGeneratorPage.description,
    alternates: generateHreflang(lang, "instagram-name-generator"),
  };
}

export default async function NameGeneratorPage({
  params: { lang },
}: {
  params: { lang: string }; 
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <Instagram className="w-16 h-16 text-pink-500" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {dict.nameGeneratorPage.heroTitle}
                    </h1>
                    <p className="text-0.01xl text-gray-600 mb-8">
                        {dict.nameGeneratorPage.heroText}
                    </p>
                </div>

                <InstagramNameGenerator />

                <div className="mt-16 space-y-12">
                    <section className="prose max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {dict.nameGeneratorPage.keyFeatures.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {dict.nameGeneratorPage.keyFeatures.content}
                        </p>
                    </section>

                    <section className="prose max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {dict.nameGeneratorPage.benefits.title}
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{dict.nameGeneratorPage.benefits.timeSaving.title}</h3>
                                <p className="text-gray-600">
                                    {dict.nameGeneratorPage.benefits.timeSaving.content}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{dict.nameGeneratorPage.benefits.personalization.title}</h3>
                                <p className="text-gray-600">
                                    {dict.nameGeneratorPage.benefits.personalization.content}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{dict.nameGeneratorPage.benefits.memorability.title}</h3>
                                <p className="text-gray-600">
                                    {dict.nameGeneratorPage.benefits.memorability.content}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{dict.nameGeneratorPage.benefits.versatility.title}</h3>
                                <p className="text-gray-600">
                                    {dict.nameGeneratorPage.benefits.versatility.content}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="prose max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {dict.nameGeneratorPage.technicalSpecs.title}
                        </h2>
                        <div className="space-y-4 text-gray-600">
                            <p className="leading-relaxed">
                                {dict.nameGeneratorPage.technicalSpecs.intro}
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>{dict.nameGeneratorPage.technicalSpecs.list.item1}</li>
                                <li>{dict.nameGeneratorPage.technicalSpecs.list.item2}</li>
                                <li>{dict.nameGeneratorPage.technicalSpecs.list.item3}</li>
                                <li>{dict.nameGeneratorPage.technicalSpecs.list.item4}</li>
                            </ol>
                            <p className="leading-relaxed">
                                {dict.nameGeneratorPage.technicalSpecs.outro}
                            </p>
                        </div>
                    </section>

                    <section className="prose max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {dict.nameGeneratorPage.uniqueSellingPoints.title}
                        </h2>
                        <div className="grid gap-6 md:grid-cols-3  mb-20">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{dict.nameGeneratorPage.uniqueSellingPoints.easeOfUse.title}</h3>
                                <p className="text-gray-600">
                                    {dict.nameGeneratorPage.uniqueSellingPoints.easeOfUse.content}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{dict.nameGeneratorPage.uniqueSellingPoints.creativityBoost.title}</h3>
                                <p className="text-gray-600">
                                    {dict.nameGeneratorPage.uniqueSellingPoints.creativityBoost.content}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{dict.nameGeneratorPage.uniqueSellingPoints.seoFriendly.title}</h3>
                                <p className="text-gray-600">
                                    {dict.nameGeneratorPage.uniqueSellingPoints.seoFriendly.content}
                                </p>
                            </div>
                        </div>

                        <div>
                            <p>
                                {dict.nameGeneratorPage.uniqueSellingPoints.conclusion}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}