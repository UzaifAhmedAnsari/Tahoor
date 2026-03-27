import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    huntType: "",
    experience: "",
    minGroupSize: "",
    maxGroupSize: "",
    dogPower: "",
    firstChoice: "",
    secondChoice: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    additionalComments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server)
    console.log("Form submitted", formData);
  };

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="ContactImage relative flex h-screen min-h-[620px] items-center justify-center">
        <div className="absolute inset-0 bg-[#f0c38f]/35" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <h1 className="text-[52px] font-bold uppercase leading-none text-[#281703] md:text-[82px]">
            Contact
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
            <span>Contact</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
          <div className="h-20 w-full rounded-t-[100%] border-t-[4px] border-[#281703] bg-[#E7DCCF]" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#E7DCCF] px-6 pb-16 pt-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-[34px] font-bold leading-tight text-[#281703] md:text-[56px]">
            Contact Us / Request Information
          </h2>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            {/* Hunt Type */}
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <label className="block text-lg font-semibold text-[#281703]">1. Hunt</label>
                <select
                  name="huntType"
                  value={formData.huntType}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-[#b9773d] rounded-md"
                >
                  <option value="">Are you looking for a self or fully guided hunt?</option>
                  <option value="Self-Guided">Self-Guided</option>
                  <option value="Fully Guided">Fully Guided</option>
                </select>
              </div>
              <div className="flex-1">
                <img
                  src="/assets/contact_hunt_image.jpg"
                  alt="Hunt Image"
                  className="w-full h-[180px] object-cover rounded-md"
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-lg font-semibold text-[#281703]">2. Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-[#b9773d] rounded-md"
              >
                <option value="">How many years have you hunted South Dakota?</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3+ Years</option>
              </select>
            </div>

            {/* Group Info */}
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <label className="block text-lg font-semibold text-[#281703]">3. Group Info</label>
                <p className="text-sm text-[#5f5f5f]">Please note the minimum group size is 6-10 hunters per group.</p>
                <div className="mt-2">
                  <label className="block">What would be the least number of hunters in your group?</label>
                  <select
                    name="minGroupSize"
                    value={formData.minGroupSize}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#b9773d] rounded-md"
                  >
                    <option value="">Choose</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className="mt-2">
                  <label className="block">What would be the most number of hunters in your group?</label>
                  <select
                    name="maxGroupSize"
                    value={formData.maxGroupSize}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#b9773d] rounded-md"
                  >
                    <option value="">Choose</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src="/assets/contact_group_image.jpg"
                  alt="Group Image"
                  className="w-full h-[180px] object-cover rounded-md"
                />
              </div>
            </div>

            {/* Dog Power */}
            <div>
              <label className="block text-lg font-semibold text-[#281703]">4. Dog Power</label>
              <select
                name="dogPower"
                value={formData.dogPower}
                onChange={handleChange}
                className="w-full mt-2 p-3 border border-[#b9773d] rounded-md"
              >
                <option value="">How many dogs do you plan to bring?</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </select>
            </div>

            {/* Timeframe Preferences */}
            <div>
              <label className="block text-lg font-semibold text-[#281703]">5. Hunting Timeframe Preferences</label>
              <div className="flex gap-6 mt-2">
                <div className="flex-1">
                  <label>1st Choice</label>
                  <select
                    name="firstChoice"
                    value={formData.firstChoice}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#b9773d] rounded-md"
                  >
                    <option value="">Choose</option>
                    <option value="Oct 17-19">Oct 17–19, 2026</option>
                    <option value="Nov 5-7">Nov 5–7, 2026</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label>2nd Choice</label>
                  <select
                    name="secondChoice"
                    value={formData.secondChoice}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#b9773d] rounded-md"
                  >
                    <option value="">Choose</option>
                    <option value="Nov 7-9">Nov 7–9, 2026</option>
                    <option value="Dec 5-7">Dec 5–7, 2026</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <label className="block text-lg font-semibold text-[#281703]">6. Contact Info</label>
              <p className="text-sm text-[#5f5f5f]">By putting your contact information here, you will be receiving a response within 24 hours via email or phone call from Chris, UGUIDE Founder/Owner.</p>

              <div className="mt-2">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#b9773d] rounded-md"
                />
              </div>

              <div className="mt-2">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#b9773d] rounded-md"
                />
              </div>

              <div className="mt-2">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#b9773d] rounded-md"
                />
              </div>

              <div className="mt-2">
                <label>Phone (Cell Preferred)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#b9773d] rounded-md"
                />
              </div>

              <div className="mt-2">
                <label>Additional Comments</label>
                <textarea
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#b9773d] rounded-md"
                />
              </div>
            </div>

            {/* CAPTCHA */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-[#281703]">*reCAPTCHA</label>
              <div className="mt-2 border border-[#b9773d] p-3 rounded-md">
                {/* Placeholder for reCAPTCHA */}
                [reCAPTCHA Placeholder]
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full py-4 text-lg font-semibold text-white bg-[#F16724] rounded-md"
            >
              Submit Form
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}