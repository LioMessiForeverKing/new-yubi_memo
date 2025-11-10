# Threads Landing Page

A stunning Next.js landing page featuring an interactive WebGL threads animation powered by the OGL library.

## Features

- **Interactive WebGL Animation**: Beautiful animated threads that respond to mouse movement
- **Modern Next.js 14**: Built with the latest Next.js app router
- **TypeScript**: Fully typed for better development experience
- **Responsive Design**: Works beautifully on all device sizes
- **Performance Optimized**: Smooth 60fps animations

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. **Open Your Browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## Threads Component Usage

The Threads component can be used anywhere in your application:

```tsx
import Threads from './components/Threads';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
</div>
```

### Props

- `amplitude` (number): Controls the wave amplitude (default: 1)
- `distance` (number): Controls the distance between threads (default: 0)
- `enableMouseInteraction` (boolean): Enable/disable mouse interaction (default: false)
- `color` (number[]): RGB color values [r, g, b] (default: [1, 1, 1])

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **OGL** - WebGL library for animations
- **CSS3** - Styling and layout

## Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## License

MIT License - feel free to use this in your own projects! # temp
# temp
