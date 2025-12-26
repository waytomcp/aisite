import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shared/ui/table';
import { CatalogItemData } from '../data/types';

export default function CatalogComparison({ data }: { data: CatalogItemData['comparison'] }) {
  return (
    <section id="comparison" className="w-full py-12 lg:py-16 bg-gray-900 flex justify-center">
      <div className="container-wide w-full px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">{data.title}</h2>
        <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
          <Table>
            <TableHeader className="bg-gray-700">
              <TableRow className="border-gray-600 hover:bg-gray-700">
                {data.columns.map((col) => (
                  <TableHead key={col.key} className="text-white font-semibold">
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-300">
              {data.data.map((item) => (
                <TableRow key={item.id} className="border-gray-700 hover:bg-gray-700/50">
                  {data.columns.map((col) => (
                    <TableCell key={`${item.id}-${col.key}`} className={col.key === 'product' ? 'font-medium text-white' : ''}>
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
