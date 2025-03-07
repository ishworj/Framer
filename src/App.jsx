import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{
          rotate: "180deg",
        }}
        exit={{rotate:"0deg"}}
        transition={{ duration: 1, ease: "backInOut" }}
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
      ></motion.div>
    </div>
  );
}

export default App;
