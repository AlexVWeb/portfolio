
"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { InfiniteImageCarousel } from "@/components/phucbm/infinite-image-carousel";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/contexts/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative flex min-h-[60vh] w-full flex-col justify-center items-center text-center p-4 overflow-hidden">
            <div className="z-10 mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 flex justify-between">
                    <BlurFade delay={0.25} inView>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            {t("hero.greeting")}
                        </h2>
                    </BlurFade>
                </div>

                <BlurFade delay={0.25 * 2} inView>
                    <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
                        {t("hero.role")}
                    </span>
                </BlurFade>

                <BlurFade delay={0.25 * 3} inView>
                    <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-muted-foreground mx-auto">
                        {t("hero.description")}
                    </p>
                </BlurFade>
            </div>
            <div className="absolute bottom-10 w-full max-w-4xl px-4 z-20">
                <InfiniteImageCarousel
                    images={[
                        { url: "https://cdn.simpleicons.org/react", title: "React" },
                        { url: "https://cdn.simpleicons.org/nextdotjs", title: "Next.js" },
                        { url: "https://cdn.simpleicons.org/tailwindcss", title: "Tailwind CSS" },
                        { url: "https://cdn.simpleicons.org/typescript", title: "TypeScript" },
                        { url: "https://cdn.simpleicons.org/nodedotjs", title: "Node.js" },
                        { url: "https://cdn.simpleicons.org/postgresql", title: "PostgreSQL" },
                        { url: "https://cdn.simpleicons.org/docker", title: "Docker" },
                        { url: "https://cdn.simpleicons.org/symfony", title: "Symfony" },
                        { url: "https://cdn.simpleicons.org/sass", title: "Sass" },
                        { url: "https://cdn.simpleicons.org/php", title: "PHP" },
                        { url: "https://cdn.simpleicons.org/mysql", title: "MySQL" },
                        { url: "https://cdn.simpleicons.org/mapbox", title: "Mapbox" },
                    ]}
                    isLogo={true}
                    duration={30}
                    itemClass="w-12 h-12 md:w-16 md:h-16 mx-4"
                />
            </div>
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                )}
            />
        </section>
    );
}
