var totalCost = 0;
var commission = 0;
var briteVerify = 0;
var netCost = 0;
var ioAmount = 0;
var cpa = 0;
var numLeads = 0;
document.getElementById("outputs").hidden = true;
document.getElementById("calcButton").addEventListener("click", calculate);
document.getElementById("resetButton").addEventListener("click", reset);
document.getElementById("goBack").addEventListener("click", reset);

function calculate() {
  getNet();
  cpa = document.getElementById("vendor").value;
  console.log(cpa);
  getBV();
  update();
}

function update() {
  document.getElementById("totalCost").innerText = Math.round(totalCost * 100)/100;
  document.getElementById("cpa").innerText = cpa;
  document.getElementById("ioAmount").innerText = Math.round(ioAmount * 100)/100;
  document.getElementById("numLeads").innerText = Math.round(numLeads * 100)/100;
  document.getElementById("commissionCost").innerText = Math.round(commission * 100)/100;
  document.getElementById("bv").innerText = Math.round(briteVerify * 100)/100;
  document.getElementById("inputs").hidden = true;
  document.getElementById("outputs").hidden = false;
}

function reset() {
  totalCost = 0;
  commission = 0;
  briteVerify = 0;
  netCost = 0;
  ioAmount = 0;
  document.getElementById("totalCostInput").value=null;
  document.getElementById("commissionInput").checked=false;
  document.getElementById("vendor").value=null;
  document.getElementById("outputs").hidden = true;
  document.getElementById("inputs").hidden = false;
}

function getNet() {
  totalCost = document.getElementById("totalCostInput").value;
  if (document.getElementById("commissionInput").checked) {
    netCost = totalCost / 1.15;
    commission = netCost * .15;
  }
  else {
    netCost = totalCost;
    commission = 0;
  }
  console.log(netCost);
}

function getBV() {
  let tempNames = netCost / cpa;
  let tempBV = tempNames * .006;
  ioAmount = netCost - tempBV;
  numLeads = ioAmount / cpa;
  briteVerify = numLeads * .006;
}
