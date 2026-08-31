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
const two=document.querySelectorAll('.prodact');
if(one){
    one.addEventListener('input',function(){
        const three=one.ariaValueMax.toLowerCase().trim();
        two.forEach(card =>{
            const four=card.querySelector('.title');
if(four){
    const five=four.textContent.toLowerCase();
    if(five.includes(three)){
        card.computedStyleMap.display='block';
    }else{
        card.computedStyleMap.display='none';
    }
    }

        });
    });
}
const prodactss=[
    {title:'Red Dress',
        price:'350$',
        img:'images/reddress.jpeg',
        dis:'',
    },
     {title:'Black Dress',
        price:'450$',
        img:'images/blackdress.jpg',
        dis:'',
    },
     {title:'Gray t-shirt',
        price:'100$',
        img:'images/grayshirt.jpg',
        dis:'',
    },
     {title:'Blazer',
        price:'150$',
        img:'images/blazer.jpeg',
        dis:'',
    },
     {title:'Jeans',
        price:'80',
        img:'images/bluejeans.jpeg',
        dis:'',
    },
     {title:'Widelegs Jeans',
        price:'120$',
        img:'images/widelegs.png',
        dis:'',
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
              if(pricePI)titlePI.textContent=forth.price;
       if(imgPI)titlePI.textContent=forth.img;
       if(disPI)titlePI.textContent=forth.dis;
}





