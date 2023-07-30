import { Component } from '@angular/core';
import { Item } from './models/item.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFirstProject';
  
  listItem: Item[]=[]
  
  constructor(protected dataService: DataService){
    this.listItem = this.dataService.listItem
  }
}
