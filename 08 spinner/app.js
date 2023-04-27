const valor =()=>{
  


  let n=parseInt(document.querySelector("#n").value)
  document.querySelector("#vn").innerHTML=n
  let div=document.querySelector("#res")
  div.innerHTML="<img src='Michi2.png' width='400px' height='400px'>"

  setTimeout(()=>{

    tablaHTML="<table>"
    for(i=1;i<=10;i++){
      tablaHTML+="<tr><td>"+n+" x "+i+" = "+(i*n)+"</td></tr>"
  }

  div.innerHTML=tablaHTML+"</table>"
},2000)

}
const borrar=()=>{
  document.querySelector("#res").innerHTML=""
}
