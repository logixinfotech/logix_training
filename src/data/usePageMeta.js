import { useLocation } from "react-router-dom";
import sidebarData from "./sidebarData";

/**
 * Resolves the current URL to { moduleLabel, pageLabel, moduleIcon }
 * so Header/Breadcrumb/PageHeader never need hardcoded titles.
 */
export default function usePageMeta() {
  const { pathname } = useLocation();

  for (const module of sidebarData) {
    if (pathname.startsWith(module.basePath)) {
      const item = module.items.find((i) => pathname === `${module.basePath}/${i.path}`);
      return {
        moduleLabel: module.label,
        pageLabel: item ? item.label : module.items[0].label,
        moduleIcon: module.icon,
      };
    }
  }

  return { moduleLabel: "Dashboard", pageLabel: "Overview", moduleIcon: sidebarData[0].icon };
}
