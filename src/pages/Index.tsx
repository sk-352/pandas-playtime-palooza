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

        {/* Export & Scraping Section */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Export & Scraping</h2>
              <p className="text-lg text-muted-foreground">
                Download datasets in multiple formats for pandas analysis and data science projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* HTML Format */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  HTML Tables
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Static HTML tables ready for pandas.read_html()
                </p>
                <div className="space-y-2">
                  {mockDatasets.map((dataset) => (
                    <a
                      key={dataset.id}
                      href={`/data/html/${dataset.id}.html`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-primary hover:text-primary/80 underline"
                    >
                      {dataset.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* CSV Format */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  CSV Files
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Comma-separated values for pandas.read_csv()
                </p>
                <div className="space-y-2">
                  {mockDatasets.map((dataset) => (
                    <a
                      key={dataset.id}
                      href={`/data/csv/${dataset.id}.csv`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-primary hover:text-primary/80 underline"
                    >
                      {dataset.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* JSON Format */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  JSON Data
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Structured JSON for pandas.read_json()
                </p>
                <div className="space-y-2">
                  {mockDatasets.map((dataset) => (
                    <a
                      key={dataset.id}
                      href={`/data/json/${dataset.id}.json`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-primary hover:text-primary/80 underline"
                    >
                      {dataset.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Pandas Code Examples */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Pandas Usage Examples</h3>
              <div className="space-y-6">
                
                {/* HTML Example */}
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-3">📄 Reading HTML Tables</h4>
                  <div className="bg-muted rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-foreground">
<code>{`import pandas as pd

# Read HTML table directly from URL
url = "YOUR_DEPLOYED_URL/data/html/pirates.html"
df = pd.read_html(url)[0]  # [0] gets the first table
print(df.head())

# Handle user-agent issues if needed
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
df = pd.read_html(url, header=0, attrs={'id': 'data-table'}, storage_options={'User-Agent': headers['User-Agent']})[0]`}</code>
                    </pre>
                  </div>
                </div>

                {/* CSV Example */}
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-3">📊 Reading CSV Files</h4>
                  <div className="bg-muted rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-foreground">
<code>{`import pandas as pd

# Read CSV directly from URL
url = "YOUR_DEPLOYED_URL/data/csv/space_colonies.csv"
df = pd.read_csv(url)
print(f"Dataset shape: {df.shape}")
print(df.info())

# Analyze the data
print(df.describe())
print(df['primary_industry'].value_counts())`}</code>
                    </pre>
                  </div>
                </div>

                {/* JSON Example */}
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-3">🔗 Reading JSON Data</h4>
                  <div className="bg-muted rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-foreground">
<code>{`import pandas as pd

# Read JSON directly from URL
url = "YOUR_DEPLOYED_URL/data/json/tech_startups.json"
df = pd.read_json(url)
print(df.head())

# Advanced analysis example
high_growth = df[df['growth_rate'] > 300]
print(f"High growth companies: {len(high_growth)}")
print(high_growth[['company', 'industry', 'growth_rate']].sort_values('growth_rate', ascending=False))`}</code>
                    </pre>
                  </div>
                </div>

                {/* Local Usage */}
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-3">💾 Download for Local Use</h4>
                  <div className="bg-muted rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-foreground">
<code>{`# After downloading files locally:
import pandas as pd

# Read local CSV file
df = pd.read_csv('downloads/pirates.csv')

# Read local JSON file
df = pd.read_json('downloads/weather_stations.json')

# Read local HTML file
df = pd.read_html('downloads/medieval_kingdoms.html')[0]

# Multiple datasets analysis
import glob
csv_files = glob.glob('downloads/*.csv')
all_data = {}
for file in csv_files:
    name = file.split('/')[-1].replace('.csv', '')
    all_data[name] = pd.read_csv(file)

print(f"Loaded {len(all_data)} datasets")`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                <strong>Note:</strong> Replace "YOUR_DEPLOYED_URL" with your actual deployment URL. 
                All datasets are static files that work perfectly with pandas scraping functions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
