import React, { useState, useEffect } from "react";
import {
  MapPin,
  Briefcase,
  // DollarSign,
  Building2,
  CheckCircle2,
} from "lucide-react";
import {
  opportunityApi,
  type OpportunityResponse,
} from "../../../services/opportunityService";
import JobCardSkeleton from "./JobCardSkeleton";

const emailRecipient = "careers@leafclutchtech.com.np";

export const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<OpportunityResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await opportunityApi.getAll();
        // Filter strictly for JOB type
        const filtered = data.filter((opp) => opp.type === "JOB");
        setJobs(filtered);
      } catch (err) {
        console.error("Failed to load jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section id="jobs" className="py-24 bg-muted/50 px-4 ">
      <div className="max-w-7xl mx-auto grid place-items-center">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary text-primary text-xs font-semibold mb-4 border border-border">
            Open Positions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find the role that matches your skills and career aspirations.
          </p>
        </div>

        {/* Show jobs only if the array isn't empty */}

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {Array.from({ length: 2 }).map((_, idx) => (
              <JobCardSkeleton key={idx} />
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {jobs.map((job) => {
              const body = `Hello,

I would like to apply for the ${job.title} position. Here is my information:

Name: [Your Name]
LinkedIn: [Your LinkedIn]
GitHub: [Your GitHub]
Resume: [Please attach your resume file]

Thank you.
`;

              const mailtoLink = `mailto:${emailRecipient}?subject=Job Application: ${encodeURIComponent(
                job.title,
              )}&body=${encodeURIComponent(body)}`;

              return (
                <div
                  key={job.id}
                  className="max-w-2xl w-full bg-card rounded-[2rem] border-2 border-border shadow-sm overflow-hidden flex flex-col relative group transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 mx-auto"
                >
                  <div className="p-8 pb-4">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {job.title}
                      </h2>
                      <div className="flex items-center gap-2 text-accent font-bold tracking-widest text-xs">
                        <Building2 size={16} />
                        <span className="uppercase">
                          {job.description}
                        </span>{" "}
                        {/* Defaulting to Engineering if not in API */}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-4 mb-8">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase size={18} />
                        <span className="text-sm font-medium">
                          {job.job_details?.employment_type || "Full-time"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={18} />
                        <span className="text-sm font-medium">
                          {job.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-card-foreground font-bold col-span-2">
                        {/* <DollarSign size={18} className="text-primary" /> */}
                        <span className="text-lg text-primary">
                          <span>Rs.</span>
                          <span>
                            {job.job_details?.salary_range || "Negotiable"}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-card-foreground">
                        Key Requirements
                      </h3>
                      <ul className="space-y-3">
                        {job.requirements?.map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="mt-0.5 text-accent shrink-0">
                              <CheckCircle2
                                size={20}
                                fill="currentColor"
                                className="text-card fill-accent"
                              />
                            </div>
                            <span className="text-card-foreground/80 font-medium leading-tight">
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={mailtoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <div className="px-4 pb-8 flex justify-center">
                      <button className="w-[90%] bg-primary text-primary-foreground font-bold py-4 px-8 rounded-2xl shadow-lg hover:opacity-90 transition-all duration-200 active:scale-[0.98] flex items-center justify-center">
                        Apply Now
                      </button>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State: Only shows if the API returns no jobs */
          <div className="mt-8 p-12 bg-white dark:bg-gray-800 rounded-3xl border border-dashed border-primary max-w-3xl mx-auto text-center w-full">
            <p className="text-[2rem] text-gray-500 dark:text-gray-400 italic">
              "We're currently not hiring."
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
