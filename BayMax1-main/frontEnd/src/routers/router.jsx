import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
import Home from "../home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [{
        path:"/",
        element: <Home/>
      },
      // {
      //   path:"/shop",
      //   element: <Shop></Shop>
      // },{
      //   path:"/about",
      //   element: <About></About>
      // },{
      //   path:"/blog",
      //   element: <Blog/>
      // },{
      //   path:"/book/:id",
      //   element: <SingleBook/>,
      //   loader:({params})=> fetch(`http://localhost:5001/book/${params.id}`)
      // }, 
      // {
      //   path: "/sign-up",
      //   element: <SignUp/>
      // },{
      //   path:"/login",
      //   element: <Login/>
      // },{
      //   path:"/logout",
      //   element: <Logout/>
      // }
      
    ]
    },
    // {
    //   path:'/admin/dashboard',
    //   element: <DashBoardLayout/>,
    //   children:[
    //     {
    //       path:'/admin/dashboard',
    //       element: <PrivateRoute><Dashboard/></PrivateRoute> 
    //     },
    //     {
    //       path:'/admin/dashboard/upload',
    //       element:<UploadBooks/>
    //     },{
    //       path:'/admin/dashboard/manage',
    //       element:<ManageBooks/>
    //     },{
    //       path:'/admin/dashboard/edit-books/:id',
    //       element:<EditBooks/>,
    //       loader:({params})=> fetch(`http://localhost:5001/book/${params.id}`)
    //     }
    //   ]
    // }
  ]);
  export default router;