const display = document.getElementById('display');

function append(value){
  if(display.textContent === '0') display.textContent = '';
  display.textContent += value;
}

function clearDisplay(){
  display.textContent = '0';
}

function deletelast(){
  if(display.textContent.length > 1){
    display.textContent=display.textContent.slice(0, -1);
  } else{
    clearDisplay();
  }
}

function calculate(){
  try {
    let expression = display.textContent.replace(/%/g, '/100');
    display.textContent = eval(expression);
  } catch {
    display.textContent = 'Error';
  }
}

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if((/\d|[+\-*/%.]/).test(key)){
    append(key);
  } else if(key === 'Enter'){
    calculate();
  } else if (key ==='Backspace'){
    deletelast();
  } else if (key.toLowerCase() === 'c'){
    clearDisplay();
  }
});
