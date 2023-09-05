import useForm from "react-hook-form";
import React, { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        Name
        <label htmlFor="Name" className="form-label"></label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="Name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        Age
        <label htmlFor="Age" className="form-label"></label>
        <input
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;

// Controlled forms : this employs useState and
// MOST Importantly, input value is defined as
// value = {person.name/age} such that react has control over all values at all times.

// import React, { FormEvent, useState } from "react";
// const Form = () => {
//   const [person, setPerson] = useState({
//     name: "",
//     age: "",
//   });
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         Name
//         <label htmlFor="Name" className="form-label"></label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, name: event.target.value })
//           }
//           value={person.name}
//           id="Name"
//           type="text"
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         Age
//         <label htmlFor="Age" className="form-label"></label>
//         <input
//           value={person.age}
//           onChange={(event) =>
//             setPerson({ ...person, age: event.target.value })
//           }
//           id="age"
//           type="number"
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };
// export default Form;

// import React, { FormEvent, useRef } from "react";

// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: 0 };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();

//     if (nameRef.current !== null) person.name = nameRef.current.value;
//     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         Name
//         <label htmlFor="Name" className="form-label"></label>
//         <input ref={nameRef} id="Name" type="text" className="form-control" />
//       </div>
//       <div className="mb-3">
//         Age
//         <label htmlFor="Age" className="form-label"></label>
//         <input ref={ageRef} id="age" type="number" className="form-control" />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };
// export default Form;
