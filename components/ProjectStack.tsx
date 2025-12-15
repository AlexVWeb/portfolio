"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FaCode } from "react-icons/fa";

interface ProjectStackProps {
    stack: { Icon: React.ComponentType<{ className?: string }>; name: string }[];
    className?: string;
}

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-black",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function ProjectStack({ stack, className }: ProjectStackProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);

    // We'll limit to 6 items to keep the beam clean, or just map all of them.
    // AnimatedBeam requires refs for from/to. 
    // We need to create an array of refs for the stack items.
    const stackRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Initialize refs array
    if (stackRefs.current.length !== stack.length) {
        stackRefs.current = Array(stack.length).fill(null);
    }

    return (
        <div
            className={cn(
                "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex size-full max-w-lg flex-col items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    {/* Top row - split first half of stack if needed, but simplest is Hub in center, Stack around. 
                However, AnimatedBeam demos often show Left -> Right or Center -> Surround.
                Let's do a central hub connecting to items distributed around. 
                Actually, simpler for purely connecting: Hub in center, items in a circle or two columns.
                Let's try two columns (left/right) connecting to center? Or just surrounding.
                
                Let's do: Center Hub. Stack items arranged in a circle or semi-circle might be hard with just flex.
                Let's use the provided example structure: Two rows or columns?
                
                Let's try a radial layout using absolute positioning for items, similar to orbit but static positions.
            */}

                    {/* Let's try a simple Left (Stack) -> Right (Project) flow or fan out.
                 Fan out: Center (Code) -> Stack items distributed.
             */}
                </div>

                {/* Let's Try: Center Node, and Stack Items in a circle around it. */}
                <div className="relative flex h-full w-full items-center justify-center">
                    <Circle ref={centerRef} className="size-16">
                        <FaCode className="text-black dark:text-white" />
                    </Circle>

                    {stack.map((item, index) => {
                        // Distribute items in a circle
                        const angle = (index / stack.length) * 2 * Math.PI;
                        const radius = 120; // px
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <div
                                key={index}
                                className="absolute"
                                style={{
                                    transform: `translate(${x}px, ${y}px)`
                                }}
                            >
                                <Circle ref={(el) => { stackRefs.current[index] = el; }}>
                                    <item.Icon className="size-6" />
                                </Circle>
                            </div>
                        )
                    })}
                </div>


            </div>

            {stack.map((_, index) => (
                <AnimatedBeam
                    key={index}
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={{ current: stackRefs.current[index] }}
                    curvature={0} // Straight lines for starburst effect? Or curved? Default is curved.
                    // let's try some variations
                    startXOffset={0}
                    endXOffset={0}
                />
            ))}
        </div>
    );
}
