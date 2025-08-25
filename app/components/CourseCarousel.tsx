"use client";
import { useState, useEffect } from 'react';
import { Paper, Text, Title, Button, Group, Container, Grid, Badge, Stack, List, ThemeIcon, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconCheck, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const courseSlides = [
  {
    id: 1,
    badges: [
      { text: "FREE TRIAL", variant: "filled", color: "lime" }
    ],
    title: "VARC Mastery",
    subtitle: "95+ Percentile in Just 1–1.5 Months",
    description:
      "Stop preparing, start cracking! Combines strategy-first training, elimination-based solving, and mentor-proven shortcuts to skyrocket your VARC scores. Experience smart, efficient learning designed to give you real percentile gains in your next CAT attempt.",
    features: [
      "3 powerful strategy masterclasses",
      "Exclusive 95+ percentile mindset training",
      "RC Masterclass — fast reading, smart elimination",
      "Pro para jumbles, summaries & completions tactics",
      "Elimination-based solving framework",
      "Personalized error analysis after every session",
    ],
    stats: [
      { number: "1-1.5", label: "Months to Results" },
      { number: "95+ %ile", label: "Goal Achievers" },
      { number: "9", label: "Years Mentor Experience" },
      { number: "100%", label: "Personalized Analysis" }
    ],
    pricing: {
      originalPrice: "₹7,999",
      currentPrice: "FREE TRIAL",
      discount: "100% OFF trial"
    },
    guarantee: "Risk-free first session — no payment needed",
    ctaButtons: [

      { text: "Book Free Trial", variant: "filled" }

   
    ],
    rightBadges: [
      { text: "VARC EXPERT", color: "blue" },
      { text: "FAST TRACK", color: "grape" }
    ],
    illustration: "/hero.jpg"
  }
];

export function CourseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courseSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courseSlides.length) % courseSlides.length);
    setIsAutoPlaying(false);
  };

  const handleNextClick = () => {
    nextSlide();
    setIsAutoPlaying(false);
  };

  // Auto-scroll effect (if multiple slides)
  useEffect(() => {
    if (!isAutoPlaying || courseSlides.length <= 1) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slide = courseSlides[currentSlide];

  return (
    <Container size="xl" py={isMobile ? 16 : 30}>
      <div style={{ position: 'relative' }}>
        {/* Navigation arrows for multiple slides */}
  {courseSlides.length > 1 && !isMobile && (
          <>
            <Button
              variant="white"
              size="sm"
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                borderRadius: '50%',
                width: 40,
                height: 40,
                padding: 0
              }}
            >
              <IconChevronLeft size={18} />
            </Button>

            <Button
              variant="white"
              size="sm"
              onClick={handleNextClick}
              style={{
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                borderRadius: '50%',
                width: 40,
                height: 40,
                padding: 0
              }}
            >
              <IconChevronRight size={18} />
            </Button>
          </>
        )}

  <Grid gutter={isMobile ? 24 : 50} align="center">
          {/* Left Content */}
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <Stack gap={10}>
              {/* Top Badges */}
              <Group gap={10} wrap="wrap">
                {slide.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant={badge.variant}
                    color={badge.color}
                    size="lg"
                    radius="md"
                    style={{ textTransform: 'none' }}
                  >
                    {badge.text}
                  </Badge>
                ))}
              </Group>

              {/* Main Title */}
              <div>
                <Title 
                  order={1}
                  style={{
                    fontSize: isMobile ? 'clamp(1.4rem, 5vw, 2.2rem)' : 'clamp(1.8rem, 4vw, 3.5rem)',
                    lineHeight: 1.1,
                    fontWeight: 800,
                    color: '#1a1a1a'
                  }}
                >
                  {slide.title}
                </Title>
                <Title 
                  order={2}
                  c="blue.6"
                  style={{
                    fontSize: isMobile ? 'clamp(1.2rem, 4vw, 1.9rem)' : 'clamp(1.5rem, 3.5vw, 3rem)',
                    lineHeight: 1.2,
                    fontWeight: 700,
                    marginTop: isMobile ? 6 : 8
                  }}
                >
                  {slide.subtitle}
                </Title>
              </div>

              {/* Description */}
              <Text 
                size={isMobile ? 'md' : 'lg'}
                c="dimmed"
                style={{ 
                  lineHeight: isMobile ? 1.5 : 1.6,
                  fontSize: isMobile ? 'clamp(12px, 2.8vw, 16px)' : 'clamp(14px, 2vw, 18px)'
                }}
              >
                {slide.description}
              </Text>

              {/* Mobile Pricing - Only visible on mobile */}
              <Paper p={isMobile ? 14 : 20} radius="lg" shadow="sm" bg="blue.0" hiddenFrom="lg">
                <Group justify="space-between" align="center">
                  <div>
                    <Text size="lg" td="line-through" c="dimmed">
                      {slide.pricing.originalPrice}
                    </Text>
                    <Title order={2} c="blue.6" style={{ lineHeight: 1 }}>
                      {slide.pricing.currentPrice}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {slide.guarantee}
                    </Text>
                  </div>
                  <Badge color="grape" size="xl" variant="filled">
                    {slide.pricing.discount}
                  </Badge>
                </Group>
              </Paper>

              {/* Features List */}
              <Grid gutter={isMobile ? 10 : 15}>
                {slide.features.map((feature, index) => (
                  <Grid.Col span={{ base: 12, sm: 6 }} key={index}>
                    <Group gap={10} align="flex-start">
                      <ThemeIcon color="blue" size={20} radius="xl" style={{ marginTop: 2 }}>
                        <IconCheck size={12} />
                      </ThemeIcon>
                      <Text size="sm" style={{ flex: 1 }}>
                        {feature}
                      </Text>
                    </Group>
                  </Grid.Col>
                ))}
              </Grid>

              {/* CTA Buttons */}
              <Group gap={isMobile ? 10 : 15} wrap="wrap">
                {/* Enroll Now -> redirect to payment */}
                <Button
                  component="a"
                  href="/payment"
                  variant="filled"
                  size={isMobile ? 'sm' : 'lg'}
                  radius="md"
                  style={{
                    minWidth: 'fit-content',
                    fontSize: isMobile ? '13px' : '16px',
                    fontWeight: 600
                  }}
                >
                  Enroll Now →
                </Button>

                <Group gap={5} style={{ marginLeft: 'auto' }}>
                  <IconCheck size={16} color="#10b981" />
                  <Text size="sm" c="dimmed">
                    {slide.guarantee}
                  </Text>
                </Group>
              </Group>

              {/* Stats */}
              <Grid gutter={20} mt={10}>
                {slide.stats.map((stat, index) => (
                  <Grid.Col span={{ base: 6, sm: 3 }} key={index}>
                    <div style={{ textAlign: 'center' }}>
                      <Title 
                        order={3} 
                        c="blue.6" 
                        size="h2"
                        style={{ marginBottom: 4 }}
                      >
                        {stat.number}
                      </Title>
                      <Text size="xs" c="dimmed" fw={500}>
                        {stat.label}
                      </Text>
                    </div>
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          </Grid.Col>

          {/* Right Illustration - COMPLETELY HIDDEN on mobile */}
          <Grid.Col span={5} visibleFrom="lg">
            <div style={{ position: 'relative', textAlign: 'center' }}>
              {/* Right side badges */}
              <div style={{ 
                position: 'absolute', 
                top: 0, 
                right: 0, 
                zIndex: 5,
                display: 'flex',
                flexDirection: 'column',
                gap: 10
              }}>
                {slide.rightBadges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="filled"
                    color={badge.color}
                    size="lg"
                    radius="md"
                  >
                    {badge.text}
                  </Badge>
                ))}
              </div>

              {/* Pricing Box - Desktop only */}
              <Paper 
                p={20} 
                radius="lg" 
                shadow="lg" 
                bg="white"
                style={{ 
                  position: 'absolute',
                  bottom: 20,
                  right: 0,
                  zIndex: 5,
                  minWidth: 200
                }}
              >
                <div style={{ textAlign: 'right' }}>
                  <Text size="sm" td="line-through" c="dimmed">
                    {slide.pricing.originalPrice}
                  </Text>
                  <Title order={2} c="blue.6" style={{ lineHeight: 1 }}>
                    {slide.pricing.currentPrice}
                  </Title>
                  {/* GST removed */}
                </div>
              </Paper>

              {/* NO IMAGE ON MOBILE - Desktop only */}
              <div style={{
                padding: '40px 20px',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                {/* Desktop illustration */}
                <img
                  src={slide.illustration}
                  alt={`${slide.title} illustration`}
                  loading="lazy"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: 12
                  }}
                />
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
}
