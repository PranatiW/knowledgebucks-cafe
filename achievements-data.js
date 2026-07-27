/*
HOW TO ADD A NEW ACHIEVEMENT
1. Copy one complete object inside ACHIEVEMENTS.
2. Change its title, year, category and description.
3. Optional: add a public URL in "link"; otherwise use "".
4. Save this file and upload it again to the same S3 folder.

Supported categories:
Patent, Copyright, Publication, Book, FDP, Training, Leadership, Event, Academic
*/
const ACHIEVEMENTS = [
  {
    year: "2026",
    category: "Patent",
    icon: "💡",
    title: "Cloud-Based Female Security Device",
    description: "Indian patent filed for a cloud-enabled female safety and security device.",
    link: ""
  },
  {
    year: "2025",
    category: "Copyright",
    icon: "©️",
    title: "Advancements in Cloud Security",
    description: "Copyright registered for the work “Advancements in Cloud Security: Protecting the Security of the Data”.",
    link: ""
  },
  {
    year: "2024",
    category: "Patent",
    icon: "🧠",
    title: "Cloud Server-Based Attendance Device",
    description: "Indian patent for a cloud server-based attendance solution.",
    link: ""
  },
  {
    year: "2024",
    category: "Patent",
    icon: "⚡",
    title: "AI-Based Wireless Electricity Monitoring Device",
    description: "UK patent concerning AI-assisted wireless electricity consumption monitoring and energy saving.",
    link: ""
  },
  {
    year: "2024",
    category: "Book",
    icon: "📘",
    title: "Introduction to Blockchain Technology",
    description: "Authored a book introducing blockchain concepts, architecture and applications.",
    link: ""
  },
  {
    year: "2025",
    category: "Publication",
    icon: "🔬",
    title: "TomatoRipen-MMT",
    description: "Co-authored research on transformer-based RGB and NIR spectral fusion for tomato maturity grading, published in Scientific Reports.",
    link: "https://www.nature.com/articles/s41598-025-32522-9"
  },
  {
    year: "2025",
    category: "Publication",
    icon: "🏥",
    title: "Big Data and Blockchain Synergies in Healthcare",
    description: "Published research exploring combined applications of big data and blockchain in healthcare.",
    link: "https://doi.org/10.52783/jns.v14.1780"
  },
  {
    year: "2025",
    category: "Publication",
    icon: "🔐",
    title: "Blockchain for Healthcare Management",
    description: "Published research focused on healthcare data security, transparency and blockchain-based management.",
    link: "https://doi.org/10.70135/seejph.vi.3831"
  },
  {
    year: "2025",
    category: "Book",
    icon: "📖",
    title: "Springer Book Chapter",
    description: "Contributed a Springer book chapter on cost-effective deployment of image style-transfer models.",
    link: ""
  },
  {
    year: "2026",
    category: "FDP",
    icon: "🎤",
    title: "Expert Session on Cloud Computing",
    description: "Delivered an expert lecture on Cloud Computing during a national-level Faculty Development Program.",
    link: ""
  },
  {
    year: "2026",
    category: "FDP",
    icon: "🤖",
    title: "AI Advance Certification",
    description: "Completed advanced training covering intelligent automation, emerging AI technologies and industry-oriented AI solutions.",
    link: ""
  },
  {
    year: "2026",
    category: "Training",
    icon: "☁️",
    title: "Salesforce Training by Wipro",
    description: "Completed an extended Salesforce professional training programme conducted by Wipro.",
    link: ""
  },
  {
    year: "2025",
    category: "Training",
    icon: "♾️",
    title: "DevOps Masterclass Series",
    description: "Completed professional learning in DevOps practices, CI/CD, automation, monitoring and modern delivery workflows.",
    link: "https://www.unnatidevelopment.in/"
  },
  {
    year: "2025",
    category: "Training",
    icon: "🗄️",
    title: "Microsoft SQL Certification Training",
    description: "Successfully completed Microsoft SQL certification training through Intellipaat.",
    link: ""
  },
  {
    year: "2025",
    category: "FDP",
    icon: "🛡️",
    title: "Cyber Defense Tools: A Practical Approach",
    description: "Completed a Faculty Development Program focused on practical cyber-defence tools and techniques.",
    link: ""
  },
  {
    year: "2025",
    category: "Training",
    icon: "📝",
    title: "Project Writing for Grants and Research Papers",
    description: "Completed a two-day national workshop on project proposals, grant applications and scholarly research writing.",
    link: ""
  },
  {
    year: "2025",
    category: "Event",
    icon: "🌐",
    title: "GDG DevFest 2025",
    description: "Participated in developer sessions, emerging-technology discussions and professional networking activities.",
    link: ""
  },
  {
    year: "2026",
    category: "Leadership",
    icon: "🚌",
    title: "NAIP – L&T Chennai Industrial Visit",
    description: "Coordinated and accompanied students for an industry-oriented academic immersion programme at L&T Chennai.",
    link: ""
  },
  {
    year: "2025",
    category: "Leadership",
    icon: "🧑‍🏫",
    title: "Cloud Computing Mentor Coordinator",
    description: "Supported mentor coordination and student development activities in the Cloud Computing specialisation.",
    link: ""
  },
  {
    year: "2025",
    category: "Event",
    icon: "💻",
    title: "World Computer Literacy Day Initiative",
    description: "Created and conducted a technology quiz and supported the Younger Ones on Campus learning experience.",
    link: ""
  },
  {
    year: "2025–2026",
    category: "Leadership",
    icon: "📰",
    title: "Newsletter, Website and Media Contributions",
    description: "Led newsletter content development and contributed to website, photography and social-media documentation.",
    link: ""
  },
  {
    year: "2025–2026",
    category: "Academic",
    icon: "🧭",
    title: "Curriculum and Syllabus Development",
    description: "Contributed to syllabus drafting and curriculum enrichment for Cloud Computing and Salesforce learning.",
    link: ""
  },
  {
    year: "2026",
    category: "Event",
    icon: "🎙️",
    title: "DevConf 2026 Media Volunteer",
    description: "Supported media coordination, event documentation and communication activities for DevConf 2026.",
    link: ""
  },

  {
  year: "2026",
  category: "FDP",
  icon: "🏆",
  title: "Salesforce Workshop",
  description: "Completed an intensive industry-led Salesforce Administrator training program by Wipro, strengthening expertise in Salesforce administration, security, automation, CRM best practices, and certification preparation.",
  link: "https://www.linkedin.com/posts/pranati-waghodekar-4249aa361_salesforce-admin-certification-roadmap-and-activity-7486311815300227072-obuD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFoGq9wBxYcy3Rv3QhwDWJvmUmFKqMnz-qE"
}

];
