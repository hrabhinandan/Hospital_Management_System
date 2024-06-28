import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private router:Router){}

  doSearch(value:string | number){
    this.router.navigateByUrl('/search/'+value)
//this.router.navigateByUrl('/doctorsByDepartments/'+value);
  }
  
}
