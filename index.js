let inputBtn=document.getElementById("btn")
let val=document.getElementById("input")
let lengthEl=document.getElementById("meter")
let gallonEl=document.getElementById("liters")
let gramEl=document.getElementById("kilogram")
        
inputBtn.addEventListener("click", function() {
    //for meters
    let feets=val.value*3.281
    let meter=val.value/3.281        
    let arry=`${val.value } meters = ${Number(feets).toFixed(3) } feets | ${val.value } feets = ${Number(meter).toFixed(3) } meters`
    console.log(arry)
    lengthEl.textContent=arry
    
    //for volume
    let liter=val.value*3.785
    let gallon=val.value*0.264        
    let array=`${val.value } liters = ${Number(gallon).toFixed(3) } gallons | ${val.value } gallons = ${Number(liter).toFixed(3) } liters`
    console.log(array)
    gallonEl.textContent=array
    
    //for mass
     let kilo=val.value* 0.453
     let pound=val.value*2.20462     
     let mass=`${val.value } kilo = ${Number(pound).toFixed(3) } pounds | ${val.value } pounds = ${Number(kilo).toFixed(3) } kilos`
     console.log(mass)
     gramEl.textContent=mass
    
   
    
    
    
})