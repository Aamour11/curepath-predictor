
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
      setResult({
        prediction: "Hasil Prediksi",
        probability: 0.85,
      });
      
      toast({
        title: "Prediksi Selesai",
        description: "Hasil prediksi Anda siap untuk dilihat.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal memproses prediksi. Silakan coba lagi.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-medical-secondary">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-800">Sistem Prediksi Penyakit</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Masukkan parameter medis Anda di bawah ini untuk prediksi penyakit berbasis AI menggunakan algoritma pembelajaran mesin canggih.
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
