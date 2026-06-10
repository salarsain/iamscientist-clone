import { useState, useEffect } from 'react'

const tabData = {
  General: {
    color: '#1977ff',
    items: [
      { date: '01', month: 'MAY', title: 'Contest Registration', range: '01 May 2025 - 15 Aug 2025' },
      { date: '16', month: 'MAY', title: 'Course Registration', range: '16 May 2025 - 31 May 2025' },
      { date: '20', month: 'MAY', title: 'Contest Results', range: '20 May 2025 - 25 May 2025' },
    ],
  },
  Contest: {
    color: '#fe3fe5',
    items: [
      { date: '01', month: 'MAY', title: 'Registration Dates', range: '01 May 2025 - 15 Aug 2025' },
      { date: '20', month: 'AUG', title: 'Registration Confirmation', range: '01 Aug 2025 - 20 Aug 2025' },
      { date: '27', month: 'AUG', title: 'Contest Dates', range: '25 Aug 2025 - 27 Aug 2025' },
    ],
  },
  Course: {
    color: '#5ff6ff',
    items: [
      { date: '16', month: 'MAY', title: 'Registration Dates', range: '16 May 2025 - 31 May 2025' },
      { date: '1', month: 'DEC', title: 'Registration Confirmation', range: '20 MAY 2025 - 31 Dec 2024' },
      { date: '01', month: 'JUN', title: 'Course Starting Dates', range: '1 June 2025 - 30 Aug 2025' },
    ],
  },
}

