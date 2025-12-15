"use client";

import { MultiSwitch } from "@/components/ui/multi-switch";
import { useLanguage } from "@/components/contexts/LanguageContext";

export default function LanguageSwitch() {
    const { language, setLanguage } = useLanguage();

    const options = [
        { value: "fr", icon: <span role="img" aria-label="French Flag">🇫🇷</span> },
        { value: "en", icon: <span role="img" aria-label="UK Flag">🇬🇧</span> },
    ];

    return (
        <MultiSwitch
            options={options}
            currentValue={language}
            onChange={(val) => setLanguage(val as "fr" | "en")}
            className="w-14" // Fixed width for 2 icons
        />
    );
}
