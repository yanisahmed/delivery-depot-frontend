import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import * as React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SinglePercel from "./pages/SinglePercel";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } >
            </Route>
            <Route path="/add-percel" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } >
            </Route>

            <Route path="/login" element={<Home />} />
            <Route path="/signup" element={<Home />} />
            <Route path="/add-percel" element={<Home />} />
            <Route path="/my-percel" element={<Home />} />
            <Route path="/my-percel/:id" element={<SinglePercel />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
