import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AnswerListComponent } from './components/panel/answer-list/answer-list.component';
import { OperationClaimAddComponent } from './components/panel/operation-claim-add/operation-claim-add.component';
import { OperationClaimListComponent } from './components/panel/operation-claim-list/operation-claim-list.component';
import { PanelMainComponent } from './components/panel/panel-main/panel-main.component';
import { QuestionAddComponent } from './components/panel/question-add/question-add.component';
import { QuestionListComponent } from './components/panel/question-list/question-list.component';
import { UserOperationClaimAddComponent } from './components/panel/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimListComponent } from './components/panel/user-operation-claim-list/user-operation-claim-list.component';
import { UsersComponent } from './components/panel/users/users.component';
import { HomeComponent } from './components/ui/home/home.component';
import { QuestionDetailComponent } from './components/ui/question-detail/question-detail.component';
import { QuestionsComponent } from './components/ui/questions/questions.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'questions',component:QuestionsComponent},
    {path:'question-detail/:quid',component:QuestionDetailComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'panel',canActivate:[AuthGuard],canActivateChild:[AuthGuard],component:PanelMainComponent,children:[
   
    {path:'users',component:UsersComponent},

    {path:'user-operation-claim',canActivate:[AdminGuard],canActivateChild:[AdminGuard],children:[
      {path:'add',component:UserOperationClaimAddComponent},
      {path:'list',component:UserOperationClaimListComponent}
    ]},
    
    {path:'operation-claim',canActivate:[AdminGuard],canActivateChild:[AdminGuard],children:[
      {path:'add',component:OperationClaimAddComponent},
      {path:'list',component:OperationClaimListComponent}
    ]},

    {path:'question',children:[
      {path:'list',component:QuestionListComponent},
      {path:'add',component:QuestionAddComponent}
    ]},

    {path:'answer',children:[
      {path:'list',component:AnswerListComponent}
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
