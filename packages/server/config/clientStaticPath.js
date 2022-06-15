import { fileURLToPath } from "url";
import path, { dirname } from "path";

const clientStaticPath = () => {
  const currentPath = dirname(fileURLToPath(import.meta.url));
  let staticPath = path.join(currentPath, "../../client/build");
  if (process.env.NODE_ENV !== "production") {
    staticPath = path.join(currentPath, "../../client/public");
  }

  return staticPath;
};

export default clientStaticPath;
