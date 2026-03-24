import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import perfumeImg from "./assets/perfume.png";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "250%", label: "Increase in engagement" },
  { value: "98%", label: "Positive customer feedback" },
  { value: "4.9★", label: "Luxury user rating" },
];

const features = [
  {
    title: "Premium Ingredients",
    description:
      "Crafted with carefully selected notes to deliver a refined and memorable fragrance experience.",
  },
  {
    title: "Long Lasting",
    description:
      "Designed to stay fresh throughout the day with a balanced blend of elegance and performance.",
  },
  {
    title: "Luxury Packaging",
    description:
      "A premium bottle design that combines modern aesthetics with timeless sophistication.",
  },
];

const testimonials = [
  {
    name: "Sophia Carter",
    role: "Luxury Lifestyle Blogger",
    text: "The presentation feels premium and elegant. The fragrance concept and visual design work beautifully together.",
  },
  {
    name: "Ethan Walker",
    role: "Product Design Enthusiast",
    text: "Smooth animation, clean layout, and a polished product feel. It looks like a real brand landing page.",
  },
  {
    name: "Olivia Bennett",
    role: "Creative Director",
    text: "The overall experience feels cinematic and refined. The scroll-based interaction adds a strong premium touch.",
  },
];

export default function App() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef([]);
  const imageWrapRef = useRef(null);
  const imageFloatRef = useRef(null);
  const glowRef = useRef(null);
  const ringRef = useRef(null);
  const reflectionRef = useRef(null);

  const aboutRef = useRef(null);
  const featuresRef = useRef([]);
  const testimonialsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(buttonsRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.from(statsRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.45,
        ease: "power3.out",
      });

      gsap.from(imageWrapRef.current, {
        y: 90,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from([glowRef.current, ringRef.current, reflectionRef.current], {
        scale: 0.85,
        opacity: 0,
        duration: 1.3,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.to(imageFloatRef.current, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 2.2,
        ease: "sine.inOut",
      });

      gsap.to(imageWrapRef.current, {
        y: -300,
        rotate: 10,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(glowRef.current, {
        y: -170,
        scale: 1.28,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      gsap.to(ringRef.current, {
        y: -140,
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.6,
        },
      });

      gsap.to(reflectionRef.current, {
        y: -80,
        opacity: 0.15,
        scaleY: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.from(aboutRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(featuresRef.current, {
        scrollTrigger: {
          trigger: featuresRef.current[0],
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(testimonialsRef.current, {
        scrollTrigger: {
          trigger: testimonialsRef.current[0],
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="overflow-x-hidden bg-[#08070c] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#08070c]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">
          <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
            Noiré
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#testimonials" className="transition hover:text-white">
              Reviews
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <button className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:bg-white/10">
            Shop Now
          </button>
        </div>
      </header>

      <section
        ref={heroRef}
        className="relative min-h-[160vh] px-6 pt-28 md:px-12 lg:px-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2e1065,transparent_40%),radial-gradient(circle_at_right,#7c3aed22,transparent_30%),linear-gradient(to_bottom,#08070c,#0d0b14)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-16 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/50">
              Premium Fragrance Collection
            </p>

            <h1
              ref={headingRef}
              className="mb-8 leading-[1.02] text-5xl font-semibold tracking-[0.08em] text-white sm:text-6xl md:text-7xl lg:text-[6.2rem]"
            >
              LUXURY
              <br />
              SCENT
              <br />
              EXPERIENCE
            </h1>

            <p
              ref={textRef}
              className="mb-8 max-w-xl text-base leading-8 text-white/70 md:text-lg"
            >
              A refined fragrance concept built to showcase elegant motion,
              cinematic presentation, and smooth scroll-linked interaction with
              a premium product-focused design language.
            </p>

            <div ref={buttonsRef} className="mb-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition duration-300 hover:scale-105">
                Explore Collection
              </button>

              <button className="rounded-full border border-white/30 px-6 py-3 text-white transition duration-300 hover:bg-white/10">
                View Details
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <h3 className="text-2xl font-semibold">{item.value}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:mr-0">
            <div
              ref={glowRef}
              className="absolute h-[420px] w-[420px] rounded-full bg-purple-500/25 blur-3xl md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px]"
            />

            <div
              ref={ringRef}
              className="absolute h-[500px] w-[500px] rounded-full border border-white/10 md:h-[380px] md:w-[380px] lg:h-[430px] lg:w-[430px]"
            />

            <div ref={imageWrapRef} className="relative will-change-transform">
              <div ref={imageFloatRef} className="relative will-change-transform">
                <img
                  src={perfumeImg}
                  alt="Luxury perfume"
                  className="relative z-10 w-[320px] md:w-[420px] lg:w-[520px] drop-shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
                />

                <img
                  ref={reflectionRef}
                  src={perfumeImg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-[96%] z-0 w-[260px] scale-y-[-1] opacity-20 blur-[2px] md:w-[340px] lg:w-[400px]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0))",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="px-6 py-28 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
              About The Product
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Crafted for elegance, designed for lasting impressions.
            </h2>
          </div>

          <p className="text-base leading-8 text-white/70 md:text-lg">
            Noiré is imagined as a luxury fragrance experience where visual
            design, motion, and product storytelling come together. The bottle,
            lighting, and motion system are built to communicate sophistication,
            premium quality, and modern brand identity.
          </p>
        </div>
      </section>

      <section
        id="features"
        className="px-6 pb-28 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Designed with quality, performance, and luxury in mind.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                ref={(el) => (featuresRef.current[index] = el)}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md"
              >
                <div className="mb-5 h-12 w-12 rounded-full border border-white/10 bg-white/10" />
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 leading-7 text-white/65">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="px-6 py-28 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
              Testimonials
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              What people say about the experience
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={item.name}
                ref={(el) => (testimonialsRef.current[index] = el)}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md"
              >
                <p className="leading-7 text-white/70">“{item.text}”</p>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-white/50">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        id="contact"
        className="px-6 pb-28 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-md md:px-14">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
            Discover More
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Experience a fragrance concept built around premium storytelling and
            elegant motion.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Explore a product-inspired landing page designed to feel modern,
            luxurious, and immersive across devices.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition duration-300 hover:scale-105">
              Shop Collection
            </button>
            <button className="rounded-full border border-white/30 px-6 py-3 text-white transition duration-300 hover:bg-white/10">
              Contact Brand
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-white/50 md:flex-row md:text-left">
          <p>© 2026 Noiré. Crafted for luxury experiences.</p>
          <div className="flex gap-6">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#testimonials" className="transition hover:text-white">
              Reviews
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}