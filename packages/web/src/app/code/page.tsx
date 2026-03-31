import { FileTree } from "@/components/FileTree";
import fileTree from "../../../generated/file-tree.json";

export default function CodeIndex() {
  return (
    <div className="flex h-[calc(100vh-120px)]">
      <div className="w-72 flex-shrink-0">
        <FileTree tree={fileTree} />
      </div>
      <div className="flex-1 flex items-center justify-center text-neutral-500">
        Select a file from the tree to view its source code.
      </div>
    </div>
  );
}
