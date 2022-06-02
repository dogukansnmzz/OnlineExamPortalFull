import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly apiUrl:string = environment.baseApiUrl + 'Questions/';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    const getListUrl = this.apiUrl + 'get-questions';
    return this.httpClient.get<ListResponseModel<Question>>(getListUrl);
  }

  getById(id:number){
    const getUrl = this.apiUrl + 'get-by-id/' + id;    
    return this.httpClient.get<SingleResponseModel<Question>>(getUrl); 
  }

  add(question:Question){    
    const addUrl = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(addUrl,question);
  }

  update(question:Question){
    const updateUrl = this.apiUrl + 'update';
    return this.httpClient.put<ResponseModel>(updateUrl,question);
  }

  delete(question:Question){    
    const deleteUrl = this.apiUrl + 'delete';
    return this.httpClient.delete<ResponseModel>(deleteUrl,{body:question});
  }
}
