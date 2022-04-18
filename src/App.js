import react from "react";
import "./App.css";
import { Typography } from "@mui/material";
import Info from "./Components/Info";

function App() {
  return (
    <div className="App">
      {/* <Typography variant="h1" color="primary" style={TypeStyle}>
        CV
      </Typography> */}
      <Info />
    </div>
  );
}

// const TypeStyle = {
//   display: "flex",
//   justifyContent: "center",
// };

export default App;
