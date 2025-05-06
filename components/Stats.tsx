export default function Stats() {
  return (
    <section className="relative bg-[#141624] text-white py-4 md:py-8 px-6">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Заглавие */}
        <p className="text-indigo-400 font-medium mb-2">Our impact</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Trusted by productivity lovers worldwide
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Thousands of users rely on PlanIt to manage their daily tasks, track
          progress and stay focused.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
        <div>
          <p className="text-3xl font-bold text-white">4,200+</p>
          <p className="text-gray-400 mt-2">Active users</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">12,000+</p>
          <p className="text-gray-400 mt-2">Tasks created</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">98%</p>
          <p className="text-gray-400 mt-2">User satisfaction</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">24/7</p>
          <p className="text-gray-400 mt-2">Calendar access</p>
        </div>
      </div>
    </section>
  );
}
