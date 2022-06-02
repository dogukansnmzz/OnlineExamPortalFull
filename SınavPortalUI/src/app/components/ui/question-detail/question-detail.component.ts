import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  currentUserEmail:string = "";
  currentUserId:number = 0;
  questionId:number;
  description = "";
  title = "";
  value = "";
  constructor(private activatedRoute:ActivatedRoute,
    private answerService:AnswerService,
    private questionService:QuestionService,
    private authService:AuthenticationService,
    private messageService:MessageService,
    private router:Router) { }

  ngOnInit(): void {
    this.currentUserEmail = this.authService.currentUserValue.userEmail;
    this.currentUserId = this.authService.currentUserValue.id;
    this.getRouteValue();
  }

  getRouteValue(){
    this.activatedRoute.params.subscribe( response =>{
      if (response['quid']) {
        this.questionId = response['quid'];
        this.getById(response['quid'])
      } else {
        this.router.navigate(['/'])
      }
    })
  }

  getById(qId:number){
    this.questionService.getById(qId).subscribe(response =>{
        this.description =  response.singleData.description;
        this.title =  response.singleData.title;
    })
  }

  send(){
    this.answerService.add({
      userId:this.currentUserId,
      questionId:this.questionId,
      value:this.value
    }).subscribe( response =>{
      this.messageService.show(response.message);
    })
  }
}
