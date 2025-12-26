import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shared/ui/card';
import Image from 'next/image';
import { CatalogItemData } from '../data/types';

export default function GenericSimilarTopics({ data }: { data: CatalogItemData['similarTopics'] }) {
  if (!data || !data.items || data.items.length === 0) return null;
  
  return (
    <section className="w-full py-12 lg:py-16 bg-slate-50 dark:bg-black flex justify-center">
      <div className="container-wide w-full px-6">
        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((item, index) => (
            <a key={index} href={item.link} className="block group">
              <Card className="bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-500 dark:text-gray-400">
                    {item.description}
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
