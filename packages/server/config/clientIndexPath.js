import { fileURLToPath } from "url";
import path, { dirname } from "path";

const clientIndexPath = () => {
  const currentPath = dirname(fileURLToPath(import.meta.url));
  let indexPath = path.join(currentPath, "../../client/build/index.html");
  if (process.env.NODE_ENV !== "production") {
    indexPath = path.join(currentPath, "../../client/public/index.html");
  }

  return indexPath;
};

export default clientIndexPath;
