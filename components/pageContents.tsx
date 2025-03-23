import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react"; 
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { getDictionary } from "@/lib/getDictionary";

export async function WhyChoose({currentLang}: {currentLang: string}){
  const dict = await getDictionary(currentLang);
      return (
        <section className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {dict.whyChoose.title}
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
              ✓
            </span>
            <span>  
              <strong>{dict.whyChoose.curatedTitle}</strong> {dict.whyChoose.curatedText}
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
              ✓
            </span>
            <span>
              <strong>{dict.whyChoose.comprehensiveTitle}</strong> {dict.whyChoose.comprehensiveText}
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
              ✓
            </span>
            <span>
              <strong>{dict.whyChoose.regularUpdatesTitle}</strong> {dict.whyChoose.regularUpdatesText}
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
              ✓
            </span>
            <span>
              <strong>{dict.whyChoose.freeAccessTitle}</strong> {dict.whyChoose.freeAccessText}
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
              ✓
            </span>
            <span>
              <strong>{dict.whyChoose.multiPlatformTitle}</strong> {dict.whyChoose.multiPlatformText}
            </span>
          </li>
        </ul>
      </section>
      )
}


export async function HowToConvert({currentLang}: {currentLang: string}){
  const dict = await getDictionary(currentLang);
      return (
            <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              {dict.howToConvert.title}
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{dict.howToConvert.browseTitle}</h3>  
                  <p className="text-gray-600">
                    {dict.howToConvert.browseText}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  2
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{dict.howToConvert.readTitle}</h3>
                  <p className="text-gray-600">
                    {dict.howToConvert.readText}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  3
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{dict.howToConvert.chooseTitle}</h3>  
                  <p className="text-gray-600">
                    {dict.howToConvert.chooseText}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  4
                </span>
                <div>
                  <h3 className="font-semibold mb-1">{dict.howToConvert.convertingTitle}</h3>
                  <p className="text-gray-600">
                    {dict.howToConvert.convertingText}
                  </p>
                </div>
              </li>
            </ol>
          </section>
      )
}

export async function Testimonials({currentLang}: {currentLang: string}){
  const dict = await getDictionary(currentLang);
      return (
        <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-12">
          {dict.testimonials.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                dict.testimonials.quote1,
              author: dict.testimonials.author1,
            },
            {
              quote:
                dict.testimonials.quote2,
              author: dict.testimonials.author2,
            },
            {
              quote:
                dict.testimonials.quote3,
              author: dict.testimonials.author3,
            },
          ].map((testimonial, i) => (
            <Card key={i} className="text-left">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-[#4285F4] mb-4" />
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <p className="font-semibold text-[#4285F4]">
                  - {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      )
}

export async function FAQ({currentLang}: {currentLang: string}){
  const dict = await getDictionary(currentLang);
      return (
        <section className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              {dict.faq.title}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {dict.faq.question1}
                </AccordionTrigger>
                <AccordionContent>
                  {dict.faq.answer1}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  {dict.faq.question2}
                </AccordionTrigger>
                <AccordionContent>
                  {dict.faq.answer2}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  {dict.faq.question3}
                </AccordionTrigger>
                <AccordionContent>
                  {dict.faq.answer3}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
      )
}

export async function CAT({currentLang}: {currentLang: string}  ){    
  const dict = await getDictionary(currentLang);
      return (
        <section className="text-center">
        <h2 className="text-3xl font-semibold mb-16">
          {dict.cat.title}
        </h2>
        <p className="text-0.1xl text-gray-600 mb-0">
          {dict.cat.text}
        </p>
      </section>
      )
}
