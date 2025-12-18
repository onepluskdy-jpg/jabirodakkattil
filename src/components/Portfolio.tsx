import { useState } from "react";
import { ExternalLink } from "lucide-react";
import ProjectLightbox from "./ProjectLightbox";

// Import portfolio images
import fezinnHotel from "@/assets/portfolio/fezinn-hotel.jpg";
import marrakeshRestaurant from "@/assets/portfolio/marrakesh-restaurant.jpg";
import fezcafeCricket from "@/assets/portfolio/fezcafe-cricket.jpg";
import happyOnam from "@/assets/portfolio/happy-onam.png";
import fezinnHospitality from "@/assets/portfolio/fezinn-hospitality.jpg";

const categories = ["All", "Branding", "Social Media", "Print", "Packaging"];

const projects = [
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
    <section id="portfolio" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-body text-sm uppercase tracking-widest mb-4 block">
            My Work
          </span>
          <h2 className="text-4xl font-bold mb-6 font-sans md:text-6xl">
            Featured <span className="text-gradient font-sans">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A selection of my recent work across branding, print, and digital design.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="group rounded-2xl overflow-hidden hover-lift cursor-pointer"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-6">
                    <ExternalLink className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                    <span className="font-body text-primary-foreground font-medium">
                      View Project
                    </span>
                  </div>
                </div>
              </div>
              {/* Project Info */}
              <div className="p-5 bg-card">
                <span className="text-primary font-body text-xs uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-2 text-foreground group-hover:text-primary transition-colors font-sans">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://behance.net/jabirmuhamme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-body font-medium hover:underline underline-offset-4"
          >
            View more on Behance
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
