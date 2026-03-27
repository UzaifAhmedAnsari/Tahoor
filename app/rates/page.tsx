import Link from "next/link";
import LatestNews from "@/components/NewsEvent";
import OurPartners from "@/components/ourPartners";

function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#d6b18d] via-[#b9773d] to-[#4d2a12] ${className}`}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#281703]">
          {label}
        </span>
      </div>
    </div>
  );
}

const links = [
  "Reserving Next Years Pheasant Hunt",
  "Pheasant Hunting Package Rates and Availability",
  "Special Offers, Discounts, Add-Ons and Sales",
  "How To Make a UGUIDE Reservation",
  "Quote or Reserve Your Own Hunt",
  "What's Included in Your Unguided Pheasant Hunting Package",
  "Self-Guided South Dakota Pheasant Hunting Season Schedule",
  "UGUIDE South Dakota Pheasant Hunting Policies",
];

export default function RatesPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="RatesImage relative flex h-screen min-h-[620px] items-center justify-center">
        <div className="absolute inset-0 bg-[#f0c38f]/35" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <h1 className="text-[52px] font-bold uppercase leading-none text-[#281703] md:text-[82px]">
            Rates
          </h1>

          <div className="mt-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#281703]">
            <Link
              href="/"
              className="flex items-center gap-2 transition-colors hover:text-[#F16724]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3.172 3 10.2V21h6v-6h6v6h6V10.2l-9-7.028Z" />
              </svg>
              <span>Home</span>
            </Link>

            <span>›</span>
            <span>Rates</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
          <div className="h-20 w-full rounded-t-[100%] border-t-[4px] border-[#281703] bg-[#E7DCCF]" />
        </div>
      </section>

      {/* Main section */}
      <section className="bg-[#E7DCCF] px-6 pb-16 pt-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-[34px] font-bold leading-tight text-[#281703] md:text-[56px]">
            Pheasant Hunting Rates &amp; Booking Info
          </h2>

          <div className="mt-10">
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_0.7fr]">
              <PlaceholderImage
                label="Photo 1"
                className="h-[270px] rounded-none"
              />
              <PlaceholderImage
                label="Photo 2"
                className="h-[270px] rounded-none"
              />
              <PlaceholderImage
                label="Photo 3"
                className="h-full min-h-[553px] rounded-none"
              />

              <div className="md:col-span-2">
                <PlaceholderImage
                  label="Photo 4"
                  className="h-[270px] rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_0.95fr]">
            <div className="max-w-[560px] text-[15px] leading-7 text-[#2f2b27]">
              <p>
                <span className="font-bold text-[#281703]">
                  Fair Chase Pheasant Hunting Notice:
                </span>{" "}
                These hunts are not for everyone. These hunts are a test of your
                shooting, dog and hunting skills. These are not released
                pheasants. These are some of the wariest pheasants you will find
                in North America. We do not allow groups to hunt without
                skilled dogs. Your overall success and experience will be
                relative to the number of skilled shooters, experienced
                pheasant hunting dogs and experienced pheasant hunters in your
                group. If you lack the above you may be better served to look
                for a guided hunt at a shooting preserve where they release
                pheasants.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 text-[15px] font-semibold leading-7 text-[#F16724] md:items-end md:text-right">
              {links.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors hover:text-[#281703]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OurPartners />
      <LatestNews />
    </main>
  );
}