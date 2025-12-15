
"use client";

import { MagicCard } from "@/components/ui/magic-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/components/contexts/LanguageContext";

export function Contact() {
    const { t } = useLanguage();
    return (
        <section id="contact" className="w-full py-20 px-4 md:px-8 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('contact.title')}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <MagicCard
                    className="cursor-pointer flex-col items-center justify-center p-8 shadow-2xl"
                    gradientColor="#D9D9D955"
                >
                    <form className="w-full space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">{t('contact.name')}</Label>
                                <Input id="name" placeholder={t('contact.name') + "..."} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">{t('contact.email')}</Label>
                                <Input id="email" type="email" placeholder="john@example.com" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">{t('contact.message')}</Label>
                            <Textarea
                                id="message"
                                placeholder={t('contact.message') + "..."}
                                className="min-h-[150px]"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full md:w-auto md:min-w-[200px]">
                            {t('contact.send')}
                        </Button>
                    </form>
                </MagicCard>
            </div>
        </section>
    );
}
