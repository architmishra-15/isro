import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Award, ChevronRight } from "lucide-react";
import { ISRO_MISSIONS } from "@/lib/utils";

export default function MissionsPage() {
  // Group missions by year
  const groupedMissions = ISRO_MISSIONS.reduce((acc, mission) => {
    const year = mission.date.split(', ')[1];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(mission);
    return acc;
  }, {} as Record<string, typeof ISRO_MISSIONS>);

  // Sort years in descending order
  const sortedYears = Object.keys(groupedMissions).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-gradient mb-6">ISRO Missions</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Explore India's remarkable journey in space exploration through our pioneering missions that have advanced science and technology.
          </p>
        </section>
        
        {/* Featured Mission */}
        <section className="mb-20">
          <div className="glass-effect overflow-hidden rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg"
                  alt="Chandrayaan-3"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured Mission
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-3">Chandrayaan-3</h2>
                <div className="flex items-center text-slate-400 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>July 14, 2023</span>
                </div>
                <p className="text-slate-300 mb-6">
                  India's third lunar exploration mission, which successfully landed near the lunar south pole, making India the fourth country to successfully soft-land on the Moon and the first to land near the lunar south pole.
                </p>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements:</h3>
                  <ul className="space-y-2">
                    {ISRO_MISSIONS[0].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-4 w-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  href={`/missions/${ISRO_MISSIONS[0].id}`}
                  className="space-button inline-flex items-center text-sm"
                >
                  Explore Mission <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline of Missions */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Mission Timeline</h2>
          
          {sortedYears.map(year => (
            <div key={year} className="mb-12">
              <div className="flex items-center mb-6">
                <div className="h-px flex-grow bg-slate-800"></div>
                <span className="px-4 py-1 rounded-full bg-slate-800 text-slate-200 text-sm font-semibold">
                  {year}
                </span>
                <div className="h-px flex-grow bg-slate-800"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedMissions[year].map(mission => (
                  <Link
                    key={mission.id}
                    href={`/missions/${mission.id}`}
                    className="card-glow group"
                  >
                    <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={mission.image}
                        alt={mission.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-blue-400 transition-colors">
                      {mission.name}
                    </h3>
                    <div className="flex items-center text-slate-400 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{mission.date}</span>
                    </div>
                    <p className="text-slate-300 text-sm line-clamp-3 mb-4">
                      {mission.description}
                    </p>
                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}