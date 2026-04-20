import { useState } from "react";
import { ExternalLink } from "lucide-react";
import ProjectLightbox from "./ProjectLightbox";

// Import portfolio images
import fezinnHotel from "@/assets/portfolio/fezinn-hotel.jpg";
import marrakeshRestaurant from "@/assets/portfolio/marrakesh-restaurant.jpg";
import fezcafeCricket from "@/assets/portfolio/fezcafe-cricket.jpg";
import happyOnam from "@/assets/portfolio/happy-onam.png";
import fezinnHospitality from "@/assets/portfolio/fezinn-hospitality.jpg";
import politicalPoster1 from "@/assets/portfolio/political-poster-1.png";
import politicalPoster2 from "@/assets/portfolio/political-poster-2.png";
import politicalPoster3 from "@/assets/portfolio/political-poster-3.png";
import sahityotsavPoster from "@/assets/portfolio/sahityotsav-poster.png";
import politicalPoster4 from "@/assets/portfolio/political-poster-4.png";
import politicalPoster5 from "@/assets/portfolio/political-poster-5.png";
import politicalPoster6 from "@/assets/portfolio/political-poster-6.png";
import politicalPoster7 from "@/assets/portfolio/political-poster-7.png";
import politicalPoster8 from "@/assets/portfolio/political-poster-8.png";
import politicalPoster9 from "@/assets/portfolio/political-poster-9.png";
import zechaiLocations from "@/assets/portfolio/zechai-locations.png";
import zechaiDelivery from "@/assets/portfolio/zechai-delivery.png";
import zechaiIftar from "@/assets/portfolio/zechai-iftar.png";
import zechaiLakshadweep from "@/assets/portfolio/zechai-lakshadweep.png";
import zechaiPalakkadDelivery from "@/assets/portfolio/zechai-palakkad-delivery.jpeg";
import zechaiEidPalakkad from "@/assets/portfolio/zechai-eid-palakkad.jpeg";
import zechaiEidThaliparamba from "@/assets/portfolio/zechai-eid-thaliparamba.jpeg";
import zechaiTimeChange from "@/assets/portfolio/zechai-time-change.jpeg";
import zechaiEidCup from "@/assets/portfolio/zechai-eid-cup.jpeg";
import zechaiEidManassery from "@/assets/portfolio/zechai-eid-manassery.jpeg";

const categories = ["All", "Branding", "Social Media", "Print", "Packaging", "Political"];

const projects = [
  {
    title: "Zé Cha! Lakshadweep Opening",
    category: "Social Media",
    description: "New location opening announcement for Lakshadweep",
    image: zechaiLakshadweep,
  },
  {
    title: "Zé Cha! Palakkad Delivery",
    category: "Social Media",
    description: "Zomato & Swiggy delivery app promotion for Palakkad branch",
    image: zechaiPalakkadDelivery,
  },
  {
    title: "Zé Cha! Eid Mubarak - Palakkad",
    category: "Social Media",
    description: "Eid festival greeting design for Palakkad branch",
    image: zechaiEidPalakkad,
  },
  {
    title: "Zé Cha! Eid Mubarak - Thaliparamba",
    category: "Social Media",
    description: "Eid greeting design for Thaliparamba branch",
    image: zechaiEidThaliparamba,
  },
  {
    title: "Zé Cha! Time Change Alert",
    category: "Social Media",
    description: "Operating hours update announcement for Palakkad",
    image: zechaiTimeChange,
  },
  {
    title: "Zé Cha! Eid Mubarak - Cup",
    category: "Branding",
    description: "Eid themed product photography and branding design",
    image: zechaiEidCup,
  },
  {
    title: "Zé Cha! Eid Mubarak - Manassery",
    category: "Social Media",
    description: "Eid greeting design for Manassery-Mukkam branch",
    image: zechaiEidManassery,
  },
  {
    title: "Zé Cha! New Locations",
    category: "Social Media",
    description: "Location expansion announcement design for tea brand",
    image: zechaiLocations,
  },
  {
    title: "Zé Cha! Delivery App",
    category: "Social Media",
    description: "Delivery app availability promotion with 3D illustration",
    image: zechaiDelivery,
  },
  {
    title: "Zé Cha! Iftar Combo",
    category: "Print",
    description: "Iftar special menu and combo offer design",
    image: zechaiIftar,
  },
  {
    title: "Fez Inn Hotel Promotion",
    category: "Social Media",
    description: "Limited time offer promotional design for hotel booking campaign",
    image: fezinnHotel,
  },
  {
    title: "Marrakesh Saturday Buffet",
    category: "Social Media",
    description: "Eye-catching dinner buffet promotion for restaurant",
    image: marrakeshRestaurant,
  },
  {
    title: "Fezcafe Cricket World Cup",
    category: "Social Media",
    description: "Event promotion design for cricket screening event",
    image: fezcafeCricket,
  },
  {
    title: "Happy Onam Greeting",
    category: "Social Media",
    description: "Festival greeting design for Power Kings Club",
    image: happyOnam,
  },
  {
    title: "Fezinn Hospitality Careers",
    category: "Print",
    description: "Career and education promotional design",
    image: fezinnHospitality,
  },
  {
    title: "UDF Election Campaign - Juharnass",
    category: "Political",
    description: "Political campaign poster design for local panchayat election",
    image: politicalPoster1,
  },
  {
    title: "UDF Election Campaign - Varghese Mathew",
    category: "Political",
    description: "Campaign design for Mavelikkara Thekkekara Grama Panchayat",
    image: politicalPoster2,
  },
  {
    title: "UDF Election Campaign - Moitheen Kutti",
    category: "Political",
    description: "Political poster for Nannamra Panchayat Ward 19",
    image: politicalPoster3,
  },
  {
    title: "Pravasi Sahityotsav 2025",
    category: "Print",
    description: "Cultural event poster for 15th edition literary festival",
    image: sahityotsavPoster,
  },
  {
    title: "UDF Election Campaign - Ramadevi",
    category: "Political",
    description: "Illustrated campaign design for Peringome-Vayakkara Panchayat",
    image: politicalPoster4,
  },
  {
    title: "LDF Election Campaign",
    category: "Political",
    description: "Campaign poster for Puthankadavu Grama Panchayat Ward 13",
    image: politicalPoster5,
  },
  {
    title: "UDF Election Campaign - M.P. Shamsudheen",
    category: "Political",
    description: "Political design for Cheekkadu Grama Panchayat",
    image: politicalPoster6,
  },
  {
    title: "Independent Candidate - Basheer",
    category: "Political",
    description: "Campaign poster for Cheekkadu Grama Panchayat Ward 18",
    image: politicalPoster7,
  },
  {
    title: "Independent Campaign - Kunjacka",
    category: "Political",
    description: "Election poster design for Ward 18 Thindappara",
    image: politicalPoster8,
  },
  {
    title: "Vote for Basheer C",
    category: "Political",
    description: "Gradient style campaign poster for independent candidate",
    image: politicalPoster9,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-3">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Selected Work
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground">
              Projects.
            </h2>
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-secondary mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1 block">
                    {project.category}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-20 pt-12 border-t border-border flex items-center justify-between">
          <span className="font-body text-sm text-muted-foreground">
            Want to see more?
          </span>
          <a
            href="https://behance.net/jabirmuhamme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-medium text-foreground hover:text-primary transition-colors"
          >
            View on Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <ProjectLightbox
        project={selectedProject}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </section>
  );
};

export default Portfolio;
