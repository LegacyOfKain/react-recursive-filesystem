import styled from "styled-components";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const ListItem = styled.li`
  list-style-type: none;
`;

export const ItemSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

export const ToggleButton = styled.button`
  padding: 0.25rem;
  margin: -0.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ChevronIcon = styled(motion.span)`
  display: flex;
`;

export const StyledChevronRightIcon = styled(ChevronRightIcon)`
  width: 1rem;
  height: 1rem;
  color: #6b7280;
`;

export const StyledFolderIcon = styled(FolderIcon)<{ $isEmpty: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  color: #0ea5e9;
  margin-left: ${(props) => (props.$isEmpty ? "1.375rem" : "0")};
`;

export const StyledDocumentIcon = styled(DocumentIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #111827;
  margin-left: 1.375rem;
`;

export const ChildrenList = styled(motion.ul)`
  padding-left: 1.5rem;
  overflow: hidden;
`;
