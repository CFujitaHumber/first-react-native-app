# Project Structure

## Root

- `android/` - android specific files
- `babel.config.js` - configuration for babel (JavaScript compiler)
- `ios` - ios specific files from xcode
- `metro.config.js` - config for metro (JavaScript Bundler)
- `package-lock.json`- dependencies
- `Screenshots/` - Screenshots and error messages for lab 1 exercise 1
- `app.json` - data about app
- `Gemfile` - configuration for Ruby execution (related to ios)
- `jest.config.js` - configuration for Jest (JavaScript testing framework)
- `node_modules/` - dependencies (see `package.json`)
- `project-structure.md` - this file
- `\_\_tests\_\_` - contains a script that tests the app
- `src` - todo
- `App.tsx` - typscript main app component
- `index.js` - script entry
- `LICENSE` - GPL3 license
- `package.json` - Project configuration
- `README.md` - Project Documentation (other than this)
- `tsconfig.json` - typscript configuration

## Folder Organization

- `src/components/` - Reusable UI components
- `src/screens/` - Screen components
- `src/services/` - API and configuration services
- `src/utils/` - Utility functions
- `src/constants/` - App constants

## Development Scripts

- `npm run dev:android` - Start development for Android
- `npm run lint` - Check code quality
- `npm run format` - Format code

## Environment Configuration

- Development: `.env.development`
- Production: `.env.production`
