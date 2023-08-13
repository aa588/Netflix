import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import SavedShows from "./components/SavedShows";

export default function App() {
  const key = "f748ccd37a0287081a16c6922f5df0ac";

  const requests = {
    requestTopRated:
      "https://api.themoviedb.org/3/movie/popular?api_key=f748ccd37a0287081a16c6922f5df0ac",
  };

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/savedshows"
            element={
              <ProtectedRoute>
                <SavedShows />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}
