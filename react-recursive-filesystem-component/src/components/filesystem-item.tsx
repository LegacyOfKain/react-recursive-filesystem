"use client"; // used by NextJS only , doesn't do anything in React

import { useState } from "react";
import { Node, FolderNode } from "../entities/node";
import {
  ChevronIcon,
  ChildrenList,
  ItemSpan,
  ListItem,
  StyledChevronRightIcon,
  StyledDocumentIcon,
  StyledFolderIcon,
  ToggleButton,
} from "../icons/styled-icons";
import { AnimatePresence } from "framer-motion";

export function FilesystemItem({ node }: { node: Node }) {
  const [isOpen, setIsOpen] = useState(false);

  const isFolder = node.type === "folder";
  const folderNode = node as FolderNode;

  return (
    <ListItem>
      <ItemSpan>
        {isFolder && folderNode.children.length > 0 && (
          <ToggleButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle folder"
            data-testid={`toggle-${node.name}`}
          >
            <ChevronIcon
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
              <StyledChevronRightIcon />
            </ChevronIcon>
          </ToggleButton>
        )}

        {isFolder ? (
          <StyledFolderIcon $isEmpty={folderNode.children.length === 0} />
        ) : (
          <StyledDocumentIcon />
        )}
        {node.name}
      </ItemSpan>

      <AnimatePresence>
        {isOpen && isFolder && (
          <ChildrenList
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            {folderNode.children.map((childNode) => (
              <FilesystemItem node={childNode} key={childNode.name} />
            ))}
          </ChildrenList>
        )}
      </AnimatePresence>
    </ListItem>
  );
}
