import logo from "./logo.svg";
import { Card } from "react-bootstrap";

import "./App.css";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";

const firstName = "John"; // Change or leave empty to test

function App() {
  return (
    <div className="container mt-5">
      <Card style={{ width: "18rem", textAlign: "center", margin: "auto" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-3 text-center">
        <p>Hello, {firstName ? firstName : "there"}!</p>
        {firstName && (
          <img src="https://via.placeholder.com/100" alt="avatar" />
        )}
      </div>
    </div>
  );
}

export default App;
