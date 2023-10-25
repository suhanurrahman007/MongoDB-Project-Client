import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Users from "../Users/Users";
import UpdateUser from "../UpdateUser/UpdateUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/update/:id",
    element: <UpdateUser></UpdateUser>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

export default router