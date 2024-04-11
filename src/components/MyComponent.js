import React, { useState } from "react";
import UserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// export default class MyComponent extends Component {
//   state = {
//     listUsers: [
//       {
//         id: 1,
//         name: "Hữu Tuấn",
//         addresses: {
//           city: "Cà Mau 1",
//         },
//         age: 24,
//       },
//       {
//         id: 2,
//         name: "Phạm Minh Thư",
//         addresses: {
//           city: "Cà Mau 2",
//         },
//         age: 20,
//       },
//       {
//         id: 3,
//         name: "Phạm Thư",
//         addresses: {
//           city: "Cà Mau 3",
//         },
//         age: 24,
//       },
//     ],
//   };
//   handleAddNewUser = (data) => {
//     console.log("DataUser:", data);
//     this.setState({
//       listUsers: [data, ...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (userID) => {
//     this.setState({
//       listUsers: this.state.listUsers.filter((user) => user.id !== userID),
//     });
//   };
//   render() {
//     return (
//       <>
//         <UserInfo addUser={this.handleAddNewUser} />
//         <hr style={{ margin: "1rem 0", border: "1rem solid green" }} />

//         <DisplayInfo
//           users={this.state.listUsers}
//           delete={this.handleDeleteUser}
//         />
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [isListUser, setListUser] = useState([
    {
      id: 1,
      name: "Hữu Tuấn",
      addresses: {
        city: "Cà Mau 1",
      },
      age: 24,
    },
    {
      id: 2,
      name: "Phạm Minh Thư",
      addresses: {
        city: "Cà Mau 2",
      },
      age: 20,
    },
    {
      id: 3,
      name: "Phạm Thư",
      addresses: {
        city: "Cà Mau 3",
      },
      age: 24,
    },
  ]);
  const handleAddNewUser = (data) => {
    setListUser([data, ...isListUser]);
  };
  const handleDeleteUser = (userID) => {
    setListUser(isListUser.filter((user) => user.id !== userID));
  };
  return (
    <>
      <UserInfo addUser={handleAddNewUser} />
      <hr style={{ margin: "1rem 0", border: "1rem solid green" }} />
      <DisplayInfo users={isListUser} delete={handleDeleteUser} />
    </>
  );
};
export default MyComponent;
