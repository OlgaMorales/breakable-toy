// API Users static class
export default class ApiContacts {
  // get a list of contacts
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy contacts list
        let users = [];
        for (let x = 1; x <= 2; x++) {
          users.push({
            id: x,
            username: 'Cindy' + x,
            email: 'mail' + x + '@mail.com',
          });
        }
        resolve(users);
      }, 1000);
    });
  }

  // add/edit a contact
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }

  // delete a contact
  static delete() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 500);
    });
  }
}
