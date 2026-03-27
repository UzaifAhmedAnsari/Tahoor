import Image from "next/image";
import Link from "next/link";

import CampingExp from "@/components/common/camping-exp";

import partner1 from "@/assets/partner1.png";
import partner2 from "@/assets/partner2.png";
import partner3 from "@/assets/partner3.png";
import partner4 from "@/assets/partner4.png";

function DifferenceCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="rounded-md bg-[#F16724] px-4 py-2 text-[14px] font-bold text-white">
        {title}
      </div>
      <div className="pt-4 text-[14px] leading-7 text-[#2f2b27]">{children}</div>
    </div>
  );
}

function PlaceholderPhoto({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-gradient-to-br from-[#d9b48b] via-[#b9773d] to-[#4d2a12] ${className}`}
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

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="AboutImage relative flex h-screen min-h-[620px] items-center justify-center">
        <div className="absolute inset-0 bg-[#f0c38f]/35" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <h1 className="text-[52px] font-bold uppercase leading-none text-[#281703] md:text-[82px]">
            About Us
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
            <span>About Us</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
          <div className="h-20 w-full rounded-t-[100%] border-t-[4px] border-[#281703] bg-[#E7DCCF]" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#E7DCCF] px-6 pb-20 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-[34px] font-bold leading-tight text-[#281703] md:text-[56px]">
              About U-Guide
            </h2>

            <div className="mt-4 space-y-1 text-[16px] font-semibold">
              <p className="text-[#F16724] underline underline-offset-4">
                2026 South Dakota Pheasant Hunting Season Dates
              </p>
              <p className="text-[#F16724] underline underline-offset-4">
                October 17, 2026 – January 31, 2027
              </p>
              <p className="pt-2 text-[#3166D9] underline underline-offset-4">
                Now Booking Pheasant Hunts for Fall 2026
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-[34px] font-black uppercase leading-none tracking-[0.04em] text-[#281703] md:text-[54px]">
              The UGUIDE Difference?
            </h3>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr_280px]">
            {/* Left two columns */}
            <div className="space-y-8">
              <DifferenceCard title='1 - The "Ultimate" Pheasant Hunting Challenge'>
                <p>
                  As we state on our <span className="font-semibold italic">Rates</span>{" "}
                  page, these hunts are not for everyone. The elements of age,
                  physical fitness, weather, wing shooting, dog handling, dog
                  training and pack hunting mentality are some of the skills
                  tested as hunters enter fields in the ultimate fair chase
                  pheasant hunting test.
                </p>
                <p className="mt-3">
                  We are not a preserve or hunt club and these birds are not
                  raised in pens and released in our fields. They are naturally
                  produced on our habitat and this is the ultimate fair chase
                  pheasant hunting. Other elements that factor into the fair
                  chase equation is seasonal weather and crop harvest progress.
                </p>
                <p className="mt-3 font-semibold italic">
                  Your group will need their upland hunting skills “A” game to
                  be successful at a UGUIDE Pheasant Camp.
                </p>
              </DifferenceCard>

              <DifferenceCard title="3 - Unguided/Self Guided">
                <p>
                  Another frequent question we get from hunters is, “If I have
                  my own dogs, know how to hunt and I just need a map and some
                  directions, can I be left alone to hunt the way I want to
                  hunt?” This also was part of the UGUIDE{" "}
                  <span className="font-semibold italic text-[#F16724]">
                    unguided pheasant hunting
                  </span>{" "}
                  founding philosophy.
                </p>
                <p className="mt-3">
                  You get a map and tour of the property by the landowner and
                  are left to the challenge of fair chase roosters for the
                  balance of your stay. You against the roosters. The way{" "}
                  <span className="font-semibold italic text-[#F16724]">
                    self guided pheasant hunting
                  </span>{" "}
                  was meant to be.
                </p>
                <p className="mt-3">
                  Here you will find the ultimate test of 5 main success
                  factors: 1) Dog Handler Skills, 2) Dog Skills, 3) Shooting
                  Skills, 4) Hunting Strategy Skills, 5) Teamwork.
                </p>
              </DifferenceCard>

              <DifferenceCard title='5 - The Pheasant "Camp" Experience'>
                <p>
                  Having grown up hunting whitetails in Minnesota and Wisconsin
                  and pheasants in Iowa for 20 years staying in motels and
                  hunting public, I became introduced to the very special
                  camp/tradition those states hold. The “Camp” type experience
                  was built into the UGUIDE system by following the principles
                  above.
                </p>
                <p className="mt-3">
                  That translates to your group, your lodging, your land and
                  your special unique experience. In South Dakota, hunting fair
                  chase pheasants combines all the unpredictable factors that
                  make the experience special and unique like farming, weather,
                  natural production, hunting pressure, dog skills, hunter
                  skills, shooting skills and the journey to get to your
                  destination.
                </p>
                <p className="mt-3">
                  One of the greatest benefits many hunters talk about
                  experiencing while at a UGUIDE pheasant Camp is “Camaraderie”.
                  I can assure you, nowhere else will the wily roosters of South
                  Dakota be more challenging and worthy of chase.
                </p>
              </DifferenceCard>
            </div>

            <div className="space-y-8">
              <DifferenceCard title="2 - Fair Chase">
                <p>
                  Wild-Reared Ring-necks Only! Hunters that come the distances
                  they do from all over the country are obviously concerned
                  about being able to hunt fair chase. We get asked the question
                  all the time, “Do you release pheasants?” Our response is
                  always the same, “No”.
                </p>
                <p className="mt-3">
                  We never have and never will. My question is: why would anyone
                  want to come to South Dakota to shoot a pen raised pheasant
                  when they can do that much cheaper at their home town area
                  hunt club? The UGUIDE difference is high natural production
                  (wild reared pheasants only) through well managed{" "}
                  <span className="font-semibold italic text-[#F16724]">
                    habitat
                  </span>
                  , farms and annual pheasant life-cycles. We are in
                  partnership with nature.
                </p>
              </DifferenceCard>

              <DifferenceCard title="4 - Private-Exclusive">
                <p>
                  Many times hunters will ask, “Will we be combined with any
                  other hunters?” We prefer to hunt with our own group. From the
                  start, one of the founding principles of UGUIDE was that each
                  group or party had its own style and culture of hunting and
                  therefore combining groups was never a good idea.
                </p>
                <p className="mt-3">
                  Your land and lodging package is private and exclusive to just
                  your group for that week in the schedule. You have the whole
                  place to yourselves and we also rest the{" "}
                  <span className="font-semibold italic text-[#F16724]">
                    properties
                  </span>{" "}
                  on the front end of your hunt.
                </p>
              </DifferenceCard>

              <DifferenceCard title='6 - The "Coop" Owners Model'>
                <p>
                  In the early years of UGUIDE, it became very apparent that
                  lodging was required in conjunction with the land to complete
                  the fair chase pheasant hunting experience. Essentially
                  hunters just needed a “place to stay” and did not want to pay
                  a lot for lodging.
                </p>
                <p className="mt-3">
                  For this reason, it became important for the landowner/outfitter
                  to also provide the lodging in association with their hunting
                  offering. The top requirement for hunters was to have access to
                  high quality habitat that held only naturally produced birds.
                </p>
                <p className="mt-3">
                  The UGUIDE system allows all of fair chase pheasants’ business.
                  So once you understand where the value is in our system, you
                  can understand and play your role in the
                  Owner-Hunter-UGUIDE Cooperative Model.
                </p>
              </DifferenceCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <PlaceholderPhoto label="About Photo" className="h-[520px]" />

              <div>
                <h4 className="text-center text-[28px] font-bold text-[#281703]">
                  Our Partners
                </h4>

                <div className="mt-6 space-y-6">
                  <div className="flex justify-center bg-white px-4 py-4">
                    <Image
                      src={partner1}
                      alt="Partner 1"
                      className="h-auto w-full max-w-[180px] object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-4 bg-white px-4 py-4">
                    <Image
                      src={partner2}
                      alt="Partner 2"
                      className="h-auto w-[72px] object-contain"
                    />
                    <Image
                      src={partner3}
                      alt="Partner 3"
                      className="h-auto w-[72px] object-contain"
                    />
                  </div>

                  <div className="flex justify-center bg-white px-4 py-4">
                    <Image
                      src={partner4}
                      alt="Partner 4"
                      className="h-auto w-full max-w-[180px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-[15px] font-medium text-[#2f2b27]">
            Everything to you need to know about{" "}
            <span className="font-semibold italic text-[#F16724] underline underline-offset-4">
              Reserving Next Years UGUIDE South Dakota Pheasant Hunt.
            </span>
          </p>

          <div className="mt-14 flex justify-center">
            <CampingExp />
          </div>
        </div>
      </section>
    </main>
  );
}