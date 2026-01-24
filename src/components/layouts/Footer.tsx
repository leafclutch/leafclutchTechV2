import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { TbBrandTiktok, TbBrandDiscord } from "react-icons/tb";
import { serviceApi } from "../../services/serviceService";
import { trainingApi } from "../../services/trainingService";

// Inferring types directly from your existing responses
type ServiceItem = Awaited<ReturnType<typeof serviceApi.getAll>>[number];
type TrainingItem = Awaited<ReturnType<typeof trainingApi.getAll>>[number];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services/all-services" },
  { name: "Careers", href: "/careers/jobs" },
  { name: "Contact", href: "mailto:hr@leafclutchtech.com.np" },
];

const socials = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61584902195796",
    label: "Facebook",
  },
  { icon: Twitter, href: "https://x.com/", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/leafclutch-technologies/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/leafclutch.technologies/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@LeafclutchTechnologies",
    label: "YouTube",
  },
  {
    icon: TbBrandTiktok,
    href: "https://www.tiktok.com/@leafclutchtechnologies1",
    label: "Tiktok",
  },
  {
    icon: TbBrandDiscord,
    href: "https://discord.gg/4aDwcMZBPq",
    label: "Discord",
  },
];

export function Footer() {
  const [dynamicServices, setDynamicServices] = useState<ServiceItem[]>([]);
  const [dynamicTrainings, setDynamicTrainings] = useState<TrainingItem[]>([]);

  useEffect(() => {
    const fetchFooterContent = async () => {
      try {
        const [sRes, tRes] = await Promise.all([
          serviceApi.getAll(),
          trainingApi.getAll(),
        ]);

        const services = Array.isArray(sRes) ? [...sRes] : [];
        const trainings = Array.isArray(tRes) ? [...tRes] : [];

        services.sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        );

        trainings.sort(
          (a, b) =>
            new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(),
        );

        setDynamicServices(services || []);
        setDynamicTrainings(trainings || []);
      } catch (err) {
        console.error("Footer fetch error:", err);
      }
    };
    fetchFooterContent();
  }, []);

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-16 md:pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src="/logo.png" alt="Leafclutch Logo" className="h-16" />
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Empowering innovation through cutting-edge technology solutions,
              training, and digital transformation services.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@leafclutchtech.com.np"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> info@leafclutchtech.com.np
              </a>
              <a
                href="tel:+9779766715768"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" /> +977-9766715768
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Siddharthanagar, Rupandehi
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {dynamicServices.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/services/${item.id}`} // Removed .slug to fix TS error
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Column */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Training & Internship
            </h3>
            <ul className="mt-4 space-y-3">
              {dynamicTrainings.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/training#${item.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("mailto:") ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Leafclutch Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
