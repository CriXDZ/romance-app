import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Widgets
import { MusicPlayer } from "@widgets/MusicPlayer/MusicPlayer";

// Pages
import { LandingPage } from "@pages/LandingPage";
import { ResponsePage } from "@pages/ResponsePage";
import { NoResponsePage } from "@pages/NoResponsePage";

function App() {
  const [responseMessage, setResponseMessage] = useState("");

  return (
    <>
      <MusicPlayer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LandingPage setResponseMessage={setResponseMessage} />}
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
