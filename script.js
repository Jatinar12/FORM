

let form = document.getElementById('form')
document.getElementById('submit').addEventListener('click', (a)=> {
        a.preventDefault();
        
        alert("Storing Data at Local Storage");
      


var FirstName= document.getElementById('FirstName').value;
var LastName= document.getElementById('LastName').value;
var gender = document.querySelector('input[type="radio"]:checked').value;
var degree = document.getElementById('degree').value;
var Language = document.getElementById('Language').value;
var Email = document.getElementById('Email').value;
var MobileNumber= document.getElementById('Mobile Number').value;

let obj = {
    FirstName,
    LastName,
    gender,
    degree,
    Language,
    Email,
    MobileNumber
};
addData()


console.log(obj)




function getData(){
   let user = JSON.parse(localStorage.getItem("user"))
   console.log(user)
   return user
}

function addData(){
   let newArray = getData() ?? [];
   let data = [...newArray]
   data.push(obj)
   console.log(data)
   localStorage.setItem("user",JSON.stringify(data))
}
});

document.getElementById('clear').addEventListener('click',()=>{
   alert("Clearing Local Storage");
localStorage.clear();
})




const data_el = document.querySelector('#data');
const submitBtn = document.querySelector('#submit-btn');
const showDetailsBtn = document.querySelector('#show_Details');


showDetailsBtn.addEventListener('click', () => {
	displayData();
   window.scroll({
		top: 780,
		left: 0,
		behavior: "smooth",                           
	});
});

function displayData() {

	let users = JSON.parse(localStorage.getItem('user'));

	if (users === null || users.length === 0) {
		
		alert('No Users in Database!');
	} else {

		

		data_el.innerHTML = '<h3 id="data-title">USER DETAILS</h3>';
		data_el.classList.remove('hide');
		users.forEach((user, idx )=> {
			data_el.innerHTML += `<p class="user"><b>DETAIL ${idx+1}</b></p>`;

			for (const field in user) {
				data_el.innerHTML += `<p class="entry"><span class="entry-title">${field.toUpperCase()} :</span> ${user[field]}</p>`

         }
      });
   }
}



let input = document.getElementById('FirstName')
let error = document.getElementById('error');

input.onblur= function(){
   if(input.value==""){
    error.innerHTML="Please Enter Name"
   }
}
input.onfocus= function(){
   
      error.innerHTML="";

   }

let input1 = document.getElementById('LastName')
let error1 = document.getElementById('error1');

input1.onblur= function(){
   if(input1.value==""){
    error1.innerHTML="Please Enter LastName"
   }
}
input1.onfocus= function(){
   
      error1.innerHTML="";

   }

let input2 = document.getElementById('Email')
let error2 = document.getElementById('error2');

input2.onblur= function(){
   if(!input2.value.includes("@")){
      input2.classList.add("invalid")
      error2.innerHTML="Please Enter Valid Email-Id"
      
   }
   else{
      error2.innerHTML= ""
   }
}
input2.onfocus= function(){
   if(this.classList.contains('invalid')){

      this.classList.remove("invalid")
      error2.innerHTML="";

   }



}


let input3 = document.getElementById('Mobile Number')
let error3 = document.getElementById('error3');

var phone= /^\d{10}$/;
input3.onblur= function(){

   if(!input3.value.match(phone)){
    error3.innerHTML="Please Enter valid Mobile Number"
   }
}
input3.onfocus= function(){
   
      error3.innerHTML="";

   }



 