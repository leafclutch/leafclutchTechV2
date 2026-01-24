import React, { useState, useEffect } from "react";
import { ArrowRight, LayoutGrid } from "lucide-react";
import Gifs from "../AllServices/Gifs";
import TrainingCTA from "./TrainingCTA";
import { Link } from "react-router-dom";
import { motion, easeOut, type Variants } from "framer-motion";
import {
  serviceApi,
  type ServiceResponse,
} from "../../../services/serviceService";
import CardSkeleton from "./CardSkeleton";

/**
 * Helper to maintain animations based on title.
 * Fallback: Uses backend photo_url if available.
 * Last Resort: Shows LayoutGrid icon.
 */
const RenderServiceMedia = ({ service }: { service: ServiceResponse }) => {
  const animations: Record<string, string> = {
    "Web Development": "/Gifs/web.lottie",
    "Mobile App Development": "/Gifs/mobile.lottie",
    "DevOps Solutions": "/Gifs/devops.lottie",
    Cybersecurity: "/Gifs/cyber.lottie",
    "Data Science & AI": "/Gifs/ai.lottie",
    "Digital Marketing": "/Gifs/marketing.lottie",
  };

  const lottieSrc = animations[service.title];

  // 1. Try Lottie/Gif first to keep the original "AI shine"
  if (lottieSrc) {
    return <Gifs src={lottieSrc} className="h-[12rem] w-full" />;
  }

  // 2. Try Backend Photo next
  if (service.photo_url) {
    return (
      <div className="h-[12rem] w-full overflow-hidden rounded-2xl border border-border/50">
        <img
          src={service.photo_url}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    );
  }

  // 3. Fallback Icon if nothing else exists
  return (
    <div className="h-[12rem] w-full flex items-center justify-center bg-primary/5 rounded-2xl">
      <LayoutGrid size={64} className="text-mint/50" />
    </div>
  );
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHomeServices = async () => {
      try {
        setLoading(true);
        // FIXED: Changed getServices() to getAll() to match the exported service name
        const data = await serviceApi.getAll();

        // Ensure data is an array before attempting to slice
        const serviceList = Array.isArray(data)
          ? [...data].sort(
              (a, b) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime(),
            )
          : [];

        // console.log(serviceList);
        // setServices(serviceList.slice(0, 6));
        setServices(serviceList);
      } catch (err) {
        console.error("Home Services fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeServices();
  }, []);

  // if (loading) {
  //   return (
  //     // <div className="py-24 text-center font-bold text-primary animate-pulse">
  //     //   Loading Services...
  //     // </div>
  //     <CardSkeleton length={6} />
  //   );
  // }

  return (
    <section id="services" className="section-padding bg-background relative">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.p
            className="text-mint font-bold uppercase tracking-widest text-sm"
            variants={fadeInUp}
          >
            What we offer
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-foreground"
            variants={fadeInUp}
          >
            Comprehensive Technology <br /> Solutions
          </motion.h2>
        </motion.div>

        {loading ? (
          <CardSkeleton length={6} />
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="group p-10 bg-card border border-border rounded-[2.5rem] text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                variants={fadeInUp}
              >
                <div className="flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                  <RenderServiceMedia service={service} />
                </div>

                <h3 className="text-2xl font-bold mb-5 text-primary leading-tight">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-10 text-[1.1rem] flex-grow line-clamp-3">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex self-start items-center text-[#0EA5E9] dark:text-[#38BDF8] font-bold group/link hover:underline decoration-2 underline-offset-4"
                >
                  <span className="text-[1.05rem]">Learn more</span>
                  <ArrowRight className="ml-2 w-5 h-5 inline transition-transform group-hover/link:translate-x-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
        <TrainingCTA />
      </div>
    </section>
  );
};

export default Services;
