let heading = document.querySelector(".Heading");
let navbar = document.querySelector(".navbar");
let DemocracyDefn = document.querySelector(".DemocracyDefn");
let HowdoesitWork = document.querySelector(".HowDoesUSDemocracyWork");
let RepInput = document.querySelector(".RepInput")
let EnterRep = document.querySelector(".EnterRep")
let YLR = document.querySelector(".YLR")
let Input



EnterRep.onclick = (function() {
  let Input = RepInput.value;
  YLR.innerHTML = "Your Local Representive is " + Input;

});