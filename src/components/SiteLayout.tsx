import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

export default function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="site">
      <div className="page-grid" aria-hidden="true" />
      <ScrollProgress />
      <SiteNav />
      <main className="site-main page-enter" key={pathname} id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
