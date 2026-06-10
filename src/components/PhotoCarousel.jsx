import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const carouselImages = [
  { src: 'https://iamscientist.ai/carousel/img%201.jpeg', alt: 'Slide 1' },
  { src: 'https://iamscientist.ai/carousel/img2.jpeg', alt: 'Slide 2' },
  { src: 'https://iamscientist.ai/carousel/img3.jpeg', alt: 'Slide 3' },
  { src: 'https://iamscientist.ai/carousel/img4.jpeg', alt: 'Slide 4' },
  { src: 'https://iamscientist.ai/carousel/img%205.jpeg', alt: 'Slide 5' },
  { src: 'https://iamscientist.ai/carousel/img6.jpeg', alt: 'Slide 6' },
  { src: 'https://iamscientist.ai/carousel/img7.jpeg', alt: 'Slide 7' },
]

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = carouselImages.length

  // Auto-play: move forward every 3 seconds, loop back to start
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(timer)
  }, [totalSlides])

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  return (
    <section className="relative w-full overflow-hidden py-12 bg-[#390276]">
      <div className="relative flex justify-center items-center h-[350px] md:h-[400px]">
        {carouselImages.map((img, index) => {
          // Calculate circular distance
          let diff = index - currentIndex
          if (diff > totalSlides / 2) diff -= totalSlides
          if (diff < -totalSlides / 2) diff += totalSlides

          const offset = diff * 200
          let scale = 1
          if (diff === 0) scale = 1
          else if (Math.abs(diff) === 1) scale = 0.85
          else scale = 0.7

          const zIndex = 50 - Math.abs(diff)
          const isVisible = Math.abs(diff) <= 3

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${offset}px) scale(${scale})`,
                zIndex: zIndex,
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[300px] md:h-[350px] object-cover"
                  draggable="false"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `https://placeholder.co/400x350/390276/FFFFFF?text=Event+${index + 1}`
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Nav Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-200 transition z-50"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow hover:bg-gray-200 transition z-50"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
