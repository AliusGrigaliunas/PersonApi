console.log('veiksmas!');

let name1 = document.querySelector('#nameInput');

let name_2 = document.querySelector('#nameInput1');

let name_3 = document.querySelector('#nameInput2');

let showData = document.querySelector('#showData')

let button = document.querySelector('#button');

name_2.style.display = "none";
name_3.style.display = "none";

let data1= null;
let data2= null;
let data3 = null;

name1.addEventListener('change',()=>{
    if(name1.value){
        name_2.style.display = 'block'
    }else{
        name_2.style.display = "none";
        name_3.style.display = "none";
    }
})
name_2.addEventListener('change',()=>{
    if(name_2.value){
        name_3.style.display = 'block'
    }else{
        name_3.style.display = "none";
    }
})


button.addEventListener('click',(event)=>{
    event.preventDefault();
    data1 = name1.value;
    console.log(data1);
    data2 = name_2.value;
    data3 = name_3.value;
    fetch(`https://api.agify.io?name[]=${data1}&name[]=${data2}&name[]=${data3}`).then(res=>res.json()).then(information=>{
    console.log(information);
    information.map(element=>{
        name1 = element.name
        console.log(name1);
        age = element.age;
        showData.innerHTML += `<p>Vardas: ${name1}  Amžius:${age}</p>`
    })
})
})