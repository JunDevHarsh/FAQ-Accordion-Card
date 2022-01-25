let items = document.querySelectorAll('.item');
let item_list = document.querySelectorAll('.item h1');

for(let i of items){
i.addEventListener('click', function(event){
    if(event.target.classList.contains('item') || event.target.classList.contains('item_ans')) return ;
    item_list.forEach(value => {
    (event.target.classList == value.classList) ? (value.nextElementSibling.classList.add('active'), value.classList.add('active') ,value.style.fontWeight = '700' ) : (value.nextElementSibling.classList.remove('active'), value.classList.remove('active'), value.style.fontWeight = '400');
    });
});
}