let box= document.getElementById("box")
let buttons = document.getElementById("buttons")
let name = document.getElementById("name")
let gender = document.getElementById("gender")
let probability = document.getElementById("probability")
let count = document.getElementById("count")

let output = async()=>{
     let inputs =box.value
        if(inputs=="")
        {
            alert("Enter a valid name")
        }
        else {
            let url= `https://api.genderize.io?name=${inputs}`
            let response = await fetch(url)
            let info = await response.json()
            console.log(info);
            name.textContent =` Name: ${info.name}`;
            gender.textContent=`Gender: ${info.gender}`;
            probability.textContent=`Probability: ${info.probability}`;
            count.textContent=`Count: ${info.count}`;
           
        }
        
}
