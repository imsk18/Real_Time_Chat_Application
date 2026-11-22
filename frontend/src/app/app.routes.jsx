import {createBrowserRouter} from "react-router-dom"
import Login from "../features/auth/pages/Login.jsx"
import Register from "../features/auth/pages/Register.jsx";
import Home from "../features/chats/pages/Home.jsx";
import Protected from "../features/auth/components/Protected.jsx";
import PublicRoute from "../features/auth/components/PublicRoute.jsx";

const router = createBrowserRouter([
    {
        
        element:  <Protected/>,
         children: [
        {
            path: "/",
            element: <Home />
        }
    ]

    },

     {
        element:<PublicRoute/>,
        children:[

              {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }

        ]
     }
  
])

export default router;