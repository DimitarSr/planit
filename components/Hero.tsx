import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-[#221f35] text-white px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Текстова част */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            A better way to <br className="hidden md:block" />
            <span className="text-purple-400">manage your planning</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Plan smarter. Stay organized. Track your tasks efficiently with
            PlanIt – the ultimate task & calendar manager.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/phone-ui.png"
            alt="App preview"
            width={400}
            height={600}
            className="w-auto h-auto max-w-xs md:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
