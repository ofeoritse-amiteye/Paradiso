import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Verified Listings', val: '1,200+' },
    { label: 'Transaction Volume', val: '₦45B+' },
    { label: 'Vetted Agents', val: '350+' },
    { label: 'Trust Score', val: '99.8%' },
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden" style={{ backgroundColor: '#06100A' }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
          {stats.map((s, i) => (
            <div key={i} className="space-y-4">
              <div className="text-5xl md:text-6xl font-black text-primary drop-shadow-lg font-heading">
                {s.val}
              </div>
              <div className="text-white/90 uppercase tracking-[0.2em] text-sm font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
