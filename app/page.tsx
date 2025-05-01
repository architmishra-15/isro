import Link from "next/link";
import Image from "next/image";
import { Rocket, ArrowRight, Award, Globe, Calendar, ChevronDown } from "lucide-react";
import { ISRO_MISSIONS } from "@/lib/utils";
import { FocusCards } from "@/components/ui/focus-cards";
import focusMissionsData from "@/data/focusMissions.json";
import { ButtonLink } from "@/components/ui/button-link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container-custom z-10 text-center">
          <h1 className="text-gradient mb-6 animate-float">
            Exploring Space, <br className="md:hidden" />
            Empowering India
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 mb-10">
            The Indian Space Research Organisation is on a mission to harness space technology 
            for national development while pursuing planetary exploration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/missions" className="space-button flex items-center justify-center gap-2">
              <Rocket className="h-5 w-5" />
              <span>Explore Missions</span>
            </ButtonLink>
            <ButtonLink href="/about" className="rounded-lg border border-slate-700 bg-black/50 px-5 py-2.5 text-white transition-all hover:bg-slate-800 flex items-center justify-center gap-2">
              <span>Learn About ISRO</span>
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
        </div>
      </section>

      {/* Featured Missions with FocusCards */}
      <section className="py-16 md:py-24 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Featured Missions</h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              Discover India's groundbreaking space missions that have pushed the boundaries of exploration and technology.
            </p>
          </div>

          {/* Focus Cards at the top */}
          <div className="mb-16">
            <FocusCards cards={focusMissionsData} />
          </div>

          {/* Existing mission cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ISRO_MISSIONS.map((mission, index) => (
              <Link 
                key={mission.id}
                href={`/missions/${mission.link}`}
                className="card-glow group duration-300 ease-in-out hover:transform hover:scale-105 block"
              >
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={mission.image}
                    alt={mission.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">{mission.name}</h3>
                <div className="flex items-center text-slate-400 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{mission.date}</span>
                </div>
                <p className="text-slate-300 text-sm line-clamp-3 mb-4">
                  {mission.description}
                </p>
                <div 
                  className="text-blue-400 text-sm font-medium flex items-center hover:text-blue-300 transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/missions"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-black/50 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800"
            >
              View all missions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-slate-900/20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-sm text-slate-300">Launch Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">130+</div>
              <div className="text-sm text-slate-300">Satellites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
              <div className="text-sm text-slate-300">Planetary Missions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">7</div>
              <div className="text-sm text-slate-300">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Achievements */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Latest Achievements</h2>
            <p className="mx-auto max-w-2xl text-slate-300">
              ISRO continues to break new ground in space exploration and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl">
              <div className="rounded-full bg-blue-500/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Chandrayaan-3 Success</h3>
              <p className="text-slate-300">
                Successfully landed near the lunar south pole, making India the fourth country to achieve a soft landing on the Moon.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-xl">
              <div className="rounded-full bg-purple-500/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gaganyaan Progress</h3>
              <p className="text-slate-300">
                Advancing India's human spaceflight program with successful testing of crew escape systems and life support technologies.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-xl">
              <div className="rounded-full bg-orange-500/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SSLV Development</h3>
              <p className="text-slate-300">
                Successfully developed and launched the Small Satellite Launch Vehicle, designed to cater to the growing market for small satellite launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] opacity-10 z-0 bg-cover bg-center"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h2 className="text-gradient mb-6">Ready to Explore the Universe?</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-300 mb-10">
              Join us on this incredible journey of discovery as we explore the cosmos and push the boundaries of human knowledge.
            </p>
            <ButtonLink href="/contact" className="space-button inline-flex items-center justify-center gap-2">
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}