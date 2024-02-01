import "./App.css";
import Browse from "./components/Browse";
import Error from "./components/Error";

import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import appstore from "./utils/store";
import { Provider } from "react-redux";
import LandingPage from "./components/LandingPage";
import Ticketform from "./components/Ticketform";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Header />
          <LandingPage />
        </div>
      ),
    },
    {
      path: "/browse",
      element: (
        <div>
          <Header />
          <Browse />
        </div>
      ),
    },
    {
      path: "/browse/:id",
      element: (
        <div>
          <Header />
          <MovieDetails />
        </div>
      ),
    },
    {
      path: "/browse/:id/book",
      element: (
        <div>
          <Header />
          <Ticketform />
        </div>
      ),
    },
    {
      //for any url other than above specified path
      path: "*",
      element: (
        <div>
          <Header />
          <Error />
        </div>
      ),
    },
  ]);

  return (
    <div className="App ">
      <Provider store={appstore}>
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
