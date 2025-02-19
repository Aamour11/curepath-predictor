
import { Activity } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-white shadow-sm animate-fadeIn">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Activity className="h-8 w-8 text-medical-primary" />
          <h1 className="text-2xl font-semibold text-gray-800">PrediksiMed</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-medical-primary transition-colors">
            Tentang
          </a>
          <a href="#contact" className="text-gray-600 hover:text-medical-primary transition-colors">
            Kontak
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
