# Copilot Instructions for OnlineShop

## Project Overview
This project is a React application built with TypeScript and Vite. It utilizes modern development practices, including Hot Module Replacement (HMR) and ESLint for code quality.

### Architecture
- **Main Components**: The application is structured around a router that manages different pages. The main layout is handled by `AppLayout`, while specific pages like `HomePage` and `ErrorPage` are defined in the `Pages` directory.
- **Router Setup**: The routing is configured using `createBrowserRouter` from `react-router`, allowing for a clean separation of layout and page components.

### Key Files
- **`src/App.tsx`**: This file sets up the router and defines the main application structure.
- **`vite.config.ts`**: Configuration for Vite, including plugins for React.
- **`README.md`**: Contains essential information about the project setup and recommendations for ESLint configuration.

## Developer Workflows
- **Building the Project**: Use the command `npm run build` to create a production build.
- **Running the Development Server**: Start the development server with `npm run dev` to enable HMR.
- **Linting**: Ensure code quality by running `npm run lint` to check for linting errors based on the ESLint configuration.

## Project Conventions
- **Component Structure**: Components are organized in the `ui` directory, with each component encapsulated in its own file.
- **Error Handling**: Use the `ErrorPage` component to handle routing errors gracefully.

## Integration Points
- **External Dependencies**: The project relies on Vite for bundling and `react-router` for routing. Ensure these dependencies are up to date in `package.json`.
- **Cross-Component Communication**: Utilize React's context API or props drilling for state management across components.

## Examples
- **Router Configuration**: See `src/App.tsx` for an example of how to set up routes and layout components.
- **Vite Configuration**: Refer to `vite.config.ts` for plugin usage and build settings.

## Conclusion
These instructions should help AI coding agents understand the structure and workflows of the OnlineShop project, enabling them to contribute effectively.