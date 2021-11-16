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
   if(itemArray.length!=3
     ||itemArray[0]==null
     || itemArray[0]==""
     ||itemArray[1]==null
     ||itemArray[1]=='' 
     || itemArray[2]==null 
     || itemArray[2]=='' 
     || /.*[^0-9].*/.test(itemArray[0])==false    //regex for correct input form
     || /[^0-9]/.test(itemArray[1])
     || /[^0-9]/.test(itemArray[2])  ) 
   {
   alert.textContent+="Please fill all fields with correct types ";
   newItem.value='';
   return;
   }
   //  the input is in correct form 
   alert.textContent=" ";//reset alert         
    items.push(itemArray[0]);  //array of items
   price.push(itemArray[1]*itemArray[2]);//array of prices

//create a row
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
       {col.textContent=item;
    
       }
       tr.appendChild(col);
       

       });
       
       

        
       
    
list.appendChild(tr);//add the created row to the list
newItem.value='';
//calculate price
price.map(function(num){
            pricet+=num;
            addPrice();
         });
 addbutton(tr);
 
     
 }
 //to add the price to the screen
 function addPrice(){
  
    let pr=document.getElementById('price');
    pr.textContent='$ '+pricet;
}

//event listener for add button
let btn1 = document.getElementById('btn');
btn1.addEventListener('click',addItem);
addEventListener('keydown',function(e){  //Add by pressing enter
if(e.keyCode==13)
addItem();

});

//function to add a delete button
function addbutton(element){

let button =document.createElement('button');
button.setAttribute('class','rmv-btn');
button.textContent="Delete";
element.appendChild(button);
button.addEventListener('click',function(){

    buttons=document.querySelectorAll('.rmv-btn');
    var btnsArr = Array.prototype.slice.call(buttons) //convert btnArr from node to array
    let index = btnsArr.indexOf(this); //find the index of the button related to the element to delete
    console.log(index);
    element.remove();
   
calcprice(index);// calculate the price afte deleting
})

}
//function to recalculate the price after deleting an item 
function calcprice(index){

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
}