"use client";

import Hero from "@/sections/Homepage/Hero";
import Products from "@/components/Products";
import ZX9Speaker from "@/sections/Homepage/ZX9Speaker";
import ZX7Speaker from "@/sections/Homepage/ZX7Speaker";
import YX1Earphones from "@/sections/Homepage/YX1Earphones";
import AudioGear from "@/components/AudioGear";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      <AudioGear margin="my-56" />
    </main>
  );
}