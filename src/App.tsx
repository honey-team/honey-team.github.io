import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import MembersPage from "./pages/MembersPage/MembersPage";
import MemberPage from "./pages/MemberPage/MemberPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        { path: "/", element: <MainPage/> },
        { path: "/members", element: <MembersPage/> },
        { path: "/members/:name", element: <MemberPage/> },
        { path: "/projects", element: <ProjectsPage/> },
        { path: "/projects/:name", element: <ProjectPage/> },
        { path: "/blog", element: <BlogPage/> },
        { path: "*", element: <ErrorPage/> }
    ]
}]);

export default function App() {
    return <RouterProvider router={router}/>;
}