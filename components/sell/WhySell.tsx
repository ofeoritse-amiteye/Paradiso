interface Benefit {
  title: string;
  desc: string;
  icon: string;
}

export default function WhySell() {
  const benefits: Benefit[] = [
    {
      title: "Accurate Data",
      desc: "Our valuation models use real-time market data to give you the most precise estimate.",
      icon: "📊"
    },
    {
      title: "Expert Tools",
      desc: "From mortgage calculators to net proceeds estimators, we have the tools you need.",
      icon: "🛠️"
    },
    {
      title: "Maximum Reach",
      desc: "List with us and get seen by millions of motivated buyers every month.",
      icon: "🌍"
    },
    {
      title: "Dedicated Support",
      desc: "Our team is here to help you navigate every step of the selling journey.",
      icon: "🤝"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Why use HomeFinder
          </h2>
          <p className="text-lg text-gray-600">
            We provide the data, tools, and expertise you need to sell your home with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
