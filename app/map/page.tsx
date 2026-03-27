import Link from "next/link";
import LatestNews from "@/components/NewsEvent";
import OurPartners from "@/components/ourPartners";

const markers = [
  { label: "Camp 1", top: "22%", left: "10%" },
  { label: "Camp 2", top: "28%", left: "28%" },
  { label: "Camp 3", top: "30%", left: "48%" },
  { label: "Camp 4", top: "38%", left: "58%" },
  { label: "Camp 5", top: "78%", left: "65%" },
];

export default function MapPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="MapImage relative flex h-screen min-h-[620px] items-center justify-center">
        <div className="absolute inset-0 bg-[#f0c38f]/35" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <h1 className="text-[52px] font-bold uppercase leading-none text-[#281703] md:text-[82px]">
            Map
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
            <span>Map</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
          <div className="h-20 w-full rounded-t-[100%] border-t-[4px] border-[#281703] bg-[#E7DCCF]" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#E7DCCF] px-6 pb-16 pt-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-[34px] font-bold leading-tight text-[#281703] md:text-[56px]">
            UGUIDE Property Locations
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] font-medium leading-7 text-[#2f2b27]">
            Mouse over the property locations for details or click the house for
            detailed page with camp information, photos and video.
          </p>

          {/* Map placeholder */}
          <div className="mx-auto mt-10 max-w-[700px] border-[3px] border-[#bcae9f] bg-white p-2 shadow-sm">
            <div className="relative h-[520px] overflow-hidden bg-[#d7efe7]">
              {/* top controls */}
              <div className="absolute left-4 top-4 z-20 flex overflow-hidden rounded border border-[#cfcfcf] bg-white text-[14px] font-medium text-[#4d4d4d] shadow-sm">
                <button className="border-r border-[#d9d9d9] px-5 py-2">
                  Map
                </button>
                <button className="px-5 py-2 text-[#757575]">Satellite</button>
              </div>

              <div className="absolute right-4 top-4 z-20 rounded border border-[#d9d9d9] bg-white px-3 py-2 text-[#777] shadow-sm">
                ⛶
              </div>

              <div className="absolute bottom-16 right-4 z-20 flex flex-col overflow-hidden rounded border border-[#d9d9d9] bg-white shadow-sm">
                <button className="border-b border-[#d9d9d9] px-4 py-2 text-lg text-[#777]">
                  +
                </button>
                <button className="px-4 py-2 text-lg text-[#777]">−</button>
              </div>

              <div className="absolute bottom-4 right-4 z-20 rounded border border-[#d9d9d9] bg-[#ffd54a] px-2 py-1 text-xs shadow-sm">
                🧍
              </div>

              <div className="absolute bottom-3 left-3 z-20 text-[12px] font-medium text-[#5f86ff]">
                Google
              </div>

              {/* map texture */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.35),transparent_16%),radial-gradient(circle_at_60%_78%,rgba(255,255,255,0.35),transparent_18%),radial-gradient(circle_at_25%_70%,rgba(255,255,255,0.3),transparent_15%)]" />

                <div className="absolute left-[34%] top-0 h-full w-[2px] bg-[#87d0de]/70" />
                <div className="absolute left-[36%] top-0 h-full w-[2px] bg-[#87d0de]/70" />
                <div className="absolute left-[52%] top-0 h-full w-[2px] bg-[#87d0de]/50" />
                <div className="absolute left-[70%] top-0 h-full w-[2px] bg-[#87d0de]/40" />
                <div className="absolute left-[18%] top-[18%] h-[3px] w-[70%] bg-[#d0d0d0]/60" />
                <div className="absolute left-[5%] top-[42%] h-[3px] w-[88%] bg-[#d0d0d0]/60" />
                <div className="absolute left-[20%] top-[70%] h-[3px] w-[60%] bg-[#d0d0d0]/60" />
                <div className="absolute left-[42%] top-[8%] h-[84%] w-[3px] rotate-[18deg] bg-[#8ed1df]/70" />

                <div className="absolute left-[30%] top-[48%] -translate-x-1/2 -translate-y-1/2 text-[34px] font-bold uppercase tracking-[0.18em] text-[#4a7262]/80">
                  South Dakota
                </div>
              </div>

              {/* markers */}
              {markers.map((marker) => (
                <button
                  key={marker.label}
                  className="group absolute z-10 -translate-x-1/2 -translate-y-full"
                  style={{ top: marker.top, left: marker.left }}
                >
                  <span className="absolute -top-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-black px-3 py-1 text-xs text-white group-hover:block">
                    {marker.label}
                  </span>

                  <svg
                    width="28"
                    height="40"
                    viewBox="0 0 28 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 0C6.268 0 0 6.268 0 14C0 24.5 14 40 14 40C14 40 28 24.5 28 14C28 6.268 21.732 0 14 0Z"
                      fill="#E54235"
                    />
                    <circle cx="14" cy="14" r="5" fill="white" />
                  </svg>
                </button>
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