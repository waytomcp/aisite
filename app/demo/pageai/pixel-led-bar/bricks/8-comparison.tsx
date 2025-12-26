import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shared/ui/table';
import { comparisonColumns, comparisonData } from './comparison-data';

export default function Comparison() {
  return (
    <section id="comparison" className="w-full py-12 lg:py-16 bg-gray-900 flex justify-center">
      <div className="container-wide w-full px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Quick Comparison Overview</h2>
        <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
          <Table>
            <TableHeader className="bg-gray-700">
              <TableRow className="border-gray-600 hover:bg-gray-700">
                {comparisonColumns.map((col) => (
                  <TableHead key={col.key} className="text-white font-semibold">
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-300">
              {comparisonData.map((item) => (
                <TableRow key={item.id} className="border-gray-700 hover:bg-gray-700/50">
                  {comparisonColumns.map((col) => (
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
