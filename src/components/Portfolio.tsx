import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectLightbox from "./ProjectLightbox";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

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

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  { title: "Zé Cha! Lakshadweep Opening", category: "Social Media", description: "New location opening announcement for Lakshadweep", image: zechaiLakshadweep, slug: "zecha-lakshadweep" },
  { title: "Zé Cha! Palakkad Delivery", category: "Social Media", description: "Zomato & Swiggy delivery app promotion for Palakkad branch", image: zechaiPalakkadDelivery, slug: "zecha-palakkad-delivery" },
  { title: "Zé Cha! Eid Mubarak - Palakkad", category: "Social Media", description: "Eid festival greeting design for Palakkad branch", image: zechaiEidPalakkad, slug: "zecha-eid-palakkad" },
  { title: "Zé Cha! Eid Mubarak - Thaliparamba", category: "Social Media", description: "Eid greeting design for Thaliparamba branch", image: zechaiEidThaliparamba, slug: "zecha-eid-thaliparamba" },
  { title: "Zé Cha! Time Change Alert", category: "Social Media", description: "Operating hours update announcement for Palakkad", image: zechaiTimeChange, slug: "zecha-time-change" },
  { title: "Zé Cha! Eid Mubarak - Cup", category: "Branding", description: "Eid themed product photography and branding design", image: zechaiEidCup, slug: "zecha-eid-cup" },
  { title: "Zé Cha! Eid Mubarak - Manassery", category: "Social Media", description: "Eid greeting design for Manassery-Mukkam branch", image: zechaiEidManassery, slug: "zecha-eid-manassery" },
  { title: "Zé Cha! New Locations", category: "Social Media", description: "Location expansion announcement design for tea brand", image: zechaiLocations, slug: "zecha-new-locations" },
  { title: "Zé Cha! Delivery App", category: "Social Media", description: "Delivery app availability promotion with 3D illustration", image: zechaiDelivery, slug: "zecha-delivery-app" },
  { title: "Zé Cha! Iftar Combo", category: "Print", description: "Iftar special menu and combo offer design", image: zechaiIftar, slug: "zecha-iftar" },
  { title: "Fez Inn Hotel Promotion", category: "Social Media", description: "Limited time offer promotional design for hotel booking campaign", image: fezinnHotel, slug: "fezinn-hotel" },
  { title: "Marrakesh Saturday Buffet", category: "Social Media", description: "Eye-catching dinner buffet promotion for restaurant", image: marrakeshRestaurant, slug: "marrakesh-buffet" },
  { title: "Fezcafe Cricket World Cup", category: "Social Media", description: "Event promotion design for cricket screening event", image: fezcafeCricket, slug: "fezcafe-cricket" },
  { title: "Happy Onam Greeting", category: "Social Media", description: "Festival greeting design for Power Kings Club", image: happyOnam, slug: "happy-onam" },
  { title: "Fezinn Hospitality Careers", category: "Print", description: "Career and education promotional design", image: fezinnHospitality, slug: "fezinn-hospitality" },
  { title: "UDF Election Campaign - Juharnass", category: "Political", description: "Political campaign poster design for local panchayat election", image: politicalPoster1, slug: "udf-juharnass" },
  { title: "UDF Election Campaign - Varghese Mathew", category: "Political", description: "Campaign design for Mavelikkara Thekkekara Grama Panchayat", image: politicalPoster2, slug: "udf-varghese" },
  { title: "UDF Election Campaign - Moitheen Kutti", category: "Political", description: "Political poster for Nannamra Panchayat Ward 19", image: politicalPoster3, slug: "udf-moitheen" },
  { title: "Pravasi Sahityotsav 2025", category: "Print", description: "Cultural event poster for 15th edition literary festival", image: sahityotsavPoster, slug: "sahityotsav-2025" },
  { title: "UDF Election Campaign - Ramadevi", category: "Political", description: "Illustrated campaign design for Peringome-Vayakkara Panchayat", image: politicalPoster4, slug: "udf-ramadevi" },
  { title: "LDF Election Campaign", category: "Political", description: "Campaign poster for Puthankadavu Grama Panchayat Ward 13", image: politicalPoster5, slug: "ldf-puthankadavu" },
  { title: "UDF Election Campaign - M.P. Shamsudheen", category: "Political", description: "Political design for Cheekkadu Grama Panchayat", image: politicalPoster6, slug: "udf-shamsudheen" },
  { title: "Independent Candidate - Basheer", category: "Political", description: "Campaign poster for Cheekkadu Grama Panchayat Ward 18", image: politicalPoster7, slug: "ind-basheer" },
  { title: "Independent Campaign - Kunjacka", category: "Political", description: "Election poster design for Ward 18 Thindappara", image: politicalPoster8, slug: "ind-kunjacka" },
  { title: "Vote for Basheer C", category: "Political", description: "Gradient style campaign poster for independent candidate", image: politicalPoster9, slug: "vote-basheer-c" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setLightboxOpen(true);
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 px-6 md:px-12 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader index="04" title="Selected Projects" />

        {/* Filter */}
        <Reveal>
          <div className="flex flex-wrap gap-2 my-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-body text-[11px] uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>


        {/* Uniform Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.slug + index}
              delay={Math.min(index * 50, 300)}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors duration-300 cursor-pointer"
            >
              <div onClick={() => handleProjectClick(project)}>
                {/* Poster */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>

                {/* Meta row */}
                <div className="flex items-start justify-between gap-3 p-4 md:p-5">
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-base md:text-lg text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2 normal-case tracking-normal">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-body text-xs text-muted-foreground truncate">
                      {project.category}
                    </p>
                  </div>
                  <Link
                    to={`/case-study/${project.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open case study for ${project.title}`}
                    className="shrink-0 mt-0.5 text-primary hover:text-foreground transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </Reveal>
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
