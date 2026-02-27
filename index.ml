<!DOCTYPE html>
<html>
<head>
<title>SmartSheti AI | Farming Assistant</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
<h1>🌾 SmartSheti AI 🚜</h1>
<p>Developed by Vishal Devkar</p>
</header>

<div class="section">
<h2>🌱 Smart Crop Advisor</h2>

<div class="container">

<select id="crop">
<option value="">Select Crop</option>
<option value="pomegranate">Pomegranate</option>
<option value="dragon">Dragon Fruit</option>
<option value="papaya">Papaya</option>
</select>

<button onclick="giveAdvice()">Get Advice</button>

<div class="result" id="result"></div>

</div>
</div>

<div class="section">
<h2>🧮 Fertilizer Calculator</h2>

<div class="container">

<input type="number" id="area" placeholder="Land Area (in acres)">

<select id="cropCalc">
<option value="">Select Crop</option>
<option value="pomegranate">Pomegranate</option>
<option value="dragon">Dragon Fruit</option>
<option value="papaya">Papaya</option>
</select>

<button onclick="calculateFertilizer()">Calculate</button>

<div class="result" id="calcResult"></div>

</div>
</div>

<div class="section">
<h2>🤖 SmartSheti AI Chat</h2>

<div class="container">

<div id="chatBox"></div>

<input type="text" id="userInput" placeholder="Ask your farming question...">

<button onclick="sendMessage()">Ask</button>

</div>
</div>

<footer>
© 2026 SmartSheti AI | For Farmers
</footer>

<script src="script.js"></script>
</body>
</html>