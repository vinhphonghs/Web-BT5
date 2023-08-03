import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catFactAction } from '../actions/cat-fact.actions';
import { CatService } from 'src/app/services/cat.service';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CatFact } from 'src/app/models/cat-facts';

@Injectable()
export class CatFactEffects {
  constructor(private actions$: Actions, private CatSv: CatService) {}
  loadCatFact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(catFactAction.loadCatFact),
      switchMap(() => this.CatSv.getCatFacts(140, 10).pipe(
      switchMap((catFact: any) => {
        return this.CatSv.getCatImages(10).pipe(
            map((factImg: any) => {     
                catFact = catFact['data'].map((catFact: CatFact, index: number) => {
                    return {...catFact, imgUrl: factImg[index]['url']};
                });
                
                
                return catFactAction.loadCatFactSuccess(catFact);
            }),
            catchError((error: string) => {
                return of(catFactAction.loadCatFactFailure(error));
            })
        );
    })
)),
)
);


}