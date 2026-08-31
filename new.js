const toggleSidebarBut=document.getElementById('toggle-sidebar');
const cloeseSidebarBut=document.getElementById('cloes-sidebar');
const Sidebart=document.getElementById('sidebar');
if(toggleSidebarBut&&Sidebart){
    toggleSidebarBut.addEventListener('click', function(){
        Sidebart.classList.add('active');
    })
}
if(cloeseSidebarBut&&Sidebart){
    cloeseSidebarBut.addEventListener('click', function(){
        Sidebart.classList.remove('active');
    })
}
// البحث
const one=document.getElementById('serch');
const two=document.querySelectorAll('.product');
if(one){
    one.addEventListener('input',function(){
        const three=one.value.toLowerCase().trim();
        two.forEach(card =>{
            const four=card.querySelector('.title');
if(four){
    const five=four.textContent.toLowerCase();
    if(five.includes(three)){
        card.style.display='';
    }else{
        card.style.display='none';
    }
    }

        });
    });
}
const prodactss=[
    {title:'Red Dress',
        price:'350$',
        img:'images/reddress.jpeg',
        dis:'A beautiful red dress',
    },
     {title:'Black Dress',
        price:'450$',
        img:'images/blackdress.jpg',
        dis:'Elegant black dress',
    },
     {title:'Gray t-shirt',
        price:'100$',
        img:'images/grayshirt.jpg',
        dis:'Casual gray t-shirt',
    },
     {title:'Blazer',
        price:'150$',
        img:'images/blazer.jpeg',
        dis:'Formal blazer',
    },
     {title:'Jeans',
        price:'80',
        img:'images/bluejeans.jpeg',
        dis:'Classic blue jeans',
    },
     {title:'Widelegs Jeans',
        price:'120$',
        img:'images/widelegs.png',
        dis:'Trendy wideleg jeans',
     }  
]
const first= new URLSearchParams(window.location.search);
const prodactID=first.get('id');

if(prodactID!== null&&prodactss[prodactID]){
    const forth=prodactss[prodactID];
    const titlePI=document.querySelector('#title-js');
     const pricePI=document.querySelector('#price-js');
      const imgPI=document.querySelector('#img-js');
       const disPI=document.querySelector('#dis-js');
       if(titlePI)titlePI.textContent=forth.title;
      if(pricePI)pricePI.textContent=forth.price;
       if(imgPI)imgPI.src=forth.img;
       if(disPI)disPI.textContent=forth.dis;
}
let totel=0;
const cartItem=document.querySelector('#cart-item');
const totelPrice=document.querySelector('#totel-price');
const addToCart=document.querySelectorAll('.add-to-cart');
addToCart.forEach(button=>{
    button.addEventListener('click',function(){
        const card=button.parentElement;
        const tited=card.querySelector('.title').textContent;
          const pricetexr=card.querySelector('.price').textContent;
          const priced=parseFloat(pricetexr.replace('$', ''));
          totel=totel+priced;
if(totelPrice){
    totelPrice.textContent=totel;}
    if(cartItem){
        const newItem=document.createElement('li');
        newItem.textContent=tited +"-"+ priced +"$";
        cartItem.appendChild(newItem);
    }
        
    })
})






