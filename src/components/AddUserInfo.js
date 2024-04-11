import React, { useState } from "react";

// export default class AddUserInfo extends Component {
//   state = {
//     name: "",
//     addresses: {
//       city: "",
//     },
//     age: 0,
//   };
//   onSubmit = (event) => {
//     event.preventDefault();
//     console.log("s", this.state);
//     console.log("p", this.props);
//     this.props.addUser({
//       name:  name,
//       addresses: {
//         city:  addresses.city,
//       },
//       age:  age,
//     });
//   };

//   onChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   onChangeCity = (event) => {
//     this.setState({
//       addresses: {
//         city: event.target.value,
//       },
//     });
//   };
//   onChangeAge = (event) => {
//     this.setState({
//       age: +event.target.value,
//     });
//   };
//   render() {
//     return (
//       <div
//         style={{
//           padding: "2rem",
//           textAlign: "center",
//         }}
//       >
//         <div>{ name}</div>
//         <div>{ addresses.city}</div>

//         <form onSubmit={(event) => this.onSubmit(event)}>
//           <label>Your Name: </label>
//           <input
//             onChange={(event) => this.onChangeName(event)}
//             value={ name}
//           />
//           <br />
//           <label>Your City: </label>
//           <input
//             onChange={(event) => this.onChangeCity(event)}
//             value={ addresses.city}
//           />
//           <br />
//           <label>Your Age: </label>
//           <input
//             onChange={(event) => this.onChangeAge(event)}
//             value={ age}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [isName, setName] = useState("");
  const [isAge, setAge] = useState(0);
  const [isAddress, setAddress] = useState({ city: "" });
  const onSubmit = (event) => {
    event.preventDefault();

    props.addUser({
      name: isName,
      addresses: {
        city: isAddress.city,
      },
      age: isAge,
    });
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeCity = (event) => {
    setAddress({ city: event.target.value });
  };
  const onChangeAge = (event) => {
    setAge(+event.target.value);
  };
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>{isName}</div>
      <div>{isAddress.city}</div>

      <form onSubmit={(event) => onSubmit(event)}>
        <label>Your Name: </label>
        <input onChange={(event) => onChangeName(event)} value={isName} />
        <br />
        <label>Your City: </label>
        <input
          onChange={(event) => onChangeCity(event)}
          value={isAddress.city}
        />
        <br />
        <label>Your Age: </label>
        <input onChange={(event) => onChangeAge(event)} value={isAge} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
