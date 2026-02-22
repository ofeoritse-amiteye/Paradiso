import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';
import { IoSwapHorizontal } from 'react-icons/io5';
import { ArrowRight } from 'lucide-react';

const FeaturedListings: React.FC = () => {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');

  const listings: Property[] = [
    {
      id: '1',
      title: '5-Bedroom Smart Mansion',
      priceNGN: 250000000,
      priceUSD: 320000,
      location: 'Lekki Phase 1, Lagos',
      beds: 5,
      baths: 6,
      area: '450sqm',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2O0-yPbZFQEMar2YHSOxs5spOGaRqlD3-0RKYHTUyTxlZrMYX8rQj_ryLaszBb3J0OMoT8og93HNVm9K8gQts7r3YlB2NZafc7fOvwYmOWJQLdSwg7UI5qNnS8uVllW0JAP0zw9Y6jaOAD8NK1gxOMz-JabcxkwQDFA4OzlO25QOQDVWdr56QYEtzBxo_QaGTPl0-WerPrkBNnjZWmnJDuaLK02p3nlyI6JXC_uewyqAslRj2504JJMxIUrpYV7aGnKuFSMsBVAM',
      isVerified: true,
    },
    {
      id: '2',
      title: 'Luxury Sky View Penthouse',
      priceNGN: 180000000,
      priceUSD: 230000,
      location: 'Maitama, Abuja',
      beds: 3,
      baths: 4,
      area: '310sqm',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTa4Vq4VdkfoVFnrY1z35kpglpdnhrCpLzG-Me7fSx3SFzAJhiZ7-TwRyNbU8gPq5etRGw7cl0Dz0EXJbfak8WF7AGxler6LT1X4Vx8DYYoSpcGPnA2d7vDKWG4S8uBby7hehd7rAreFzspVlQxEd9WpN0YXtqRuZ2QBY229AYGZaaH8YdLW6GNo5ONhTmTincTQndz7jwypAo8EknFt41kjUifEotc2-IeLrZ037MRhpggqYVzLn-y5C82KAevXdhAdWATE9oGxA',
      isVerified: true,
    },
    {
      id: '3',
      title: 'Serene 4-Bedroom Semi-Detached',
      priceNGN: 120000000,
      priceUSD: 153000,
      location: 'Ikeja GRA, Lagos',
      beds: 4,
      baths: 4,
      area: '280sqm',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhIQpcqbsG6umCnjJkceI8qMKNmyaYGGOwLO4E-MIx-j2643i_53junw5juvsxHSBMmyOxjkL7gsc0hgBUymJYexiYTxlek7nh4G2SD4NW9_vwknCWRDHb4SDwfgcyO9T_dNAbaPXMuRLwgWO1LhNRlzc27Kk-WCAtkF8DKwkmmbznX9LxVpJ_AYWJBreXs57CL9mbBaLH-aeAPda0ewQ-tJxAUG5rnuEcopgvHbtJUtuNtjh_p22cUxswOtglo07aXbup9pHP9F0',
      isVerified: true,
    },
  ];

  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#F0EBE1] font-heading">
              Featured Premium Listings
            </h2>
            <p className="text-lg" style={{ color: 'rgba(240,235,225,0.75)' }}>
              Handpicked verified properties across prime locations in Nigeria.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div
              onClick={() => setCurrency((prev) => (prev === 'NGN' ? 'USD' : 'NGN'))}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 shadow-sm cursor-pointer hover:border-primary transition-all group"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <span
                className={`text-sm font-bold ${currency === 'NGN' ? 'text-primary' : 'text-neutral-medium'}`}
              >
                NGN
              </span>
              <span className="material-icons text-sm text-primary group-hover:rotate-180 transition-transform duration-300">
                <IoSwapHorizontal/>
              </span>
              <span
                className={`text-sm font-bold ${currency === 'USD' ? 'text-primary' : 'text-neutral-medium'}`}
              >
                USD
              </span>
            </div>
            <button className="text-primary font-bold hover:underline flex items-center gap-1 group text-lg">
              View All{' '}
              <span className="material-icons group-hover:translate-x-1 transition-transform">
                <ArrowRight/>
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listings.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
