# React Recursive Filesystem

This workspace contains two related projects:

1. react-recursive-filesystem-component: A reusable React component library for displaying filesystem structures.
2. react-recursive-filesystem-component-demo: A demo application showcasing the usage of the component library.

## react-recursive-filesystem-component

### Overview

react-recursive-filesystem-component is a React component library that provides a set of components for visualizing directory and file structures in a recursive, hierarchical manner.

### Features

- Recursive display of filesystem structures
- Customizable icons for different file types
- Expandable/collapsible directory views
- Smooth animations using Framer Motion

### Installation

```bash
npm install react-recursive-filesystem-component
```

### Peer Dependencies

This library requires the following peer dependencies:

- React 19.0.0 or higher
- @heroicons/react 2.2.0 or higher
- framer-motion 12.4.3 or higher
- styled-components 6.1.15 or higher

Install them if they're not already in your project:

```bash
npm install react@^19.0.0 react-dom@^19.0.0 @heroicons/react@^2.2.0 framer-motion@^12.4.3 styled-components@^6.1.15
```

### Usage

```jsx
import { FilesystemItem } from 'react-recursive-filesystem-component';

const App = () => {
  const fileSystem = {
    name: 'root',
    children: [
      { name: 'file1.txt' },
      { 
        name: 'folder1',
        children: [
          { name: 'file2.txt' },
          { name: 'file3.txt' }
        ]
      }
    ]
  };

  return <FilesystemItem node={fileSystem} />;
};
```

## react-recursive-filesystem-component-demo

### Overview

react-recursive-filesystem-component-demo is a demo application that showcases the usage and features of the react-recursive-filesystem-component library.

### Features

- Interactive demo of the filesystem component
- Examples of different file and folder structures
- Customization options showcase

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-recursive-filesystem.git
   ```

2. Navigate to the demo directory:
   ```bash
   cd react-recursive-filesystem/react-recursive-filesystem-component-demo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Demo

To start the development server:

```bash
npm run dev
```

The demo will be available at `http://localhost:3000` (or another port if 5173 is in use).

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

Contributions to either project are welcome! Please refer to the CONTRIBUTING.md file for guidelines on how to contribute.

## License

Both projects are licensed under the MIT License. See the LICENSE file for details.
