//let define variable colors
var colors = [
  '#C94C24',//orange
  '#26BBD2',//blue
  '#C4226F',//pink
  '#859835',//line
  '#6D73c2',//purple
  '#37A198',//green
  '#DA3637',//red
  '#F0AD4E'//yellow

]
// makeBoxes fuction to create our boxes
// howMany , number of boxes we want
function makeBoxes(howMany){
  var colorAmt = colors.length;
  var currColor =0
  //store the box into myElement
  var myElement;
  //select where to put our boxes on the DOM
  var myNode = document.querySelector('.boxes');
//for each boxes
  for (var i=0;i<howMany ;i++){
   //create the div 
    myElement = document.createElement('div');
    // set the class 
    myElement.className='box';
    // set the style
    myElement.style='background-color:' + colors[currColor];
    //append child element
    myNode.appendChild(myElement);
// add an event listener
    myNode.addEventListener('click',function(e){
      e.target.parentNode.removeChild(e.target);
    },false);
    if (currColor===colorAmt -1){
      currColor=0;     
    }else{
      currColor++;
    }
  }
}
// howmany = 20
makeBoxes(20)