import React from "react";
import "./App.css";

import Search from "./Components/Search";
import Results from "./Components/Results";

function App() {
  return (
    <>
      <div id="main-content">
        <h1>Algolia News Search</h1>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Search />
              </div>
              <div id="results" className="col-sm-8">
                <Results />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
