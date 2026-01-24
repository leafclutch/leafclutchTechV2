import AboutAI from "../components/parts/AboutUs/AboutAI";
import AboutFounders from "../components/parts/AboutUs/AboutFounders";
import AboutMission from "../components/parts/AboutUs/AboutMission";
import AboutTeam from "../components/parts/AboutUs/AboutTeam";
import AboutValues from "../components/parts/AboutUs/AboutValues";
import WhoWeAre from "../components/parts/AboutUs/WhoWeAre";
import Starting from "../components/ui/Starting";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-background transition-colors duration-500">
      <Starting
        pageName="About Us"
        // srcImage="https://img.freepik.com/premium-photo/about-us-information-info-company-presentation-internet-blue-computer-keyboard_770123-7082.jpg"
        srcImage="https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg"
        backgroundPosition="center top"
      />
      <WhoWeAre />
      <AboutMission />
      <AboutFounders />
      <AboutTeam />
      <AboutValues />
      <AboutAI />
    </div>
  );
};

export default AboutUs;
