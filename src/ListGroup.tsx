import { useState } from "react";
// Interface helps us define the input the way we want to recieve
interface Props {
  items: string[];
  heading: string;
}
// props needs to be the arguments of the component function
//instead of props:Props using {items, headings}:Props saves us by repeating props.items and props.heading in future..
function ListGroup({ items, heading }: Props) {
  const message = items.length === 0 && <p> No Items </p>;
  //Hook returns an array with two elements,
  // STORED the return into arr, now arr[0] contains selectedIndex variable
  // and arr[1] contains updater function to update selectedIndex variable.
  // useState along with react works to update the DOM under the hood.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // example like : const [name, setName] = useState('')
  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
