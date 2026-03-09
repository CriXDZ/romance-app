import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Widgets
import { MusicPlayer } from "@widgets/MusicPlayer/MusicPlayer";

// Pages
import { LandingPage } from "@pages/LandingPage";
import { ResponsePage } from "@pages/ResponsePage";
import { NoResponsePage } from "@pages/NoResponsePage";
import { IntroPage } from "@pages/IntroPage";

function App() {
  const [responseMessage, setResponseMessage] = useState("");
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  return (
    <>
      {/* Capa de fondo fija e independiente para evitar romper el layout */}
      <motion.div
        animate={{
          backgroundColor: [
            "#8b5cf6", // Morado principal
            "#f97316", // Naranja cálido
            "#ef4444", // Rojo sutil
            "#8b5cf6", // Bucle de vuelta a morado
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none fixed inset-0 z-[-1] min-h-[100dvh] w-full"
        style={{ willChange: "background-color" }}
      />
      <MusicPlayer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AnimatePresence mode="wait">
                {!isIntroFinished ? (
                  <IntroPage
                    key="intro"
                    onContinue={() => setIsIntroFinished(true)}
                  />
                ) : (
                  <motion.div
                    key="landing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex h-full w-full justify-center pb-10"
                  >
                    <LandingPage setResponseMessage={setResponseMessage} />
                  </motion.div>
                )}
              </AnimatePresence>
            }
          />
          <Route
            path="/respuesta"
            element={<ResponsePage responseMessage={responseMessage} />}
          />
          <Route
            path="/norespuesta"
            element={<NoResponsePage responseMessage={responseMessage} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
