"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { ProjectStack } from "@/components/ProjectStack";
import { CarouselParallax } from "@/components/ui/carousel-parallax";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { getProjects } from "@/lib/projects-data";

interface Project {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
    stack: { Icon: React.ComponentType<{ className?: string }>; name: string }[];
}

export function Projects() {
    const { t } = useLanguage();
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects = getProjects(t);
    // CarouselParallax expects 'products' prop.
    const products = projects;

    const handleProductClick = (product: { title: string; link: string; thumbnail: string; description?: string; stack?: { Icon: React.ComponentType<{ className?: string }>; name: string }[] }) => {
        setSelectedProject(product as Project);
        setOpen(true);
    };

    return (
        <>
            <CarouselParallax products={products} onProductClick={handleProductClick} />

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[800px] w-full max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
                        <DialogDescription className="text-lg mt-2">
                            {selectedProject?.description}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-6">
                        <div className="w-full md:w-1/2 relative min-h-[300px] flex items-center justify-center">
                            {selectedProject && (
                                <ProjectStack
                                    stack={selectedProject.stack}
                                    className="scale-75 md:scale-100"
                                />
                            )}
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            <h3 className="text-xl font-semibold mb-4">{t('projects.tech_stack')}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {selectedProject?.stack.map((tech, idx) => (
                                    <div key={idx} className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                                        <tech.Icon className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-medium">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6">
                                <a
                                    href={selectedProject?.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    {t('projects.visit')}
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
