import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home.page";
import { ProcessorPage } from "../pages/Processor.page";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/processor',
    element: <ProcessorPage />,
  }
]);