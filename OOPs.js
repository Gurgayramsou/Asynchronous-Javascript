export class Store{
  constructor(name,items,discount){
        this.name = name;
        this.items = items;
        this.discount=discount;
  }  
  DisplayItems(){
    this.items.forEach(item => {
        console.log(item.name);
    });
  }
  totalCost(){
    let totalPrice=0;
    this.items.forEach(item=>{
       totalPrice+=item.price;
    })
    return totalPrice;
  }
  discountCalc(){
    let originalPrice = this.totalCost();
    return originalPrice - ((originalPrice * this.discount) /100);
  }

};

