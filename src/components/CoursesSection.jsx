import { FaClock, FaUser, FaPlayCircle } from 'react-icons/fa'

const courses = [
  {
    image: 'https://iamscientist.ai/popularcourse/image3.webp',
    title: '●\tAI Basic Course',
    duration: '4 Months',
    students: '55 Students',
    lessons: '67 Lessons',
  },
  {
    image: 'https://iamscientist.ai/popularcourse/image1.webp',
    title: '●\tAI and Machine Learning',
    duration: '3 Months',
    students: '35 Students',
    lessons: '53 Lessons',
  },
  {
    image: 'https://iamscientist.ai/popularcourse/image2.webp',
    title: '●\tAdvance Deep Learning',
    duration: '2 Months',
    students: '45 Students',
    lessons: '64 Lessons',
  },
]

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="bg-[#210145] text-white py-6 md:py-12 2xl:py-14 px-4 flex flex-col items-center"
      style={{
        backgroundImage: "url('https://iamscientist.ai/popularcourse/bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-center">
          Explore Our Courses
        </h2>
        <div className="w-28 h-1 rounded-lg bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] mt-4" />
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 2xl:gap-6 mx-auto mt-14 md:w-[87%] 2xl:w-[75%] w-full">
        {courses.map((course, index) => (
          <div
            key={index}
            className="shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-xl w-full border-2 2xl:border-4 border-white transition-all ease-in-out duration-500 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, rgba(35,3,63,1) 32.12%, rgba(0,50,171,0.7) 100%)',
            }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-auto rounded-tl-xl rounded-tr-xl"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = `https://placeholder.co/600x340/23033F/FFFFFF?text=${encodeURIComponent(course.title)}`
              }}
            />
            <div className="flex flex-col space-y-6 2xl:space-y-8 p-3 2xl:p-5 mt-3">
              <h3 className="text-white font-inter text-base 2xl:text-xl font-bold">
                {course.title}
              </h3>
              <div className="flex space-x-4">
                <div className="flex items-center justify-center space-x-2">
                  <FaClock className="text-white" />
                  <p className="text-xs 2xl:text-base font-semibold">{course.duration}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUser className="text-white" />
                  <p className="text-xs 2xl:text-base font-semibold">{course.students}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPlayCircle className="text-white" />
                  <p className="text-xs 2xl:text-base font-semibold">{course.lessons}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <a href="#enroll">
                  <button className="font-semibold w-fit text-base md:text-xl bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] py-2 md:py-3 px-2 md:px-6 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
                    Register Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More */}
      <a href="#courses">
        <div className="flex justify-center mt-16 2xl:mt-20">
          <button className="font-semibold w-fit text-base md:text-xl bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] py-2 md:py-3 px-2 md:px-6 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
            Explore More
          </button>
        </div>
      </a>
    </section>
  )
}
