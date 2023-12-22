function addingEventListener() {
    const input = document.getElementById('input');
input.addEventListener('click', clickAlert);
  alert('I was clicked!');
  

}
function clickAlert (){
    alert('I was clicked!');
   
    input.style.color = 'blue';
}
addEventListener('click', clickAlert);
// const input = document.getElementById('input');
// function clickAlert (){
//     alert('I was clicked!');
   
//     this.style.color = 'blue';
// }

// input.addEventListener('click', clickAlert)