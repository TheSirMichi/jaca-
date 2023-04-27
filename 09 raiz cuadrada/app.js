const valor =()=>{
  


  let n=parseInt(document.querySelector("#n").value)
  document.querySelector("#vn").innerHTML=n
  let div=document.querySelector("#res")
  div.innerHTML="<img src='Michi2.png' width='400px' height='400px'>"

  setTimeout(()=>{
  let r=Math.sqrt(n)
  div.innerHTML=r.toFixed(2)
},2000)

}
const borrar=()=>{
  document.querySelector("#res").innerHTML=""
}
