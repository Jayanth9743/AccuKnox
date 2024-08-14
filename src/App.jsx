import { useState } from "react";
import Navbar from "./Navbar";
import Widgets from "./Widgets.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Widgets searchTerm={searchTerm} />
    </div>
  );
};

export default App;
