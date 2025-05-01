"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CameraIcon, Filter, Grid, List, Sparkles } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/utils";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Filter images based on selected category
  const filteredImages = selectedCategory === "all" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(image => image.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-gradient mb-6">Space Gallery</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Experience the beauty and wonder of space through our collection of images from ISRO missions.
          </p>
        </section>
        
        {/* Featured Image */}
        <section className="mb-16">
          <div className="relative rounded-xl overflow-hidden">
            <div className="aspect-[21/9] md:aspect-[21/9] aspect-[16/12] relative">
              <Image
                src="https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg"
                alt="Featured space image"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-4 md:p-8 lg:p-12 w-full">
              <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
                <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
                <div className="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  Mars Exploration
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                The Red Planet Up Close
              </h2>
              <p className="text-slate-300 text-sm md:text-base max-w-xl mb-2 md:mb-6 line-clamp-2 md:line-clamp-none">
                This stunning image captures the Martian surface in unprecedented detail, 
                revealing the planet's distinct geological features and the remnants of ancient water flows.
              </p>
              <div className="flex items-center text-white/70 text-xs md:text-sm">
                <CameraIcon className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                Captured by Mangalyaan (Mars Orbiter Mission)
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Filter */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">Image Collection</h2>
            
            <div className="flex items-center space-x-4">
              <div className="glass-effect relative flex items-center px-3 py-1.5 rounded-lg">
                <Filter className="h-4 w-4 text-slate-400 mr-2" />
                <select 
                  className="bg-black text-white text-sm focus:outline-none appearance-none pr-8"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="missions">Missions</option>
                  <option value="planets">Planets</option>
                  <option value="rockets">Rockets</option>
                  <option value="moon">Moon</option>
                  <option value="earth">Earth</option>
                </select>
                <div className="absolute right-3 pointer-events-none">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="glass-effect flex rounded-lg overflow-hidden">
                <button 
                  className={`flex items-center justify-center h-8 w-8 ${viewMode === 'grid' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button 
                  className={`flex items-center justify-center h-8 w-8 ${viewMode === 'list' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Content - Grid View */}
        {viewMode === 'grid' && (
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="group relative card-glow overflow-hidden h-full">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
                      {image.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-3 left-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="bg-white/10 backdrop-blur-sm text-white p-2 rounded-full">
                        <Sparkles className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{image.title}</h3>
                    <p className="text-slate-300 text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Gallery Content - List View */}
        {viewMode === 'list' && (
          <section>
            <div className="space-y-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="group relative card-glow overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-60 md:h-auto overflow-hidden">
                      <Image
                        src={image.image}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
                        {image.category}
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-center">
                      <h3 className="text-xl font-medium mb-3">{image.title}</h3>
                      <p className="text-slate-300 mb-4">{image.description}</p>
                      <div className="mt-auto">
                        <button className="glass-effect px-4 py-2 rounded-lg text-sm flex items-center">
                          <Sparkles className="h-4 w-4 mr-2" />
                          View Full Image
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Pagination - Now properly displayed horizontally */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center text-white">
              1
            </button>
            <button className="h-10 w-10 rounded-md border border-slate-700 bg-black/30 flex items-center justify-center text-white">
              2
            </button>
            <button className="h-10 w-10 rounded-md border border-slate-700 bg-black/30 flex items-center justify-center text-white">
              3
            </button>
            <button className="h-10 rounded-md border border-slate-700 bg-black/30 flex items-center justify-center text-white px-3">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}