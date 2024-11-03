let list1 = document.querySelectorAll('ul#list li');
let arrayFromList = Array.from(list1);
let filteredItems = arrayFromList.filter(item => item.innerText > 4);

let list2 = document.getElementById('list');
list2.innerHTML = '';

filteredItems.forEach(item => {
    list2.appendChild(item);
});

