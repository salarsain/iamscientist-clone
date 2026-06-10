const galleryImages = [
  { src: 'https://iamscientist.ai/images/Container%20(1).webp', alt: 'Image 1' },
  { src: 'https://iamscientist.ai/images/Container%20(2).webp', alt: 'Image 2' },
  { src: 'https://iamscientist.ai/images/Container%20(3).webp', alt: 'Image 3' },
  { src: 'https://iamscientist.ai/images/Container%20(4).webp', alt: 'Image 4' },
  { src: 'https://iamscientist.ai/images/Container%20(5).webp', alt: 'Image 5' },
]

export default function Gallery() {
  return (
    <div className="bg-[#280253] w-full p-4 pb-28">
      {/* Desktop: 5-column grid */}
      <div className="hidden sm:grid grid-cols-5 gap-4">
        {galleryImages.map((img, index) => (
          <div key={index} className="relative w-full h-0 pb-[65%]">
            <img
              src={img.src}
              alt={img.alt}
              className="rounded-md absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = `https://placeholder.co/400x260/280253/FFFFFF?text=Gallery+${index + 1}`
              }}
            />
          </div>
        ))}
      </div>

      {/* Mobile: 2-column grid */}
      <div className="sm:hidden grid grid-cols-2 gap-3">
        {galleryImages.map((img, index) => (
          <div key={index} className="relative w-full h-0 pb-[65%]">
            <img
              src={img.src}
              alt={img.alt}
              className="rounded-md absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = `https://placeholder.co/400x260/280253/FFFFFF?text=Gallery+${index + 1}`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
