<!DOCTYPE html>
<html>
<head>
  <title>Calculadora</title>
  <style>
    .container {
      width: 200px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Calculadora</h2>
    <input type="text" id="num1" placeholder="Número 1"><br><br>
    <input type="text" id="num2" placeholder="Número 2"><br><br>
    <button onclick="add()">Adicionar</button>
    <button onclick="subtract()">Subtrair</button>
    <button onclick="multiply()">Multiplicar</button>
    <button onclick="divide()">Dividir</button><br><br>
    <h3>Resultado: <span id="result"></span></h3>
  </div>

  <script>
    function add() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var result = num1 + num2;
      document.getElementById("result").innerHTML = result;
    }

    function subtract() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var result = num1 - num2;
      document.getElementById("result").innerHTML = result;
    }

    function multiply() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var result = num1 * num2;
      document.getElementById("result").innerHTML = result;
    }

    function divide() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var result = num1 / num2;
      document.getElementById("result").innerHTML = result;
    }
  </script>
</body>
</html>
