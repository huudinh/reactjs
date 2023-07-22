import React from "react";
import { getUser } from '../../api/user';

export const columns = [
  {
    name: "Name",
    selector: "name",
    // sortable: true
  },
  {
    name: "Email",
    selector: "email",
    // sortable: true
  }
];

export const data = JSON.parse(localStorage.getItem('users'));
// export const data = [];
// getUser() 
//   .then(db => {
//     const users = db.data;
//     const result = users.forEach(user => {
//       var {
//           id,
//           name,
//           email,
//       } = user;
//       // localStorage.setItem('user', {
//       //     id: id,
//       //     name: name,
//       //     email: email
//       // })
//       // console.log(user);

//       data.push({
//         id: id,
//         name: name,
//         email: email
//       });
//     });

//     // console.log(data);
    
    

//     // console.log(result);
//     if(result == undefined){
//       // alert('Tài khoản hoặc mật khẩu chưa đúng');
//       // setSubmitting(false);
//     } else {
//       // setSubmitting(true);
//       // props.onClick();
//       // localStorage.setItem('name', result.name);
//     }
//   })
//   .catch(function (error) {
//     console.log(error);
//     alert('API Error');
//   });   

  // localStorage.setItem('users', JSON.stringify(data));
