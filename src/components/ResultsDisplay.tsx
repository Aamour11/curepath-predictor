
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ResultsDisplayProps {
  result?: {
    prediction: string;
    probability: number;
  };
}

const ResultsDisplay = ({ result }: ResultsDisplayProps) => {
  if (!result) return null;

  return (
    <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm animate-fadeIn">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <CheckCircle className="h-12 w-12 text-medical-primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Prediction Result</h3>
        <div className="space-y-2">
          <p className="text-lg text-medical-accent">{result.prediction}</p>
          <p className="text-sm text-gray-600">
            Confidence: {(result.probability * 100).toFixed(2)}%
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ResultsDisplay;
