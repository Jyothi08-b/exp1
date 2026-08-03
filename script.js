const products = [
{
id:1,
name:"Laptop",
price:800,
image:"https://via.placeholder.com/150"
},
{
id:2,
name:"Headphones",
price:120,
image:"https://via.placeholder.com/150"
},
{
id:3,
name:"Smart Watch",
price:200,
image:"https://via.placeholder.com/150"
},
{
id:4,
name:"Phone",
price:600,
image:"https://via.placeholder.com/150"
}
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");

let cart=[];

function displayProducts(){

products.forEach(product=>{

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${product.image}">
<h3>${product.name}</h3>
<h4>$${product.price}</h4>
<button onclick="addToCart(${product.id})">
Add to Cart
</button>
`;

productList.appendChild(card);

});

}

displayProducts();

function addToCart(id){

const item=cart.find(p=>p.id===id);

if(item){
item.quantity++;
}else{

const product=products.find(p=>p.id===id);

cart.push({...product,quantity:1});
}

updateCart();

}

function updateCart(){

cartItems.innerHTML="";

let total=0;
let count=0;

cart.forEach(item=>{

total+=item.price*item.quantity;
count+=item.quantity;

const div=document.createElement("div");

div.className="cart-item";

div.innerHTML=`
<span>${item.name}</span>

<div>

<button class="qty-btn"
onclick="changeQty(${item.id},-1)">-</button>

${item.quantity}

<button class="qty-btn"
onclick="changeQty(${item.id},1)">+</button>

</div>

<span>$${item.price*item.quantity}</span>
`;

cartItems.appendChild(div);

});

document.getElementById("total").innerText=total;
document.getElementById("cart-count").innerText=count;

}

function changeQty(id,value){

const item=cart.find(p=>p.id===id);

item.quantity+=value;

if(item.quantity<=0){
cart=cart.filter(p=>p.id!==id);
}

updateCart();

}