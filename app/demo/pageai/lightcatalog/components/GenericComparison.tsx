import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shared/ui/table';
import { CatalogItemData } from '../data/types';

export default function GenericComparison({ data }: { data: CatalogItemData['comparison'] }) {
  return (
    <section id="comparison" className="w-full py-8 lg:py-10 bg-white dark:bg-gray-900 flex justify-center">
      <div className="container-wide w-full px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">{data.title}</h2>
        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <Table>
            <TableHeader className="bg-slate-100 dark:bg-gray-700">
              <TableRow className="border-slate-200 dark:border-gray-600 hover:bg-slate-200 dark:hover:bg-gray-700">
                {data.columns.map((col) => (
                  <TableHead key={col.key} className="text-slate-900 dark:text-white font-semibold">
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="text-slate-500 dark:text-gray-300">
              {data.data.map((item, index) => (
                <TableRow key={item.id || index} className="border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700/50">
                  {data.columns.map((col) => (
                    <TableCell key={`${item.id || index}-${col.key}`} className={col.key === 'product' ? 'font-medium text-slate-900 dark:text-white' : ''}>
                      {item[col.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
