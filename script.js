function isSameType(value1, value2) {
  //your js code here
	const bothNaN = Number.isNaN(value1) && Number.isNaN(value2);
  if (bothNaN) {
    return true;
  }

  const eitherNaN = Number.isNaN(value1) || Number.isNaN(value2);
  if (eitherNaN) {
    return false;
  }

  return typeof value1 === typeof value2;
}
 
 

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
