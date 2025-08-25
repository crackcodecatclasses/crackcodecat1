"use client";
import { Box, Container, Title, Text, Grid, Paper, SimpleGrid, Group, Stack, ThemeIcon } from '@mantine/core';
import { IconAward, IconSchool, IconTimeline, IconBriefcase } from '@tabler/icons-react';

export function FacultySpotlight() {
  return (
    <Box component="section" id="mentors" py={{ base: 28, md: 64 }} style={{
      background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container size="lg">
        <Grid gutter={{ base: 24, md: 40 }} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="/crackcode.png"
                alt="Abhishek Anand"
                style={{
                  width: '100%',
                  maxWidth: '540px',
                  height: 'clamp(200px, 55vw, 520px)',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 16
                }}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <Text size="lg" fw={700} style={{ color: '#0066FF' }}>
                Meet Your Mentor
              </Text>
              <Title order={1} size={48} fw={900} style={{ color: '#003366', letterSpacing: -1.5, fontSize: 'clamp(22px, 6.5vw, 48px)' }}>
                Abhishek Anand
              </Title>
              <Text size="xl" c="dimmed" style={{ lineHeight: 1.6, fontSize: 'clamp(14px, 4.5vw, 18px)' }}>
                Known for effortlessly simplifying the most complex problems, Maruti Sir is a revered mentor for CAT aspirants nationwide. With a stellar track record and a passion for teaching, he has guided thousands to success.
              </Text>
              
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 10, sm: 14, md: 18 }} mt="md">
                <Paper withBorder p="md" radius="md" style={{ background: '#fff' }}>
                  <Group>
                    <ThemeIcon size="lg" variant="light" color="blue" radius="md">
                      <IconAward size={24} />
                    </ThemeIcon>
                    <Box>
                      <Text fw={700}>CAT 95+ ile Scorer</Text>
                      <Text size="sm" c="dimmed">India's top 5 percentile</Text>
                    </Box>
                  </Group>
                </Paper>
                <Paper withBorder p="md" radius="md" style={{ background: '#fff' }}>
                  <Group>
                    <ThemeIcon size="lg" variant="light" color="grape" radius="md">
                      <IconSchool size={24} />
                    </ThemeIcon>
                    <Box>
                      <Text fw={700}>VARC Decoder</Text>
                      <Text size="sm" c="dimmed">Cracked code of VARC</Text>
                    </Box>
                  </Group>
                </Paper>
                <Paper withBorder p="md" radius="md" style={{ background: '#fff' }}>
                  <Group>
                    <ThemeIcon size="lg" variant="light" color="teal" radius="md">
                      <IconTimeline size={24} />
                    </ThemeIcon>
                    <Box>
                      <Text fw={700}>10 Years CAT Journey</Text>
                      <Text size="sm" c="dimmed">CAT 2015-2025</Text>
                    </Box>
                  </Group>
                </Paper>
                <Paper withBorder p="md" radius="md" style={{ background: '#fff' }}>
                  <Group>
                    <ThemeIcon size="lg" variant="light" color="orange" radius="md">
                      <IconBriefcase size={24} />
                    </ThemeIcon>
                    <Box>
                      <Text fw={700}>Knowledge Gap Specialist</Text>
                      <Text size="sm" c="dimmed">Teach what traditional coaching misses</Text>
                    </Box>
                  </Group>
                </Paper>
              </SimpleGrid>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
