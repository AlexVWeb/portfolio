"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Transition from "@/components/ui/transition";

export default function ThemeTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const { theme } = useTheme();
    const [triggerTransition, setTriggerTransition] = useState(false);

    useEffect(() => {
        // When theme changes, trigger the transition
        if (theme) {
            setTriggerTransition(true);
            // Reset trigger after a short delay so it can be triggered again
            // Ideally the Transition component's onFinished callback handles cleanup, 
            // but for the trigger prop to change "to true" again, we need to reset it.
            const t = setTimeout(() => setTriggerTransition(false), 100);
            return () => clearTimeout(t);
        }
    }, [theme]);

    return (
        <Transition
            trigger={triggerTransition}
            type="curved"
            direction="bottom"
            introDuration={0.0} // Start immediately
            transitionDuration={1.0}
            skip={false}
            // We want the content to be visible always, the transition just overlays a clip path?
            // Actually ScrollXUI transition usually overlays an intro. 
            // For a theme switch, we often want a "wipe" effect.
            // The Transition component implementation provided renders children, 
            // and overlays the intro. 
            // If we put the main app in children, it's visible. 
            // If trigger puts the overlay ON, then animates it off (clipPath grows or shrinks?).
            // Let's check logic:
            // showIntro=true => overlay is present.
            // progress goes 0 -> 1.
            // curved clip: radius shrinks or grows? 
            // getCurvedClip: radius = max(0, startRadius * (1 - p)). 
            // So at p=0, radius=startRadius (full screen covered?). At p=1, radius=0 (nothing).
            // Wait, circle(radius... at ...). 
            // If radius is 160% -> 0%, it goes from "covering everything" to "vanishing".
            // That sounds like an "Exit" transition (Intro is leaving).
            // So triggering it creates the overlay (full screen) then shrinks it to reveal content?
            // Yes. So on theme change, we want to momentarily cover the screen and then reveal?
            // Or cover it then change theme then reveal? 
            // useTheme updates immediately. 
            // So if we trigger this, it will cover the screen with the `className` bg (default neutral-900/white).
            // If we switch to Dark, we want the overlay to be... Dark? or White?
            // Usually "Theme Transition" wipes with the NEW theme color.
            // So if managing theme is done by next-themes, the overlay should probably adopt the new background color.
            // We need contrasting colors so the wipe is visible against the new theme background.
            // If theme is Dark, background is Dark, so overlay should be White (creating a "White shrinking" effect).
            // If theme is Light, background is Light, so overlay should be Black.
            className="bg-black dark:bg-white"
            intro={null}
        >
            {children}
        </Transition>
    );
}
