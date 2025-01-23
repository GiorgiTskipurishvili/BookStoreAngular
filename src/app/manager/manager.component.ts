import { Component } from '@angular/core';

@Component({
  selector: 'app-manager',
  standalone: false,
  
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {
  isAddButtonModalOpen:boolean =false;
  isUpdateModalOpen:boolean=false;



  newBook = {
    title: '',
    author: '',
    price: 0,
    quantity: 0
  };



  items = [
    { title: 'ვეფისტყაოსანი', author: 'შოთა რუსთაველი', price: 18, quantity: 55 },
    { title: 'ბეჭდების მბრძანებელი', author: 'ჯონ რ. ტოლკინი', price: 15, quantity: 233 },
    { title: 'ორი ქალაქის ამბავი', author: 'ჩარლზ დიკენსი', price: 12, quantity: 12 },
    { title: 'ნაცრისფერის 50 ელფერი', author: 'ერიკა ლეონარდ ჯეიმსი', price: 8.99, quantity: 23 },
    { title: 'პატარა უფლისწული', author: 'ანტუან დე სენტ–ეგზიუპერი', price: 11, quantity: 35 },
  ];


  togleAddButtonModal(){
    this.isAddButtonModalOpen  = !this.isAddButtonModalOpen
  }

  
  incrementQuantity() {
    this.newBook.quantity++;
  }

  decrementQuantity() {
    if (this.newBook.quantity > 0) {
      this.newBook.quantity--;
    }
  }



//Update
togleUpdateModal(){
  this.isUpdateModalOpen = !this.isUpdateModalOpen;
}

openUpdateModal(item:any){
  this.newBook={...item};
  this.isUpdateModalOpen = true;
}


}