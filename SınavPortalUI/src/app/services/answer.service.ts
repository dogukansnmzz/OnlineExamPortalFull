import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Answer } from '../models/answer';
import { AnswerDto } from '../models/answerDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private readonly apiUrl:string = environment.baseApiUrl + 'Answers/';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    const getListUrl = this.apiUrl + 'get-all-dto';
    return this.httpClient.get<ListResponseModel<AnswerDto>>(getListUrl);
  }

  getById(id:number){
    const getByIdUrl = this.apiUrl + 'get-by-answer-id/' + id;
    return this.httpClient.get<SingleResponseModel<Answer>>(getByIdUrl);
  }

  add(answer:Answer){    
    const addUrl = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(addUrl,answer);
  }

  update(answer:Answer){
    const updateUrl = this.apiUrl + 'update';
    return this.httpClient.put<ResponseModel>(updateUrl,answer);
  }

  delete(answer:Answer){    
    const deleteUrl = this.apiUrl + 'delete';
    return this.httpClient.delete<ResponseModel>(deleteUrl,{body:answer});
  }
}
