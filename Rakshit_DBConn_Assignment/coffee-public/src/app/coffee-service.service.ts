import { Injectable } from '@angular/core';
import { Coffee } from './coffee';
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoffeeServiceService {

  private coffeesUrl = 'http://localhost:3000/api/coffee';

  constructor(private http: HttpClient) { }

  getCoffees(): Promise<void | Coffee[]> {
    return this.http.get(this.coffeesUrl)
      .toPromise()
      .then(response => response as Coffee[])
      .catch(this.handleError);
  }

  getSingleCoffee(coffeeId: string): Promise<void | Coffee> {
    return this.http.get(this.coffeesUrl + '/' + coffeeId)
      .toPromise()
      .then(response => response as Coffee)
      .catch(this.handleError);
  }

  createCoffee(newCoffee: Coffee): Promise<void | Coffee> {
    return this.http.post(this.coffeesUrl, newCoffee)
      .toPromise()
      .then(response => response as Coffee)
      .catch(this.handleError);
  }

  deleteCoffee(coffeeId: String): Promise<void | String> {
    return this.http.delete(this.coffeesUrl + '/' + coffeeId)
      .toPromise()
      .then(response => response as String)
      .catch(this.handleError);
  }

  updateCoffee(putCoffee: Coffee): Promise<void | Coffee> {
    var putUrl = this.coffeesUrl + '/' + putCoffee._id;
    return this.http.put(putUrl, putCoffee)
      .toPromise()
      .then(response => response as Coffee)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
  }
}
