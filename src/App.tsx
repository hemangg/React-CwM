import Form from "./components/Form/Form";

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;

// <ExpandableText>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies lacus sed turpis tincidunt id aliquet. Bibendum neque egestas congue quisque egestas. Metus dictum at tempor commodo. Posuere morbi leo urna molestie. Tellus mauris a diam maecenas sed enim ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sed turpis tincidunt id aliquet risus feugiat in. Vel facilisis volutpat est velit egestas dui id. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Eu turpis egestas pretium aenean pharetra magna ac. Morbi enim nunc faucibus a pellentesque sit.
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio
//   enim ratione, in reprehenderit, officiis error necessitatibus amet
//   inventore impedit ipsa dignissimos? Dolorem delectus nihil possimus,
//   illo qui optio distinctio, cum iste eligendi laboriosam tenetur sed
//   accusantium ducimus maiores aliquid beatae corrupti architecto sunt
//   exercitationem. Laudantium recusandae libero assumenda cupiditate rem
//   dicta repellendus qui possimus voluptate est, molestias impedit, totam
//   reiciendis? Vel ipsam porro omnis perferendis culpa possimus fuga natus
//   maxime ipsum quod totam hic quo aliquam, quia qui sit nihil dolorum
//   impedit optio et debitis corporis voluptates voluptas animi. Ullam,
//   inventore minus adipisci iusto nobis quidem ducimus suscipit corporis.
// </ExpandableText>
// import { useState } from "react";
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//   });

//   const handleClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click here</button>
//     </div>
//   );
// }
// export default App;

// import NavBar from "./components/NavBar/NavBar";
// import Cart from "./components/Cart/Cart";

// function App() {
//   const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }
// export default App;

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
