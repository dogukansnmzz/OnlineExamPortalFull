import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.scss']
})
export class QuestionAddComponent implements OnInit {

  questionForm:FormGroup;
  constructor(private questionService:QuestionService,
    private formBuilder:FormBuilder,
    private messageService:MessageService) { }


  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
      isApproved:[false,Validators.required]
    })
  }

  add(){
    if (this.questionForm.valid) {
      const {description,title,isApproved} = this.questionForm.value;
      this.questionService.add({
        description:description,
        title:title,
        isApproved:isApproved,
        id:0
      }).subscribe( (response) =>{
        this.messageService.show(response.message);
      })
    } else {
      this.messageService.show("Lütfen Formu doldurunuz");
    }
  }

}
