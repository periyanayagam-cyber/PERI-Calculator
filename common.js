let display;

function init(){
  display = document.getElementById("display");
}

function add(val){
  if(display.innerText === "0") display.innerText="";
  display.innerText += val;
}

function clearAll(){
  display.innerText="0";
}

function calculate(){
  try{
    display.innerText = eval(display.innerText);
  }catch{
    display.innerText="Error";
  }
}

function sin(){ display.innerText = Math.sin(eval(display.innerText)); }
function cos(){ display.innerText = Math.cos(eval(display.innerText)); }
function tan(){ display.innerText = Math.tan(eval(display.innerText)); }
function sqrt(){ display.innerText = Math.sqrt(eval(display.innerText)); }
function pow(){ display.innerText = Math.pow(eval(display.innerText),2); }
function log(){ display.innerText = Math.log10(eval(display.innerText)); }
