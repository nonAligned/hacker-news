import { User } from './../model/user.model';
import { Item } from './../model/item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

const URL: string = "https://hacker-news.firebaseio.com/v0/";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopStoriesIds(): Observable<Array<number>> {
    return this.http.get<Array<number>>(URL + "topstories.json").pipe(map(data => {
      let idList: Array<number> = [];
      data.forEach(elem => idList.push(elem));
      return idList;
    }));
  }

  getNewStoriesIds(): Observable<Array<number>> {
    return this.http.get<Array<number>>(URL + "newstories.json").pipe(map(data => {
      let idList: Array<number> = [];
      data.forEach(elem => idList.push(elem));
      return idList;
    }));
  }

  getItemsByIdList(ids: number[]): Observable<Item> {
    return from(ids).pipe(
      mergeMap(id => <Observable<Item>> this.http.get(URL+"item/"+id+".json"))
    );
    // return this.http.get(URL + "item/" + id + ".json").pipe(map(data => {
    //   return new Item(data);
    // }));
  }

  getItemById(id): Observable<Item> {
    return this.http.get(URL + "item/" + id + ".json").pipe(map(data => {
      return new Item(data);
    }));
  }

  getUser(id): Observable<User> {
    return this.http.get(URL + "user/" + id + ".json").pipe(map(user => {
      return new User(user);
    }));
  }

}
