import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from '../pages/Home';
import AddCoffee from '../pages/AddCoffee';
import UpdateCoffee from '../pages/UpdateCoffee';
import ErrorPage from '../pages/ErrorPage';
import Register from '../pages/Register';
import Login from '../pages/Login';
import UsersTable from '../pages/UsersTable';
import PrivateRoute from './PrivateRoute';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/coffees')
            },
            {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/usersTable',
                element: <PrivateRoute><UsersTable></UsersTable></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/users')
            }
        ]
    }
])

export default router;