import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ISRO_MISSIONS = [
  {
    id: 'chandrayaan-3',
    name: 'Chandrayaan-3',
    date: 'July 14, 2023',
    description: 'India\'s third lunar exploration mission, successfully landed near the lunar south pole.',
    image: 'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg',
    achievements: [
      'First spacecraft to land near the lunar south pole',
      'Successful demonstration of safe landing capabilities',
      'Operated for approximately 14 Earth days on the lunar surface'
    ],
    link: '/missions/chandrayaan-3'
  },
  {
    id: 'mangalyaan',
    name: 'Mangalyaan (Mars Orbiter Mission)',
    date: 'November 5, 2013',
    description: 'India\'s first interplanetary mission and the first Mars mission from an Asian nation to reach Mars orbit.',
    image: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg',
    achievements: [
      'First Asian nation to reach Mars orbit',
      'Most cost-effective Mars mission to date',
      'Operated successfully for over 7 years, far exceeding its designed mission life'
    ],
    link: '/missions/mangalyaan'
  },
  {
    id: 'astrosat',
    name: 'AstroSat',
    date: 'September 28, 2015',
    description: 'India\'s first dedicated multi-wavelength space observatory.',
    image: 'https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg',
    achievements: [
      'First dedicated Indian astronomy satellite',
      'Simultaneous multi-wavelength observations',
      'Discoveries of new star-forming regions'
    ],
    link: '/missions/astrosat'
  },
  {
    id: 'chandrayaan-1',
    name: 'Chandrayaan-1',
    date: 'October 22, 2008',
    description: 'India\'s first lunar probe that made the groundbreaking discovery of water molecules on the lunar surface.',
    image: 'https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg',
    achievements: [
      'Discovery of water molecules on the lunar surface',
      'Created detailed 3D maps of the lunar surface',
      'Operated for 312 days with 95% mission success'
    ],
    link: '/missions/chandrayaan-1'
  }
];

export const SATELLITE_DATA = [
  {
    id: 1,
    name: 'INSAT-3DR',
    type: 'Weather',
    launchDate: '2016',
    status: 'Active'
  },
  {
    id: 2,
    name: 'GSAT-17',
    type: 'Communication',
    launchDate: '2017',
    status: 'Active'
  },
  {
    id: 3,
    name: 'RISAT-2B',
    type: 'Radar Imaging',
    launchDate: '2019',
    status: 'Active'
  },
  {
    id: 4,
    name: 'ResourceSat-2A',
    type: 'Earth Observation',
    launchDate: '2016',
    status: 'Active'
  },
  {
    id: 5,
    name: 'CartoSat-3',
    type: 'Earth Observation',
    launchDate: '2019',
    status: 'Active'
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Chandrayaan-3 Launch',
    description: 'Launch of the Chandrayaan-3 mission on the LVM3 rocket',
    image: 'https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg',
    category: 'Missions'
  },
  {
    id: 2,
    title: 'Mars Surface from MOM',
    description: 'Image of Mars surface captured by Mars Orbiter Mission',
    image: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg',
    category: 'Planets'
  },
  {
    id: 3,
    title: 'PSLV Launch',
    description: 'PSLV rocket during liftoff at Sriharikota',
    image: 'https://images.pexels.com/photos/23764/pexels-photo.jpg',
    category: 'Rockets'
  },
  {
    id: 4,
    title: 'Earth from Space',
    description: 'View of Earth from one of ISRO\'s Earth observation satellites',
    image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
    category: 'Earth'
  },
  {
    id: 5,
    title: 'Lunar Surface',
    description: 'Image of lunar surface captured by Chandrayaan-2',
    image: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg',
    category: 'Moon'
  },
  {
    id: 6,
    title: 'GSLV Mark III',
    description: 'India\'s most powerful rocket at the launch pad',
    image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg',
    category: 'Rockets'
  }
];