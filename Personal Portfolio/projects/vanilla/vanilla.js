let list= document.getElementById('list');
let price=[];
let items=[];
let pricet=0;//calculated price
let pr=document.getElementById('price');
pr.textContent='$ '+pricet;

 function addItem(){

   let newItem=document.getElementById('input');
   let alert=document.getElementById('alert');
   

   pricet=0;
   let itemArray=newItem.value.split(',');
   console.log( typeof(itemArray[0]+2));
   //make sure input in correct form
   if(itemArray.length!=3 ||itemArray[0]==null|| itemArray[0]=="" || itemArray[1]==null || itemArray[1]=='' || itemArray[2]==null || itemArray[2]=='' || /.*[^0-9].*/.test(itemArray[0])==false || /[^0-9]/.test(itemArray[1])|| /[^0-9]/.test(itemArray[2])  ) 
   {
   alert.textContent+="Please fill all fields with correct types ";
   newItem.value='';
   return;
   }
   alert.textContent=" ";//reset alert
    items.push(itemArray[0]);  //array of items
   price.push(itemArray[1]*itemArray[2]);//array of prices
   let tr =document.createElement('tr');
   console.log(items);
  
   
let i=0;
//create and add the columns in the row
   itemArray.map(function(item){
        
       i++;
       let col=document.createElement('td');
       if(i==3)//to add the $ sign on the third column
       col.textContent='$ '+item;
        else
       {col.textContent=item;}
       tr.appendChild(col);
       

       });
       
       

        
       
    
list.appendChild(tr);//add the created row to the list
newItem.value='';
//calculate price
price.map(function(num){
            pricet+=num;
            addPrice();
         });
 addBtn();
 
     
 }
 function addBtn(){
    let btn=document.createElement('button');
    let div=document.createElement('div');

       btn.textContent='remove';
    btn.setAttribute('id',items.length-1);
    btn.setAttribute('class','rmv-btn');

    
    
    document.getElementById('list').appendChild(btn);

//remove an item
btn.addEventListener('click',function(){
if(items.length>0)
{
let rmvBtn=document.querySelectorAll('.rmv-btn');//nodelist of all remove buttons
var btnsArr = Array.prototype.slice.call(rmvBtn);//change the nodelist to array
console.log(btnsArr);
let index=btnsArr.indexOf(btn);//find the index of the clicked button in the array 
console.log(index);
 //find the children to remove in the list
let list=document.querySelector('#list');               
let itemToRemove=list.childNodes[index*2+2];

let btnToRemove=list.childNodes[index*2+3];

price.splice(index,1);//remove the price of the deleted item
//recalculate the price
pricet=0;
if(price.length==0)
pricet=0;
else
price.map(function(num){

    pricet+=num;
});
document.getElementById('price').textContent='$ '+pricet;
//remove the button and item
btnToRemove.remove();
itemToRemove.remove();
}
});
   
 }

 

function addPrice(){
  
    let pr=document.getElementById('price');
    pr.textContent='$ '+pricet;
}
let btn1 = document.getElementById('btn');
btn1.addEventListener('click',addItem);
addEventListener('keydown',function(e){  //Add by pressing enter
if(e.keyCode==13)
addItem();

});


