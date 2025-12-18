
"use client";

import { useState, FormEvent } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/components/contexts/LanguageContext";

export function Contact() {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: t('contact.success') });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus({ type: 'error', message: data.error || t('contact.error') });
            }
        } catch (error) {
            setStatus({ type: 'error', message: t('contact.error') });
        } finally {
            setIsLoading(false);
        }
    };

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
                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                        {status.type && (
                            <div
                                className={`p-4 rounded-md ${status.type === 'success'
                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-300 dark:border-green-700'
                                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-300 dark:border-red-700'
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">{t('contact.name')}</Label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder={t('contact.name') + "..."}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">{t('contact.email')}</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@example.com"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">{t('contact.message')}</Label>
                            <Textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={t('contact.message') + "..."}
                                className="min-h-[150px]"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full md:w-auto md:min-w-[200px]"
                            disabled={isLoading}
                        >
                            {isLoading ? t('contact.sending') : t('contact.send')}
                        </Button>
                    </form>
                </MagicCard>
            </div>
        </section>
    );
}
