export interface AnswerDto{
    userId:number;
    questionId:number;
    answerId:number;

    value:string;
    userEmail:string;

    questionTitle:string;
    questionDescription:string;
}