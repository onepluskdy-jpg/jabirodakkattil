import { X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}

interface ProjectLightboxProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectLightbox = ({ project, open, onOpenChange }: ProjectLightboxProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-card border-border overflow-hidden">
        <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition-colors">
          <X className="h-5 w-5 text-foreground" />
        </DialogClose>
        
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[70vh] object-contain bg-background"
          />
        </div>
        
        <div className="p-6">
          <span className="text-primary font-body text-xs uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-xl font-semibold mt-1 mb-2 text-foreground font-sans">
            {project.title}
          </h3>
          <p className="text-muted-foreground font-body">
            {project.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectLightbox;
