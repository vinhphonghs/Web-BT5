import { createReducer, on } from "@ngrx/store";
import { catFactAction } from "../actions/cat-fact.actions";
import { CatFactState } from "../states/cat-fact.states";

export const initialState: CatFactState= {
    catFacts: [],
    isLoading: false,
    error: '',
};

export const catFactReducer = createReducer(initialState, 
    on(catFactAction.loadCatFact, (state) => ({  ...state, isLoading: true })),
    on(catFactAction.loadCatFactSuccess, (state, { catFacts }) => ({ 
        ...state, 
        catFacts, 
        isLoading: false 
    })),
    on(catFactAction.loadCatFactFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

);