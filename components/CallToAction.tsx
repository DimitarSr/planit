import AuthActions from './AuthActions';

export default function CallToAction() {
  return (
    <section className="bg-[#141624] text-white text-center px-6 py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-800/30 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Boost your productivity today
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Organize your tasks, manage your time, and stay focused with PlanIt.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <AuthActions variant="cta" />
        </div>
      </div>
    </section>
  );
}
