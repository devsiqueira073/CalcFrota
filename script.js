function calculate() {
    let price = document.getElementById('price').value;
    let consumption = document.getElementById('consumption').value;
    let distance = document.getElementById('distance').value;

    var totalCost = (distance / consumption) * price;

    document.getElementById('result').innerHTML = "O valor gasto será: R$ " + totalCost.toFixed(2);
}