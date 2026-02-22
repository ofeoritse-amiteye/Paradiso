import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/10" style={{ backgroundColor: '#06100A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
                <span className="material-icons text-white">domain</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary font-heading">
                PARADISO
              </span>
            </div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(240,235,225,0.75)' }}>
              Nigeria's premier digital real estate platform. Transparency, security, and verified growth.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white cursor-pointer transition-all border border-white/15"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <span className="material-icons text-xl">share</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-[#F0EBE1] font-heading">Quick Links</h4>
            <ul className="space-y-5" style={{ color: 'rgba(240,235,225,0.75)' }}>
              <li>
                <a className="hover:text-primary transition-colors text-lg" href="#">
                  Residential Sales
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors text-lg" href="#">
                  Commercial Leases
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors text-lg" href="#">
                  Verification Process
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors text-lg" href="#">
                  Pricing for Agents
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-[#F0EBE1] font-heading">Legal</h4>
            <ul className="space-y-5" style={{ color: 'rgba(240,235,225,0.75)' }}>
              <li>
                <a className="hover:text-primary transition-colors text-lg" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors text-lg" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors text-lg" href="#">
                  Escrow Agreement
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors text-lg" href="#">
                  Dispute Resolution
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-[#F0EBE1] font-heading">Contact Us</h4>
            <ul className="space-y-5" style={{ color: 'rgba(240,235,225,0.75)' }}>
              <li className="flex items-center gap-4 text-lg">
                <span className="material-icons text-primary">email</span> contact@paradiso.ng
              </li>
              <li className="flex items-center gap-4 text-lg">
                <span className="material-icons text-primary">phone</span> +234 800 PARADISO
              </li>
              <li className="flex items-center gap-4 text-lg">
                <span className="material-icons text-primary">location_on</span> Victoria Island, Lagos
              </li>
              <li className="flex items-center gap-4 text-lg">
                <span className="material-icons text-primary">schedule</span> Mon - Fri: 9AM - 6PM
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center font-medium" style={{ color: 'rgba(240,235,225,0.65)' }}>
          <p className="text-lg">© 2024 Paradiso Technologies. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a className="hover:text-primary transition-colors" href="#">
              LinkedIn
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Twitter
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
