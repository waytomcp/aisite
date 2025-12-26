import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shared/ui/card';
import Image from 'next/image';
import { CatalogItemData } from '../data/types';

export default function CatalogSimilarTopics({ data }: { data: CatalogItemData['similarTopics'] }) {
  if (!data.items || data.items.length === 0) return null;

  return (
    <section className="w-full py-12 lg:py-16 bg-black flex justify-center">
      <div className="container-wide w-full px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((article, index) => (
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
