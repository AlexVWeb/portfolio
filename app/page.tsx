"use client"

import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}
