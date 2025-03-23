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
    title: dict.privacyPolicy.title,
    alternates: generateHreflang(lang, "privacy-policy"),
  };
}

export default async function PrivacyPolicyPage({ 
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center">{dict.privacyPolicy.title}</h1>
      <div className="space-y-6 text-gray-700">
        <p>{dict.privacyPolicy.intro}</p>
        <p>{dict.privacyPolicy.notice}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.privacyPolicy.whatWeCollect.title}</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">{dict.privacyPolicy.whatWeCollect.personal.title}</h3>
        <p>{dict.privacyPolicy.whatWeCollect.personal.content}</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">{dict.privacyPolicy.whatWeCollect.nonPersonal.title}</h3>
        <p>{dict.privacyPolicy.whatWeCollect.nonPersonal.content}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.privacyPolicy.tracking.title}</h2>
        <p>{dict.privacyPolicy.tracking.intro}</p>
        <p className="mt-4">{dict.privacyPolicy.tracking.browserNotice}</p>
        <p className="mt-4">{dict.privacyPolicy.tracking.types}</p>
        
        <p className="mt-4">{dict.privacyPolicy.tracking.purpose}</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><strong>{dict.privacyPolicy.tracking.list.necessary}</strong></li>
          <li><strong>{dict.privacyPolicy.tracking.list.policy}</strong></li>
          <li><strong>{dict.privacyPolicy.tracking.list.functionality}</strong></li>
          <li><strong>{dict.privacyPolicy.tracking.list.tracking}</strong></li>
          <li><strong>{dict.privacyPolicy.tracking.list.targeting}</strong></li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.privacyPolicy.useOfInfo.title}</h2>
        <p>{dict.privacyPolicy.useOfInfo.intro}</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>{dict.privacyPolicy.useOfInfo.list.contact}</li>
          <li>{dict.privacyPolicy.useOfInfo.list.news}</li>
          <li>{dict.privacyPolicy.useOfInfo.list.requests}</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.privacyPolicy.retention.title}</h2>
        <p>{dict.privacyPolicy.retention.content}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.privacyPolicy.disclosure.title}</h2>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><strong>{dict.privacyPolicy.disclosure.list.business}</strong></li>
          <li><strong>{dict.privacyPolicy.disclosure.list.law}</strong></li>
          <li><strong>{dict.privacyPolicy.disclosure.list.legal}</strong></li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.privacyPolicy.security.title}</h2>
        <p>{dict.privacyPolicy.security.content}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.privacyPolicy.changes.title}</h2>
        <p>{dict.privacyPolicy.changes.content}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.privacyPolicy.acceptance.title}</h2>
        <p>{dict.privacyPolicy.acceptance.content}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">{dict.privacyPolicy.contact.title}</h2>
        <p>{dict.privacyPolicy.contact.content}</p>
      </div>
    </div>
  );
}