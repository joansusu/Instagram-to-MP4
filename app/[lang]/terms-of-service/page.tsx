import { getDictionary } from "@/lib/getDictionary";
import { i18n } from "@/i18n.config";
import { generateHreflang } from "@/lib/generateHreflangs";
import { Metadata } from "next";

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
    title: dict.termsOfService.title,
    alternates: generateHreflang(lang, "terms-of-service"),
  };
}

export default async function TermsOfServicePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">{dict.termsOfService.title}</h1> 

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{dict.termsOfService.introduction.title}</h2>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.introduction.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{dict.termsOfService.useLicense.title}</h2>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.useLicense.intro}
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            {dict.termsOfService.useLicense.restrictions.map((restriction, index) => (
              <li key={index}>{restriction}</li>
            ))}
          </ul>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.useLicense.termination}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{dict.termsOfService.disclaimer.title}</h2>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.disclaimer.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{dict.termsOfService.limitations.title}</h2>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.limitations.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{dict.termsOfService.accuracy.title}</h2>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.accuracy.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{dict.termsOfService.links.title}</h2>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.links.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{dict.termsOfService.modifications.title}</h2>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.modifications.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{dict.termsOfService.governingLaw.title}</h2>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.governingLaw.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{dict.termsOfService.contact.title}</h2>
          <p className="text-gray-700 mb-4">
            {dict.termsOfService.contact.content}
          </p>
        </section>
      </div>
    </div>
  );
} 
