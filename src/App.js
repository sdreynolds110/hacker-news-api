import React from "react";
import "./App.css";

import Search from "./Components/Search";
import Results from "./Components/Results";

function App() {
  return (
      <div className="main-content">
        <h1>Algolia News Search</h1>
        <section>
          <div className="container">
            <div className="row">
              <div>
                <Search />
              </div>
              <div className="results">
                <Results />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;
