const solarStormImg = "https://t3.ftcdn.net/jpg/09/13/00/14/360_F_913001449_J3NbqjVle9lzc5fzv00h17Xyb995JswM.jpg"; 
const solarWindImg = "https://scitechdaily.com/images/Mars-Solar-Wind-Concept-777x518.jpg"; 
const solarFlaresImg = "https://thumbs.dreamstime.com/b/extreme-solar-storm-solar-flares-illustration-67256336.jpg"; 
const aurorasImg = "https://c02.purpledshub.com/uploads/sites/77/2024/07/1ef442fd-8851-6c12-b078-870ecd205279.jpg"; 
const geomagneticStormsImg = "https://scx2.b-cdn.net/gfx/news/2018/new3dmeasure.jpg";
const cmeImg = "https://cdn.mos.cms.futurecdn.net/46PJLXCiJJcB8HZwLygdJT-1200-80.jpg"; 

export const CONCEPTS = [
  {
    image: solarStormImg,
    title: 'Solar Storms',
    description:
      'Powerful bursts of solar wind and magnetic fields rising above the solar corona or being released into space.',
  },
  {
    image: solarWindImg,
    title: 'Solar Winds',
    description:
      'Streams of charged particles released from the upper atmosphere of the sun, affecting space weather.',
  },
  {
    image: solarFlaresImg,
    title: 'Solar Flares',
    description:
      'Intense bursts of radiation coming from the release of magnetic energy associated with sunspots.',
  },
  {
    image: aurorasImg,
    title: 'Auroras',
    description:
      'Natural light display predominantly seen in high-latitude regions, caused by solar wind interacting with Earth\'s magnetic field.',
  },
  {
    image: geomagneticStormsImg,
    title: 'Geomagnetic Storms',
    description:
      'Disturbances in Earth’s magnetosphere caused by solar winds and solar flares that can affect communication and navigation systems.',
  },
  {
    image: cmeImg,
    title: 'Coronal Mass Ejections (CMEs)',
    description:
      'Huge expulsions of plasma and magnetic fields from the sun’s corona, potentially affecting the entire solar system.',
  }
];

export const EXAMPLES = {
  SolarStorms: [
    {
      title: 'Effects on Satellites',
      description:
        'Solar storms can disrupt satellite operations, affecting communication and GPS systems.',
      image: 'https://cdn.images.express.co.uk/img/dynamic/151/750x445/1184457.jpg', 
    },
    {
      title: 'Impact on Power Grids',
      description:
        'Strong solar storms can induce electrical currents in power lines, potentially leading to blackouts.',
      image: 'https://static.toiimg.com/thumb/msid-110490080,width-400,resizemode-4/110490080.jpg', 
    },
  ],
  SolarWinds: [
    {
      title: 'Influence on Weather',
      description:
        'Solar wind conditions can influence weather patterns on Earth by affecting the ionosphere.',
      image: 'https://images.newscientist.com/wp-content/uploads/2020/06/23175818/01590872_web.jpg', 
    },
    {
      title: 'Space Weather Effects',
      description:
        'The interaction of solar winds with Earth’s magnetic field can lead to various space weather phenomena.',
      image: 'https://www.phenomena.org/wp-content/uploads/2018/06/solarwind.jpg', 
    },
  ],
  SolarFlares: [
    {
      title: 'High Energy Radiation',
      description:
        'Solar flares release high-energy radiation that can affect satellites and astronauts in space.',
      image: 'https://cdn.mos.cms.futurecdn.net/9uhrE5EhoP4y62feEkjXbD-1200-80.jpg', 
    },
    {
      title: 'Impact on Earth’s Atmosphere',
      description:
        'Solar flares can enhance ionization in the atmosphere, affecting radio communications and navigation.',
      image: 'https://cdn.mos.cms.futurecdn.net/DmfCdqqk2pGVBVGajypWSG.jpg', 
    },
  ],
  Auroras: [
    {
      title: 'Aurora Borealis',
      description:
        'Known as the Northern Lights, this phenomenon occurs due to solar wind particles colliding with Earth’s atmosphere.',
      image: 'https://cdn.britannica.com/48/178648-050-459A79EC/Aurora-Borealis.jpg', 
    },
    {
      title: 'Aurora Australis',
      description:
        'The Southern Lights, a similar phenomenon occurring in the southern hemisphere due to solar wind interactions.',
      image: 'https://cdn.britannica.com/22/207422-050-08BCE97B/Aurora-Australis.jpg', 
    },
  ],
  GeomagneticStorms: [
    {
      title: 'Effects on Technology',
      description:
        'Geomagnetic storms can affect power systems, satellites, and radio communications, causing disruptions.',
      image: 'https://cdn.britannica.com/58/207458-050-5C54CC6B/geomagnetic-storm.jpg', 
    },
    {
      title: 'Monitoring Space Weather',
      description:
        'Scientists monitor geomagnetic storms to predict their impact on technology and communications.',
      image: 'https://cdn.britannica.com/72/207472-050-C095F9A4/monitoring-space-weather.jpg', 
    },
  ],
  CoronalMassEjections: [
    {
      title: 'Disruptions to Communications',
      description:
        'CMEs can severely disrupt communication systems by altering Earth’s magnetosphere and ionosphere.',
      image: 'https://cdn.britannica.com/37/200037-050-D6F687E3/communication-disruption.jpg', 
    },
    {
      title: 'Potential Damage to Satellites',
      description:
        'The energetic particles released during a CME can damage satellites and other space equipment.',
      image: 'https://cdn.britannica.com/23/207423-050-9A5E94E7/satellite-damage.jpg', 
    },
  ]
};
