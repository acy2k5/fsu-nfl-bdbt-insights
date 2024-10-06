import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'radial-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("https://t3.ftcdn.net/jpg/03/59/72/62/360_F_359726227_yNBFFdzNMngMED95vxL5oqEvHLPomzla.jpg")',
      }}
    >
      {/* Main content container */}
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Responsive vertical padding container */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 text-center text-white">
          {/* Section header */}
          <header>
            <h1
              className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight mb-4"
              data-aos="zoom-y-out"
            >
              Dynamic Tackler Identification
            </h1>
            <p
              className="max-w-3xl mx-auto text-base sm:text-lg text-gray-400 tracking-tight leading-relaxed mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              This project represents a fusion of cutting-edge machine learning
              techniques and big data analytics, aimed at extracting actionable
              insights from vast and complex datasets.
            </p>
          </header>

          <div
            className="mx-auto mt-6"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <Link
              href="/notebook"
              className="inline-block bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Notebook
            </Link>
          </div>

          {/* Hero video */}
          <div
            className="relative mt-8 justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="450"
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/xy5Vg3ak0JA?si=MFluVURMERaCFg8m"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
