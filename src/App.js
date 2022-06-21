import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./assets/components/NavBar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Footer from "./assets/components/Footer";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/execise/:id" element={<ExerciseDetail />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
