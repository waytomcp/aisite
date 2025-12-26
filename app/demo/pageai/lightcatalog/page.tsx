import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shared/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { products } from './data/products';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';
import { LandingFooter } from '@/components/landing/footer/LandingFooter';
import { OrbitIcon } from 'lucide-react';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import ThemeSwitch from '@/components/shared/ThemeSwitch';

export default function CatalogIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white flex flex-col items-center">
      <LandingHeader
        fixed
        className="max-w-full"
        logoComponent={
          <div className="flex items-center gap-2">
            <OrbitIcon className="h-8 w-auto text-primary-500" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">LightCatalog</span>
          </div>
        }
      >
        <LandingHeaderMenuItem href="/demo/pageai/lightcatalog" label="Catalog" />
        <LandingHeaderMenuItem href="#" label="Reviews" />
        <LandingHeaderMenuItem href="#" label="Guides" />
        <ThemeSwitch />
      </LandingHeader>

      <main className="w-full flex flex-col items-center scroll-smooth flex-grow">
        <LandingPrimaryTextCtaSection
          titleComponent={
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-6">
              Professional Stage Lighting Reviews
            </h1>
          }
          descriptionComponent={
            <p className="text-lg md:text-xl text-center text-slate-500 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              In-depth analysis, comparisons, and expert guides for lighting designers and production professionals.
            </p>
          }
          withBackgroundGlow
          variant="primary"
          textPosition="center"
          innerClassName="!max-w-6xl"
        >
          <div className="w-full"></div>
        </LandingPrimaryTextCtaSection>

        <section className="w-full py-12 lg:py-16 bg-slate-50 dark:bg-black flex justify-center">
          <div className="container-wide w-full px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link key={product.slug} href={`/demo/pageai/lightcatalog/${product.slug}`} className="block group h-full">
                  <Card className="bg-white dark:bg-gray-900 border-slate-200 dark:border-gray-800 overflow-hidden hover:border-primary-500/50 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image 
                        src={product.hero.avatarImage} // Using hero image as preview for now
                        alt={product.metadata.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 dark:from-gray-900/60 to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                        {product.hero.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-slate-500 dark:text-gray-400 line-clamp-3">
                        {product.metadata.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <LandingFooter
        withBackground
        variant="secondary"
        logoComponent={
          <div className="flex items-center gap-2">
            <OrbitIcon className="h-8 w-auto text-primary-500" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">LightCatalog</span>
          </div>
        }
        title="LightCatalog"
        description="The ultimate resource for stage lighting professionals."
      >
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-slate-900 dark:text-white">Catalog</h4>
          <Link href="#" className="text-sm text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">All Reviews</Link>
          <Link href="#" className="text-sm text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">Comparisons</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-slate-900 dark:text-white">Resources</h4>
          <Link href="#" className="text-sm text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">Guides</Link>
          <Link href="#" className="text-sm text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">Newsletter</Link>
        </div>
      </LandingFooter>
    </div>
  );
}
