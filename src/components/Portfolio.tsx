import { useState } from "react";
import { ExternalLink } from "lucide-react";
const categories = ["All", "Branding", "Social Media", "Print", "Packaging"];
const projects = [{
  title: "Brand Identity System",
  category: "Branding",
  description: "Complete visual identity for a local business",
  color: "from-orange-500/20 to-red-500/20"
}, {
  title: "Social Campaign",
  category: "Social Media",
  description: "Engaging social media campaign designs",
  color: "from-blue-500/20 to-purple-500/20"
}, {
  title: "Magazine Advertisement",
  category: "Print",
  description: "Full-page magazine ad design",
  color: "from-green-500/20 to-teal-500/20"
}, {
  title: "Product Packaging",
  category: "Packaging",
  description: "Premium product packaging design",
  color: "from-pink-500/20 to-rose-500/20"
}, {
  title: "Corporate Brochure",
  category: "Print",
  description: "Multi-page corporate brochure",
  color: "from-amber-500/20 to-yellow-500/20"
}, {
  title: "Logo Collection",
  category: "Branding",
  description: "Various logo designs for startups",
  color: "from-cyan-500/20 to-blue-500/20"
}];
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);
  return <section id="portfolio" className="section-padding bg-card/30">
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
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"}`}>
              {category}
            </button>)}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => <div key={index} className="group rounded-2xl overflow-hidden hover-lift cursor-pointer">
              {/* Project Image Placeholder */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-foreground/30">
                    {project.category}
                  </span>
                </div>
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
            </div>)}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a href="https://behance.net/jabirmuhamme" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-body font-medium hover:underline underline-offset-4">
            View more on Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>;
};
export default Portfolio;