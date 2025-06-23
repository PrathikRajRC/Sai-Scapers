# Service Images Directory

This directory contains images for the services section. Each service has a main service card image and gallery images for the detail page.

## Required Images Structure:

### Professional Aquascaping (`professional-aquascaping`)
- `aquascaping-main.jpg` - Main service card image ⭐ **PRIORITY**
- `aquascaping-1.jpg` - Gallery image 1
- `aquascaping-2.jpg` - Gallery image 2
- `aquascaping-3.jpg` - Gallery image 3

### Designer Terrariums (`designer-terrariums`)
- `terrarium-main.jpg` - Main service card image ⭐ **PRIORITY**
- `terrarium-1.jpg` - Gallery image 1
- `terrarium-2.jpg` - Gallery image 2
- `terrarium-3.jpg` - Gallery image 3

### Luxury Water Features (`luxury-water-features`)
- `water-feature-main.jpg` - Main service card image ⭐ **PRIORITY**
- `water-feature-1.jpg` - Gallery image 1
- `water-feature-2.jpg` - Gallery image 2
- `water-feature-3.jpg` - Gallery image 3

### Landscape Architecture (`landscape-architecture`)
- `landscape-main.jpg` - Main service card image ⭐ **PRIORITY** 
- `landscape-1.jpg` - Gallery image 1
- `landscape-2.jpg` - Gallery image 2
- `landscape-3.jpg` - Gallery image 3

### Paludarium Systems (`paludarium-systems`)
- `paludarium-main.jpg` - Main service card image ⭐ **PRIORITY**
- `paludarium-1.jpg` - Gallery image 1
- `paludarium-2.jpg` - Gallery image 2
- `paludarium-3.jpg` - Gallery image 3

### Custom Aviaries (`custom-aviaries`)
- `aviary-main.jpg` - Main service card image ⭐ **PRIORITY**
- `aviary-1.jpg` - Gallery image 1
- `aviary-2.jpg` - Gallery image 2
- `aviary-3.jpg` - Gallery image 3

### Marine Reef Systems (`marine-reef-systems`)
- `reef-main.jpg` - Main service card image ⭐ **PRIORITY**
- `reef-1.jpg` - Gallery image 1
- `reef-2.jpg` - Gallery image 2
- `reef-3.jpg` - Gallery image 3

## Priority Images (Service Cards):
The following images are **REQUIRED** for service cards to display correctly:
1. `aquascaping-main.jpg`
2. `hehe.png`
3. `water-feature-main.jpg`
4. `landscape-main.jpg` ⭐ **NEW**
5. `paludarium-main.jpg` ⭐ **NEW**
6. `aviary-main.jpg` ⭐ **NEW**
7. `reef-main.jpg` ⭐ **NEW**

## Image Requirements:
- **Format**: JPG or PNG
- **Dimensions**: Recommended 800x600px (4:3 aspect ratio) for cards, 1200x800px for gallery
- **Size**: Keep under 500KB for optimal loading
- **Quality**: High quality, well-lit, professional photos showcasing each service type

## Usage:
- The main image (-main.jpg) is used as the service card image in the services grid
- Gallery images (-1.jpg, -2.jpg, -3.jpg) are used in the service detail page gallery
- Each service now has its own unique main image for better visual distinction
- Images should showcase the specific service clearly
- Use consistent lighting and style across all service images

## Fallback:
If service-specific images are not available, the system will fall back to:
1. Service's first gallery image
2. Default placeholder image (`/src/assets/images/acq.jpg`)

## Directory Structure:
```
/public/images/services/
├── aquascaping-1.jpg
├── aquascaping-2.jpg
├── aquascaping-3.jpg
├── terrarium-1.jpg
├── terrarium-2.jpg
├── terrarium-3.jpg
├── water-feature-1.jpg
├── water-feature-2.jpg
├── water-feature-3.jpg
├── landscape-1.jpg
├── landscape-2.jpg
├── landscape-3.jpg
├── paludarium-1.jpg
├── paludarium-2.jpg
├── paludarium-3.jpg
├── aviary-1.jpg
├── aviary-2.jpg
├── aviary-3.jpg
├── reef-1.jpg
├── reef-2.jpg
└── reef-3.jpg
```

## Implementation Status:
✅ Directory structure created
✅ Services data updated with correct paths
✅ ServiceCard component updated to use service images
✅ Fallback system implemented
❌ Actual image files need to be added

## Next Steps:
1. Add the actual image files to this directory
2. Ensure all images follow the naming convention
3. Test that images load correctly in both services list and detail pages
