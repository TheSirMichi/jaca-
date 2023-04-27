const valor =()=>{
  
  let valor=document.querySelector("#range")
  let span=document.querySelector("#v")
  let div=document.querySelector("#res")

  valor.oninput=()=>{
    span.innerHTML=valor.value
    n=parseInt(valor.value)
    divsHTML:""
    for(i=1;i<=n;i++){
      divsHTML+="div class='cajita'>"+i+"</div>"
    }
    div.innerHTML=divsHTML
  }

}
const borrar=()=>{
  document.querySelector("#res").innerHTML=""
}
