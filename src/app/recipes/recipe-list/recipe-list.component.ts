import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Grill chicken', 'Tasty chicken', 'https://cafedelites.com/wp-content/uploads/2019/12/Best-Juicy-Baked-Chicken-Breast-IMAGE.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
