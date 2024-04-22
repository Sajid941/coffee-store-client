import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from '../pages/Home';
import AddCoffee from '../pages/AddCoffee';
import UpdateCoffee from '../pages/UpdateCoffee';
const router = createBrowserRouter([
        {
            path:'/',
            element:<App></App>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>
                },
                {
                    path:"/addCoffee",
                    element:<AddCoffee></AddCoffee>
                },
                {
                    path:"/updateCoffee",
                    element:<UpdateCoffee></UpdateCoffee>
                },
            ]
        }
])

export default router;