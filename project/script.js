const xValues = ["Monday", "Tuesday", "Wednesday", "Thrusday","Friday","Saturday","Sunday"];
const yValues = [55, 49, 44, 24,15,45,1 ];
const barColors = ["red", "green","blue","orange","brown"];

var a=document.getElementById("abc")
new Chart(a, {
  type: "bar",
  
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  
});



const xxValues = ["Cardio", "Stretching", "Planks", "Squats"];
const yyValues = [55, 49, 24,15];
const barrColors = ["red", "green","blue","orange","brown"];

var b=document.getElementById("abc1")
new Chart(b, {
  type: "doughnut",
  data: {
    labels: xxValues,
    datasets: [{
      backgroundColor: barrColors,
      data: yyValues
    }]
  },
  options:{
    // responsive:true,
    plugins:{
      legend:{
        position:"right",
        labels:{
          usePointStyle:true,
          pointStyle:'circle',
          font:{
            size:9
          }
        }
      }
    }
  }
  
});


function display(){
var progressbar=document.getElementById("progressbar");
var innerbar=document.getElementById("innerbar");
var steps=document.getElementById("steps").value;
innerbar.style.width=parseInt(steps)+"%";




const progressBar = document.getElementById('progress-bar');
  const progressInput = document.getElementById('drink');
  const progressValue = parseInt(progressInput.value);

  if (progressValue >= 0 && progressValue <= 100) {
      const circumference = 2 * Math.PI * 90;
      const offset = circumference - (progressValue / 100) * circumference;
      progressBar.style.strokeDashoffset = offset;
  } else {
      alert('Please enter a value between 0 and 100.');
  }

  const progressBarr = document.getElementById('progress-cal');
  const progressInputt = document.getElementById('cal');
  const progressValuee = parseInt(progressInputt.value);

  if (progressValuee >= 0 && progressValuee <= 100) {
      const circumference = 2 * Math.PI * 90;
      const offset = circumference - (progressValue / 100) * circumference;
      progressBarr.style.strokeDashoffset = offset;
  } else {
      alert('Please enter a value between 0 and 100.');
  }


}


// function updateProgressBar() {
  // const progressBar = document.getElementById('progress-bar');
  // const progressInput = document.getElementById('progress-input');
  // const progressValue = parseInt(progressInput.value);

  // if (progressValue >= 0 && progressValue <= 100) {
  //     const circumference = 2 * Math.PI * 90;
  //     const offset = circumference - (progressValue / 100) * circumference;
  //     progressBar.style.strokeDashoffset = offset;
  // } else {
  //     alert('Please enter a value between 0 and 100.');
  // }
// }







var datedate=document.getElementsByClassName("datedate");
var date=new Date();

const month = date.toLocaleString('default', { month: 'long' });
 
datedate[0].innerText=`${date.getDate()+1} ${month}`;
datedate[1].innerText=`${date.getDate()+1} ${month}`;







const form= document.getElementById("form");
let jsonData=[];
fetch('../data.json').then(res =>res.json()).then(data => {jsonData=data;});


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const formData =new FormData(form);
  const jsonObject ={};
  formData.forEach((value,key)=>{
    jsonObject[key]=value;
  });
  jsonData.push(jsonObject);

  console.log(jsonData);
  form.reset();
});
