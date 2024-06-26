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
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch('https://coffee-store-server-rho-bice.vercel.app/coffees')
            },
            {
                path: "/addCoffee",
                element: <AddCoffee/>
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee/>,
                loader: ({ params }) => fetch(`https://coffee-store-server-rho-bice.vercel.app/coffees/${params.id}`)
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/usersTable',
                element: <PrivateRoute><UsersTable/></PrivateRoute>,
                loader: () => fetch('https://coffee-store-server-rho-bice.vercel.app/users')
            }
        ]
    }
])

export default router;