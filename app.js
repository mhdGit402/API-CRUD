class API {
  constructor(url, data = {}) {
    this.url = url;
    this.data = data;
  }

  async get() {
    try {
      const api = await fetch(this.url);
      if (!api.ok) {
        throw new `API Status: ${api.status}`();
      }
      const response = await api.json();
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  // Another aproach for post request
  //   const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");

  // const response = await fetch("https://example.org/post", {
  //   method: "POST",
  //   body: JSON.stringify({ username: "example" }),
  //   headers: myHeaders,
  // });
  // const response = await fetch(myRequest);
  async post() {
    try {
      const api = await fetch(this.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.data),
      });
      if (!api.ok) {
        throw new `API Status: ${api.status}`();
      }
      const response = await api.json();
      console.log("Requested data added!", response);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  async put() {
    try {
      const api = await fetch(this.url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.data),
      });
      if (!api.ok) {
        throw new `API Status: ${api.status}`();
      }
      // This API doesnt respond anything in put method || return respond = null
      //   const response = await api.json();
      console.log("Requested data updated!");

      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  async delete() {
    try {
      const api = await fetch(this.url, {
        method: "DELETE",
      });
      if (!api.ok) {
        throw new `API Status: ${api.status}`();
      }
      // This API doesnt respond anything in delete method || return respond = null
      //   const response = await api.json();
      console.log("Requested data deleted!");
    } catch (error) {
      console.log(error.message);
    }
  }
}

// GET method
// const crudAPI = new API(
//     "https://crudcrud.com/api/adcd6d7608c147e2b1609aeafe57836e/unicorns/"
//   );

// POST method
const crudAPI = new API(
  "https://crudcrud.com/api/adcd6d7608c147e2b1609aeafe57836e/unicorns/",
  { name: "post method", age: "100", colour: "test" }
);

// PUT method
// const crudAPI = new API(
//   "https://crudcrud.com/api/adcd6d7608c147e2b1609aeafe57836e/unicorns/6738a84c00892d03e8b4cdbc",
//   { name: "put methord", age: "4", colour: "red" }
// );

// DELETE method
// const crudAPI = new API(
//   "https://crudcrud.com/api/adcd6d7608c147e2b1609aeafe57836e/unicorns/67389d5a00892d03e8b4cdba"
// );

crudAPI
  .post()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
