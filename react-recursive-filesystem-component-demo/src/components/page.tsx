import { fileSystemService } from "../services/fileSystemService.ts";
import { useEffect, useState } from "react";
import { FilesystemItem, Node } from "react-recursive-filesystem-component";

export default function Page() {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    const abortController = new AbortController(); // needed to cancel the fetch request when the component is unmounted

    const fetchFileSystem = async () => {
      try {
        const fileSystem = await fileSystemService.getFileSystem(
          abortController.signal,
        );
        console.log(fileSystem);
        setNodes(fileSystem);
      } catch (error: unknown) {
        if ((error as Error).name !== "AbortError") {
          console.error(error);
        }
      }
    };

    fetchFileSystem().then();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <ul>
      {nodes.map((node) => (
        <FilesystemItem node={node} key={node.name} />
      ))}
    </ul>
  );
}
