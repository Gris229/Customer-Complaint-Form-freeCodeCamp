
const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const damagedProduct = document.getElementById("damaged-product");
const nonconformingProduct = document.getElementById("nonconforming-product");
const delayedDispatch = document.getElementById("delayed-dispatch");
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const refund = document.getElementById("refund");
const exchange = document.getElementById("exchange");
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description")
const complaintsGroup = document.getElementById("complaints-group");
const complaintDescriptionContainer = document.getElementById("complaint-description-container");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDescriptionContainer = document.getElementById("solution-description-container");
const submit = document.getElementById("submit-btn");

function validateForm() {
  let validateObj = {
   
    "full-name": false,
    "email": false,
    "order-no": false,
    "product-code": false,
    "quantity": false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
        "solution-description": false 
  }

  if(fullName.value) {
    validateObj["full-name"] = true;

  }

  const emailRegex = /[\w]+@[a-z]+\.com/;
  if(email.value.match(emailRegex)) {
    validateObj["email"] = true;

  }

  const orderRegex = /^2024[0-9]{6}$/;
  if(orderNo.value.match(orderRegex)) {
    validateObj["order-no"] = true;

  }
  
  const productCodeRegex = /^[a-z]{2}[0-9]{2}-[a-z][0-9]{3}-[a-z]{2}[0-9]$/i;
  if(productCode.value.match(productCodeRegex)) {
    validateObj["product-code"] = true;

  }

  if(quantity.value > 0) {
    validateObj["quantity"] = true;

  }

  if(damagedProduct.checked | nonconformingProduct.checked | delayedDispatch.checked | otherComplaint.checked) {
    validateObj["complaints-group"] = true;

  }

  if(otherComplaint.checked) {
    if(complaintDescription.value.length >= 20) {
      validateObj["complaint-description"] = true;
    }
  }else{
    validateObj["complaint-description"] = true;
  }

  if(refund.checked | exchange.checked | otherSolution.checked) {
    validateObj["solutions-group"] = true;

  }
  
  if(otherSolution.checked) { 
    if(solutionDescription.value.length >= 20) {
      validateObj["solution-description"] = true;
      solutionDescriptionContainer.hidden = false;  
    }
  }else{
    validateObj["solution-description"] = true;
  }

  return validateObj;
}

function isValid(obj) {
  let tab = [];
  for(const prop in obj) {
    tab.push(obj[prop])
  }

  if(tab.every( el => el === true)) {
    return true;
  }else{
    return false;
  }
  
}


fullName.addEventListener("change", ()=>{
  if(validateForm()["full-name"]) {
    fullName.style.borderColor = "green";
  }else{
    fullName.style.borderColor = "red";
  }
})

email.addEventListener("change", ()=>{
  if(validateForm()["email"]) {
    email.style.borderColor = "green";
  }else{
    email.style.borderColor = "red";
  }
})

orderNo.addEventListener("change", () => {
  if(validateForm()["order-no"]) {
    orderNo.style.borderColor = "green"
  }else{
    orderNo.style.borderColor = "red"
  }
})

productCode.addEventListener("change", () => {
  if(validateForm()["product-code"]) {
    productCode.style.borderColor = "green"
  }else{
    productCode.style.borderColor = "red"
  }
})

quantity.addEventListener("change", () => {
  if(validateForm()["quantity"]) {
  quantity.style.borderColor = "green"
  }else{
    quantity.style.borderColor = "red"
  }
})

complaintsGroup.addEventListener("change", () => {
  if(validateForm()["complaints-group"]) {
    complaintsGroup.style.borderColor = "green"
  }else{
    complaintsGroup.style.borderColor = "red"
  }
  if(otherComplaint.checked) {
    complaintDescriptionContainer.hidden = false;
  }else{
    complaintDescriptionContainer.hidden = true;
  }
})

complaintDescription.addEventListener("change", () => {
  if(validateForm()["complaint-description"]) {
    complaintDescription.style.borderColor = "green"
  }else{
    complaintDescription.style.borderColor = "red"
  }
})

solutionsGroup.addEventListener("change", ()=>{
  if(validateForm()["solutions-group"]) {
    solutionsGroup.style.borderColor = "green"
  }else{
    solutionsGroup.style.borderColor = "red"
  }
  if(otherSolution.checked) {
    solutionDescriptionContainer.hidden = false
  }
})

solutionDescription.addEventListener("change", ()=>{
  if(validateForm()["solution-description"]) {
    solutionDescription.style.borderColor = "green"
  }else{
    solutionDescription.style.borderColor = "red"
  }
})


form.addEventListener("submit", ()=>{
  if(isValid(validateForm())) {
    console.log("Its Okay")
  }else{
    const para = document.getElementById("para");
    para.textContent = "YOU SHOULD FILL THE FORM WITH VALID INPUT"
  }
})
