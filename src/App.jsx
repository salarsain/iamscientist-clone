import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSlider from './components/HeroSlider.jsx'
import ContestSchedule from './components/ContestSchedule.jsx'
import CoursesSection from './components/CoursesSection.jsx'
import PartnersMarquee from './components/PartnersMarquee.jsx'
import PrizesSection from './components/PrizesSection.jsx'
import PhotoCarousel from './components/PhotoCarousel.jsx'
import FAQ from './components/FAQ.jsx'
import Gallery from './components/Gallery.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0118]">
      <Navbar />
      <HeroSlider />
      <ContestSchedule />
      <CoursesSection />
      <PartnersMarquee />
      <PrizesSection />
      <PhotoCarousel />
      <FAQ />
      <Gallery />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

export default App
