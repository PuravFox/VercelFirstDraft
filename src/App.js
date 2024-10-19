import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import UserProfile from "./UserProfile";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null); // State to hold logged-in user info

  return (
    <BrowserRouter>
      <div>
        <h1>My App</h1>
        <Switch>
          {/* Use 'component' or 'render' instead of 'element' */}
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={(props) => <Login {...props} setUser={setUser} />}
          />
          <Route
            path="/profile"
            render={(props) => (
              <ProtectedRoute user={user} {...props}>
                <UserProfile user={user} />
              </ProtectedRoute>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

// import React, { useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./Home";
// import Login from "./Login";
// import UserProfile from "./UserProfile";
// import ProtectedRoute from "./ProtectedRoute";

// const App = () => {
//   const [user, setUser] = useState(null); // State to hold logged-in user info

//   return (
//     <BrowserRouter>
//       <div>
//         <h1>My App</h1>
//         <Switch>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login setUser={setUser} />} />
//           <Route
//             path="/profile"
//             element={
//               <ProtectedRoute user={user}>
//                 <UserProfile user={user} />
//               </ProtectedRoute>
//             }
//           />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
