import Link from "next/link";
import LatestNews from "@/components/NewsEvent";
import OurPartners from "@/components/ourPartners";

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 text-[#F16724]">✓</span>
      <span>{children}</span>
    </li>
  );
}

function PlaceholderImage({
  className = "",
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#d9b48b] via-[#b97d45] to-[#5a3418] ${className}`}
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

export default function DiscountsPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#efe8df_0%,#f0d0a5_100%)]">
        <div className="absolute inset-0 opacity-10">
          {[
            "left-[4%] top-[3%]",
            "left-[12%] top-[18%]",
            "left-[30%] top-[6%]",
            "left-[52%] top-[2%]",
            "left-[74%] top-[10%]",
            "left-[88%] top-[4%]",
            "left-[7%] top-[42%]",
            "left-[22%] top-[34%]",
            "left-[41%] top-[28%]",
            "left-[64%] top-[33%]",
            "left-[82%] top-[40%]",
            "left-[15%] top-[62%]",
            "left-[34%] top-[58%]",
            "left-[56%] top-[64%]",
            "left-[78%] top-[60%]",
          ].map((pos, index) => (
            <span
              key={index}
              className={`absolute ${pos} text-[72px] font-black text-[#6b4b34] md:text-[110px]`}
            >
              %
            </span>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 pt-24 text-center">
          <h1 className="text-[52px] font-bold uppercase leading-none text-[#281703] md:text-[82px]">
            Discounts
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
            <span>Discounts</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
          <div className="h-20 w-full rounded-t-[100%] border-t-[4px] border-[#281703] bg-[#E7DCCF]" />
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#E7DCCF] px-6 pb-16 pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-[32px] font-bold leading-tight text-[#281703] md:text-[56px]">
              UGUIDE South Dakota Pheasant Hunting Specials
            </h2>

            <p className="mx-auto mt-4 max-w-4xl text-[15px] font-medium leading-7 text-[#2f2b27]">
              Click on specific links to get more info about the special or
              related camp. Remember to go to{" "}
              <span className="font-semibold text-[#F16724]">Availability</span>{" "}
              page to check current rates and openings.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left text content */}
            <div className="text-[14px] leading-7 text-[#2f2b27] md:text-[15px]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-[18px] font-bold text-[#281703]">
                    Fair Chase Pheasant Hunting Notice:
                  </h3>
                  <p className="mt-2">
                    These hunts are a test of your shooting, dog and hunting
                    skills. These are not released pheasants. These are some of
                    the wariest pheasants you will find in North America. We do
                    not allow groups to hunt what skilled dogs. Your overall
                    success and experience will be relative to the number of
                    skilled shooters, experienced pheasant hunting dogs and
                    experienced pheasant hunters in your group. If you lack the
                    above you may be better served to look for a guided hunt at
                    a shooting preserve where they release pheasants.
                  </p>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#281703]">
                    Discount-Specials-Deals-Bargains-Cheap-Low Cost-DIY
                  </h3>

                  <ul className="mt-3 space-y-4">
                    <BulletItem>
                      <span>
                        <b>Hunter Volume Discount</b> (up to $80 off per
                        person) - For each additional paying person above 6 and
                        up to 10, you will be discounted $20/person off the
                        package price for everyone in the group.
                      </span>
                    </BulletItem>

                    <BulletItem>
                      <span>
                        <b>Youth &amp; Juniors Specials</b>
                        <br />
                        <span className="text-[#F16724]">
                          Eligibility
                        </span>{" "}
                        - Once the camp minimum is met/booked with full price
                        adult hunters you may add up to 2 Youth ages 12-15 and
                        up to 2 Juniors ages 16-17. The youth will be free of
                        charge and the Juniors rate will be 50% off.
                      </span>
                    </BulletItem>

                    <BulletItem>
                      <span>
                        <b>EarlyBird On-Line Re-Book Discount</b> - Rebook next
                        years hunt with 14+ days of conclusion of this years
                        hunt, on-line, and receive 5% discount off your total
                        hunt package for next year.{" "}
                        <span className="text-[#F16724]">
                          On-Line Booking Tool Here
                        </span>
                      </span>
                    </BulletItem>

                    <BulletItem>
                      <span>
                        New Groups booking hunts for the first time can qualify
                        for this discount when they book their hunt before year
                        end, for next year, in the current hunting season (Dec
                        31).
                      </span>
                    </BulletItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#281703]">
                    Each member in your group can choose 1 eligible individual
                    discount from the list below:
                  </h3>

                  <ul className="mt-3 space-y-2">
                    <BulletItem>
                      <span>
                        Group Coordinator - 10% Discount (only 1 person in group
                        may use this)
                      </span>
                    </BulletItem>
                    <BulletItem>
                      <span>Senior age 65 and up - 5% Discount</span>
                    </BulletItem>
                    <BulletItem>
                      <span>Military (Active/Retired) - 5% Discount</span>
                    </BulletItem>
                    <BulletItem>
                      <span>Handicap - 5% Discount</span>
                    </BulletItem>
                    <BulletItem>
                      <span>Firefighter (Active/Retired) - 5% Discount</span>
                    </BulletItem>
                    <BulletItem>
                      <span>Law Enforcement (Active/Retired) - 5% Discount</span>
                    </BulletItem>
                    <BulletItem>
                      <span>
                        Emergency Medical Technician (Active/Retired) - 5%
                        Discount
                      </span>
                    </BulletItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#281703]">
                    Add-Ons
                  </h3>

                  <ul className="mt-3 space-y-4 pl-6">
                    <li className="list-disc">
                      Non-Hunters - Anyone staying with the group and not
                      hunting will be charged a standard lodging rate of
                      $100/night/person (depending on tier). Minimum is 4 nights
                      and no discounts apply to non-hunters.
                    </li>

                    <li className="list-disc">
                      Additional nights lodging - Hunters may want to extend
                      their hunting trip by staying extra nights and hunting
                      public ground in the area. Extra nights lodging will be
                      charged at $100/night/person (depending on tier) for
                      additional nights lodging in addition to the standard
                      4-nights included in the base package.
                    </li>

                    <li className="list-disc">
                      Various camps offer both 3 &amp; 4 day hunt options. See
                      details on various{" "}
                      <span className="font-semibold text-[#F16724]">
                        Packages here
                      </span>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right image collage */}
            <div className="grid grid-cols-2 gap-6 self-start">
              <PlaceholderImage
                label="Photo 1"
                className="col-span-1 h-[330px]"
              />
              <PlaceholderImage
                label="Photo 2"
                className="col-span-1 h-[180px]"
              />
              <PlaceholderImage
                label="Photo 3"
                className="col-span-1 h-[180px] -mt-16"
              />
              <PlaceholderImage
                label="Photo 4"
                className="col-span-1 row-span-2 h-[470px]"
              />
              <PlaceholderImage
                label="Photo 5"
                className="col-span-1 h-[180px]"
              />
            </div>
          </div>
        </div>
      </section>

      <OurPartners />
      <LatestNews />
    </main>
  );
}