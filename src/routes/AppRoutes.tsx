import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";

import Job from "../pages/careers/Job";
import Blog from "../pages/others/Blog";
import VerifyCertificate from "../pages/others/VerifyCertificate";
import OurProjects from "../pages/others/OurProjects";
import NotFound from "../components/ui/NotFound";
import Internship from "../pages/careers/Internship";
import Home from "../pages/Home";
import AllServices from "../pages/Services/AllServices";
import Services from "../pages/Services/Services";
import { ScrollToTop } from "./ScrollToTop";
import TrainingInternship from "../pages/careers/TrainingInternship";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import InternshipDetails from "../components/parts/AboutUs/InternDetails";
import CourseDetailPage from "../pages/CourseDetailPage";
import MentorDetails from "../components/parts/AboutUs/MentorDetails";
import Form from "../pages/form/form";
import PrivacyPolicy from "../pages/Privacy";
import TermsOfService from "../pages/Terms";

// Admin
import AdminLayout from "../components/admin/AdminLayout";
import AdminLogin from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import TeamMembers from "../pages/admin/TeamMembers";
import Interns from "../pages/admin/Interns";
import Mentors from "../pages/admin/Mentors";
import AdminServices from "../pages/admin/Services";
import Projects from "../pages/admin/Projects";
import Opportunities from "../pages/admin/Opportunities";
import AdminCourses from "../pages/admin/Courses";
import Contacts from "../pages/admin/Contacts";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Public site */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/intern-details" element={<InternshipDetails />} />
            <Route path="/mentor-details" element={<MentorDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/course/all" element={<TrainingInternship />} />
            <Route path="/course/form" element={<Form />} />
            <Route path="/course/:slug" element={<CourseDetailPage />} />
            <Route path="/careers/jobs" element={<Job />} />
            <Route path="/careers/internships" element={<Internship />} />
            <Route path="/others/blog" element={<Blog />} />
            <Route path="/others/verify-certificate" element={<VerifyCertificate />} />
            <Route path="/others/our-projects" element={<OurProjects />} />
            <Route path="/services/all-services" element={<AllServices />} />
            <Route path="/services/:slug" element={<Services />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Route>

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard"     element={<Dashboard />} />
            <Route path="team"          element={<TeamMembers />} />
            <Route path="interns"       element={<Interns />} />
            <Route path="mentors"       element={<Mentors />} />
            <Route path="services"      element={<AdminServices />} />
            <Route path="projects"      element={<Projects />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="courses"       element={<AdminCourses />} />
            <Route path="contacts"      element={<Contacts />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
