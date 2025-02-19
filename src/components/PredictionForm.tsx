
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const PredictionForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    age: "",
    temperature: "",
    heartRate: "",
    bloodPressure: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm animate-fadeIn">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            placeholder="Enter age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="temperature">Temperature (°C)</Label>
          <Input
            id="temperature"
            type="number"
            step="0.1"
            placeholder="Enter body temperature"
            value={formData.temperature}
            onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="heartRate">Heart Rate (BPM)</Label>
          <Input
            id="heartRate"
            type="number"
            placeholder="Enter heart rate"
            value={formData.heartRate}
            onChange={(e) => setFormData({ ...formData, heartRate: e.target.value })}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bloodPressure">Blood Pressure (mmHg)</Label>
          <Input
            id="bloodPressure"
            type="text"
            placeholder="e.g., 120/80"
            value={formData.bloodPressure}
            onChange={(e) => setFormData({ ...formData, bloodPressure: e.target.value })}
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-medical-primary hover:bg-medical-accent transition-colors"
        >
          Predict
        </Button>
      </form>
    </Card>
  );
};

export default PredictionForm;
