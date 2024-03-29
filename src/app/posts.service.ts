import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpService: HttpClient) { }

  getAllBlogs(){
    return this.httpService.get('https://hn.algolia.com/api/v1/search_by_date?tags=story')
  }
}
