import { FaHouse, FaHandshake } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FEATURES_DATA = [
  {
    id: "premium-service",
    icon: FaHouse,
    title: "Premium Service Guaranteed",
    description:
      "From first viewing to final signature, we guide every step with transparent advice and responsive support.",
  },
  {
    id: "extensive-portfolio",
    icon: FaHandshake,
    title: "Extensive Property Portfolio",
    description:
      "Explore a curated mix of homes, investment opportunities, and neighborhoods selected to match your goals.",
  },
];

const TRUST_STATS = [
  { value: "1.2K+", label: "Properties sold" },
  { value: "98%", label: "Client satisfaction" },
  { value: "12 yrs", label: "Market experience" },
];

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="flex items-start gap-x-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition duration-300 hover:border-[#0ca39a]/30 hover:shadow-xl motion-reduce:transition-none">
      <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#07452d]/10 text-[#07452d]">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-bold text-[#07452d] sm:text-xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}

function Who() {
  return (
    <section
      aria-labelledby="who-heading"
      className="relative overflow-hidden py-16 md:py-28"
    >
      {/* Decorative Blur Element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-0 z-0 hidden h-60 w-60 rounded-full bg-[#0ca39a]/10 blur-3xl md:block"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left Side: Content Block */}
          <div className="order-2 md:order-1">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-[#087a73]">
              Who Are We
            </span>
            <h2
              id="who-heading"
              className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Helping people discover the{" "}
              <span className="text-[#087a73]">right place</span> to call home.
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg">
              We help buyers, sellers, and investors make confident decisions
              with local insight, tailored guidance, and a strong network of
              trusted professionals.
            </p>

            {/* Trust Stats */}
            <dl className="mb-8 grid grid-cols-3 gap-3 sm:mb-10 sm:gap-5">
              {TRUST_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 bg-white/90 p-3.5 shadow-sm sm:p-4"
                >
                  <dd className="text-xl font-extrabold text-[#07452d] sm:text-2xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-gray-600 sm:text-xs">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mb-8 sm:mb-10">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full bg-[#07452d] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#07452d]/20 transition duration-300 hover:bg-[#087a73] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0ca39a]/40 motion-reduce:transition-none sm:text-base"
              >
                Book a Free Consultation
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4 sm:space-y-5">
              {FEATURES_DATA.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Image Collage Block */}
          <div className="relative order-1 pb-10 md:order-2 md:pb-6">
            <img
              src="/who1.webp"
              alt="Exterior view of a contemporary residential home"
              loading="lazy"
              className="relative z-10 aspect-[4/5] w-[68%] rounded-3xl border-4 border-white object-cover shadow-2xl"
            />

            <div className="absolute right-0 bottom-0 z-20 aspect-square w-[54%]">
              <img
                src="/who2.avif"
                alt="Bright modern living room interior"
                loading="lazy"
                className="h-full w-full rounded-3xl border-4 border-white object-cover shadow-xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -bottom-3 z-30 h-12 w-12 rounded-full bg-gradient-to-tr from-[#0ca39a] to-white shadow-lg sm:-right-4 sm:-bottom-4 sm:h-16 sm:w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who;