import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Coffee } from '../coffee';
import { CoffeeServiceService } from '../coffee-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [CoffeeServiceService]
})
export class DetailsPageComponent {

  @Input()
  coffee: Coffee;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private coffeeSerive: CoffeeServiceService, private route: ActivatedRoute) { }

  // newCoffee: Coffee;
  // pageContent = {
  //   header: {
  //     title: '', body: ''
  //   }
  // };

  // ngOnInit(): void {
  //   this.route.params.pipe(switchMap((params: Params) => {
  //     return this.coffeeSerive.getSingleCoffee(params.coffeeid);
  //   }))
  //     .subscribe((newCoffee: Coffee) => {
  //       console.log('Selected Coffee', newCoffee);
  //       this.newCoffee = newCoffee;
  //       this.pageContent.header.title = newCoffee.name;
  //       this.pageContent.header.body = 'Details for slected coffee.'
  //     })
  // }

  createCoffee(coffee: Coffee) {
    this.coffeeSerive.createCoffee(coffee).then((newCoffee: Coffee) => {
      this.createHandler(newCoffee);
    });
  }

  updateCoffee(coffee: Coffee): void {
    this.coffeeSerive.updateCoffee(coffee).then((updatedCoffee: Coffee) => {
      this.updateHandler(updatedCoffee);
    });
  }

  deleteCoffee(coffeeId: String): void {
    this.coffeeSerive.deleteCoffee(coffeeId).then((deletedCoffeeId: String) => {
      this.deleteHandler(deletedCoffeeId);
    });
  }

}
