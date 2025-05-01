import Image from "next/image";
import { Award, Users, Rocket, Calendar, BarChart, Globe, Database, Brain } from "lucide-react";
import timelineData from "@/data/timeline.json";
import { Timeline } from "@/components/ui/Timeline";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-gradient mb-6">About ISRO</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            The Indian Space Research Organisation is India's national space agency, with a vision to harness space technology for national development.
          </p>
        </section>
        
        {/* Overview Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-300 mb-6">
                The Indian Space Research Organisation (ISRO) is the national space agency of India, headquartered in Bengaluru. It operates under the Department of Space, which is directly overseen by the Prime Minister of India. ISRO is the primary agency in India conducting research and development in satellite technology, space applications, and launch vehicles.
              </p>
              <p className="text-slate-300 mb-8">
                Since its establishment in 1969, ISRO has evolved from launching small satellites for Earth observation to developing indigenous launch vehicles, launching lunar and Mars orbiters, and achieving significant milestones in space exploration. ISRO's vision is to harness space technology for national development while pursuing planetary exploration and space science research.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-effect p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-blue-500/20 p-2 mr-4">
                      <Calendar className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-medium">Established</h3>
                  </div>
                  <p className="text-slate-300">August 15, 1969</p>
                </div>
                
                <div className="glass-effect p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-purple-500/20 p-2 mr-4">
                      <Users className="h-5 w-5 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-medium">Workforce</h3>
                  </div>
                  <p className="text-slate-300">17,000+ scientists and engineers</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg"
                  alt="ISRO Headquarters"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <h3 className="text-xl font-bold text-white">Excellence in Space</h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    ISRO has achieved numerous milestones with its cost-effective approach to space exploration and technology development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Areas */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Key Areas of Focus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                title: "Launch Vehicles",
                description: "Developing reliable and cost-effective launch vehicles for various satellite deployment missions"
              },
              {
                icon: Globe,
                title: "Earth Observation",
                description: "Monitoring Earth's resources, environment, and climate through sophisticated satellite systems"
              },
              {
                icon: Database,
                title: "Space Applications",
                description: "Utilizing space technology for societal applications like telecommunication, weather forecasting, and disaster management"
              },
              {
                icon: Brain,
                title: "Research & Development",
                description: "Advancing space science, technology, and exploration through innovative research"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card-glow">
                  <div className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-3 w-12 h-12 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Our Journey</h2>
          <div className="bg-transparent text-white">
            <Timeline 
              data={timelineData.map(item => ({
                title: item.title,
                content: (
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">{item.content.heading}</h3>
                    <p className="text-slate-300">{item.content.description}</p>
                  </div>
                )
              }))}
            />
          </div>
        </section>
        
        {/* Vision & Leadership */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Vision for the Future</h2>
            <div className="glass-effect p-8">
              <p className="text-slate-300 mb-6">
                ISRO continues to advance its capabilities with ambitious plans for the future:
              </p>
              <ul className="space-y-4">
                {[
                  "Gaganyaan: India's first human spaceflight program",
                  "Aditya-L1: First mission to study the Sun",
                  "Chandrayaan-4: Sample return mission from the Moon",
                  "Venus mission and space station development",
                  "Expanding satellite-based services for societal applications"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <BarChart className="h-5 w-5 text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold">Key Performance Indicators</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Successful Launches</div>
                    <div className="text-2xl font-bold">100+</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Satellites Deployed</div>
                    <div className="text-2xl font-bold">350+</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Foreign Satellites</div>
                    <div className="text-2xl font-bold">400+</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Cost Efficiency</div>
                    <div className="text-2xl font-bold">60%</div>
                    <div className="text-xs text-slate-400">lower than global average</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Leadership</h2>
            <div className="glass-effect p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto relative mb-4">
                  <div className="rounded-full w-full h-full overflow-hidden border-4 border-blue-500/20">
                    <div className="w-full h-full bg-blue-500/20 flex items-center justify-center">
                      <Users className="h-16 w-16 text-blue-500/60" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">S. Somanath</h3>
                <p className="text-slate-400 mb-4">Chairman, ISRO</p>
                <p className="text-slate-300 text-sm">
                  Leading ISRO's vision and mission with expertise in rocket technologies and space systems.
                </p>
              </div>
              
              <h3 className="text-lg font-semibold mb-4">Key Departments</h3>
              <ul className="space-y-4">
                {[
                  "Space Applications Centre (SAC)",
                  "Vikram Sarabhai Space Centre (VSSC)",
                  "U R Rao Satellite Centre (URSC)",
                  "Satish Dhawan Space Centre (SDSC)",
                  "National Remote Sensing Centre (NRSC)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-500/20 rounded-full p-1 mr-3">
                      <svg className="h-3 w-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}