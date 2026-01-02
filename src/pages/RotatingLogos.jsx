import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.webp";
import img2 from "../assets/tracks/img2.webp"
import img3  from "../assets/tracks/img3.avif";
import img4 from "../assets/tracks/img4.webp";
import img5 from "../assets/tracks/img5.jpg";
import img6 from "../assets/tracks/img6.png"
import img7 from "../assets/tracks/img7.avif";
import img8 from "../assets/tracks/img8.jpg"
import img9 from "../assets/tracks/img9.webp";
import img10 from "../assets/tracks/img10.jpeg"
import img11 from "../assets/tracks/img11.jpeg";
import img12 from "../assets/tracks/img12.jpg"
import img13 from "../assets/tracks/img13.webp";
import img14 from "../assets/tracks/img14.png"
import img15 from "../assets/tracks/img15.png";
import img16 from "../assets/tracks/img16.webp"
import img17 from "../assets/tracks/img17.jpg"
import img18 from "../assets/tracks/img18.webp";
import img19 from "../assets/tracks/img19.webp"
import img20 from "../assets/tracks/img20.avif"

export const tracks = [
  {
    image: img1,
    title: "Smart Devices",
    description: (
      <>
 {" "}
        <Link
          to="/ainurse-conference-tracks/" 
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Smart devices
        </Link>  in healthcare include wearables, sensors, and connected equipment that support real-time data collection and care delivery. They enhance patient monitoring, medication adherence, safety, and workflow efficiency. Nurses use smart devices to improve clinical decisions, personalize care, reduce errors, and enable proactive, technology-enabled healthcare across settings worldwide today effectively.
   
      </>
    ),
  },

  {
    image: img2,
    title: "AI Diagnostics",
    description: (
      <>
{" "}
        <Link
          to= "/ainurse-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
AI diagnostics
        </Link>{" "} use artificial intelligence to analyze medical images, clinical data, and patient records for accurate disease detection. These systems support early diagnosis, risk prediction, and decision-making. Nurses benefit from faster assessments, reduced diagnostic errors, improved workflow efficiency, and enhanced collaboration with clinicians, enabling timely interventions and improved patient outcomes across healthcare systems.
      </>
    ),
  },

  {
    image: img3,
    title: "Mobile Health",
    description: (
      <>
{" "}
        <Link
          to="/ainurse-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Mobile health
        </Link>  leverages smartphones, applications, and wearable technologies to support healthcare delivery and patient engagement. It enables remote monitoring, health education, appointment management, and chronic disease tracking. Nurses use mobile health tools to enhance access, continuity of care, patient empowerment, and real-time communication across diverse populations and healthcare environments globally.
      </>
    ),
  },

  {
    image: img4,
    title: "AI Rehabilitation",
    description: (
      <>
  {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        > AI rehabilitation </Link>{" "}  enables nurses to provide care remotely using digital platforms and video communication. It supports patient assessment, education, triage, and follow-up care. Virtual nursing improves access, reduces workload, enhances continuity, and allows nurses to deliver timely, personalized care while supporting hospital operations and patient satisfaction in modern healthcare systems.

      </>
    ),
  },
   {
    image:img5,
    title: "Virtual Nursing",
    description: (
      <>
{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         Virtual nursing
</Link>{" "} enables nurses to provide care remotely using digital platforms and video communication. It supports patient assessment, education, triage, and follow-up care. Virtual nursing improves access, reduces workload, enhances continuity, and allows nurses to deliver timely, personalized care while supporting hospital operations and patient satisfaction in modern healthcare systems.
       
      </>
    ),
  },

  {
    image: img6 ,
    title: "AI Training",
    description: (
      <>
AI training in healthcare focuses on educating professionals to effectively use{" "}
        <Link
          to="/contact" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
artificial intelligence tools.
        </Link>{" "}   It builds competencies in data interpretation, ethical AI use, and clinical integration. Nurses trained in AI enhance patient care, support innovation, improve decision-making, and ensure safe, responsible adoption of intelligent technologies within evolving digital healthcare environments.
      </>
    ),
  },

  {
    image: img7,
    title: "Nursing Robotics",
    description: (
      <>

        <Link
          to= "/about-ainurse"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Nursing robotics
        </Link>{" "}   involves the use of robotic systems to support nursing tasks and patient care. Robots assist with mobility, lifting, medication delivery, and monitoring. They reduce physical strain, enhance efficiency, improve patient safety, and allow nurses to focus more on critical thinking, emotional support, and high-value clinical responsibilities.
     
      </>
    ),
  },

  {
    image: img8,
    title: "Digital Therapeutics",
    description: (
      <>
{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Digital therapeutics
        </Link>{" "}   deliver evidence-based therapeutic interventions through software applications. They support management of chronic diseases, mental health conditions, and behavioral disorders. Nurses play a key role in patient education, monitoring adherence, and integrating digital therapeutics into care plans, improving outcomes through personalized, accessible, and scalable treatment solutions across healthcare settings.
      </>
    ),
  },

  {
    image:  img9,
    title: "AI in Healthcare",
    description: (
      <>
  {" "}
        <Link
          to= "/venue" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
AI in healthcare
        </Link>{" "} applies machine learning and data analytics to improve diagnosis, treatment, and operational efficiency. It supports predictive modeling, personalized medicine, and workflow optimization. Nurses use AI insights to enhance clinical judgment, reduce errors, streamline care delivery, and improve patient safety, outcomes, and healthcare system performance.
      
      </>
    ),
  },

  {
    image: img10,
    title: "Chatbots in Nursing",
    description: (
      <>
{" "}
        <Link
          to="/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Chatbots in nursing 
        </Link>{" "} use artificial intelligence to support patient communication and care coordination. They assist with symptom assessment, appointment scheduling, medication reminders, and health education. Nurses benefit from reduced administrative workload, improved patient engagement, and continuous support, enabling more efficient, responsive, and patient-centered nursing care delivery.

      </>
    ),
  },

  {
    image: img11,
    title: "Drug Discovery",
    description: (
      <>
{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Drug discovery
        </Link>{" "} involves identifying and developing new therapeutic compounds to treat diseases. It integrates biology, chemistry, data science, and AI to accelerate innovation. Nurses contribute through clinical insight, research coordination, and patient care, supporting translational research and ensuring safe, ethical progression of new drugs from laboratory to clinical practice.
      </>
    ),
  },

  {
    image: img12,
    title: "Maternal Health",
    description: (
      <>
     {" "}
        <Link
          to="/about-ainurse"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Maternal health
        </Link>  focuses on the physical, emotional, and social well-being of women during pregnancy, childbirth, and postpartum periods. Nurses provide prenatal care, education, monitoring, and support. Strong maternal health practices reduce complications, improve neonatal outcomes, promote safe motherhood, and strengthen families and communities across diverse healthcare settings.
      </>

    ),
  },

  {
    image: img13,
    title: "Patient Monitoring",
    description: (
      <>
 {" "}
        <Link
          to="/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >

        </Link>{" "}  Patient monitoring involves continuous assessment of vital signs and clinical parameters using digital technologies. It enables early detection of deterioration and timely intervention. Nurses play a central role in interpreting data, responding to alerts, ensuring patient safety, and coordinating care, improving outcomes in acute, chronic, and remote healthcare environments.
      
      </>
    ),
  },

  {
    image: img14,
    title: "Digital Nursing Education",
    description: (
      <>
{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Digital nursing education
        </Link> integrates e-learning platforms, simulation, and virtual tools into nursing training. It enhances accessibility, flexibility, and skill development. Nurses and students benefit from interactive learning, real-time feedback, and continuous professional development, preparing them for technology-driven healthcare environments and modern clinical practice demands globally.

        
      </>
    ),
  },

  {
    image:img15,
    title: "Telemedicine",
    description: (
      <>
 {" "}
        <Link
          to="/ainurse-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Telemedicine
        </Link>  delivers healthcare services remotely through digital communication technologies. Nurses support virtual consultations, triage, patient education, monitoring, and follow-up care. Telemedicine improves access, continuity, and efficiency of care, particularly for rural and underserved populations, chronic disease management, and timely clinical decision-making across healthcare systems.
        
      </>
    ),
  },

  {
    image: img16,
    title: "Genomics",
    description: (
      <>
      {" "}
        <Link
          to= "/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  
        </Link> Genomics studies genes and their influence on health and disease. It supports personalized medicine, early diagnosis, and targeted therapies. Nurses play a vital role in genetic education, counseling support, ethical care, and coordination, helping patients understand genetic information and apply it to prevention, treatment, and lifelong health management.
     
      </>
    ),
  },

  {
    image: img17,
    title: "Robots in Nursing",
    description: (
      <>
{" "}
        <Link
          to= "/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Robots in nursing
        </Link>  support clinical and non-clinical tasks such as patient transport, disinfection, monitoring, and assistance. They enhance efficiency, reduce workload, and improve safety. Nurses collaborate with robotic systems to deliver high-quality care while focusing on complex clinical judgment, patient interaction, and compassionate caregiving.
</>
    ),
  },

  {
    image:img18,
    title: "Epidemiology",
    description: (
      <>
{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Epidemiology
        </Link> studies the distribution and causes of diseases within populations. It informs prevention strategies, outbreak control, and public health policy. Nurses apply epidemiological principles in surveillance, data collection, patient education, and community interventions, supporting disease prevention, health promotion, and evidence-based healthcare planning globally.
  
      </>
    ),
  },
// Ethical

  {
    image: img19,
    title: "Data Privacy and Security",
    description: (
      <>
   {" "}
        <Link
          to="/venue"  
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Data privacy and security
        </Link>   focus on protecting patient information within digital healthcare systems. Nurses ensure ethical data handling, confidentiality, and compliance with regulations. Strong privacy practices build trust, reduce cyber risks, and support safe use of digital tools, AI systems, and electronic health records in modern healthcare environments.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img20,
    title: "Palliative Care",
    description: (
      <>
  {" "}
        <Link
          to="/ainurse-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Palliative care
        </Link>   focuses on improving quality of life for patients with serious or life-limiting illnesses. Nurses provide pain management, emotional support, symptom control, and family guidance. This holistic approach emphasizes dignity, comfort, and compassionate care, supporting patients and families across physical, psychological, and spiritual dimensions of healthcare.
      </>
    ),
  },
 
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
