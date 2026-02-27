function giveAdvice(){
let crop=document.getElementById("crop").value;
let result=document.getElementById("result");

if(crop==="pomegranate"){
result.innerHTML="Provide regular irrigation and apply balanced NPK fertilizer.";
}
else if(crop==="dragon"){
result.innerHTML="Ensure proper drainage and avoid overwatering.";
}
else if(crop==="papaya"){
result.innerHTML="Use organic manure and protect from fungal diseases.";
}
else{
result.innerHTML="Please select crop.";
}
}

function calculateFertilizer(){
let area=document.getElementById("area").value;
let crop=document.getElementById("cropCalc").value;
let result=document.getElementById("calcResult");

if(area==="" || crop===""){
result.innerHTML="Enter area and select crop.";
return;
}

let urea=0,dap=0;

if(crop==="pomegranate"){urea=area*50; dap=area*40;}
if(crop==="dragon"){urea=area*30; dap=area*25;}
if(crop==="papaya"){urea=area*45; dap=area*35;}

result.innerHTML="Urea: "+urea+" kg<br>DAP: "+dap+" kg";
}

function sendMessage(){
let input=document.getElementById("userInput").value.toLowerCase();
let chatBox=document.getElementById("chatBox");

if(input===""){return;}

chatBox.innerHTML+="<p><b>You:</b> "+input+"</p>";

let reply="";

if(input.includes("pomegranate")){
reply="Pomegranate needs proper pruning and balanced fertilization.";
}
else if(input.includes("dragon")){
reply="Dragon fruit grows best in well-drained soil.";
}
else if(input.includes("papaya")){
reply="Papaya requires regular watering and disease monitoring.";
}
else if(input.includes("fertilizer")){
reply="Balanced NPK and soil testing is recommended.";
}
else{
reply="Please ask about crops or fertilizer.";
}

setTimeout(function(){
chatBox.innerHTML+="<p><b>SmartSheti AI:</b> "+reply+"</p>";
chatBox.scrollTop=chatBox.scrollHeight;
},500);

document.getElementById("userInput").value="";
}