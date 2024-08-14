const display=document.getElementById('display')
const equal=document.getElementById('equal')
const ac=document.getElementById('ac')
try{
    var add=(value)=>{
        display.value+=value;
    }
    equal.addEventListener('click',()=>{
    
        display.value=eval(display.value)
    })
    ac.addEventListener('click',()=>{
        display.value="";
    })
}
catch(error){
   display.value=""
}

