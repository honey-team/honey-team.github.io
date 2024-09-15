import MainPage from "./pages/MainPage/MainPage.jsx"
import MemebersPage from "./pages/MembersPage/MembersPage.jsx"
import MemberPage from "./pages/MemberPage/MemberPage.jsx"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./layout/Layout.jsx"
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/members",
        element: <MemebersPage />,
      },
      {
        path: "/members/:id",
        element: <MemberPage />
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  },

])

export default function App() {
  return <RouterProvider router={router} />
}
