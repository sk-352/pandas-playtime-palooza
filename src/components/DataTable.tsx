import { useState } from "react";

interface DataTableProps {
  data: Record<string, any>[];
  title: string;
  description: string;
}

export const DataTable = ({ data, title, description }: DataTableProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  if (!data || data.length === 0) {
    return (
      <div className="data-table">
        <div className="p-8 text-center text-muted-foreground">
          No data available
        </div>
      </div>
    );
  }

  const columns = Object.keys(data[0]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    const aStr = String(aVal).toLowerCase();
    const bStr = String(bVal).toLowerCase();
    
    if (sortDirection === 'asc') {
      return aStr.localeCompare(bStr);
    } else {
      return bStr.localeCompare(aStr);
    }
  });

  const formatValue = (value: any) => {
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    return String(value);
  };

  const getValueClassName = (value: any) => {
    if (typeof value === 'number') {
      return "data-highlight font-mono";
    }
    if (typeof value === 'string' && (value.toLowerCase().includes('high') || value.toLowerCase().includes('good'))) {
      return "text-data-success";
    }
    if (typeof value === 'string' && (value.toLowerCase().includes('low') || value.toLowerCase().includes('bad'))) {
      return "text-data-warning";
    }
    return "";
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-1">{description}</p>
        <div className="text-sm text-muted-foreground mt-2">
          {data.length} rows × {columns.length} columns
        </div>
      </div>
      
      <div className="data-table">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th 
                    key={column}
                    className="cursor-pointer hover:bg-secondary/50 transition-colors"
                    onClick={() => handleSort(column)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">
                        {column.replace(/_/g, ' ').toUpperCase()}
                      </span>
                      {sortColumn === column && (
                        <span className="text-primary">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column} className={getValueClassName(row[column])}>
                      {formatValue(row[column])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};