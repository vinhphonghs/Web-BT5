export interface CatFact{
    map(arg0: (fact: CatFact, index: number) => CatFact): any;
    imageUrl: any;
    
}