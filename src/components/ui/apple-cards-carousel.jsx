import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export function Carousel({ items, label = 'Achievements' }) {
  const [api, setApi] = useState(null);
  const reduceMotion = useReducedMotion();

  if (!items.length) return null;

  // Portal events bubble through React: modal keys must not move the carousel.
  const handleKeyDown = (event) => {
    if (event.target.closest('[role="dialog"]')) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      if (event.key === 'ArrowLeft') api?.scrollPrev();
      else api?.scrollNext();
    }
  };

  return (
    <BaseCarousel
      opts={{ align: 'start', loop: false, duration: reduceMotion ? 0 : 25 }}
      setApi={setApi}
      aria-label={label}
      onKeyDownCapture={handleKeyDown}
      className="w-full"
    >
      <CarouselContent className="py-6 md:py-10">
        {items.map((item, index) => (
          <CarouselItem key={item.key ?? index} className="basis-auto" aria-label={`${index + 1} of ${items.length}`}>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.1 }}
            >
              {item}
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end gap-2">
        <CarouselPrevious className="static h-10 w-10 translate-x-0 translate-y-0 border-0 bg-muted text-muted-foreground hover:bg-accent [&_svg]:text-current" />
        <CarouselNext className="static h-10 w-10 translate-x-0 translate-y-0 border-0 bg-muted text-muted-foreground hover:bg-accent [&_svg]:text-current" />
      </div>
    </BaseCarousel>
  );
}

export function Card({ card }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          aria-label={`View achievement: ${card.title}`}
          className="group relative flex h-[180px] w-40 flex-col items-start justify-start overflow-hidden whitespace-normal rounded-3xl bg-muted p-0 text-left shadow-none ring-inset focus-visible:ring-2 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/25 dark:hover:shadow-black/60 md:h-[340px] md:w-64"
        >
          <BlurImage src={card.src} alt="" className="absolute inset-0 object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02]" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
          <span className="relative z-10 p-8 text-white">
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] md:text-sm">{card.category}</span>
            <span className="mt-2 block max-w-xs text-xl font-semibold leading-tight [text-wrap:balance] drop-shadow-sm md:text-3xl">{card.title}</span>
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-3xl bg-background p-6 text-foreground sm:rounded-3xl md:p-10 motion-reduce:!animate-none [&>button]:h-10 [&>button]:w-10 [&>button]:rounded-full [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:opacity-100 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button_svg]:h-5 [&>button_svg]:w-5 [&>button_svg]:text-current"
      >
        <p className="pr-12 text-sm font-medium text-muted-foreground md:text-base">{card.category}</p>
        <DialogTitle className="pr-10 text-2xl font-semibold leading-tight md:text-5xl">{card.title}</DialogTitle>
        <DialogDescription className="text-base leading-relaxed md:text-xl">{card.description}</DialogDescription>
        <div className="pt-4">{card.content}</div>
      </DialogContent>
    </Dialog>
  );
}

export function BlurImage({ src, alt, className, onLoad, onError, ...props }) {
  const imageRef = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const image = imageRef.current;
    setStatus(image?.complete ? (image.naturalWidth ? 'loaded' : 'error') : 'loading');
  }, [src]);

  return (
    <>
      {status === 'error' && (
        <span role={alt ? 'img' : undefined} aria-label={alt || undefined} className={cn('block h-full w-full bg-muted', className)} />
      )}
      <img
        {...props}
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn('h-full w-full transition duration-300 motion-reduce:transition-none', status === 'loading' ? 'blur-sm' : 'blur-0', className, status === 'error' && 'hidden')}
        onLoad={(event) => { setStatus('loaded'); onLoad?.(event); }}
        onError={(event) => { setStatus('error'); onError?.(event); }}
      />
    </>
  );
}
