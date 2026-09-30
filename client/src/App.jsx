import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navabar";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

import Login from "./auth/Login";
import Register from "./auth/Register";

import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./dashboard/Dashboard";
import CreateBlog from "./dashboard/CreateBlog";
import ManageBlogs from "./dashboard/ManageBLog";
import EditBlog from "./dashboard/EditBlog";
import NotFound from "./pages/NotFound";
import Profile from "./dashboard/Profile";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/blogs/:id" element={<BlogDetails />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />


        {/* Protected Routes */}

        {/* <Route element={<ProtectedRoute />}> */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/dashboard/create"
            element={<CreateBlog />}
          />

          <Route
            path="/dashboard/blogs"
            element={<ManageBlogs />}
          />
          <Route
            path="/dashboard/edit/:id"
            element={<EditBlog />}
          />
          <Route path="/dashboard/profile" element={<Profile />} />

        {/* </Route> */}

      </Routes>
    </>
  );
};

export default App;