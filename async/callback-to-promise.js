// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      // callback을 전달받지 않아서 깔끔해졌다.
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }

  // Homework Answer 🚀
  // async getUserWithRole(user, password) {
  //   const user = await this.loginUser(user, password);
  //   const role = await this.getRoles(user);
  //   return role;
  // }
}

// Original code from Youtube course
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passrod");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles) // 인자가 같아서 생략할 수 있다.
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);

// Homework Answer 🚀
// userStorage
//   .getUserWithRole() //
//   .catch(console.log)
//   .then(console.log);
