//importing the component from location
import ListGroup from "./ListGroup";
import Button from "./Button";
import Alert from "./Alert";
import { useState } from "react";
let items = [
  "Berlin",
  "Paris",
  "London",
  "Norway",
  "Moscow",
  "Hiroshima- Nagasaki",
  "Pearl Harbor",
];

const buttonTypes = [
  //onClick
  "Primary",
  "Secondary",
  "Success",
  "Danger",
  "Warning",
  "Info",
  "Light",
  "Dark",
  "Link",
];

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> My alert </Alert>
      )}
      <ListGroup items={items} heading="Cities of WW2" />
      <Button color="info" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
