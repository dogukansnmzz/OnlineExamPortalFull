import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { AnswerService } from 'src/app/services/answer.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions:Question[];
  answer:string = '';
  userId:number;
  constructor(private questionService:QuestionService,
    private answerService:AnswerService,
    private authService:AuthenticationService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.authService.currentUserValue.id;
    this.questionService.getAll().subscribe(response => {
      this.questions = response.listData;
    })
  }

  send(qId:number){
    this.answerService.add({
      userId:this.authService.currentUserValue.id,
      questionId:qId,
      value:this.answer
    }).subscribe(response => {
      this.messageService.show(response.message);
    })
  }
}
