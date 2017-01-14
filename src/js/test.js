let arraySelect = document.getElementsByTagName('select');


// console.log(this.width);


let element = document.getElementById('content');

console.log(element.style['width']);


function dropdownStyles() {
  let style = this.id;
  let value = this.value;
  element.style[style] = value;
}

for (let i = 0 ; i < arraySelect.length ; i ++ ) {
  arraySelect[i].addEventListener('change', dropdownStyles);
}
