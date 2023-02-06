import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktail';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
    // getCocktails() {
    //   const cocktail1 = new Cocktail ("Sex on the beach", 10, "https://img.cuisineaz.com/660x660/2016/07/05/i78095-sex-on-the-beach-sans-alcool.jpg" )
    //   const cocktail2 = new Cocktail ("Marguarita", 13, "https://tequilasanjose.com/wp-content/uploads/2021/04/margarita_v2.png" )
    //   const cocktail3 = new Cocktail ("Martini", 8, "https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/martini-dry-2068016/21696942-3-fre-FR/Cocktail-Martini-dry.jpg")
    //   return [cocktail1, cocktail2, cocktail3]
    // }
    constructor(public http: HttpClient) {}

    getCocktails(): Observable<Cocktail[]> {
      return this.http.get<Cocktail[]>("../assets/cocktail.json");
    }
}
