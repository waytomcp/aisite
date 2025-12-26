import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shared/ui/card';
import Image from 'next/image';

const relatedArticles = [
  {
    title: 'DMX Control Basics',
    description: 'Understanding DMX512 for pixel lighting control.',
    image: 'https://picsum.photos/id/1018/400/200',
    link: '#'
  },
  {
    title: 'Stage Lighting Design',
    description: 'Tips for creating immersive stage environments.',
    image: 'https://picsum.photos/id/1015/400/200',
    link: '#'
  },
  {
    title: 'LED Maintenance Guide',
    description: 'How to extend the life of your pixel bars.',
    image: 'https://picsum.photos/id/1016/400/200',
    link: '#'
  }
];

export default function SimilarTopics() {
  return (
    <section className="w-full py-12 lg:py-16 bg-black flex justify-center">
      <div className="container-wide w-full px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Similar Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <a key={index} href={article.link} className="block group">
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gray-700 transition-colors h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {article.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
