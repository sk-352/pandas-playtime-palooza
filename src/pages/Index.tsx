import { useState } from "react";
import { mockDatasets } from "@/data/mockDatasets";
import { DataTable } from "@/components/DataTable";
import { DatasetCard } from "@/components/DatasetCard";
import { Database, Code, BarChart3 } from "lucide-react";

const Index = () => {
  const [activeDataset, setActiveDataset] = useState(mockDatasets[0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Database className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Table Playground</h1>
            </div>
            <div className="flex items-center gap-4 ml-auto text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                <span>Pandas Study Data</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart3 className="h-4 w-4" />
                <span>{mockDatasets.length} Datasets</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Dataset Selector */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Datasets
              </h2>
              <div className="space-y-3">
                {mockDatasets.map((dataset) => (
                  <DatasetCard
                    key={dataset.id}
                    dataset={dataset}
                    isActive={activeDataset.id === dataset.id}
                    onClick={() => setActiveDataset(dataset)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="lg:col-span-3">
            <DataTable
              data={activeDataset.data}
              title={activeDataset.name}
              description={activeDataset.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
