let lista_spesa = ["latte", "uova", "farina", "zucchero", "olio", "pane"];

let list_item

let list_container = document.getElementById('list');

let i = 0; 
while (i < lista_spesa.length){

    list_item = document.createElement('li');

    list_item.innerText = lista_spesa[i];

    list_container.append(list_item);

    i++;
};



