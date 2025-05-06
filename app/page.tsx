import CallToAction from '@/components/CallToAction';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyUs from '@/components/WhyUs';


export const metadata = {
  title: 'PlanIt – Smart Task Planner',
  description: 'Organize your tasks and schedule like a pro with PlanIt.',
  keywords: 'task planner, calendar, productivity, smart planner',
  openGraph: {
    title: 'PlanIt – Smart Task Planner',
    description: 'Plan smarter, live better. Boost your productivity with PlanIt.',
    url: 'https://planit-rho.vercel.app/',
    siteName: 'PlanIt',
    images: [
      {
        url: 'https://planit-rho.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};


export default function Home() {

  return (
    <>
    <Hero />
    <Stats />
    <WhyUs />
    <CallToAction />
    </>
  );
}
