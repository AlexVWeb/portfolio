"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MultiSwitchOption {
    value: string;
    label?: string;
    icon?: React.ReactNode;
}

interface MultiSwitchProps {
    options: MultiSwitchOption[];
    currentValue: string;
    onChange: (value: string) => void;
    className?: string;
}

export function MultiSwitch({
    options,
    currentValue,
    onChange,
    className,
}: MultiSwitchProps) {
    const currentIndex = React.useMemo(() => {
        const index = options.findIndex((opt) => opt.value === currentValue);
        return index !== -1 ? index : 0;
    }, [currentValue, options]);

    const handleToggle = () => {
        const nextIndex = (currentIndex + 1) % options.length;
        onChange(options[nextIndex].value);
    };

    // Calculate position for the sliding circle
    // Left position based on index. Assuming 2 items for now as that's the main use case here,
    // but logic works for more if we adjust the width math.
    // For 2 items: 0 -> left-1, 1 -> right-1 (or distinct px values)

    return (
        <div
            className={cn(
                "relative inline-flex h-8 items-center rounded-full border border-input bg-background p-1 shadow-sm cursor-pointer",
                options.length === 2 ? "w-14" : "w-auto gap-1", // Adjust width based on items
                className
            )}
            onClick={handleToggle}
        >
            <div className="flex w-full h-full items-center justify-between z-10">
                {options.map((option, idx) => (
                    <div
                        key={option.value}
                        className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-200",
                            currentValue === option.value
                                ? "text-background" // Text color when active (circle is behind it)
                                : "text-muted-foreground"
                        )}
                    >
                        {option.icon || <span className="text-xs font-medium">{option.label}</span>}
                    </div>
                ))}
            </div>

            {/* Sliding Circle Indicator */}
            <div
                className={cn(
                    "absolute top-1 h-6 w-6 rounded-full bg-foreground transition-all duration-200 ease-in-out",
                    // Simple logic for 2 items. For more dynamic, we'd need pixel calc or flex equivalent.
                    currentIndex === 0 ? "left-1" : "left-[calc(100%-28px)]"
                )}
            />
        </div>
    );
}
