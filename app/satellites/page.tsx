import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search, SatelliteDish, Activity, Check, Calendar } from "lucide-react";
import { SATELLITE_DATA } from "@/lib/utils";

export default function SatellitesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-gradient mb-6">ISRO Satellites</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Discover India's fleet of satellites enabling communication, earth observation, navigation, and scientific research.
          </p>
        </section>
        
        {/* Satellite Live Tracker */}
        <section className="mb-16">
          <div className="glass-effect overflow-hidden rounded-xl">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Satellite Tracker</h2>
                <div className="pulse-glow px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium flex items-center">
                  <Activity className="h-3 w-3 mr-1" />
                  Live Data
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-6 bg-slate-900/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <SatelliteDish className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-400">
                      Interactive satellite tracker visualization would appear here
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  href="#satellite-list"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-black/50 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800"
                >
                  View Satellite List <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Satellite Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Satellite Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: "Communication",
                description: "Enable telecommunications across India and internationally",
                image: "https://images.pexels.com/photos/8474500/pexels-photo-8474500.jpeg",
                count: 15
              },
              {
                type: "Earth Observation",
                description: "Monitor land, water resources and weather patterns",
                image: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg",
                count: 22
              },
              {
                type: "Navigation",
                description: "Provide positioning and navigation services",
                image: "https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg",
                count: 8
              },
              {
                type: "Scientific Research",
                description: "Conduct space-based experiments and observations",
                image: "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg",
                count: 10
              }
            ].map((category, index) => (
              <div key={index} className="card-glow group">
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.type}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
                    {category.count} Satellites
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">{category.type}</h3>
                <p className="text-slate-300 text-sm mb-4">
                  {category.description}
                </p>
                <Link 
                  href="#satellite-list"
                  className="text-blue-400 text-sm font-medium flex items-center hover:text-blue-300 transition-colors"
                >
                  View satellites <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        
        {/* Satellite List */}
        <section id="satellite-list">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Satellite Fleet</h2>
            
            <div className="relative">
              <div className="flex h-10 items-center rounded-md border border-slate-700 bg-black/30 px-4">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search satellites..."
                  className="flex-1 bg-transparent px-2 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-slate-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900/40">
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Satellite Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Launch Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-black/20">
                  {SATELLITE_DATA.map((satellite, index) => (
                    <tr key={satellite.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{satellite.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-300">{satellite.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-slate-300">
                          <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                          {satellite.launchDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {satellite.status === "Active" ? (
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100/10 text-green-400">
                            <Check className="h-4 w-4 mr-1" /> Active
                          </span>
                        ) : (
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100/10 text-yellow-400">
                            Inactive
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/satellites/${satellite.id}`} className="text-blue-400 hover:text-blue-300">
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}