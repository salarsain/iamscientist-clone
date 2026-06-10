export default function PrizesSection() {
  return (
    <section className="text-white py-6 md:py-16 bg-[#390276]">
      {/* Header */}
      <div className="flex flex-col items-center">
        <p className="mt-3 text-2xl md:text-4xl font-bold">Latest Prizes</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-center">
          Find Out the Latest Competition Prizes
        </h2>
        <div className="w-28 h-1 rounded-lg bg-white mt-4" />
      </div>

      {/* Medal Cards */}
      <div className="w-full md:w-[80%] 2xl:w-[65%] mx-auto text-center px-6 mt-12">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-8">
          {/* Silver - order 2 on desktop */}
          <div className="w-full md:w-full flex flex-col justify-center items-center md:mt-8 order-2 md:order-1">
            <div className="flex justify-center gap-2 items-center mb-4 2xl:mb-8">
              <img
                src="https://iamscientist.ai/_next/static/media/Silver-Medal.2a28f30f.png"
                alt="Silver Medal"
                width={100}
                height={100}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://placeholder.co/100x100/C8C8C8/333333?text=🥈'
                }}
              />
              <h3 className="text-2xl md:text-3xl font-medium font-inter">Silver</h3>
            </div>
            <div className="bg-[rgba(200,14,189,1)] p-6 rounded-2xl shadow-lg w-full flex flex-col justify-between">
              <p className="font-inter flex items-center justify-center text-base md:text-xl font-medium h-auto">
                Honored for excellent effort and creative skills
              </p>
            </div>
          </div>

          {/* Gold - order 1 on desktop (center, elevated) */}
          <div className="w-full md:w-full flex flex-col justify-center items-center order-1 md:order-2">
            <div className="flex justify-center gap-2 items-center mb-4 2xl:mb-8">
              <img
                src="https://iamscientist.ai/_next/static/media/Gold-Medal.3966f5e0.png"
                alt="Gold Medal"
                width={100}
                height={100}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://placeholder.co/100x100/FFD700/333333?text=🥇'
                }}
              />
              <h3 className="text-2xl md:text-3xl font-medium font-inter">Gold</h3>
            </div>
            <div className="flex justify-center items-center border border-white border-opacity-70 text-base md:text-xl p-6 rounded-2xl shadow-lg w-full h-auto flex-col md:mb-12 md:py-8">
              <p className="font-inter font-medium">
                Awarded for outstanding performance and remarkable innovation
              </p>
            </div>
          </div>

          {/* Bronze - order 3 */}
          <div className="w-full md:w-full h-auto flex flex-col justify-center items-center md:mt-8 order-3">
            <div className="flex justify-center gap-2 items-center mb-4 2xl:mb-8">
              <img
                src="https://iamscientist.ai/_next/static/media/Bronze-Medal.ea57b497.png"
                alt="Bronze Medal"
                width={100}
                height={100}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://placeholder.co/100x100/CD7F32/FFFFFF?text=🥉'
                }}
              />
              <h3 className="text-2xl md:text-3xl font-medium font-inter">Bronze</h3>
            </div>
            <div className="bg-[rgba(200,14,189,1)] h-auto p-6 rounded-2xl shadow-lg w-full flex flex-col justify-center items-center">
              <p className="font-inter flex justify-center items-center text-base md:text-xl font-medium h-auto">
                Honored for hard work and great progress
              </p>
            </div>
          </div>
        </div>

        {/* Merit Awards */}
        <div className="bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] p-8 rounded-2xl shadow-lg mt-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold">Merit Awards</h2>
          <p className="font-inter font-bold text-base md:text-xl mt-2">
            The top 20 students of the contest will receive a fully sponsored, one-month online crash course on AI, taught by industry expert
          </p>
        </div>
      </div>
    </section>
  )
}
