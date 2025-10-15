import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home.page";
import { ProcessorPage } from "../pages/Processor.page";
import { VideocardPage } from "../pages/Videocard.page";
import { PSUPage } from "../pages/PSU.page";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/processor',
    element: <ProcessorPage />,
  },
  {
    path: '/videocard',
    element: <VideocardPage />,
  },
  {
    path: '/PSU',
    element: <PSUPage />,
  }
]);