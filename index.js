const btn = document.querySelector('#btn');
const out = document.querySelector('#out');
const url = document.querySelector("#input");
let api ;

btn.addEventListener("click", () => {

    const xhr = new XMLHttpRequest();
    api = url.value
    xhr.open("GET", api)
    xhr.onreadystatechange = function(){

        console.log(api)   
        console.log(xhr.readyState)

        if(xhr.readyState === 4){
           
            const data = JSON.parse(this.responseText);
            console.log(data)
            out.innerText = JSON.stringify(data, null, 2);


            
        }

    }
    xhr.send() 
    



});