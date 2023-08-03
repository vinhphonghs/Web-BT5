import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFact } from 'src/app/models/cat-facts';
import { CatFactState } from 'src/newngrx/states/cat-fact.states';
import { Store } from '@ngrx/store';
import { catFactAction } from 'src/newngrx/actions/cat-fact.actions';


@Component({
  selector: 'app-cat-blog',
  templateUrl: './cat-blog.component.html',
  styleUrls: ['./cat-blog.component.scss']
})
export class CatBlogComponent implements OnInit{
  listFacts$: Observable<CatFact[]>;

    constructor(private store: Store<{CatFact:CatFactState}> ) {
      this.listFacts$ = store.select((state) => state.CatFact.catFacts);
    }

    ngOnInit(): void {
      this.getCatFacts();
    }
  
    async getCatFacts() {
      this.store.dispatch(catFactAction.loadCatFact());
  }
}
