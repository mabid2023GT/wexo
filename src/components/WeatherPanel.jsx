import { useState } from "react";
import "../assets/styles/WeatherPanel.scss";
import Query from "../components/Query";
import QueryResults from "../components/QueryResults";

const WeatherPanel = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="panel">
      <div className="title-container">
        <h1 className="title">Wexo</h1>
      </div>
      <div className="query-container">
        <Query searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="query-results-container">
        <QueryResults searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default WeatherPanel;
