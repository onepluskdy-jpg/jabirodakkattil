import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectLightbox from "./ProjectLightbox";
import Reveal from "./Reveal";

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

type Size = "sm" | "md" | "lg" | "wide" | "tall";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  size?: Size;
}

const projects: Project[] = [
  { title: "Zé Cha! Lakshadweep Opening", category: "Social Media", description: "New location opening announcement for Lakshadweep", image: zechaiLakshadweep, slug: "zecha-lakshadweep", size: "lg" },
  { title: "Zé Cha! Palakkad Delivery", category: "Social Media", description: "Zomato & Swiggy delivery app promotion for Palakkad branch", image: zechaiPalakkadDelivery, slug: "zecha-palakkad-delivery", size: "md" },
  { title: "Zé Cha! Eid Mubarak - Palakkad", category: "Social Media", description: "Eid festival greeting design for Palakkad branch", image: zechaiEidPalakkad, slug: "zecha-eid-palakkad", size: "tall" },
  { title: "Zé Cha! Eid Mubarak - Thaliparamba", category: "Social Media", description: "Eid greeting design for Thaliparamba branch", image: zechaiEidThaliparamba, slug: "zecha-eid-thaliparamba", size: "md" },
  { title: "Zé Cha! Time Change Alert", category: "Social Media", description: "Operating hours update announcement for Palakkad", image: zechaiTimeChange, slug: "zecha-time-change", size: "md" },
  { title: "Zé Cha! Eid Mubarak - Cup", category: "Branding", description: "Eid themed product photography and branding design", image: zechaiEidCup, slug: "zecha-eid-cup", size: "wide" },
  { title: "Zé Cha! Eid Mubarak - Manassery", category: "Social Media", description: "Eid greeting design for Manassery-Mukkam branch", image: zechaiEidManassery, slug: "zecha-eid-manassery", size: "md" },
  { title: "Zé Cha! New Locations", category: "Social Media", description: "Location expansion announcement design for tea brand", image: zechaiLocations, slug: "zecha-new-locations", size: "tall" },
  { title: "Zé Cha! Delivery App", category: "Social Media", description: "Delivery app availability promotion with 3D illustration", image: zechaiDelivery, slug: "zecha-delivery-app", size: "md" },
  { title: "Zé Cha! Iftar Combo", category: "Print", description: "Iftar special menu and combo offer design", image: zechaiIftar, slug: "zecha-iftar", size: "md" },
  { title: "Fez Inn Hotel Promotion", category: "Social Media", description: "Limited time offer promotional design for hotel booking campaign", image: fezinnHotel, slug: "fezinn-hotel", size: "lg" },
  { title: "Marrakesh Saturday Buffet", category: "Social Media", description: "Eye-catching dinner buffet promotion for restaurant", image: marrakeshRestaurant, slug: "marrakesh-buffet", size: "md" },
  { title: "Fezcafe Cricket World Cup", category: "Social Media", description: "Event promotion design for cricket screening event", image: fezcafeCricket, slug: "fezcafe-cricket", size: "wide" },
  { title: "Happy Onam Greeting", category: "Social Media", description: "Festival greeting design for Power Kings Club", image: happyOnam, slug: "happy-onam", size: "md" },
  { title: "Fezinn Hospitality Careers", category: "Print", description: "Career and education promotional design", image: fezinnHospitality, slug: "fezinn-hospitality", size: "tall" },
  { title: "UDF Election Campaign - Juharnass", category: "Political", description: "Political campaign poster design for local panchayat election", image: politicalPoster1, slug: "udf-juharnass", size: "md" },
  { title: "UDF Election Campaign - Varghese Mathew", category: "Political", description: "Campaign design for Mavelikkara Thekkekara Grama Panchayat", image: politicalPoster2, slug: "udf-varghese", size: "md" },
  { title: "UDF Election Campaign - Moitheen Kutti", category: "Political", description: "Political poster for Nannamra Panchayat Ward 19", image: politicalPoster3, slug: "udf-moitheen", size: "md" },
  { title: "Pravasi Sahityotsav 2025", category: "Print", description: "Cultural event poster for 15th edition literary festival", image: sahityotsavPoster, slug: "sahityotsav-2025", size: "lg" },
  { title: "UDF Election Campaign - Ramadevi", category: "Political", description: "Illustrated campaign design for Peringome-Vayakkara Panchayat", image: politicalPoster4, slug: "udf-ramadevi", size: "md" },
  { title: "LDF Election Campaign", category: "Political", description: "Campaign poster for Puthankadavu Grama Panchayat Ward 13", image: politicalPoster5, slug: "ldf-puthankadavu", size: "md" },
  { title: "UDF Election Campaign - M.P. Shamsudheen", category: "Political", description: "Political design for Cheekkadu Grama Panchayat", image: politicalPoster6, slug: "udf-shamsudheen", size: "md" },
  { title: "Independent Candidate - Basheer", category: "Political", description: "Campaign poster for Cheekkadu Grama Panchayat Ward 18", image: politicalPoster7, slug: "ind-basheer", size: "md" },
  { title: "Independent Campaign - Kunjacka", category: "Political", description: "Election poster design for Ward 18 Thindappara", image: politicalPoster8, slug: "ind-kunjacka", size: "md" },
  { title: "Vote for Basheer C", category: "Political", description: "Gradient style campaign poster for independent candidate", image: politicalPoster9, slug: "vote-basheer-c", size: "md" },
];

const sizeClass: Record<Size, string> = {
  sm: "md:col-span-2 md:row-span-1 aspect-[4/5]",
  md: "md:col-span-2 md:row-span-1 aspect-[4/5]",
  lg: "md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-auto",
  wide: "md:col-span-3 md:row-span-1 aspect-[16/10]",
  tall: "md:col-span-2 md:row-span-2 aspect-[3/5] md:aspect-auto",
};

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
      className="py-24 md:py-32 px-6 md:px-12 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-3">
            <Reveal>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Selected Work
              </span>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground">
                Projects.
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Filter */}
        <Reveal>
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
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[280px] gap-4 md:gap-5">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.slug + index}
              delay={Math.min(index * 60, 360)}
              className={`group relative overflow-hidden rounded-2xl bg-secondary cursor-pointer ${
                sizeClass[project.size ?? "md"]
              }`}
            >
              <div
                onClick={() => handleProjectClick(project)}
                className="absolute inset-0"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category chip */}
                <div className="absolute top-4 left-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-primary-foreground" />
                    {project.category}
                  </span>
                </div>

                {/* Title row */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-lg md:text-xl text-foreground leading-tight truncate">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-body text-xs text-muted-foreground line-clamp-1">
                      {project.description}
                    </p>
                  </div>
                  <Link
                    to={`/case-study/${project.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open case study for ${project.title}`}
                    className="shrink-0 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
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
