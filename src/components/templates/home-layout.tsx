"use client";

import ArtistrySection from "../organisms/home/artistry";
import FeaturedCollections from "../organisms/home/featured";
import Hero from "../organisms/home/hero";
import HomeProductSection from "../organisms/home/home-products";
import LimitedEdition from "../organisms/home/limited-edition";
import ArtistSection from "../organisms/home/meet";
import BehindTheScenes from "../organisms/home/sence";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <HomeProductSection/>
      <FeaturedCollections/>
      <LimitedEdition/>
      <BehindTheScenes/>
      <ArtistrySection/>
      <ArtistSection/>
    </div>
  );
}
