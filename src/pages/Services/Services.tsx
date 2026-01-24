import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Shield, Clock, Zap, Settings } from "lucide-react";
import Spinner from "../../components/ui/Spinner";

import {
  serviceApi,
  type ServiceResponse,
} from "../../services/serviceService";
import NotFound from "../../components/ui/NotFound";
import Hero from "../../components/parts/Services/Hero";
import Features from "../../components/parts/Services/Features";
import Benefits from "../../components/parts/Services/Benefits";
import Technologies from "../../components/parts/Services/Technologies";
import FinalCTA from "../../components/parts/Services/FinalCTA";

interface MappedService {
  title: string;
  subtitle: string;
  icon: string | null;
  heroImage: string;
  backgroundSize: string;
  features: string[];
  benefits: { title: string; description: string; icon: React.ReactElement }[];
  technologies: string[];
}

export default function Services() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<MappedService | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      if (!slug || slug === "all-services") {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data: ServiceResponse = await serviceApi.getById(slug);

        if (data) {
          const mappedData: MappedService = {
            title: data.title,
            // subtitle: data.description,
            subtitle: "",
            icon: null,
            heroImage: data.photo_url || "/default-hero.jpg",
            backgroundSize: "cover",
            features: data.offerings || [],
            technologies: data.techs || [],
            benefits: [
              {
                title: "Scalable Architecture",
                description:
                  "Build solutions that grow alongside your business without friction.",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                title: "24/7 Support",
                description:
                  "Our technical experts are always available to keep you running.",
                icon: <Clock className="w-6 h-6" />,
              },
              {
                title: "Expert Implementation",
                description:
                  "Senior developers ensuring every line of code meets industry standards.",
                icon: <Settings className="w-6 h-6" />,
              },
              {
                title: "Security First",
                description:
                  "Top-tier data protection and compliance built into every module.",
                icon: <Shield className="w-6 h-6" />,
              },
            ],
          };
          setService(mappedData);
        }
      } catch (err) {
        console.error("Service fetch failed for slug:", slug, err);
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        {/* <div className="animate-pulse text-lg font-bold text-primary">
          Fetching service data...
        </div> */}
        <Spinner />
      </div>
    );
  }

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="animate-in fade-in duration-700">
      <Hero
        title={service.title}
        subtitle={service.subtitle}
        icon={service.icon}
        backgroundImage={service.heroImage}
        backgroundSize={service.backgroundSize}
      />
      <Features features={service.features} />
      <Benefits benefits={service.benefits} />
      <Technologies technologies={service.technologies} />
      <FinalCTA />
    </div>
  );
}
