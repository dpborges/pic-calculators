// Function used with forms where all inputs are optional but form requires 
// at least one input value.
// Checks to see if there is at least one value provided in an array of  variables
// The empty value can be a 0 or an empty string "", that is passed via the emptyValue
export const hasAtLeastOneNonEmptyValue = (arrayOfInputs = [], emptyValue ) => {
   let found = arrayOfInputs.find(inputValue => inputValue !== emptyValue)
   return found ? true : false;
}

