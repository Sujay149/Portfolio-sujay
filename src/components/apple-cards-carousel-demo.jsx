import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { mockData } from '@/mock';
import { Carousel, Card, BlurImage } from '@/components/ui/apple-cards-carousel';

export default function AppleCardsCarouselDemo() {
  const reduceMotion = useReducedMotion();
  const cards = mockData.about.achievements.map((achievement) => (
    <Card
      key={achievement.id}
      card={{
        category: 'Achievement',
        title: achievement.title,
        description: achievement.description,
        src: achievement.image,
        content: (
          <div className="overflow-hidden rounded-2xl bg-muted">
            <BlurImage
              src={achievement.image}
              alt={achievement.title}
              width={800}
              height={600}
              className="aspect-[4/3] max-h-[60vh] object-contain"
            />
          </div>
        ),
      }}
    />
  ));

  return (
    <section id="achievements" aria-labelledby="achievements-title" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          viewport={{ once: true }}
          className="mb-4 max-w-3xl"
        >
          <h2 id="achievements-title" className="mb-4 text-4xl font-bold text-foreground md:text-5xl">My Achievements</h2>
          <p className="text-lg text-muted-foreground">Curious about what I've accomplished? Let my track record speak for itself.</p>
        </motion.div>
        <Carousel items={cards} />
      </div>
    </section>
  );
}
