let list = []
let listRandom = []

function adicionarAmigo(){
    let input = document.querySelector('input').value;
    input = input.trim();

    if((input == "")){
        alert("Por favor, insira um nome.");
        return;
    }

    if(list.includes(input)){
        clearBuffer()
        alert("Nome já inserido.")
        return
    }

    list.push(input);
    
    clearBuffer()

    exibirLista(list)
}

function clearBuffer(){
    let inputCamp = document.querySelector('input');
    inputCamp.value = "";
}

function exibirLista(list){
    let displayList = document.getElementById('listaAmigos');
    displayList.innerHTML = "";

    for (let nome of list){ 
        let li = document.createElement("li");
        li.textContent = nome;

        displayList.appendChild(li);
    }
}

function sortearAmigo(){
    let listCopy = list.slice();
    let n = listCopy.length;

    if (listCopy.length == 0)
        return
    
    while(listRandom.length < n){
        let randomNumber = Math.floor(Math.random() * n);
        
        if(!(listRandom.includes(listCopy[randomNumber]))){
            listRandom.push(listCopy[randomNumber]);

            let displayName = document.getElementById('resultado');
            displayName.innerHTML = `O amigo sorteado é: <strong>${listCopy[randomNumber]}</strong>`;

            break;
        }
    }
    console.log(listRandom)
}
