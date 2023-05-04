let sld1=document.querySelector("#r1")
let vr1=document.querySelector("#vr1")
let sld2=document.querySelector("#r2")
let vr2=document.querySelector("#vr2")
let sld3=document.querySelector("#r3")
let vr3=document.querySelector("#vr3")



sld1.oninput=()=>{
    vr1.innerHTML=sld1.value
    calcular();
  }
sld2.oninput=()=>{
    vr2.innerHTML=sld2.value
    calcular();
  }
sld3.oninput=()=>{
    vr3.innerHTML=sld3.value
    calcular();
  }


const calcular=()=>{
    

document.querySelector("#valores").innerHTML="<tr><td>"+sld1.value+"x<sup>2</sup> + "+sld2.value+"x + "+sld3.value+" =0"+"</td></tr>"

document.querySelector("#resultado").innerHTML=(-sld2.value+(Math.sqrt((Math.pow(sld2.value,2)-(4*sld1.value*sld3.value)))))/(2*sld1.value)
document.querySelector("#resultado2").innerHTML=(-sld2.value-(Math.sqrt((Math.pow(sld2.value,2)-(4*sld1.value*sld3.value)))))/(2*sld1.value)
}
