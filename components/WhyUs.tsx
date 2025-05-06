export default function WhyUs() {
  return (
    <section className="bg-[#221f35] text-white py-12 md:py-16 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-purple-400 font-semibold">Why choose PlanIt</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
          Everything you need to plan smarter
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          PlanIt isn’t just another to-do list. It’s a full productivity
          companion designed to simplify your life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          {
            title: 'Built for focus',
            desc: 'Decluttered UI that lets you focus on your tasks without distractions.',
          },
          {
            title: 'Smart scheduling',
            desc: 'Schedule tasks with ease and let PlanIt organize your day automatically.',
          },
          {
            title: 'Calendar integration',
            desc: 'Integrates seamlessly with your calendar to keep everything in one place.',
          },
          {
            title: 'Fast & intuitive',
            desc: 'Minimalist and blazing fast UX designed to make task management enjoyable.',
          },
          {
            title: 'Secure by default',
            desc: 'Your tasks are private and protected – powered by secure infrastructure.',
          },
          {
            title: 'Loved by users',
            desc: 'Consistently rated 5 stars for simplicity, design, and reliability.',
          },
        ].map((card, index) => (
          <div
            key={index}
            className="rounded-2xl bg-gradient-to-br from-[#2f2745] to-[#1e1b2c] p-6 border border-purple-500/10 ring-1 ring-purple-400/10
                 shadow-md hover:shadow-xl hover:ring-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {card.title}
            </h3>
            <p className="text-sm text-gray-300">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
