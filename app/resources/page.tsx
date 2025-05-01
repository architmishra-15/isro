import Link from "next/link";
import Image from "next/image";
import { Download, FileText, Video, BookOpen, Database, Filter, ArrowRight, CalendarDays, Link2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-gradient mb-6">Resources</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Access educational materials, research papers, and tools related to space science and ISRO's activities.
          </p>
        </section>
        
        {/* Resource Categories */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Research Papers",
                description: "Academic publications and research conducted by ISRO scientists",
                count: 150,
                color: "blue"
              },
              {
                icon: BookOpen,
                title: "Educational Material",
                description: "Learning resources for students interested in space science",
                count: 85,
                color: "purple"
              },
              {
                icon: Video,
                title: "Videos & Media",
                description: "Mission videos, launches, and educational content",
                count: 210,
                color: "orange"
              },
              {
                icon: Database,
                title: "Open Data",
                description: "Publicly available data sets from various ISRO missions",
                count: 65,
                color: "green"
              }
            ].map((category, index) => {
              const Icon = category.icon;
              const colorMap = {
                blue: "from-blue-600 to-indigo-600",
                purple: "from-purple-600 to-indigo-600",
                orange: "from-orange-600 to-red-600", 
                green: "from-green-600 to-teal-600"
              };
              
              return (
                <div key={index} className="card-glow">
                  <div className={`rounded-full bg-gradient-to-r ${colorMap[category.color as keyof typeof colorMap]} p-3 w-12 h-12 flex items-center justify-center mb-6`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-slate-300 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">{category.count} resources</span>
                    <Link
                      href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect col-span-1 md:col-span-2">
              <div className="relative h-52 md:h-64 rounded-t-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg"
                  alt="Space Research"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Chandrayaan-3: Scientific Objectives and Achievements</h3>
                <p className="text-slate-300 mb-4">
                  A comprehensive report detailing the scientific objectives, mission design, and significant achievements of Chandrayaan-3.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-400 text-sm">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>Published: Sep 15, 2023</span>
                  </div>
                  <a 
                    href="#"
                    className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-effect">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Popular Downloads</h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Space Technology Primer",
                      type: "PDF",
                      size: "4.2 MB",
                      icon: FileText
                    },
                    {
                      title: "Satellite Data Analysis Guide",
                      type: "PDF",
                      size: "2.8 MB",
                      icon: FileText
                    },
                    {
                      title: "Mars Orbiter Mission Results",
                      type: "Video",
                      size: "156 MB",
                      icon: Video
                    },
                    {
                      title: "Remote Sensing Applications",
                      type: "PDF",
                      size: "5.1 MB",
                      icon: FileText
                    },
                    {
                      title: "Earth Observation Dataset",
                      type: "ZIP",
                      size: "320 MB",
                      icon: Database
                    }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="rounded-md bg-slate-800 p-2 mr-3">
                            <Icon className="h-4 w-4 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{item.title}</div>
                            <div className="text-xs text-slate-400">{item.type} • {item.size}</div>
                          </div>
                        </div>
                        <a 
                          href="#"
                          className="rounded-full bg-slate-800 p-1.5 text-slate-300 hover:bg-blue-500 hover:text-white transition-colors"
                        >
                          <Download className="h-4 w-4" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Research Papers */}
        <section id="research-papers" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Research Papers</h2>
            <div className="glass-effect relative flex items-center px-3 py-1.5 rounded-lg">
              <Filter className="h-4 w-4 text-slate-400 mr-2" />
              <select className="bg-transparent text-white text-sm focus:outline-none appearance-none pr-8">
                <option value="all">All Categories</option>
                <option value="lunar">Lunar Research</option>
                <option value="earth">Earth Observation</option>
                <option value="mars">Mars Studies</option>
                <option value="planetary">Planetary Science</option>
              </select>
              <div className="absolute right-3 pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="glass-effect overflow-hidden rounded-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900/40">
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Authors
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Published
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-black/20">
                  {[
                    {
                      title: "Lunar South Pole Exploration: Results from Chandrayaan-3",
                      authors: "K. Sivan, et al.",
                      date: "2023",
                      category: "Lunar Research"
                    },
                    {
                      title: "Climate Change Monitoring Using Remote Sensing Data",
                      authors: "P. Kunhikrishnan, et al.",
                      date: "2022",
                      category: "Earth Observation"
                    },
                    {
                      title: "Mars Atmosphere Analysis from Mars Orbiter Mission",
                      authors: "M. Annadurai, et al.",
                      date: "2021",
                      category: "Mars Studies"
                    },
                    {
                      title: "Advances in Small Satellite Technologies",
                      authors: "S. Somanath, et al.",
                      date: "2022",
                      category: "Technology"
                    },
                    {
                      title: "Water Detection Methods for Lunar Surface Studies",
                      authors: "V. Adimurthy, et al.",
                      date: "2022",
                      category: "Lunar Research"
                    }
                  ].map((paper, index) => (
                    <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-white">{paper.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-300">{paper.authors}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-300">{paper.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100/10 text-blue-400">
                          {paper.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <a 
                          href="#"
                          className="rounded-full bg-slate-800 p-1.5 text-slate-300 hover:bg-blue-500 hover:text-white transition-colors inline-flex"
                        >
                          <Download className="h-4 w-4" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-black/50 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800"
            >
              View all research papers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        
        {/* External Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">External Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "NASA Open Data Portal",
                description: "Access space data from NASA missions that complement ISRO research",
                link: "https://data.nasa.gov",
                image: "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg"
              },
              {
                title: "Space Science Journal",
                description: "Academic journal publishing the latest in space research",
                link: "https://www.science.org/journal/science",
                image: "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg"
              },
              {
                title: "International Space Station",
                description: "Live feeds and data from the International Space Station",
                link: "https://www.nasa.gov/mission_pages/station/main/index.html",
                image: "https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg"
              },
            ].map((resource, index) => (
              <a 
                key={index} 
                href={resource.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="card-glow overflow-hidden block group"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{resource.description}</p>
                  <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors text-sm">
                    <Link2 className="h-3.5 w-3.5 mr-1" />
                    Visit resource
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        
        {/* Educational Material */}
        <section id="educational-material">
          <h2 className="text-2xl font-bold mb-8">Educational Material</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect p-8">
              <h3 className="text-xl font-bold mb-6">Learning Resources</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Introduction to Space Science",
                    level: "Beginner",
                    duration: "4 hours",
                    format: "Interactive Course"
                  },
                  {
                    title: "Satellite Technology Fundamentals",
                    level: "Intermediate",
                    duration: "6 hours",
                    format: "Video Series"
                  },
                  {
                    title: "Understanding Orbital Mechanics",
                    level: "Advanced",
                    duration: "8 hours",
                    format: "Course with Simulations"
                  },
                  {
                    title: "Earth Observation Techniques",
                    level: "Intermediate",
                    duration: "5 hours",
                    format: "Workshop Material"
                  }
                ].map((course, index) => (
                  <a 
                    key={index} 
                    href="#"
                    className="flex items-start p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors block"
                  >
                    <div className="rounded-md bg-blue-500/20 p-2 mr-4">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium mb-1">{course.title}</h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-0.5 text-xs bg-slate-700 rounded-full text-slate-300">
                          {course.level}
                        </span>
                        <span className="px-2 py-0.5 text-xs bg-slate-700 rounded-full text-slate-300">
                          {course.duration}
                        </span>
                        <span className="px-2 py-0.5 text-xs bg-slate-700 rounded-full text-slate-300">
                          {course.format}
                        </span>
                      </div>
                      <span
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Access materials
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="glass-effect p-8">
              <h3 className="text-xl font-bold mb-6">For Students & Educators</h3>
              <p className="text-slate-300 mb-6">
                ISRO provides educational resources for students of all ages and teachers to help inspire the next generation of space scientists and engineers.
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Student Programs</h4>
                <ul className="space-y-3">
                  {[
                    "Young Scientist Programme (YUVIKA)",
                    "Space Science Clubs for Schools",
                    "ISRO Student Satellite Program",
                    "Space Quiz Competitions",
                    "Summer Internship Opportunities"
                  ].map((program, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-slate-300">{program}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Teacher Resources</h4>
                <ul className="space-y-3">
                  {[
                    "Classroom Activity Guides",
                    "Space Science Curriculum Support",
                    "Teacher Training Workshops",
                    "Educational Webinars",
                    "Learning Material Development"
                  ].map((resource, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-slate-300">{resource}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <ButtonLink 
                  href="#"
                  className="space-button inline-flex items-center text-sm"
                >
                  Explore Educational Resources <ArrowRight className="ml-1 h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}