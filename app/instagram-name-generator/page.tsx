import { InstagramNameGenerator } from '@/components/instagram-name-generator';
import { Instagram } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Instagram className="w-16 h-16 text-pink-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Instagram Username Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create unique and available Instagram usernames in seconds
          </p>
        </div>

        <InstagramNameGenerator />

        <div className="mt-16 space-y-12">
          <section className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is an Instagram Username Generator?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              An Instagram username generator is a tool that helps you create unique, creative, and
              available usernames for your Instagram account. It combines your input with various
              elements like prefixes, suffixes, and numbers to generate multiple username options
              that match your style and personality.
            </p>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Does Our Username Generator Work?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Our Instagram username generator uses smart algorithms to create unique username
                suggestions based on your preferences:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Enter your name, brand, or keywords that represent you</li>
                <li>Choose a category that matches your style (Gaming, Professional, Creative, etc.)</li>
                <li>Decide whether to include numbers in your username</li>
                <li>Get instant username suggestions that you can use right away</li>
              </ol>
              <p className="leading-relaxed">
                Each generated username is crafted to be unique while maintaining readability and
                memorability, essential factors for building your Instagram presence.
              </p>
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Use Our Instagram Username Generator?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Save Time</h3>
                <p className="text-gray-600">
                  Instead of spending hours brainstorming username ideas, get instant suggestions
                  that are creative and unique.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Be Creative</h3>
                <p className="text-gray-600">
                  Get inspired with different combinations of words, numbers, and special characters
                  that you might not have thought of.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Stay Professional</h3>
                <p className="text-gray-600">
                  Choose from different categories to ensure your username matches your brand or
                  personal style.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Easy to Use</h3>
                <p className="text-gray-600">
                  With our simple interface, you can generate and copy usernames with just a few
                  clicks.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}