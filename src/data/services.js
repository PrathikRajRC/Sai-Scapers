import { Fish, Leaf, Droplets, TreePine, CloudRain, Bird, Waves } from 'lucide-react';

// 🖼️ CUSTOM IMAGE PATHS - Edit these to use your own images
// You can use any path: local images (/images/...), external URLs (https://...), or imported images
// Examples:
//   '/images/my-custom/aquarium.jpg'           - Local image in public folder
//   'https://example.com/image.jpg'            - External URL
//   require('../assets/images/my-image.jpg')   - Imported image from src/assets
const serviceImages = {
  aquascaping: '/images/services/aquascaping-main.jpg',          // Professional Aquascaping
  terrarium: '/images/services/terrarium-main.webp',             // Designer Terrariums  
  waterFeature: '/images/services/water-feature-main.jpg',      // Luxury Water Features
  landscape: '/images/services/landscape-main.jpg',             // Landscape Architecture
  paludarium: '/images/services/paludarium-main.jpg',           // Paludarium Systems
  aviary: '/images/services/aviary-main.jpg',                   // Custom Aviaries
  reef: '/images/services/reef-main.jpg'                        // Marine Reef Systems
};

export const services = [
  {
    id: 'professional-aquascaping',
    name: 'Professional Aquascaping',
    icon: Fish,
    category: 'aquatic',
    image: serviceImages.aquascaping,
    price: 'Starting from ₹15,000',
    duration: '2-4 weeks',
    maintenance: 'Monthly service available',
    description: 'Award-winning aquascaping design and installation services featuring premium aquatic plants and sustainable ecosystem management.',
    details: 'Our certified aquascaping specialists create breathtaking underwater landscapes using advanced design principles and premium materials. Each aquascape is meticulously planned and executed with attention to plant compatibility, lighting requirements, and long-term sustainability. We use only the finest aquatic plants, carefully selected hardscape materials, and state-of-the-art filtration systems.',
    features: [
      'Professional design consultation',
      'Premium plant selection & sourcing',
      'Custom hardscape installation',
      'Advanced lighting & filtration setup',
      'Comprehensive maintenance plans',
      'Water chemistry optimization',
      '6-month warranty included'
    ],
    gallery: [
      '/images/services/aquascaping-1.jpg',
      '/images/services/aquascaping-2.jpg',
      '/images/services/aquascaping-3.jpg'
    ],
    requiredItems: [
      {
        category: 'Plants',
        subcategories: [
          {
            type: 'Stem Plants',
            plants: [
              {
                name: 'Ludwigia arcuata',
                origin: 'US',
                light: 'High',
                co2: 'High',
                difficulty: 'Medium',
                image: '/images/plants/stem/ludwigia_arcuata.png'
              },
              {
                name: 'Rotala Macranda',
                origin: 'India, China, Vietnam, etc.',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_macranda.png'
              },
              {
                name: 'Rotala Rotundifolia green',
                origin: 'Southeast Asia',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_rotundifolia_green.png'
              },
              {
                name: 'Ludwigia Peruensis',
                origin: 'Southeastern US',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/ludwigia_peruensis.png'
              },
              {
                name: 'Hydrocolyte Verticillata',
                origin: 'Americas and West Indies',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/hydrocolyte_verticillata.png'
              },
              {
                name: 'Rotala Rotundifolia',
                origin: 'India, China, Taiwan, etc.',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_rotundifolia.png'
              },
              {
                name: 'Rotala sp. Vietnam',
                origin: 'Vietnam',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_sp_vietnam.png'
              },
              {
                name: 'Pogostemon Stellatus Dassen',
                origin: 'Asia and Northern Australia',
                light: 'High',
                co2: 'High',
                difficulty: 'Difficult',
                image: '/images/plants/stem/pogostemon_stellatus_dassen.png'
              },
              {
                name: 'Rotala macaranda green',
                origin: 'India',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_macaranda_green.png'
              },
              {
                name: 'Rotala rotundifolia `Hra`',
                origin: 'Vietnam (Gia Lai)',
                light: 'High',
                co2: 'High',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_rotundifolia_hra.png'
              },
              {
                name: 'Rotalla wallichi long leaf',
                origin: 'Tropical Asia',
                light: 'High',
                co2: 'High',
                difficulty: 'Difficult',
                image: '/images/plants/stem/rotala_wallichi_long_leaf.png'
              },
              {
                name: 'Rotala sp. Bangladesh',
                origin: 'Bangladesh',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_sp_bangladesh.png'
              },
              {
                name: 'Rotala macrandra Bangladesh',
                origin: 'Bangladesh',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_macrandra_bangladesh.png'
              },
              {
                name: 'Rotala nanjenshan',
                origin: 'Taiwan',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_nanjenshan.png'
              },
              {
                name: 'Proserpinaca palustris',
                origin: 'North & Central America, Caribbean',
                light: 'High',
                co2: 'High',
                difficulty: 'Easy',
                image: '/images/plants/stem/proserpinaca_palustris.png'
              },
              {
                name: 'Pogostemon erectus',
                origin: 'India',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Medium',
                image: '/images/plants/stem/pogostemon_erectus.png'
              },
              {
                name: 'Myriophyllium mattogrosense',
                origin: 'Brazil (Mato Grosso)',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/stem/myriophyllium_mattogrosense.png'
              },
              {
                name: 'Ludwigia repens super red',
                origin: 'North and Central America',
                light: 'High',
                co2: 'High',
                difficulty: 'Difficult',
                image: '/images/plants/stem/ludwigia_repens_super_red.png'
              },
              {
                name: 'Rotala ceylon',
                origin: 'Sri Lanka',
                light: 'Low',
                co2: 'Low',
                difficulty: 'Easy',
                image: '/images/plants/stem/rotala_ceylon.png'
              },
              {
                name: 'Ludwigia senegalensis',
                origin: 'West Africa (Guinea)',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Medium',
                image: '/images/plants/stem/ludwigia_senegalensis.png'
              },
              {
                name: 'Myriophyllum hippuroides',
                origin: 'North America (BC to California)',
                light: 'High',
                co2: 'High',
                difficulty: 'Medium',
                image: '/images/plants/stem/myriophyllum_hippuroides.png'
              },
              {
                name: 'Tonina fluviatilis',
                origin: 'South & Central America, Caribbean',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Medium',
                image: '/images/plants/stem/tonina_fluviatilis.png'
              },
              {
                name: 'Hygrophilla odora',
                origin: 'West Africa',
                light: 'High',
                co2: 'High',
                difficulty: 'Medium',
                image: '/images/plants/stem/hygrophilla_odora.png'
              }
            ]
          },
          {
            type: 'Rosette Plants',
            plants: [
              {
                name: 'Lilaeopsis brasiliensis',
                origin: 'South America',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/rosette/lilaeopsis_brasiliensis.png'
              },
              {
                name: 'Staurogyne repens',
                origin: 'Brazil (Rio Cristalino, Amazonas)',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Medium',
                image: '/images/plants/rosette/staurogyne_repens.png'
              },
              {
                name: 'Cyperus Helferi',
                origin: 'Thailand',
                light: 'High',
                co2: 'High',
                difficulty: 'Medium',
                image: '/images/plants/rosette/cyperus_helferi.png'
              },
              {
                name: 'Hygrophila sp. Araguaia',
                origin: 'South and East Asia',
                light: 'High',
                co2: 'High',
                difficulty: 'Difficult',
                image: '/images/plants/rosette/hygrophila_araguaia.png'
              },
              {
                name: 'Pogostemon Helferi',
                origin: 'Thailand-Burma border',
                light: 'High',
                co2: 'High',
                difficulty: 'Medium',
                image: '/images/plants/rosette/pogostemon_helferi.png'
              },
              {
                name: 'Echinodorus tenellus',
                origin: 'Americas (US to South America)',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Medium',
                image: '/images/plants/rosette/echinodorus_tenellus.png'
              },
              {
                name: 'Cryptocoryne axelrodi',
                origin: 'Sri Lanka',
                light: 'Low',
                co2: 'Low',
                difficulty: 'Easy',
                image: '/images/plants/rosette/cryptocoryne_axelrodi.png'
              },
              {
                name: 'Cryptocoryne lucens',
                origin: 'Sri Lanka, Southeast Asia',
                light: 'Low',
                co2: 'Low',
                difficulty: 'Easy',
                image: '/images/plants/rosette/cryptocoryne_lucens.png'
              },
              {
                name: 'Cryptocoryne wendtii green',
                origin: 'Sri Lanka',
                light: 'Low',
                co2: 'Low',
                difficulty: 'Easy',
                image: '/images/plants/rosette/cryptocoryne_wendtii_green.png'
              },
              {
                name: 'Cryptocoryne wendtii brown',
                origin: 'Sri Lanka',
                light: 'Low',
                co2: 'Low',
                difficulty: 'Easy',
                image: '/images/plants/rosette/cryptocoryne_wendtii_brown.png'
              },
              {
                name: 'Cryptocoryne wendtii tropica',
                origin: 'Sri Lanka',
                light: 'Low',
                co2: 'Low',
                difficulty: 'Easy',
                image: '/images/plants/rosette/cryptocoryne_wendtii_tropica.png'
              },
              {
                name: 'Cryptocoryne pink panther',
                origin: 'Sri Lanka',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/rosette/cryptocoryne_pink_panther.png'
              },
              {
                name: 'Lagenandra keralensis',
                origin: 'India (Kerala)',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/rosette/lagenandra_keralensis.png'
              },
              {
                name: 'Lagenandra meeboldii green',
                origin: 'India (Western Ghats)',
                light: 'Medium',
                co2: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/rosette/lagenandra_meeboldii_green.png'
              },
              {
                name: 'Lagenandra meeboldii red',
                origin: 'India (Western Ghats)',
                light: 'High',
                co2: 'High',
                difficulty: 'Medium',
                image: '/images/plants/rosette/lagenandra_meeboldii_red.png'
              }
            ]
          },
          {
            type: 'Carpet Plants',
            plants: [
              {
                  name: 'Glossostigma elatinoides',
                  origin: 'Eastern Australia',
                  light: 'High',
                  co2: 'High',
                  difficulty: 'Easy',
                  image: '/images/plants/carpet/glossostigma_elatinoides.png'
                },
                {
                  name: 'Hemianthus callitrichoides cuba',
                  origin: 'West Indies (Cuba, Bahamas, etc.)',
                  light: 'High',
                  co2: 'High',
                  difficulty: 'Medium',
                  image: '/images/plants/carpet/hemianthus_callitrichoides_cuba.png'
                },
                {
                  name: 'Hydrocotyle tripartita',
                  origin: 'New Zealand and Australia',
                  light: 'High',
                  co2: 'High',
                  difficulty: 'Easy',
                  image: '/images/plants/carpet/hydrocotyle_tripartita.png'
                },
                {
                  name: 'Hemianthus micranthemoides',
                  origin: 'North America',
                  light: 'Low',
                  co2: 'Low',
                  difficulty: 'Easy',
                  image: '/images/plants/carpet/hemianthus_micranthemoides.png'
                },
                {
                  name: 'Eleocharis parvula',
                  origin: 'North America',
                  light: 'High',
                  co2: 'High',
                  difficulty: 'Medium',
                  image: '/images/plants/carpet/eleocharis_parvula.png'
                },
                {
                  name: 'Micranthemum Monte Carlo',
                  origin: 'Argentina',
                  light: 'High',
                  co2: 'High',
                  difficulty: 'Easy',
                  image: '/images/plants/carpet/micranthemum_monte_carlo.png'
                },
                {
                  name: 'Uticularia graminifolia',
                  origin: 'Asia',
                  light: 'High',
                  co2: 'High',
                  difficulty: 'Difficult',
                  image: '/images/plants/carpet/utricularia_graminifolia.png'
                },
                {
                  name: 'Eleocharis acicularis',
                  origin: 'Europe, Asia, Americas',
                  light: 'High',
                  co2: 'High',
                  difficulty: 'Easy',
                  image: '/images/plants/carpet/eleocharis_acicularis.png'
                },
                {
                  name: 'Microcarpaea minima',
                  origin: 'Southeast Asia, Japan, Northern Australia',
                  light: 'High',
                  co2: 'High',
                  difficulty: 'Easy',
                  image: '/images/plants/carpet/microcarpaea_minima.png'
                },
                {
                  name: 'Hydrocotyle tripartita mini',
                  origin: 'Queensland, Australia',
                  light: 'High',
                  co2: 'High',
                  difficulty: 'Easy',
                  image: '/images/plants/carpet/hydrocotyle_tripartita_mini.png'
                }
            ]
          },
          {
            type: 'Epiphytes',
            plants: [
              {
                name: 'Anubias Barteri',
                origin: 'West Africa',
                light: 'Low to Medium',
                co2: 'Not required',
                difficulty: 'Very Easy',
                image: '/images/plants/anubias-barteri.jpg'
              },
              {
                name: 'Java Fern',
                origin: 'Southeast Asia',
                light: 'Low to Medium',
                co2: 'Not required',
                difficulty: 'Very Easy',
                image: '/images/plants/java-fern.jpg'
              },
              {
                name: 'Bucephalandra',
                origin: 'Borneo',
                light: 'Low to Medium',
                co2: 'Optional',
                difficulty: 'Easy',
                image: '/images/plants/bucephalandra.jpg'
              }
            ]
          },
          {
            type: 'Moss',
            plants: [
              {
                name: 'Java Moss',
                origin: 'Southeast Asia',
                light: 'Low to High',
                co2: 'Not required',
                difficulty: 'Very Easy',
                image: '/images/plants/java-moss.jpg'
              },
              {
                name: 'Christmas Moss',
                origin: 'Brazil',
                light: 'Low to Medium',
                co2: 'Optional',
                difficulty: 'Easy',
                image: '/images/plants/christmas-moss.jpg'
              },
              {
                name: 'Flame Moss',
                origin: 'Southeast Asia',
                light: 'Medium',
                co2: 'Recommended',
                difficulty: 'Medium',
                image: '/images/plants/flame-moss.jpg'
              }
            ]
          }
        ]
      },
      {
        category: 'Lighting',
        items: [
          { name: 'LED Aquarium Light (Full Spectrum)', image: '/images/equipment/led-aquarium-light.jpg' },
          { name: 'Timer System', image: '/images/equipment/timer-system.jpg' },
          { name: 'Mounting Arms', image: '/images/equipment/mounting-arms.jpg' }
        ]
      },
      {
        category: 'Filtration',
        items: [
          { name: 'Canister Filter', image: '/images/equipment/canister-filter.jpg' },
          { name: 'CO2 System', image: '/images/equipment/co2-system.jpg' },
          { name: 'Air Pump', image: '/images/equipment/air-pump.jpg' },
          { name: 'Filter Media', image: '/images/equipment/filter-media.jpg' }
        ]
      },
      {
        category: 'Hardscape',
        items: [
          { name: 'Dragon Stone', image: '/images/equipment/dragon-stone.jpg' },
          { name: 'Spider Wood', image: '/images/equipment/spider-wood.jpg' },
          { name: 'Aqua Soil', image: '/images/equipment/aqua-soil.jpg' },
          { name: 'River Sand', image: '/images/equipment/river-sand.jpg' },
          { name: 'Lava Rock', image: '/images/equipment/lava-rock.jpg' }
        ]
      },
      {
        category: 'Maintenance',
        items: [
          { name: 'Plant Scissors', image: '/images/equipment/plant-scissors.jpg' },
          { name: 'Algae Scraper', image: '/images/equipment/algae-scraper.jpg' },
          { name: 'Water Test Kit', image: '/images/equipment/water-test-kit.jpg' },
          { name: 'Fertilizers', image: '/images/equipment/fertilizers.jpg' },
          { name: 'CO2 Indicator', image: '/images/equipment/co2-indicator.jpg' }
        ]
      }
    ]
  },
  {
    id: 'designer-terrariums',
    name: 'Designer Terrariums',
    icon: Leaf,
    category: 'terrestrial',
    image: serviceImages.terrarium,
    price: 'Starting from ₹3,500',
    duration: '1-2 weeks',
    maintenance: 'Quarterly check-ups',
    description: 'Bespoke terrarium designs crafted with precision using premium materials and sustainable practices for lasting beauty.',
    details: 'Our designer terrariums are more than decorative pieces—they are living ecosystems engineered for optimal plant health and minimal maintenance. Using scientifically-selected plant combinations and premium substrates, we create self-sustaining environments that thrive for years with minimal intervention.',
    features: [
      'Custom design consultation',
      'Premium plant & substrate selection',
      'Artistic arrangement & styling',
      'Care & maintenance guides',
      'Replacement guarantee',
      'Seasonal refresh service',
      'Corporate installation available'
    ],
    gallery: [
      '/images/services/terrarium-1.jpg',
      '/images/services/terrarium-2.jpg',
      '/images/services/terrarium-3.jpg'
    ],
    requiredItems: [
      {
        category: 'Plants',
        subcategories: [
          {
            type: 'Foliage Plants',
            plants: [
              {
                name: 'Fittonia (Nerve Plant)',
                origin: 'South America',
                light: 'Low to Medium',
                humidity: 'High',
                difficulty: 'Easy',
                image: '/images/plants/fittonia.jpg'
              },
              {
                name: 'Baby Ferns',
                origin: 'Tropical regions',
                light: 'Low to Medium',
                humidity: 'High',
                difficulty: 'Easy',
                image: '/images/plants/baby-ferns.jpg'
              },
              {
                name: 'Peperomia',
                origin: 'Central America',
                light: 'Medium',
                humidity: 'Medium to High',
                difficulty: 'Easy',
                image: '/images/plants/peperomia.jpg'
              }
            ]
          },
          {
            type: 'Air Plants',
            plants: [
              {
                name: 'Tillandsia Ionantha',
                origin: 'Central America',
                light: 'Bright Indirect',
                humidity: 'Medium',
                difficulty: 'Easy',
                image: '/images/plants/tillandsia-ionantha.jpg'
              },
              {
                name: 'Spanish Moss',
                origin: 'Americas',
                light: 'Bright Indirect',
                humidity: 'Medium to High',
                difficulty: 'Easy',
                image: '/images/plants/spanish-moss.jpg'
              }
            ]
          },
          {
            type: 'Succulents',
            plants: [
              {
                name: 'Haworthia',
                origin: 'South Africa',
                light: 'Bright',
                humidity: 'Low',
                difficulty: 'Very Easy',
                image: '/images/plants/haworthia.jpg'
              },
              {
                name: 'String of Pearls',
                origin: 'South Africa',
                light: 'Bright Indirect',
                humidity: 'Low',
                difficulty: 'Easy',
                image: '/images/plants/string-of-pearls.jpg'
              }
            ]
          },
          {
            type: 'Moss',
            plants: [
              {
                name: 'Sheet Moss',
                origin: 'Temperate regions',
                light: 'Low to Medium',
                humidity: 'High',
                difficulty: 'Easy',
                image: '/images/plants/sheet-moss.jpg'
              },
              {
                name: 'Cushion Moss',
                origin: 'Temperate regions',
                light: 'Low',
                humidity: 'High',
                difficulty: 'Easy',
                image: '/images/plants/cushion-moss.jpg'
              }
            ]
          },
          {
            type: 'Orchids',
            plants: [
              {
                name: 'Mini Phalaenopsis',
                origin: 'Southeast Asia',
                light: 'Bright Indirect',
                humidity: 'High',
                difficulty: 'Medium',
                image: '/images/plants/mini-phalaenopsis.jpg'
              },
              {
                name: 'Jewel Orchid',
                origin: 'Southeast Asia',
                light: 'Low to Medium',
                humidity: 'High',
                difficulty: 'Medium',
                image: '/images/plants/jewel-orchid.jpg'
              }
            ]
          }
        ]
      },
      {
        category: 'Container',
        items: [
          { name: 'Glass Terrarium', image: '/images/equipment/glass-terrarium.jpg' },
          { name: 'Drainage Layer', image: '/images/equipment/drainage-layer.jpg' },
          { name: 'Activated Charcoal', image: '/images/equipment/activated-charcoal.jpg' },
          { name: 'Terrarium Soil', image: '/images/equipment/terrarium-soil.jpg' }
        ]
      },
      {
        category: 'Decorative Elements',
        items: [
          { name: 'Decorative Stones', image: '/images/equipment/decorative-stones.jpg' },
          { name: 'Miniature Figurines', image: '/images/equipment/miniature-figurines.jpg' },
          { name: 'Colored Sand', image: '/images/equipment/colored-sand.jpg' },
          { name: 'Wood Pieces', image: '/images/equipment/wood-pieces.jpg' }
        ]
      },
      {
        category: 'Tools',
        items: [
          { name: 'Long Tweezers', image: '/images/equipment/long-tweezers.jpg' },
          { name: 'Small Spoon', image: '/images/equipment/small-spoon.jpg' },
          { name: 'Spray Bottle', image: '/images/equipment/spray-bottle.jpg' },
          { name: 'Cleaning Cloth', image: '/images/equipment/cleaning-cloth.jpg' }
        ]
      },
      {
        category: 'Lighting',
        items: [
          { name: 'LED Grow Light (Optional)', image: '/images/equipment/led-grow-light.jpg' },
          { name: 'Timer', image: '/images/equipment/timer.jpg' },
          { name: 'Adjustable Stand', image: '/images/equipment/adjustable-stand.jpg' }
        ]
      }
    ]
  },
  {
    id: 'luxury-water-features',
    name: 'Luxury Water Features',
    icon: Droplets,
    category: 'aquatic',
    image: serviceImages.waterFeature,
    price: 'Starting from ₹45,000',
    duration: '3-6 weeks',
    maintenance: 'Bi-weekly service',
    description: 'High-end outdoor water installations designed to transform your landscape into a tranquil sanctuary with professional-grade systems.',
    details: 'Our luxury water features combine engineering excellence with artistic vision to create stunning focal points for your outdoor space. From koi ponds to cascading waterfalls, each installation is designed with advanced filtration, circulation, and lighting systems to ensure crystal-clear water and optimal aquatic life health.',
    features: [
      'Site assessment & custom design',
      'Professional excavation & installation',
      'Advanced filtration systems',
      'LED lighting integration',
      'Aquatic plant establishment',
      'Fish stocking consultation',
      'Comprehensive warranty & support'
    ],
    gallery: [
      '/images/services/water-feature-1.jpg',
      '/images/services/water-feature-2.jpg',
      '/images/services/water-feature-3.jpg'
    ],
    requiredItems: [
      {
        category: 'Pumps & Filtration',
        items: [
          { name: 'Submersible Pump', image: '/images/equipment/submersible-pump.jpg' },
          { name: 'UV Sterilizer', image: '/images/equipment/uv-sterilizer.jpg' },
          { name: 'Bio Filter', image: '/images/equipment/bio-filter.jpg' },
          { name: 'Skimmer', image: '/images/equipment/skimmer.jpg' },
          { name: 'Pump Controller', image: '/images/equipment/pump-controller.jpg' }
        ]
      },
      {
        category: 'Construction Materials',
        items: [
          { name: 'Pond Liner', image: '/images/equipment/pond-liner.jpg' },
          { name: 'Underlayment', image: '/images/equipment/underlayment.jpg' },
          { name: 'Stone & Rocks', image: '/images/equipment/stone-rocks.jpg' },
          { name: 'Concrete', image: '/images/equipment/concrete.jpg' },
          { name: 'Waterproof Sealant', image: '/images/equipment/waterproof-sealant.jpg' }
        ]
      },
      {
        category: 'Lighting',
        items: [
          { name: 'Underwater LED Lights', image: '/images/equipment/underwater-led-lights.jpg' },
          { name: 'Landscape Spotlights', image: '/images/equipment/landscape-spotlights.jpg' },
          { name: 'Transformer', image: '/images/equipment/transformer.jpg' },
          { name: 'Timer System', image: '/images/equipment/timer-system.jpg' }
        ]
      },
      {
        category: 'Plumbing',
        items: [
          { name: 'PVC Pipes', image: '/images/equipment/pvc-pipes.jpg' },
          { name: 'Fittings', image: '/images/equipment/fittings.jpg' },
          { name: 'Valves', image: '/images/equipment/valves.jpg' },
          { name: 'Tubing', image: '/images/equipment/tubing.jpg' },
          { name: 'Check Valves', image: '/images/equipment/check-valves.jpg' }
        ]
      },
      {
        category: 'Water Treatment',
        items: [
          { name: 'Water Conditioner', image: '/images/equipment/water-conditioner.jpg' },
          { name: 'Beneficial Bacteria', image: '/images/equipment/beneficial-bacteria.jpg' },
          { name: 'Algae Control', image: '/images/equipment/algae-control.jpg' },
          { name: 'pH Adjusters', image: '/images/equipment/ph-adjusters.jpg' }
        ]
      }
    ]
  },
  {
    id: 'landscape-architecture',
    name: 'Landscape Architecture',
    icon: TreePine,
    category: 'terrestrial',
    image: serviceImages.landscape,
    price: 'Starting from ₹25,000',
    duration: '4-8 weeks',
    maintenance: 'Seasonal maintenance',
    description: 'Professional landscape design and installation services creating sustainable, beautiful outdoor environments tailored to your climate.',
    details: 'Our landscape architecture service transforms outdoor spaces into stunning, sustainable environments. We specialize in native plant selection, water-efficient irrigation, and creating gardens that thrive in local climate conditions while providing year-round visual interest and ecological benefits.',
    features: [
      'Professional landscape design',
      'Native plant specialization',
      'Irrigation system design',
      'Hardscape integration',
      'Soil analysis & preparation',
      'Seasonal planting schedules',
      'Ongoing horticultural support'
    ],
    gallery: [
      '/images/services/landscape-1.jpg',
      '/images/services/landscape-2.jpg',
      '/images/services/landscape-3.jpg'
    ],
    requiredItems: [
      {
        category: 'Plants',
        items: [
          { name: 'Native Trees', image: '/images/equipment/native-trees.jpg' },
          { name: 'Shrubs', image: '/images/equipment/shrubs.jpg' },
          { name: 'Perennials', image: '/images/equipment/perennials.jpg' },
          { name: 'Ground Cover', image: '/images/equipment/ground-cover.jpg' },
          { name: 'Ornamental Grasses', image: '/images/equipment/ornamental-grasses.jpg' },
          { name: 'Seasonal Flowers', image: '/images/equipment/seasonal-flowers.jpg' }
        ]
      },
      {
        category: 'Irrigation',
        items: [
          { name: 'Drip Irrigation System', image: '/images/equipment/drip-irrigation-system.jpg' },
          { name: 'Sprinkler Heads', image: '/images/equipment/sprinkler-heads.jpg' },
          { name: 'Timer Controller', image: '/images/equipment/timer-controller.jpg' },
          { name: 'Pressure Regulators', image: '/images/equipment/pressure-regulators.jpg' },
          { name: 'Filters', image: '/images/equipment/filters.jpg' }
        ]
      },
      {
        category: 'Hardscape',
        items: [
          { name: 'Natural Stone', image: '/images/equipment/natural-stone.jpg' },
          { name: 'Pavers', image: '/images/equipment/pavers.jpg' },
          { name: 'Mulch', image: '/images/equipment/mulch.jpg' },
          { name: 'Gravel', image: '/images/equipment/gravel.jpg' },
          { name: 'Retaining Wall Materials', image: '/images/equipment/retaining-wall-materials.jpg' }
        ]
      },
      {
        category: 'Soil & Amendments',
        items: [
          { name: 'Quality Topsoil', image: '/images/equipment/quality-topsoil.jpg' },
          { name: 'Compost', image: '/images/equipment/compost.jpg' },
          { name: 'Fertilizers', image: '/images/equipment/fertilizers.jpg' },
          { name: 'Soil Conditioners', image: '/images/equipment/soil-conditioners.jpg' },
          { name: 'Drainage Materials', image: '/images/equipment/drainage-materials.jpg' }
        ]
      },
      {
        category: 'Tools & Maintenance',
        items: [
          { name: 'Professional Tools', image: '/images/equipment/professional-tools.jpg' },
          { name: 'Pruning Equipment', image: '/images/equipment/pruning-equipment.jpg' },
          { name: 'Edging Tools', image: '/images/equipment/edging-tools.jpg' },
          { name: 'Maintenance Schedule', image: '/images/equipment/maintenance-schedule.jpg' }
        ]
      }
    ]
  },
  {
    id: 'paludarium-systems',
    name: 'Paludarium Systems',
    icon: CloudRain,
    category: 'hybrid',
    image: serviceImages.paludarium,
    price: 'Starting from ₹35,000',
    duration: '3-5 weeks',
    maintenance: 'Monthly specialized care',
    description: 'Complex ecosystem installations combining aquatic and terrestrial elements with precision climate control and specialized lighting.',
    details: 'Paludariums represent the pinnacle of ecosystem design, combining water and land environments in perfect harmony. Our systems feature advanced climate control, specialized lighting, and carefully balanced plant and animal communities that create stunning, naturalistic displays.',
    features: [
      'Ecosystem design & planning',
      'Climate control integration',
      'Specialized lighting systems',
      'Plant & animal habitat creation',
      'Water feature engineering',
      'Automated monitoring systems',
      'Expert ecosystem management'
    ],
    gallery: [
      '/images/services/paludarium-1.jpg',
      '/images/services/paludarium-2.jpg',
      '/images/services/paludarium-3.jpg'
    ],
    requiredItems: [
      {
        category: 'Aquatic Plants',
        subcategories: [
          {
            type: 'Epiphytes (Aquatic)',
            plants: [
              {
                name: 'Anubias Barteri',
                origin: 'West Africa',
                light: 'Low to Medium',
                co2: 'Not required',
                difficulty: 'Very Easy',
                image: '/images/plants/anubias-barteri.jpg'
              },
              {
                name: 'Bucephalandra',
                origin: 'Borneo',
                light: 'Low to Medium',
                co2: 'Optional',
                difficulty: 'Easy',
                image: '/images/plants/bucephalandra.jpg'
              },
              {
                name: 'Java Fern',
                origin: 'Southeast Asia',
                light: 'Low to Medium',
                co2: 'Not required',
                difficulty: 'Very Easy',
                image: '/images/plants/java-fern.jpg'
              }
            ]
          },
          {
            type: 'Moss (Aquatic)',
            plants: [
              {
                name: 'Java Moss',
                origin: 'Southeast Asia',
                light: 'Low to High',
                co2: 'Not required',
                difficulty: 'Very Easy',
                image: '/images/plants/java-moss.jpg'
              },
              {
                name: 'Fissidens Fontanus',
                origin: 'North America',
                light: 'Medium',
                co2: 'Recommended',
                difficulty: 'Medium',
                image: '/images/plants/fissidens-fontanus.jpg'
              }
            ]
          },
          {
            type: 'Rosette (Aquatic)',
            plants: [
              {
                name: 'Cryptocoryne Wendtii',
                origin: 'Sri Lanka',
                light: 'Low to Medium',
                co2: 'Optional',
                difficulty: 'Easy',
                image: '/images/plants/cryptocoryne-wendtii.jpg'
              }
            ]
          }
        ]
      },
      {
        category: 'Terrestrial Plants',
        subcategories: [
          {
            type: 'Ferns',
            plants: [
              {
                name: 'Maidenhair Fern',
                origin: 'Worldwide',
                light: 'Low to Medium',
                humidity: 'High',
                difficulty: 'Medium',
                image: '/images/plants/maidenhair-fern.jpg'
              },
              {
                name: 'Boston Fern',
                origin: 'Tropical regions',
                light: 'Medium',
                humidity: 'High',
                difficulty: 'Easy',
                image: '/images/plants/boston-fern.jpg'
              }
            ]
          },
          {
            type: 'Bromeliads',
            plants: [
              {
                name: 'Neoregelia',
                origin: 'South America',
                light: 'Bright Indirect',
                humidity: 'High',
                difficulty: 'Medium',
                image: '/images/plants/neoregelia.jpg'
              },
              {
                name: 'Tillandsia Cyanea',
                origin: 'Ecuador',
                light: 'Bright Indirect',
                humidity: 'High',
                difficulty: 'Medium',
                image: '/images/plants/tillandsia-cyanea.jpg'
              }
            ]
          },
          {
            type: 'Moss (Terrestrial)',
            plants: [
              {
                name: 'Sheet Moss',
                origin: 'Temperate regions',
                light: 'Low',
                humidity: 'High',
                difficulty: 'Easy'
              },
              {
                name: 'Mood Moss',
                origin: 'Temperate regions',
                light: 'Low to Medium',
                humidity: 'High',
                difficulty: 'Easy'
              }
            ]
          }
        ]
      },
      {
        category: 'Climate Control',
        items: [
          { name: 'Misting System', image: '/images/equipment/misting-system.jpg' },
          { name: 'Humidity Controller', image: '/images/equipment/humidity-controller.jpg' },
          { name: 'Temperature Regulator', image: '/images/equipment/temperature-regulator.jpg' },
          { name: 'Ventilation Fans', image: '/images/equipment/ventilation-fans.jpg' }
        ]
      },
      {
        category: 'Lighting',
        items: [
          { name: 'Full Spectrum LED', image: '/images/equipment/full-spectrum-led.jpg' },
          { name: 'UV Lighting', image: '/images/equipment/uv-lighting.jpg' },
          { name: 'Plant Growth Lights', image: '/images/equipment/plant-growth-lights.jpg' },
          { name: 'Day/Night Timer', image: '/images/equipment/day-night-timer.jpg' }
        ]
      },
      {
        category: 'Water System',
        items: [
          { name: 'Aquarium Pump', image: '/images/equipment/aquarium-pump.jpg' },
          { name: 'Waterfall Pump', image: '/images/equipment/waterfall-pump.jpg' },
          { name: 'Filtration System', image: '/images/equipment/filtration-system.jpg' },
          { name: 'Water Level Controller', image: '/images/equipment/water-level-controller.jpg' }
        ]
      }
    ]
  },
  {
    id: 'custom-aviaries',
    name: 'Custom Aviaries',
    icon: Bird,
    category: 'terrestrial',
    image: serviceImages.aviary,
    price: 'Starting from ₹55,000',
    duration: '4-6 weeks',
    maintenance: 'Monthly health checks',
    description: 'Professional aviary design and construction with emphasis on bird welfare, safety, and aesthetic integration with your environment.',
    details: 'Our custom aviaries are designed with bird welfare as the top priority, featuring species-appropriate sizing, enrichment elements, and safety features. Each aviary is constructed using premium materials and designed to complement your outdoor space while providing an optimal environment for your feathered companions.',
    features: [
      'Species-specific design',
      'Premium construction materials',
      'Safety & enrichment features',
      'Feeding & watering systems',
      'Easy maintenance access',
      'Weather protection systems',
      'Veterinary consultation included'
    ],
    gallery: [
      '/images/services/aviary-1.jpg',
      '/images/services/aviary-2.jpg',
      '/images/services/aviary-3.jpg'
    ],
    requiredItems: [
      {
        category: 'Construction Materials',
        items: ['Stainless Steel Mesh', 'Aluminum Framework', 'Weather-resistant Wood', 'Concrete Foundation', 'Roofing Materials']
      },
      {
        category: 'Safety Features',
        items: ['Double Entry System', 'Escape Prevention Mesh', 'Predator-proof Design', 'Emergency Access Gates']
      },
      {
        category: 'Bird Comfort',
        items: [
          { name: 'Natural Perches', image: '/images/equipment/natural-perches.jpg' },
          { name: 'Nesting Boxes', image: '/images/equipment/nesting-boxes.jpg' },
          { name: 'Shelter Areas', image: '/images/equipment/shelter-areas.jpg' },
          { name: 'Enrichment Toys', image: '/images/equipment/enrichment-toys.jpg' },
          { name: 'Climbing Structures', image: '/images/equipment/climbing-structures.jpg' }
        ]
      },
      {
        category: 'Feeding & Water',
        items: [
          { name: 'Automatic Feeders', image: '/images/equipment/automatic-feeders.jpg' },
          { name: 'Water Systems', image: '/images/equipment/water-systems.jpg' },
          { name: 'Food Storage', image: '/images/equipment/food-storage.jpg' },
          { name: 'Cleaning Equipment', image: '/images/equipment/cleaning-equipment.jpg' }
        ]
      },
      {
        category: 'Environmental',
        items: [
          { name: 'Windbreaks', image: '/images/equipment/windbreaks.jpg' },
          { name: 'Shade Structures', image: '/images/equipment/shade-structures.jpg' },
          { name: 'Drainage System', image: '/images/equipment/drainage-system.jpg' },
          { name: 'Ventilation', image: '/images/equipment/ventilation.jpg' },
          { name: 'Insulation', image: '/images/equipment/insulation.jpg' }
        ]
      }
    ]
  },
  {
    id: 'marine-reef-systems',
    name: 'Marine Reef Systems',
    icon: Waves,
    category: 'aquatic',
    image: serviceImages.reef,
    price: 'Starting from ₹75,000',
    duration: '4-8 weeks',
    maintenance: 'Bi-weekly expert care',
    description: 'Professional marine aquarium installations featuring live coral reefs with advanced life support systems and expert marine biology consultation.',
    details: 'Our marine reef systems bring the beauty of tropical coral reefs into your space with professional-grade life support systems, carefully selected marine life, and ongoing expert care. Each system is designed for long-term success with advanced filtration, lighting, and monitoring technology.',
    features: [
      'Marine biology consultation',
      'Live coral selection & placement',
      'Advanced life support systems',
      'Specialized marine lighting',
      'Water chemistry management',
      'Marine livestock consultation',
      'Emergency support services'
    ],
    gallery: [
      '/images/services/reef-1.jpg',
      '/images/services/reef-2.jpg',
      '/images/services/reef-3.jpg'
    ],
    requiredItems: [
      {
        category: 'Live Coral',
        items: [
          { name: 'Hard Corals', image: '/images/equipment/hard-corals.jpg' },
          { name: 'Soft Corals', image: '/images/equipment/soft-corals.jpg' },
          { name: 'LPS Corals', image: '/images/equipment/lps-corals.jpg' },
          { name: 'SPS Corals', image: '/images/equipment/sps-corals.jpg' },
          { name: 'Coral Fragments', image: '/images/equipment/coral-fragments.jpg' },
          { name: 'Zoanthids', image: '/images/equipment/zoanthids.jpg' }
        ]
      },
      {
        category: 'Marine Equipment',
        items: [
          { name: 'Protein Skimmer', image: '/images/equipment/protein-skimmer.jpg' },
          { name: 'Calcium Reactor', image: '/images/equipment/calcium-reactor.jpg' },
          { name: 'Dosing Pumps', image: '/images/equipment/dosing-pumps.jpg' },
          { name: 'Chiller', image: '/images/equipment/chiller.jpg' },
          { name: 'Heater', image: '/images/equipment/heater.jpg' },
          { name: 'Power Heads', image: '/images/equipment/power-heads.jpg' }
        ]
      },
      {
        category: 'Lighting',
        items: [
          { name: 'Marine LED Lights', image: '/images/equipment/marine-led-lights.jpg' },
          { name: 'T5 Fluorescent', image: '/images/equipment/t5-fluorescent.jpg' },
          { name: 'Metal Halide', image: '/images/equipment/metal-halide.jpg' },
          { name: 'Light Controller', image: '/images/equipment/light-controller.jpg' },
          { name: 'Mounting System', image: '/images/equipment/mounting-system.jpg' }
        ]
      },
      {
        category: 'Water Chemistry',
        items: [
          { name: 'Marine Salt', image: '/images/equipment/marine-salt.jpg' },
          { name: 'Calcium', image: '/images/equipment/calcium.jpg' },
          { name: 'Alkalinity Buffer', image: '/images/equipment/alkalinity-buffer.jpg' },
          { name: 'Magnesium', image: '/images/equipment/magnesium.jpg' },
          { name: 'Trace Elements', image: '/images/equipment/trace-elements.jpg' },
          { name: 'Test Kits', image: '/images/equipment/test-kits.jpg' }
        ]
      },
      {
        category: 'Filtration',
        items: [
          { name: 'Live Rock', image: '/images/equipment/live-rock.jpg' },
          { name: 'Live Sand', image: '/images/equipment/live-sand.jpg' },
          { name: 'Filter Media', image: '/images/equipment/filter-media.jpg' },
          { name: 'Carbon', image: '/images/equipment/carbon.jpg' },
          { name: 'Phosphate Remover', image: '/images/equipment/phosphate-remover.jpg' },
          { name: 'UV Sterilizer', image: '/images/equipment/uv-sterilizer.jpg' }
        ]
      }
    ]
  }
];

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'aquatic', name: 'Aquatic Systems' },
  { id: 'terrestrial', name: 'Terrestrial Design' },
  { id: 'hybrid', name: 'Hybrid Ecosystems' }
];

// Helper function to get service by ID
export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};
