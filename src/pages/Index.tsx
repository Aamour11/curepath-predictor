
import { useState } from "react";
import Header from "@/components/Header";
import PredictionForm from "@/components/PredictionForm";
import ResultsDisplay from "@/components/ResultsDisplay";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [result, setResult] = useState<{ prediction: string; probability: number } | undefined>();

  const handlePrediction = async (formData: any) => {
    try {
      // This is where we'll integrate with the Python backend later
      // For now, we'll show a mock result
      setResult({
        prediction: "Sample Prediction",
        probability: 0.85,
      });
      
      toast({
        title: "Prediction Complete",
        description: "Your results are ready to view.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process prediction. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-medical-secondary">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-800">Disease Prediction System</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter your medical parameters below for an AI-powered disease prediction using advanced machine learning algorithms.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-8">
          <PredictionForm onSubmit={handlePrediction} />
          <ResultsDisplay result={result} />
        </div>
      </main>
    </div>
  );
};

export default Index;
