class ErrorObject {

  constructor() {
    this.errors = []
  }

  // add message to error object
  add(message = "", field = "") {
    this.errors.push({message, field});
  }

  // return error message for a given field
  get(field = "") {
    let found = this.errors.find(error => error.field === field);
    return found ? found.message : "";
  }

  // display ErrorObject
  string() {
    console.log(JSON.stringify(this.errors,null,2))
  }

}

export default ErrorObject;

// let formErrors = new ErrorObject();
// formErrors.string();
// formErrors.add("error y", "field2")

// let errMsg = formErrors.get("fielx");
// console.log(`This is error msg || ${errMsg} ||`)

