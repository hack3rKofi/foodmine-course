import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  // Get all foods from food service created

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      } else {
        this.foods = foodService.getAll();
      }
    });
  }
}
