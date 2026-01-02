import React, { useState } from "react";

const faqLinks = {
  tracks: "/ainurse-conference-tracks/" ,
  abstractSubmission: "/abstract-submission",
  schedule:"/ainurse-event-schedule",
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is AINURSE-2026?",
    answer:
      "AINURSE-2026, officially titled the “AI & Digital Nursing Forum”, is a premier international healthcare conference organized by Helix Conferences. The forum brings together global nursing leaders, clinicians, digital health experts, researchers, and healthcare innovators to advance AI-driven nursing practice, digital transformation, and patient-centered care.",
  },
  {
    question: "When and where will AINURSE-2026 take place?",
    answer:
      "AINURSE-2026 will be held on November 19–20, 2026, in Dubai, UAE.",
  },
  {
    question: "What are the key highlights of AINURSE-2026?",
    answer:
      "Global keynote sessions, AI-powered nursing workshops, digital health innovation forums, clinical decision-support demonstrations, research presentations, panel discussions, hands-on technology sessions, professional networking, and digital nursing excellence recognition.",
  },
  {
    question: "What topics and tracks are covered at AINURSE-2026?",
    answer: (
      <>
        Explore the complete list of conference tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          AINURSE-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I present my research or explore sponsorship opportunities?",
    answer: (
      <>
        To present your research, digital nursing solutions, AI applications, or
        discuss sponsorship opportunities, please contact us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract or proposal?",
    answer: (
      <>
        Abstract and presentation submissions can be made{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the registered email address after successful registration.",
  },
  {
    question: "What materials will participants receive?",
    answer:
      "Registered participants will receive a digital forum kit including the agenda, speaker profiles, session details, technology showcases, and exhibitor information.",
  },
  {
    question: "What is the duration of presentation slots?",
    answer:
      "Standard presentation slots are typically 15–20 minutes, including Q&A. Final presentation guidelines will be shared upon acceptance.",
  },
  {
    question: "Who should attend AINURSE-2026?",
    answer:
      "Registered nurses, nurse practitioners, nurse informaticists, clinical educators, healthcare IT professionals, digital health leaders, researchers, hospital administrators, policymakers, and students interested in AI and digital nursing.",
  },
  {
    question: "How many participants are expected?",
    answer:
      "AINURSE-2026 is expected to host 150+ international participants, including speakers, delegates, exhibitors, and sponsors.",
  },
  {
    question: "Can I submit multiple abstracts?",
    answer:
      "Yes, multiple abstract submissions are allowed, provided each submission represents a unique topic or innovation.",
  },
  {
    question: "Are keynote and featured speaker slots available?",
    answer:
      "Yes, a limited number of keynote and featured speaker slots are available and subject to review and approval.",
  },
  {
    question: "What is expected from speakers and exhibitors?",
    answer:
      "Speakers and exhibitors are expected to deliver evidence-based, technology-driven, and clinically relevant sessions while actively engaging with participants.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, registration fees apply for attendees, speakers, and exhibitors. Pricing details are available under the “Buy A Ticket” section.",
  },
  {
    question: "How can I view the forum schedule?",
    answer: (
      <>
        The detailed schedule will be released soon. You can view it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I view the agenda and speaker list before the event?",
    answer:
      "Yes, the complete agenda, confirmed speakers, and exhibitor list will be announced prior to the event.",
  },
  {
    question: "Is early registration available?",
    answer:
      "Yes, early registration is available and recommended as delegate slots may be limited.",
  },
  {
    question: "How can I get assistance with travel or accommodation?",
    answer: (
      <>
        For travel and accommodation assistance, please contact{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];







const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