const tabs = Object.keys(tabData)

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date(targetDate).getTime()
    const update = () => {
      const now = Date.now()
      const diff = Math.max(0, target - now)
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

export default function ContestSchedule() {
  const [activeTab, setActiveTab] = useState('General')
  const currentData = tabData[activeTab]
  const color = currentData.color
  const countdown = useCountdown('2025-08-25T00:00:00')

  return (
    <>
      {/* Contest Starts Soon Bar with Countdown */}
      <div className="bg-purple-800 text-white">
        <div className="w-full md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4">
          <div className="flex-1 text-base md:text-xl text-center md:text-left">
            <p>Get ready to show your skills and creativity in our contest</p>
          </div>
          <div className="bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] py-4 px-6 mt-3 md:mt-0 text-center flex flex-col items-center justify-center rounded-lg md:rounded-none">
            <p className="font-inter font-bold text-sm md:text-lg mb-3">Contest Starts Soon!</p>
            <div className="flex gap-2 md:gap-3">
              <div className="flex flex-col items-center">
                <span className="bg-white/20 rounded-md px-2 py-1 text-lg font-bold w-[42px] text-center">{String(countdown.days).padStart(2, '0')}</span>
                <span className="text-[9px] mt-1 font-semibold">DAYS</span>
              </div>
              <span className="text-lg font-bold self-start mt-1">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/20 rounded-md px-2 py-1 text-lg font-bold w-[42px] text-center">{String(countdown.hours).padStart(2, '0')}</span>
                <span className="text-[9px] mt-1 font-semibold">HRS</span>
              </div>
              <span className="text-lg font-bold self-start mt-1">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/20 rounded-md px-2 py-1 text-lg font-bold w-[42px] text-center">{String(countdown.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] mt-1 font-semibold">MIN</span>
              </div>
              <span className="text-lg font-bold self-start mt-1">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/20 rounded-md px-2 py-1 text-lg font-bold w-[42px] text-center">{String(countdown.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] mt-1 font-semibold">SEC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <section
        id="contests"
        className="bg-[#210145] text-white py-6 md:py-12 px-3 flex justify-center"
        style={{
          backgroundImage: "url('https://iamscientist.ai/contest/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col items-center w-full">
          <p className="mt-3 text-2xl md:text-4xl font-bold">Schedule</p>
          <h2 className="text-center text-3xl md:text-5xl font-bold mt-3">
            The National I am Scientist System
          </h2>
          <p className="w-full md:w-1/2 2xl:w-[60%] font-normal text-base md:text-2xl text-center text-white mt-2">
            Stay tuned for registration details and get ready to unlock your potential
          </p>

          {/* 3 Cards Side by Side */}
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-12 max-w-7xl px-4">
            {tabs.map((tab) => {
              const data = tabData[tab]
              const c = data.color
              return (
                <div
                  key={tab}
                  className="border-2 rounded-xl p-3 md:p-4 w-full transition-all ease-in-out duration-500 hover:scale-105"
                  style={{ borderColor: c }}
                >
                  <h3 className="text-4xl font-bold mb-2" style={{ color: c }}>{tab}</h3>
                  <h4 className="text-black text-xl md:text-3xl xl:text-2xl text-center font-semibold mt-1 mb-4 bg-white rounded-lg p-2">
                    ANNOUNCEMENTS
                  </h4>

                  <div className="space-y-4">
                    {data.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-4 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
                      >
                        {/* Calendar Badge */}
                        <div
                          className="flex w-[70px] flex-col items-center rounded-lg text-white"
                          style={{
                            borderLeft: idx % 2 === 0 ? `3px solid ${c}` : 'none',
                            borderRight: idx % 2 === 1 ? `3px solid ${c}` : 'none',
                            borderTop: `3px solid ${c}`,
                          }}
                        >
                          <div
                            className="flex items-center justify-center w-16 h-6 rounded-tr-md rounded-tl-md relative"
                            style={{
                              borderRight: idx % 2 === 0 ? `4px solid ${c}` : `none`,
                              borderLeft: idx % 2 === 1 ? `3px solid ${c}` : `none`,
                              borderBottom: `3px solid ${c}`,
                            }}
                          >
                            <div className="w-1 h-1 rounded-full mx-1" style={{ backgroundColor: c }} />
                            <div className="w-1 h-1 rounded-full mx-1" style={{ backgroundColor: c }} />
                            <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg" style={{ backgroundColor: c }} />
                            <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg" style={{ backgroundColor: c }} />
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold flex items-center justify-center">{item.date}</span>
                            <span className="text-sm font-semibold flex items-center justify-center">{item.month}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="border-b-4">
                          <h5 className="text-white font-bold text-base whitespace-nowrap">{item.title}</h5>
                          <p
                            className="rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black"
                            style={{ backgroundColor: c }}
                          >
                            {item.range}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href="#enroll">
                    <button className="mt-6 bg-white w-full text-black py-3 px-4 text-base md:text-xl rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                      Enroll Now
                    </button>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Test Your Limits Section */}
      <div className="w-full pb-10 md:pb-0 h-auto md:h-[350px] xl:h-[300px] bg-[#5D3794] relative px-2 overflow-hidden">
        {/* Decorative elements */}
        <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tr-full rounded-br-full absolute left-0 bottom-0" />
        <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tl-full rounded-bl-full absolute right-0 top-3" />
        <div className="w-6 h-6 md:w-20 md:h-20 rounded-full bg-[#408CFB] absolute top-4 left-10 md:top-6 lg:left-28 2xl:left-36 shadow-xl" />
        <div className="w-6 h-6 md:w-20 md:h-20 rounded-full bg-[#408CFB] absolute bottom-4 right-10 md:bottom-6 lg:right-28 2xl:right-40 shadow-xl" />
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute bottom-4 left-8 md:bottom-8 lg:left-24 shadow-xl" />
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute top-6 right-8 md:top-14 lg:right-24 shadow-xl" />

        <div className="flex flex-col justify-center items-center relative z-10">
          <h3 className="font-bold text-3xl md:text-5xl text-white text-center pt-14 md:pt-12 w-3/4">
            Test Your Limits and Rise to the Top
          </h3>
          <p className="w-full md:w-[65%] 2xl:w-[45%] font-normal text-base md:text-xl text-center text-white mt-2">
            Start your journey with us and take part in our exciting competitions. Don&apos;t miss this chance to challenge yourself
          </p>
          <a href="#enroll">
            <button className="font-semibold text-base md:text-xl bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] py-2 md:py-3 px-2 md:px-6 text-white rounded-full mt-4 md:mt-8 transform transition-all duration-500 ease-in-out hover:opacity-90">
              Get started
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
