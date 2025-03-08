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
          y:[0,150,-150,300,-300,0]
        }}
        exit={{ rotate: "0deg" }}
        transition={{ duration: 1, ease: "backInOut",
          times:[0,0,0,0,0.85,1]
         }}
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
