"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Paper, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { HeroCarousel } from "./HeroCarousel";
import { CourseCarousel } from "./CourseCarousel";
import { SuccessStoriesCarousel } from "./SuccessStoriesCarousel";
import "@mantine/carousel/styles.css";

export function UnifiedCarousel() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  // autoplay plugin
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // 3s per slide
  );

  return (
    <Paper withBorder radius="md" shadow="sm" p="md">
      <Carousel
        withIndicators
        withControls={!isMobile}
        controlSize={34}
        styles={{
          viewport: { overflow: "hidden" },
        }}
        plugins={[autoplay.current]} // attach autoplay plugin
        onMouseEnter={autoplay.current.stop} // pause on hover
        onMouseLeave={autoplay.current.reset} // resume when mouse leaves
        loop // makes it cycle infinitely
      >
        <Carousel.Slide>
          <HeroCarousel />
        </Carousel.Slide>
        <Carousel.Slide>
          <CourseCarousel />
        </Carousel.Slide>
        <Carousel.Slide>
          <div style={{ marginTop: 12 }}>
            <SuccessStoriesCarousel />
          </div>
        </Carousel.Slide>
      </Carousel>
    </Paper>
  );
}
