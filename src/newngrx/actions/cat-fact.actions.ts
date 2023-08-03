import { createAction } from '@ngrx/store';
import { CatFact } from 'src/app/models/cat-facts';
import { props } from '@ngrx/store';

export const catFactAction = {
  loadCatFact: createAction('[CatFact] Load Cat Fact'),
  loadCatFactSuccess: createAction(
    '[CatFact] Load Cat Fact Success',
    // props<{catFacts: CatFact[]}>()
    (catFacts: CatFact[]) => ({
        catFacts,
      })
  ),
  loadCatFactFailure: createAction(
    '[CatFact] Load Cat Fact Failure',
    (error: string) =>({error})
  ),
};
