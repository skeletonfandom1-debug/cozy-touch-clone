import { Star, Heart, CreditCard, MessageCircle, Play, Sparkles, Moon, Leaf } from "lucide-react";
import logo from "@/assets/logo.png";
import heroOtter from "@/assets/hero-otter.png";
import video1 from "@/assets/video-1.png";
import video2 from "@/assets/video-2.png";
import video3 from "@/assets/video-3.png";
import video4 from "@/assets/video-4.jpg";
import cuddleBuddy from "@/assets/cuddle-buddy.jpg";
import { CartDrawer } from "@/components/CartDrawer";
import { ShopifyProductSection } from "@/components/ShopifyProductSection";

const navLinks = [
  { label: "PRODUCT", href: "#product" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "AMBASSADOR PROGRAM", href: "#ambassador" },
  { label: "CONTACT", href: "#contact" },
];

const Stars = ({ className = "text-pink" }: { className?: string }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 fill-current ${className}`} />
    ))}
  </div>
);

const ScatteredStars = () => {
  const stars = [
    { top: "8%", left: "5%", size: 28, color: "text-mint", rot: -15 },
    { top: "15%", left: "18%", size: 20, color: "text-mint/60", rot: 20 },
    { top: "5%", left: "32%", size: 22, color: "text-mint/70", rot: 10 },
    { top: "12%", left: "62%", size: 18, color: "text-pink/40", rot: -10 },
    { top: "6%", left: "78%", size: 26, color: "text-pink/50", rot: 15 },
    { top: "20%", left: "88%", size: 22, color: "text-pink/60", rot: -20 },
    { top: "35%", left: "3%", size: 24, color: "text-mint/50", rot: 25 },
    { top: "45%", left: "92%", size: 20, color: "text-pink/50", rot: -15 },
    { top: "55%", left: "8%", size: 18, color: "text-mint/60", rot: 30 },
    { top: "65%", left: "15%", size: 22, color: "text-mint/40", rot: -25 },
    { top: "70%", left: "85%", size: 24, color: "text-pink/40", rot: 20 },
    { top: "80%", left: "78%", size: 18, color: "text-pink/50", rot: -10 },
    { top: "30%", left: "75%", size: 16, color: "text-pink/30", rot: 5 },
    { top: "50%", left: "25%", size: 14, color: "text-mint/50", rot: -30 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <Star
          key={i}
          className={`absolute fill-current ${s.color}`}
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            transform: `rotate(${s.rot}deg)`,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top brand bar */}
      <div className="bg-[hsl(var(--nav-bg))] py-5 relative">
        <div className="container flex items-center justify-center">
          <img src={logo} alt="CozieTouch" className="h-9 md:h-11 w-auto" />
        </div>
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
          <CartDrawer />
        </div>
      </div>

      {/* Nav */}
      <nav className="border-y border-border/40 bg-background/60 backdrop-blur">
        <div className="container">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-4 text-xs md:text-sm font-medium tracking-[0.15em] text-foreground/80">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-pink transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <ScatteredStars />
        <div className="container relative py-16 md:py-24">
          <div className="relative mx-auto max-w-5xl">
            {/* Big ghost text */}
            <h1 className="text-center font-extrabold text-ghost-text leading-none select-none">
              <span className="block text-7xl md:text-[10rem]">THE</span>
            </h1>

            {/* Otter + reviews row */}
            <div className="relative -mt-12 md:-mt-24 flex justify-center">
              <img
                src={heroOtter}
                alt="CozieTouch glowing plush otter"
                className="relative z-10 w-64 md:w-96 h-auto drop-shadow-2xl"
                width={400}
                height={500}
              />

              {/* Left review card */}
              <div className="hidden md:block absolute left-0 top-16 w-64 rounded-2xl bg-card/95 backdrop-blur p-5 shadow-card-soft z-20">
                <Stars />
                <h3 className="mt-2 font-bold text-foreground">Life saver!</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  EVERYONE who is having sleep problems needs a Cozie!!
                </p>
                <p className="mt-3 text-xs italic text-muted-foreground">Madison L.</p>
              </div>

              {/* Right review card */}
              <div className="hidden md:block absolute right-0 top-20 w-64 rounded-2xl bg-card/95 backdrop-blur p-5 shadow-card-soft z-20">
                <Stars />
                <h3 className="mt-2 font-bold text-foreground">G.O.A.T!</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  It melts away stress and makes falling asleep easier than ever!
                </p>
                <p className="mt-3 text-xs italic text-muted-foreground">Angela J.</p>
              </div>
            </div>

            <h2 className="text-center font-extrabold text-ghost-text leading-none select-none -mt-10 md:-mt-20">
              <span className="block text-5xl md:text-[8rem] tracking-wide">ORIGINAL</span>
            </h2>

            <div className="mt-8 flex justify-center">
              <a
                href="#product"
                className="group inline-flex items-center gap-2 rounded-full bg-pink-gradient px-8 py-3.5 text-white font-semibold shadow-pink hover:scale-105 transition-transform"
              >
                <Star className="h-4 w-4 fill-current" />
                <span className="italic">Buy Your Cozie</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[video1, video2, video3, video4].map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card-soft group cursor-pointer"
              >
                <img src={src} alt={`Customer testimonial ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                    <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CozieTouch */}
      <section id="reviews" className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Why CozieTouch?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our focus is to help alleviate your stress and improve your sleep. CozieTouch™ enhances relaxation
              with soothing melodies, soft breathing sounds, and ambient lighting, creating a calming environment
              wherever you are.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Heart, title: "OVER 10,000\nHAPPY SLEEPERS", desc: "We are happy to provide to customers worldwide." },
              { icon: CreditCard, title: "100% SAFE\nPAYMENT", desc: "Secured payment with 90 day money back guarantee." },
              { icon: MessageCircle, title: "24/7\nSUPPORT", desc: "Live support is always available for customers." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl bg-mint-soft p-6 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-mint flex items-center justify-center">
                  <f.icon className="h-6 w-6 text-foreground/70" />
                </div>
                <h3 className="mt-5 font-bold text-foreground whitespace-pre-line text-sm tracking-wide">{f.title}</h3>
                <p className="mt-3 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product (Shopify) */}
      <ShopifyProductSection />

      {/* Cuddle buddy */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">The #1 Anxiety Relief Device of 2024</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-foreground">Your Perfect Cuddle Buddy</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
            {/* Left features */}
            <div className="space-y-10 md:order-1 order-2">
              {[
                { icon: Heart, title: "BREATHING TECHNOLOGY" },
                { icon: Moon, title: "AIDS IN SLEEPING" },
              ].map((f) => (
                <div key={f.title}>
                  <div className="flex items-center gap-3">
                    <f.icon className="h-6 w-6 text-foreground/70 fill-foreground/40" />
                    <h3 className="font-bold tracking-wide text-foreground">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    It comes with the Real-Feel Breathing that mimics little heart beats. This helps you to
                    sleep through the night and relax.
                  </p>
                </div>
              ))}
            </div>

            {/* Center image */}
            <div className="md:order-2 order-1 rounded-2xl overflow-hidden shadow-card-soft">
              <img src={cuddleBuddy} alt="Customer with CozieTouch" className="w-full h-auto" loading="lazy" />
            </div>

            {/* Right features */}
            <div className="space-y-10 order-3">
              {[
                { icon: Sparkles, title: "EASY TO CLEAN" },
                { icon: Leaf, title: "PREMIUM MATERIAL" },
              ].map((f) => (
                <div key={f.title}>
                  <div className="flex items-center gap-3">
                    <f.icon className="h-6 w-6 text-foreground/70 fill-foreground/40" />
                    <h3 className="font-bold tracking-wide text-foreground">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    This plush toy has a soft, light-up belly that moves up and down in a soothing rhythmic
                    motion, just like it's breathing which helps with relaxing.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ambassador / Contact */}
      <section id="ambassador" className="py-16 bg-mint-soft">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ambassador Program</h2>
          <p className="mt-4 text-muted-foreground">
            Love your Cozie? Share it with the world. Join our ambassador program and earn rewards for
            spreading calm.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink-gradient px-8 py-3.5 text-white font-semibold shadow-pink hover:scale-105 transition-transform">
            <Star className="h-4 w-4 fill-current" /> Apply Now
          </button>
        </div>
      </section>

      <footer id="contact" className="py-10 bg-[hsl(var(--nav-bg))]">
        <div className="container text-center">
          <img src={logo} alt="CozieTouch" className="h-8 mx-auto opacity-80" />
          <p className="mt-4 text-xs text-muted-foreground">
            © 2026 CozieTouch. All rights reserved. · hello@cozietouch.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
