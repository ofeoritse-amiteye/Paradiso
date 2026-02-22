import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6";

interface FooterGroupProps {
  title: string;
  items: string[];
}

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#d6d6d6] text-sm">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-14">

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 md:gap-8 mb-10">

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 text-lg">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaPinterestP, FaYoutube].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="cursor-pointer hover:text-white transition"
                />
              )
            )}
          </div>

          {/* BRAND LOGOS */}
          <div className="flex gap-4">
            {["houselogic®", "RealEstate"].map((logo) => (
              <span
                key={logo}
                className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* PRIMARY LINKS */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 md:gap-x-8 gap-y-3 mb-10 text-white text-center md:text-left">
          {[
            "About us", "Careers", "Accessibility", "Feedback", "Media room",
            "Ad Choices", "Advertise with us", "Agent support", "Privacy",
            "Terms", "Home Made", "Tech Blog", "Agent Blog", "Sitemap"
          ].map((link) => (
            <span
              key={link}
              className="cursor-pointer hover:underline underline-offset-4"
            >
              {link}
            </span>
          ))}

          <span className="text-yellow-400 cursor-pointer hover:underline underline-offset-4">
            Do Not Sell or Share My Personal Information
          </span>
        </div>

        {/* APP DOWNLOAD */}
        <div className="mb-12 flex flex-col items-center md:items-start">
          <p className="text-white font-semibold mb-4">Get the app</p>
          <div className="flex gap-4">
            <img src="/appstore.png" alt="App Store" className="h-5" />
            <img src="/googleplay.png" alt="Google Play" className="h-5" />
          </div>
        </div>

        {/* PRODUCTS */}
        <FooterGroup
          title="Products"
          items={[
            "Leads & Branding",
            "ListHub",
            "Moving.com",
            "International Properties",
            "Avail",
            "UpNest",
            "Builder Solutions",
          ]}
        />

        {/* NEWS CORP */}
        <FooterGroup
          title="News Corp"
          items={[
            "Barrons",
            "Financial News",
            "Harper Collins",
            "Mansion Global",
            "MarketWatch",
            "New York Post",
            "REA Group",
            "Storyful",
            "Wall Street Journal",
            "Makaan.com",
            "Housing.com",
            "PropTiger.com",
            "News Corp Australia",
            "News UK",
          ]}
        />

        {/* LEGAL */}
        <div className="text-xs text-gray-400 space-y-2 max-w-4xl mt-12 text-center md:text-left">
          <p>
            Any mortgage lead generation activity in the state of Connecticut is
            performed by MSIM, LLC (NMLS #2121192), a subsidiary of Move, Inc.
          </p>
          <p>
            *Based on average new for sale and rental listings Feb 2024 – Jan 2025.
          </p>
          <p>
            © 1995–2026 National Association of REALTORS® and Move, Inc.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

/* ---------- SMALL REUSABLE GROUP ---------- */
function FooterGroup({ title, items }: FooterGroupProps) {
  return (
    <div className="mb-10 text-center md:text-left">
      <p className="text-white font-semibold mb-4">{title}</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
        {items.map((item) => (
          <span key={item} className="hover:underline cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
