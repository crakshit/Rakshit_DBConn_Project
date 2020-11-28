import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Coffee } from '../coffee';
import { CoffeeServiceService } from '../coffee-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [CoffeeServiceService]
})
export class HomeListComponent implements OnInit {

  coffees: Coffee[]
  selectedCoffee: Coffee

  constructor(private coffeeService: CoffeeServiceService) { }

  ngOnInit(): void {
    this.coffeeService
      .getCoffees()
      .then((coffees: Coffee[]) => {
        this.coffees = coffees.map(coffee => {
          return coffee;
        });
      });
  }

  private getIndexofCoffee = (coffeeId: String) => {
    return this.coffees.findIndex((coffee) => {
      return coffee._id === coffeeId;
    });
  }

  selectCoffee(coffee: Coffee) {
    this.selectedCoffee = coffee
  }

  createNewCoffee() {
    var coffee: Coffee = {
      _id: '',
      name: '',
      flavours: '',
      description: '',
      price: '',
      town: '',
      state: '',
      country: '',
    };

    this.selectCoffee(coffee);

  }

  deleteCoffee = (coffeeId: String) => {
    var idx = this.getIndexofCoffee(coffeeId);
    if (idx !== -1) {
      this.coffees.splice(idx, 1);
      this.selectCoffee(null);
    }
    return this.coffees;
  }

  addCoffee = (coffee: Coffee) => {

    if (coffee.name != '' && coffee.flavours != '') {
      this.coffees.push(coffee);
    }
    this.selectCoffee(coffee);
    return this.coffees;
  }

  updateCoffee = (coffee: Coffee) => {
    var idx = this.getIndexofCoffee(coffee._id);
    if (idx !== -1) {
      this.coffees[idx] = coffee;
      this.selectCoffee(coffee);
    }
    return this.coffees;
  }

}
