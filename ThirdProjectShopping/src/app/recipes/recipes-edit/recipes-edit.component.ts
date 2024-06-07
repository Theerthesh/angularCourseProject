import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrl: './recipes-edit.component.css'
})
export class RecipesEditComponent implements OnInit{
  id!: number;
  isEditMode = false;
constructor(private router:ActivatedRoute){}

ngOnInit(): void {
  this.id =+this.router.snapshot.params['id'];
  this.router.params.subscribe(
    (param:Params) =>{
      this.id = +param['id'];
      this.isEditMode = param['id'] !==undefined;
    }
  )
}

}
