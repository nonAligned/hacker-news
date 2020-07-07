import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL: string = "https://hacker-news.firebaseio.com/v0/";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
}
