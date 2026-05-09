// Exercise 1 : React Router Error Boundary

// Check the demo here



// In a new Javascript file, create an ErrorBoundary Class Component:
// Create a state with a property named hasError, set by default to false.
// Use a componentDidCatch() method to set the value of the hasError property.

// Install React Router Dom in your app and check out the NavLink documentation

// In the App.js file, add this line:

// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


// You can also install React Bootstrap in your app. In the App.js file, add this line:

// import "bootstrap/dist/css/bootstrap.min.css";


// In the App.js file, display a Bootstrap navbar, containing three React Router <NavLink></NavLink>:

// the first one redirects to /
// the second one redirects to /profile
// the third one redirects to /shop

// In the App.js file, create three functional components : HomeScreen, ProfileScreen, and ShopScreen.

// HomeScreen and will display a header tag
// home
// ProfileScreen will display a header tag
// profile
// ShopScreen will throw an error
// shop


// 7. Add a Route for each of the functional component. Each one has a different path.


// 8. Wrap each of the functional component with the ErrorBoundary component.

import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import ErrorBoundary from './ErrorBoundary';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import PostList from "./PostList";

function HomeScreen() {
  return <h1>Home</h1>;
}

function ProfileScreen() {
  return <h1>Profile</h1>;
}

function ShopScreen() {
  throw new Error("Shop crashed!");
}

function App() {

  return (
    <>
      <BrowserRouter>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="coteiner">

            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>

            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>

          </div>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />

          <Route 
            path="/profile" 
            element={
              <ErrorBoundary>
                <ProfileScreen/>
              </ErrorBoundary>
            }
          />

          <Route 
            path="/shop" 
            element={
              <ErrorBoundary>
                <ShopScreen/>
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>
      <PostList />
    </>
  )
}

export default App
