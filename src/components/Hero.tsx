import Image from "next/image";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` } as React.CSSProperties);

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 bg-black overflow-hidden relative">
      <div data-parallax className="max-w-6xl w-full relative z-10 pt-16 md:pt-0">

        {/* Profile Image & Availability */}
        <div className="hero-in flex flex-col items-center justify-center mb-10" style={delay(0)}>
          <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] mb-6 rounded-full overflow-hidden border-2 border-gray-800 hover:border-orange-500 transition-colors duration-500 bg-gray-900">
            <Image
              src="/profile.jpg"
              alt="Mohammed Ibrahim Aejaz"
              width={140}
              height={140}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="font-mono text-xs md:text-sm tracking-[0.2em] text-orange-500 uppercase flex items-center gap-3 opacity-90">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full motion-safe:animate-pulse"></span>
            Open to freelance projects
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="hero-in text-5xl md:text-7xl font-serif font-bold text-white text-center mb-8 leading-tight" style={delay(120)}>
          Shipping AI products that solve real problems.
        </h1>

        {/* Subheading */}
        <p className="hero-in text-center text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={delay(240)}>
          Full Stack AI Engineer • SaaS Founder • Hyderabad.
        </p>

        {/* CTA Buttons */}
        <div className="hero-in flex flex-col sm:flex-row gap-6 justify-center items-center" style={delay(360)}>
          <a
            href="#projects"
            className="btn-press px-8 py-3 border border-white text-white hover:bg-white hover:text-black font-medium"
          >
            VIEW WORK
          </a>
          <a
            href="mailto:ibrahimaejaz@gmail.com"
            className="btn-press px-8 py-3 bg-orange-500 text-black hover:bg-orange-600 font-medium"
          >
            LET'S TALK
          </a>
          <a
            href="/Mohammed_Ibrahim_Aejaz_Resume_v4.pdf"
            download
            className="btn-press px-8 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-medium"
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-in mt-20 flex justify-center" style={delay(520)}>
          <svg className="w-6 h-6 text-orange-500 motion-safe:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
