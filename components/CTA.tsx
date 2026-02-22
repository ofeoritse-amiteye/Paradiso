import React from 'react';

interface CTAProps {
  onTalkToConsultant: () => void;
}

const CTA: React.FC<CTAProps> = ({ onTalkToConsultant }) => {
  return (
    <section className="py-24 bg-background-light" style={{ backgroundColor: '#06100A' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-forest/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full -ml-32 -mb-32 blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight font-heading">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-14 max-w-3xl mx-auto leading-relaxed">
              Whether you're in Lagos or London, Paradiso makes buying Nigerian real estate safe, transparent, and simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-black text-xl hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl">
                Browse Listings
              </button>
              <button
                onClick={onTalkToConsultant}
                className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/50 rounded-2xl font-black text-xl text-white hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Talk to a Consultant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
