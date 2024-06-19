 // ações de o carrinho pode ter


 // to add item 

 async function toAddItem( userCart, item){
    userCart.push(item);
 }


 //delete item 
// a função delete está errado
 async function deleteItem(userCart, name){

      const index  = userCart.findIndex((item)=>item.name ===name);

      if(index !== -1){
         userCart.splice(index,1);
      }
 }


 // remove item 

 async function removeItem(userCart, item){
   const indexFound = userCart.findIndex((p)=>p.name ===item.name)

      if(indexFound ==-1){
         console.log("\n ");
         return
      }

      if(userCart[indexFound].quantity >1){
         userCart[indexFound].quantity-=1;
         console.log("\n ");
         return
      }

      if(userCart[indexFound].quantity ==1){
         userCart.splice(indexFound,1);
         console.log("\n ");
         return
      }


 }


 //calculate value total

 async function calculateTotal(userCart){
   console.log(userCart.reduce((total, item)=> total + item.subtotal(), 0));
   displayCart(userCart);
 }

 async function displayCart(userCart){
   console.log("Mostrando a lista de item do carrinho");
      userCart.forEach((item, index) => {
         console.log(`${index+1}. ${item.name} - R$ ${item.price} |  ${item.quantity} | subtotal ${item.subtotal()} ` )
      });

 }

 export {
   toAddItem,
   deleteItem,
   removeItem,
   calculateTotal,
   displayCart
 }