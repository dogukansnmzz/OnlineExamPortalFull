import { Component, OnInit } from '@angular/core';
import { AnswerDto } from 'src/app/models/answerDto';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  answers:AnswerDto[];
  constructor(private answerService:AnswerService) { }

  ngOnInit(): void {
    this.answerService.getAll().subscribe( response =>{
      this.answers = response.listData;
    }) 
  }

}
