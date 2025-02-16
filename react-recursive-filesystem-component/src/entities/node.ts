type BaseNode = {
  name: string;
  type: "file" | "folder";
};

export type FileNode = BaseNode & {
  type: "file";
  //extension?: string;
};

export type FolderNode = BaseNode & {
  type: "folder";
  children: Node[];
};

export type Node = FileNode | FolderNode;
