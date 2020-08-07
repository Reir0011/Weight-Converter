
  
            document.getElementById('output').style.visibility='hidden';
   document.getElementById('selectPounds').addEventListener('click', function(){
document.getElementById('output').style.visibility='hidden';
document.getElementById('insertWeight').innerHTML='Pounds';
document.getElementById('inputedWeight').addEventListener('input',function(){
document.getElementById('output').style.visibility='visible';
let inputedWeightValue=document.getElementById('inputedWeight').value;
document.getElementById('poundOutput').innerHTML=inputedWeightValue/1;
document.getElementById('gramsOutput').innerHTML=inputedWeightValue/0.0022046;
document.getElementById('KiloOutput').innerHTML=inputedWeightValue/2.2046;
document.getElementById('OusOutput').innerHTML=inputedWeightValue*16;
});
});  

document.getElementById('selectGram').addEventListener('click', function(){
document.getElementById('insertWeight').textContent='Grams';
document.getElementById('inputedWeight').addEventListener('input',function(){
document.getElementById('output').style.visibility='visible';
let inputedWeightValue=document.getElementById('inputedWeight').value;
document.getElementById('poundOutput').innerHTML=inputedWeightValue*0.00220462;
document.getElementById('gramsOutput').innerHTML=inputedWeightValue/1;
document.getElementById('KiloOutput').innerHTML=inputedWeightValue/1000;
document.getElementById('OusOutput').innerHTML=inputedWeightValue*0.035274;
});

});  

document.getElementById('selectKilogram').addEventListener('click', function(){
document.getElementById('insertWeight').innerHTML='Kilogram';
document.getElementById('inputedWeight').addEventListener('input',function(){
document.getElementById('output').style.visibility='visible';
let inputedWeightValue=document.getElementById('inputedWeight').value;

document.getElementById('poundOutput').innerHTML=inputedWeightValue*2.20462;
document.getElementById('gramsOutput').innerHTML=inputedWeightValue*1000;
document.getElementById('KiloOutput').innerHTML=inputedWeightValue/1;
document.getElementById('OusOutput').innerHTML=inputedWeightValue*35.274;
});
});  

document.getElementById('selectOunces').addEventListener('click', function(){
document.getElementById('insertWeight').innerHTML='Ounces';
document.getElementById('inputedWeight').addEventListener('input',function(){
document.getElementById('output').style.visibility='visible';
let inputedWeightValue=document.getElementById('inputedWeight').value;

document.getElementById('poundOutput').innerHTML=inputedWeightValue*0.0625;
document.getElementById('gramsOutput').innerHTML=inputedWeightValue*28.3495;
document.getElementById('KiloOutput').innerHTML=inputedWeightValue*0.0283495;
document.getElementById('OusOutput').innerHTML=inputedWeightValue/1;
});
});  



            
            
            
     
