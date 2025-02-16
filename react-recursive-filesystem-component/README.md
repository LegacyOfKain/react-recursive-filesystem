# React Recursive Filesystem Component

React components for displaying a filesystem structure recursively.

## Installation

First, install the package:

```bash
npm install react-recursive-filesystem-component
```

Then, if you haven't already, install the peer dependencies:

```bash
npm install @heroicons/react@^2.2.0 framer-motion@^12.4.3 react@^19.0.0 react-dom@^19.0.0 styled-components@^6.1.15
```

## Usage

```jsx

import { FilesystemItem , Node } from "react-recursive-filesystem-component";

const nodes: Node[] = [
    {
        name: "Home",
        type: "folder",
        children: [
            {
                name: "Movies",
                type: "folder",
                children: [
                    {
                        name: "Action",
                        type: "folder",
                        children: [
                            {
                                name: "2000s",
                                type: "folder",
                                children: [
                                    { name: "Gladiator.mp4", type: "file" },
                                    { name: "The-Dark-Knight.mp4", type: "file" },
                                ],
                            },
                            { name: "2010s", type: "folder", children: [] },
                        ],
                    },
                    {
                        name: "Comedy",
                        type: "folder",
                        children: [
                            {
                                name: "2000s",
                                type: "folder",
                                children: [{ name: "Superbad.mp4", type: "file" }],
                            },
                        ],
                    },
                    {
                        name: "Drama",
                        type: "folder",
                        children: [
                            {
                                name: "2000s",
                                type: "folder",
                                children: [{ name: "American-Beauty.mp4", type: "file" }],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Music",
                type: "folder",
                children: [
                    { name: "Rock", type: "folder", children: [] },
                    { name: "Classical", type: "folder", children: [] },
                ],
            },
            { name: "Pictures", type: "folder", children: [] },
            { name: "Documents", type: "folder", children: [] },
            { name: "passwords.txt", type: "file" },
        ],
    },
];

const App = () => {
  return (
      <ul>
          {nodes.map((node) => (
              <FilesystemItem node={node} key={node.name} />
          ))}
      </ul>
  );
};

```

## Requirements

- React 19.0.0 or higher
- @heroicons/react 2.2.0 or higher
- framer-motion 12.4.3 or higher
- styled-components 6.1.15 or higher