import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import './Carousel.css'

interface CarouselProps {
  images: string[]
  title: string
}

export default function Carousel({ images, title }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="carousel-container">
      <h3>{title}</h3>
      <div className="carousel-wrapper">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <img 
                    src={image} 
                    alt={`${title} example ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button carousel-button--prev" onClick={scrollPrev}>
          &#8249;
        </button>
        <button className="carousel-button carousel-button--next" onClick={scrollNext}>
          &#8250;
        </button>
      </div>
    </div>
  )
}
