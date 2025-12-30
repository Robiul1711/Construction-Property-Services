import Dashboard from "@/components/admin/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import About from "@/pages/about/About";
import CaseStudies from "@/pages/caseStudies/CaseStudies";
import Contact from "@/pages/contact/Contact";
import Home from "@/pages/home/Home";
import Portfolio from "@/pages/portfolio/Portfolio";
import Services from "@/pages/services/Services";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/case-studies",
        element: <CaseStudies />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
