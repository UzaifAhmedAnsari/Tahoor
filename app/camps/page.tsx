import Link from "next/link";
import LatestNews from "@/components/NewsEvent";
import OurPartners from "@/components/ourPartners";

const campProperties = [
  {
    name: "Faulkton Pheasant Camp",
    location: "Faulkton, South Dakota",
    county: "Faulk County",
    href: "/camps/faulkton-pheasant-camp",
  },
  {
    name: "Gunner's Haven Pheasant Camp",
    location: "Selby, South Dakota",
    county: "Walworth County",
    href: "/camps/gunners-haven-pheasant-camp",
  },
  {
    name: "Meadow Creek Pheasant Camp",
    location: "Meadow, South Dakota",
    county: "Perkins County",
    href: "/camps/meadow-creek-pheasant-camp",
  },
  {
    name: "Pheasant Camp Lodge",
    location: "Andes, South Dakota",
    county: "Charles Mix County",
    href: "/camps/pheasant-camp-lodge",
  },
  {
    name: "West River Adventures Pheasant Camp",
    location: "Timberlake, SD",
    county: "Dewey County",
    href: "/camps/west-river-adventures-pheasant-camp",
  },
];

export default function CampsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="CampsImage relative flex h-screen min-h-[640px] items-center justify-center">
        <div className="absolute inset-0 bg-[#f1c08b]/35" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <h1 className="text-[58px] font-bold uppercase leading-none text-[#281703] md:text-[82px]">
            Camps
          </h1>

          <div className="mt-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#281703]">
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
            <span>Camps</span>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
          <div className="h-20 w-full rounded-t-[100%] border-t-[4px] border-[#281703] bg-[#E7DCCF]" />
        </div>
      </section>

      {/* Intro section */}
      <section className="bg-[#E7DCCF] px-6 pb-16 pt-20 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-[34px] font-bold leading-tight text-[#281703] md:text-[56px]">
              South Dakota Pheasant Hunting
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-[15px] font-semibold leading-7 text-[#2f2b27] md:text-[16px]">
              Below are links to detailed information on the various South Dakota
              Pheasant Hunting properties that UGUIDE offers. Each property has
              its own minimum and maximum capacity per week. Within the links
              you will find detailed info such as lodging photos, land photos,
              hunting video, amenities and more. This detailed info is designed
              to help you select the package that best suits your group&apos;s
              pheasant hunting vacation requirements.
            </p>
          </div>

          <div className="my-12 border-t border-[#9a8e81]" />

          <div className="text-center">
            <h3 className="text-[34px] font-bold leading-tight text-[#281703] md:text-[54px]">
              Pheasant Camp Properties
            </h3>

            <ul className="mt-6 space-y-2 text-left md:text-center">
              {campProperties.map((camp) => (
                <li
                  key={camp.name}
                  className="flex items-start justify-start gap-3 text-[15px] font-medium leading-7 text-[#2f2b27] md:justify-center"
                >
                  <span className="mt-[2px] text-[#F16724]">✓</span>

                  <p>
                    <a
                      href={camp.href}
                      className="font-semibold text-[#F16724] transition-colors hover:underline"
                    >
                      {camp.name}
                    </a>
                    <span className="text-[#2f2b27]">
                      {" "}
                      - {camp.location} - {camp.county}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <OurPartners />
      <LatestNews />
    </main>
  );
}