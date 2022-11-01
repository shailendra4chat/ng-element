import { Component } from '@angular/core';
import { CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  catFacts: any;

  constructor(private catService: CatService) {
    this.getRandonCatFacts();
  }

  getRandonCatFacts() {
    this.catFacts = this.catService.getCatFact().subscribe((cat) => {
      this.catFacts = cat;
    });
  }
}
