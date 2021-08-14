// import axios from "axios";
import { User, UserProps } from "./models/User";

import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";

const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
})

users.on('change', () => {
  const root = document.getElementById('root');

  if(root){
    new UserList(root, users).render();
  }
});

users.fetch();

// import { UserEdit } from "./views/UserEdit";

// const user = User.buildUser({ name: 'NAME', age: 20 });

// const root = document.getElementById('root')

// if(!root) throw new Error('Root Element is not Found!');

// const userEdit = new UserEdit(root, user);

// userEdit.render();

// console.log(userEdit);

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// })

// collection.fetch();

// const user = new User({id: 1, name: 'Mani', age: 23});

// user.on('change', ()=>{
//   console.log('CHanged here')
// })
// user.on('change', ()=> console.log('change no 2'));

// user.on('save', ()=> console.log('Save was triggered..'))

// user.trigger('save');
// user.trigger('change');


// const user = User.buildUser({ id: 2 });

// user.on('change', () => {
//   console.log('User was changed...!');
//   console.log(user);
// })

// user.on('save', () => {
//   console.log('user Saved...');
//   console.log(user);
// })

// user.fetch();

// // Reminder on how 'this' works on js
// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color);
//   },
//   anon_printColor: () => {
//     // console.log(this.color);
//   }
// }

// const printColor = colors.printColor;
//printColor()  // this will not print color value red... this will result in undefined because, we are not giving reference to this