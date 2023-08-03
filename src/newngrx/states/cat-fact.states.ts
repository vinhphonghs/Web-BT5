import {CatFact} from '../../app/models/cat-facts';

export interface CatFactState {
    catFacts: CatFact[];
    isLoading: boolean;
    error: string;
}