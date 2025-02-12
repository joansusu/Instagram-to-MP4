import { InstagramNameGenerator } from '@/components/instagram-name-generator';
import { Instagram } from 'lucide-react';
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Free Instagram Username Generator – Create Your Unique Name Today',
    description: 'Create your unique Instagram username effortlessly with our free Instagram username generator. Discover fresh username ideas and stand out today!',
    alternates: {
        canonical: "https://instagramtomp4.com/instagram-name-generator",
    },
}

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
                    <p className="text-0.01xl text-gray-600 mb-8">
                        Welcome to our Instagram Username Generator, the ultimate tool for creating unique, memorable, and available usernames in seconds. Whether for personal or brand accounts, our generator combines your input with advanced algorithms to deliver the perfect username that stands out and aligns with your style.
                    </p>
                </div>

                <InstagramNameGenerator />

                <div className="mt-16 space-y-12">
                    <section className="prose max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Instagram Username Generator Key Features:
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Smart Algorithms: Utilize advanced AI algorithms to generate unique and available usernames.
                            Customization Options: Enter your name, brand, or keywords and choose from categories like Gaming, Professional, and Creative.
                            Instant Suggestions: Receive immediate username ideas that you can use right away.
                            Inclusion of Numbers: Decide whether to include numbers and symbols in your username for added uniqueness.
                        </p>
                    </section>


                    <section className="prose max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Instagram Username Generator Benefits:
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">Time-Saving</h3>
                                <p className="text-gray-600">
                                    No more hours spent brainstorming; get instant, creative username ideas with a few clicks.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">Personalization</h3>
                                <p className="text-gray-600">
                                    Easily tailor your Instagram handle to match your brand or personal style.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">Memorability</h3>
                                <p className="text-gray-600">
                                    Each username is crafted to be easy to remember and pronounce, essential for building a strong Instagram presence.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">Versatility</h3>
                                <p className="text-gray-600">
                                    Suitable for various niches and categories, ensuring your username resonates with your target audience.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="prose max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Technical Specifications
                        </h2>
                        <div className="space-y-4 text-gray-600">
                            <p className="leading-relaxed">
                                Our Instagram username generator uses smart algorithms to create unique username
                                suggestions based on your preferences:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>User Input: Accepts names, brands, and keywords.</li>
                                <li>Algorithm: Utilizes smart, adaptive algorithms for real-time username generation.</li>
                                <li>Decide whether to include numbers in your username</li>
                                <li>Output: Provides a list of unique, available usernames.</li>
                            </ol>
                            <p className="leading-relaxed">
                                Each generated username is crafted to be unique while maintaining readability and
                                memorability, essential factors for building your Instagram presence.
                            </p>
                        </div>
                    </section>

                    <section className="prose max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Unique Selling Points
                        </h2>
                        <div className="grid gap-6 md:grid-cols-3  mb-20">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">Ease of Use</h3>
                                <p className="text-gray-600">
                                    With a simple interface, generate and copy usernames in just a few clicks.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">Creativity Boost</h3>
                                <p className="text-gray-600">
                                    Get inspired with diverse combinations of words, numbers, and special characters.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">SEO-Friendly</h3>
                                <p className="text-gray-600">
                                    Enhance your Instagram SEO with a username that is both unique and relevant to your niche.
                                </p>
                            </div>
                        </div>


                        <div >
                            <p >
                                Whether you're establishing a new Instagram account or rebranding an existing one, our Instagram Username Generator is your go-to tool for creating a standout username that captures your essence and engages your audience. Try it today and elevate your Instagram presence!
                            </p>
                        </div>

                    </section>
                </div>
            </div>
        </main>
    );
}