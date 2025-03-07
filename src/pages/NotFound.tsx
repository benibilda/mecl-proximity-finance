
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-mecl-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-mecl-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl font-bold text-mecl-700">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-mecl-800">Page introuvable</h1>
        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild className="bg-mecl-600 hover:bg-mecl-700 inline-flex items-center gap-2">
          <Link to="/">
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
