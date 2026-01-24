import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { COURSE_DETAILS } from "../components/parts/CourseDetails/CourseDetailsData";
import { motion, AnimatePresence } from "framer-motion";

// Component Imports
import CourseDetailHero from "../components/parts/CourseDetails/CourseDetailHero";
import CourseDetailTrackSelection from "../components/parts/CourseDetails/CourseDetailTrackSelection";
import CourseDetailHardware from "../components/parts/CourseDetails/CourseDetailHardware";
import CourseDetailOverview from "../components/parts/CourseDetails/CourseDetailOverview";
import CourseDetailCurriculum from "../components/parts/CourseDetails/CourseDetailCurriculum";
import CourseDetailTools from "../components/parts/CourseDetails/CourseDetailTools";
import CourseDetailCTA from "../components/parts/CourseDetails/CourseDetailCTA";

const CourseDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? COURSE_DETAILS[slug] : null;

  // state: only user intent is stored
  const [selectedSubSlug, setSelectedSubSlug] = useState<string | null>(null);

  // side-effect (this is OK)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // derived value (React-recommended)
  const activeSubCourse = useMemo(() => {
    if (!course?.subCourses?.length) return null;

    return (
      course.subCourses.find((s) => s.slug === selectedSubSlug) ??
      course.subCourses[0] // always default to first
    );
  }, [course, selectedSubSlug]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-6xl font-black text-[#081E67] dark:text-white mb-4">
            404
          </h1>
          <p className="text-xl text-muted dark:text-slate-400 font-bold mb-8">
            Oops! This learning path doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#081E67] dark:bg-secondary text-white dark:text-primary px-10 py-4 rounded-2xl font-black shadow-lg hover:scale-105 transition-transform"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  const displayTitle = activeSubCourse
    ? `${course.title.replace("\n", " ")}: ${activeSubCourse.title}`
    : course.title;
  const displayDescription = activeSubCourse
    ? activeSubCourse.description
    : course.fullDescription;
  const displayCurriculum = activeSubCourse
    ? activeSubCourse.curriculum
    : course.curriculum || [];
  const displayTools = activeSubCourse ? activeSubCourse.tools : course.tools;
  const displayOutcomes = activeSubCourse
    ? activeSubCourse.learningOutcomes
    : course.learningOutcomes;
  const displayHardware = activeSubCourse
    ? activeSubCourse.hardwareRequirements
    : course.hardwareRequirements;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300"
    >
      <CourseDetailHero
        course={course}
        displayTitle={displayTitle}
        bgSource={course.bgSource}
      />

      <div className="container-custom mx-auto lg:px-[13rem] -mt-20 pb-20 relative z-20">
        <div className="space-y-12">
          <CourseDetailTrackSelection
            course={course}
            selectedSubSlug={activeSubCourse?.slug ?? null}
            onSelect={setSelectedSubSlug}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSubSlug || "main"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <CourseDetailHardware hardware={displayHardware} />

              <CourseDetailOverview
                description={displayDescription}
                whoIsThisFor={course.whoIsThisFor}
                outcomes={displayOutcomes}
              />

              <CourseDetailCurriculum curriculum={displayCurriculum} />

              <CourseDetailTools tools={displayTools} />
            </motion.div>
          </AnimatePresence>

          <CourseDetailCTA />
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetailPage;
