import { Node } from "react-recursive-filesystem-component";

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

export const fileSystemService = {
  getFileSystem: (signal?: AbortSignal): Promise<Node[]> => {
    return new Promise((resolve, reject) => {
      // Simulate an API call
      setTimeout(() => {
        if (signal?.aborted) {
          reject(new DOMException("Aborted", "AbortError"));
        } else {
          resolve(nodes);
        }
      }, 1000);
    });
  },
};
