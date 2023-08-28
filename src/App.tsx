import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}
export default App;

// import Message from "./components/Message/Message";
// import produce from "immer";

// import { useState } from "react";
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick1 = () => {
//     //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {" "}
//           {bug.title} {bug.fixed ? "Fixed" : "New"}{" "}
//         </p>
//       ))}
//       <button onClick={handleClick1}> Click me 1</button>
//     </div>
//   );
// }
// export default App;

// import Message from "./components/Message/Message";
// import { useState } from "react";
// function App() {
//   const [tags, setTags] = useState(["happy", "cheerful"]);
//   const handleClick1 = () => {
//     setTags([...tags, "exicted"]);
//   };
//   const handleClick2 = () => {
//     setTags([...tags, "mindblogged"]);
//     setTags(tags.filter((tag) => tag! == "happy"));
//   };

//   return (
//     <div>
//       {tags}
//       <div>
//         <button onClick={handleClick1}> Click me 1</button>
//       </div>
//       <button onClick={handleClick2}> Click me 2</button>
//     </div>
//   );
// }

// // function App() {
// //   const [drink, setDrink] = useState({
// //     title: "Americano",
// //     price: {
// //       mrp: 4,
// //       value: 2,
// //     },
// //   });

// //   const handleClick = () => {
// //     setDrink({ ...drink, price: { ...drink.price, value: 3 } });
// //   };
// // const newDrink = { ...drink, price: 6 };
// // setDrink(newDrink);

// // {
// /*
// function App() {
//   return (
//     <div>
//       <Message />

//       <Message />
//     </div>
//   );
// } */

// // import Like from "./components/Like/Like";

// // function App() {
// //   return (
// //     <div>
// //       <Like />
// //     </div>
// //   );
// // }

// //onClick={()=>console.log("clicked")} />
// // onClick={() => console.log("clicked")
