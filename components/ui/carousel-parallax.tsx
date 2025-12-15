"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useLanguage } from "@/components/contexts/LanguageContext";

interface Product {
    title: string;
    link: string;
    thumbnail: string;
    description?: string; // Added description for 3D card
    [key: string]: any;
}

interface CarouselParallaxProps {
    products: Product[];
    onProductClick?: (product: Product) => void;
}

export const CarouselParallax = ({
    products,
    onProductClick,
}: CarouselParallaxProps) => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative w-full py-20 bg-background overflow-hidden">
            {/* Header Section similar to HeroParallax */}
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <h1 className="text-2xl md:text-5xl font-bold dark:text-white">
                    {t("projects.hero_title")}
                </h1>
                <p className="max-w-2xl text-base md:text-xl mt-4 dark:text-neutral-200">
                    {t("projects.hero_subtitle")}
                </p>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={containerRef}
                className="flex flex-row overflow-x-auto w-full gap-8 snap-x snap-mandatory py-10 px-4 md:px-20 scrollbar-hide"
                style={{ scrollBehavior: "smooth" }}
            >
                {products.map((product, idx) => (
                    <CarouselCard
                        key={product.title + idx}
                        product={product}
                        index={idx}
                        onProductClick={onProductClick}
                    />
                ))}
            </div>
        </div>
    );
};

const CarouselCard = ({
    product,
    index,
    onProductClick,
}: {
    product: Product;
    index: number;
    onProductClick?: (product: Product) => void;
}) => {
    const { t } = useLanguage();
    return (
        <div className="snap-center shrink-0">
            <CardContainer className="inter-var py-0">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        {product.title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
                    >
                        {product.description || t("projects.click_details")}
                    </CardItem>
                    <CardItem
                        translateZ="100"
                        rotateX={20}
                        rotateZ={-5}
                        className="w-full mt-4"
                    >
                        <button
                            onClick={() => onProductClick?.(product)}
                            className="w-full"
                        >
                            <img
                                src={product.thumbnail}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt={product.title}
                            />
                        </button>
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                        <CardItem
                            translateZ={20}
                            translateX={-40}
                            as="button"
                            onClick={() => onProductClick?.(product)}
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            {t("projects.view_details")} →
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </div>
    );
};
