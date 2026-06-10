import { useState, useEffect } from 'react'

const slides = [
  {
    titleImage: 'https://iamscientist.ai/hero/Banner-Title.png',
    heading:
      "I'm Scientist empowers young minds to explore AI, Machine Learning and Deep Learning through exciting contests and interactive courses. Join us to learn new skills, compete in exciting challenges and win incredible prizes.",
    rightImage: 'https://iamscientist.ai/hero/Hero-Banner-Bg.webp',
  },
  {
    titleImage: 'https://iamscientist.ai/hero/Title.png',
    heading:
      'Spark the curiosity of young minds with fun and challenging contests. Perfect for students of all ages, whether competing individually or as part of a school team, offering a chance to explore the world of technology and unlock your potential.',
    rightImage: 'https://iamscientist.ai/hero/Image-New.webp',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full h-[380px] md:h-[550px] 2xl:h-[650px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('https://iamscientist.ai/hero/BG.webp')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? 'active' : ''}`}
          >
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="w-full md:w-[80%] mx-auto flex gap-6 flex-col md:flex-row">
                {/* Left: Text Content */}
                <div className="md:w-[70%] lg:w-[45%] w-full h-[320px] md:h-[480px] 2xl:h-[630px] px-3 md:px-12 flex flex-col justify-center space-y-4">
                  {/* Title Image */}
                  <div className="w-[40%] md:w-[70%] lg:w-full">
                    <img
                      src={slide.titleImage}
                      alt="Title"
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = `https://placeholder.co/600x150/04236E/FFFFFF?text=I+am+Scientist`
                      }}
                    />
                  </div>

                  {/* Heading */}
                  <h2 className="md:ml-2 w-full 2xl:w-[90%] text-base 2xl:text-xl text-white font-semibold font-inter text-justify">
                    {slide.heading}
                  </h2>

                  {/* CTA + Stats */}
                  <div className="flex justify-between items-center">
                    <a href="#about">
                      <button className="border md:ml-2 w-fit lg:w-[250px] font-inter border-gray-200 text-base md:text-xl font-bold p-1 px-4 md:px-6 2xl:text-xl h-[50px] 2xl:h-[70px] mt-2 2xl:mt-0 transform transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-2xl rounded-bl-2xl bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer text-nowrap">
                        Explore Now
                      </button>
                    </a>
                    <h2 className="font-inter text-sm 2xl:text-lg mx-4 font-semibold text-white">
                      <span className="font-inter text-2xl md:text-5xl text-[#53b9e3] font-bold">
                        5000+
                      </span>
                      <br />
                      Trusted Schools / Academies
                    </h2>
                  </div>
                </div>

                {/* Right: Hero Image */}
                <div className="w-full md:w-1/2 mx-auto hidden md:flex justify-center items-center h-[480px] 2xl:h-[600px]">
                  <img
                    src={slide.rightImage}
                    alt="Hero Banner"
                    className="w-full h-auto max-h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://placeholder.co/700x600/04236E/FFFFFF?text=Hero+Image`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? 'w-8 bg-white'
                : 'w-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
