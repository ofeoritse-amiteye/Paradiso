import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer
      className="border-t border-white/10"
      style={{ backgroundColor: '#06100A' }}
    >
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand block – takes more space on large screens */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#C9A84C', boxShadow: '0 4px 14px rgba(201,168,76,0.35)' }}
              >
                <span className="material-icons text-white text-xl">logo</span>
              </div>
              <span
                className="text-2xl font-bold tracking-tight font-heading"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#C9A84C' }}
              >
                PARADISO
              </span>
            </div>
            <p
              className="text-base leading-relaxed max-w-sm mb-6"
              style={{ color: 'rgba(240,235,225,0.72)' }}
            >
              Nigeria's premier digital real estate platform. Transparency, security, and verified growth.
            </p>
            <div className="flex gap-3">
              {[<FaFacebookF/>, <FaTwitter/>, <FaInstagram/>, <FaLinkedin/>].map((social, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(240,235,225,0.8)',
                  }}
                  aria-label={social.toString()}
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-5"
              style={{ color: '#F0EBE1', fontFamily: "'Cormorant Garamond', serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {['Residential Sales', 'Commercial Leases', 'Verification Process', 'Pricing for Agents'].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:opacity-90"
                    style={{ color: 'rgba(240,235,225,0.72)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-5"
              style={{ color: '#F0EBE1', fontFamily: "'Cormorant Garamond', serif" }}
            >
              Legal
            </h4>
            <ul className="space-y-3.5">
              {['Terms of Service', 'Privacy Policy', 'Escrow Agreement', 'Dispute Resolution'].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:opacity-90"
                    style={{ color: 'rgba(240,235,225,0.72)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4
              className="text-sm font-bold uppercase tracking-wider mb-5"
              style={{ color: '#F0EBE1', fontFamily: "'Cormorant Garamond', serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3 text-sm" style={{ color: 'rgba(240,235,225,0.72)' }}>
                <span className="material-icons text-base flex-shrink-0" style={{ color: '#C9A84C' }}>email</span>
                <a href="mailto:contact@paradiso.ng" className="hover:opacity-90 transition-opacity">contact@paradiso.ng</a>
              </li>
              <li className="flex items-center gap-3 text-sm" style={{ color: 'rgba(240,235,225,0.72)' }}>
                <span className="material-icons text-base flex-shrink-0" style={{ color: '#C9A84C' }}>phone</span>
                <span>+2349122072401</span>
              </li>
              <li className="flex items-center gap-3 text-sm" style={{ color: 'rgba(240,235,225,0.72)' }}>
                <span className="material-icons text-base flex-shrink-0" style={{ color: '#C9A84C' }}>location_on</span>
                <span>Victoria Island, Lagos</span>
              </li>
              <li className="flex items-center gap-3 text-sm" style={{ color: 'rgba(240,235,225,0.72)' }}>
                <span className="material-icons text-base flex-shrink-0" style={{ color: '#C9A84C' }}>schedule</span>
                <span>Mon – Fri: 9AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col  items-center gap-4 text-sm"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(240,235,225,0.55)' }}
        >
          <p>© {new Date().getFullYear()} Paradiso Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
