import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import './assets/css/style.css'
// import NotFound from "./components/utils/NotFound";
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import Signin from "./pages/Signin";
// import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";


function App() {
  const Layout = () => {
    return (
      <>
        <div class="wrapper">
          <Sidebar />
          <Header />
          <div id="content-page" class="content-page">
            <Outlet />
          </div>
        </div>
        <Footer />
      </>
    )
  }


  const isAuthenticated = () => {
    let token = localStorage.getItem("mvno_admin_token");
    if (token) {
      let decodedToken = jwtDecode(token);
      let currentDate = new Date();
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        localStorage.removeItem("mvno_admin_token");
        return false;
      } else {
        return true;
      }
    } else {
      localStorage.removeItem("mvno_admin_token");
      return false;
    }
  }




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path="/404" element={<NotFound />} /> */}
          <Route path="/sign-in" element={isAuthenticated() ? <Navigate to="/" /> : <Signin />} />
          {/* <Route path="/reset-password/*" element={isAuthenticated() ? <Navigate to="/" /> : <ResetPassword />} /> */}

          {/* For Test */}
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* End Test */}

          {/* <Route path="/" element={!isAuthenticated() ? <Navigate to="/sign-in" /> : <Layout />} >
            <Route path="/" element={<Dashboard />} />
            
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
