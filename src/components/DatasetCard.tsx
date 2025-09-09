import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dataset } from "@/data/mockDatasets";

interface DatasetCardProps {
  dataset: Dataset;
  isActive: boolean;
  onClick: () => void;
}

export const DatasetCard = ({ dataset, isActive, onClick }: DatasetCardProps) => {
  return (
    <Card 
      className={`p-4 cursor-pointer transition-all duration-200 hover:bg-secondary/50 ${
        isActive ? 'ring-2 ring-primary bg-secondary/30' : ''
      }`}
      onClick={onClick}
    >
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground">{dataset.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{dataset.description}</p>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-mono">
            {dataset.data.length} rows × {Object.keys(dataset.data[0] || {}).length} cols
          </span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {dataset.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};