import { useState } from "react";
import ContactInfo from "../components/parts/Contact/ContactInfo";
import ContactForm from "../components/parts/Contact/ContactForm";
import ContactToast from "../components/parts/Contact/ContactToast";

const Contact: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="bg-background transition-colors duration-500 relative min-h-[90vh]">
      <section className="section-padding max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          <ContactInfo />
          <ContactForm onShowToast={() => setShowToast(true)} />
        </div>
      </section>

      <ContactToast show={showToast} onClose={() => setShowToast(false)} />
    </div>
  );
};

export default Contact;
