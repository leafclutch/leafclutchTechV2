import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Users, DollarSign } from "lucide-react";
import { Button } from "../../ui/button";
import {
  opportunityApi,
  type OpportunityResponse,
} from "../../../services/opportunityService";
import InternshipCardSkeleton from "./InternshipCardSkeleton";

const emailRecipient = "careers@leafclutchtech.com.np";
const SHOW_INTERNSHIP_LIST = false;

export const InternshipList: React.FC = () => {
  const [internships, setInternships] = useState<OpportunityResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true);
        const data = await opportunityApi.getAll();
        const filtered = data.filter((opp) => opp.type === "INTERNSHIP");
        setInternships(filtered);
      } catch (err) {
        console.error("Failed to load internships:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  // Helper to format duration text properly
  const formatDuration = (months?: number) => {
    if (!months || months <= 0) return "Flexible Duration";
    return `${months} ${months === 1 ? "Month" : "Months"}`;
  };

  return (
    <section className="py-24 bg-muted/50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary text-primary text-xs font-semibold mb-4 border border-border">
            Available Options
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Internships
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the option that best fits your goals and schedule.
          </p>
        </div>

        {SHOW_INTERNSHIP_LIST && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {internships.map((job) => {
              const body = `Hello,\n\nI would like to apply for the ${job.title} position...`;
              const mailtoLink = `mailto:${emailRecipient}?subject=${encodeURIComponent(`Application: ${job.title}`)}&body=${encodeURIComponent(body)}`;

              return (
                <div
                  key={job.id}
                  className="bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-card-foreground mb-6">
                    {job.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {formatDuration(
                          job.internship_details?.duration_months,
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-primary font-semibold">
                      <DollarSign className="w-5 h-5" />
                      <span className="text-sm">
                        {job.internship_details?.stipend}
                      </span>
                    </div>
                  </div>
                  <a
                    href={mailtoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full py-3 rounded-xl border border-border text-foreground font-bold hover:bg-muted transition-colors mt-auto">
                      Apply Now
                    </button>
                  </a>
                </div>
              );
            })}
          </div>
        )}

        <div className="space-y-6">
          {loading ? (
            Array.from({ length: 2 }).map((_, idx) => (
              <InternshipCardSkeleton key={idx} />
            ))
          ) : internships.length > 0 ? (
            internships.map((job, i) => {
              const body = `Hello,\n\nI would like to apply for the ${job.title} position. Here is my information:\n\nName: [Your Name]\nLinkedIn: [Your LinkedIn]\nGitHub: [Your GitHub]\nResume: Please attach your resume file.\n\nThank you.`;
              const mailtoLink = `mailto:${emailRecipient}?subject=${encodeURIComponent(`Internship Application: ${job.title}`)}&body=${encodeURIComponent(body)}`;

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-accent/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {job.title}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        <span>
                          {formatDuration(
                            job.internship_details?.duration_months,
                          )}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="text-accent">
                          <span className="text-accent font-medium">
                            {job.internship_details?.stipend == null
                              ? "N/A"
                              : job.internship_details?.stipend === "0"
                                ? "Unpaid"
                                : `Rs. ${job.internship_details?.stipend} (Paid)`}
                          </span>
                        </span>
                        <span className="mx-2">•</span>
                        <span className="text-accent">{job.location}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <a href={mailtoLink} target="_blank" rel="noreferrer">
                        Apply Now
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements?.map((req) => (
                      <span
                        key={req}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground border"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })
          ) : (
            /* Empty State: Only shows if the API returns no jobs */
            <div className="mt-8 p-12 bg-white dark:bg-gray-800 rounded-3xl border border-dashed border-primary max-w-3xl mx-auto text-center w-full">
              <p className="text-[2rem] text-gray-500 dark:text-gray-400 italic">
                "We're currently not hiring."
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
