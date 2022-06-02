using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Core.Constants;
using DataAccess.Abstract;
using Entities.Concrete;
using Results.State;
using ResultsNetStandard.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class QuestionManager : IQuestionService
    {
        private IQuestionDal QuestionDal { get; }

        public QuestionManager(IQuestionDal questionDal)
        {
            QuestionDal = questionDal;
        }

        [SecuredOperation("admin")]
        public IResult Add(Question question)
        {
            QuestionDal.Add(question);
            return new SuccessResult(Messages.SuccessAddOperation);
        }

        [SecuredOperation("admin")]
        public IResult Delete(Question question)
        {
            QuestionDal.Delete(question);
            return new SuccessResult(Messages.SuccessDeleteOperation);
        }

        public ISingleDataResult<Question> GetByQuestionId(int questionId)
        {
            return new SuccessSingleDataResult<Question>(QuestionDal.Get(question => question.Id == questionId));
        }

        public IListDataResult<Question> GetQuestions()
        {
            return new SuccessListDataResult<Question>(QuestionDal.GetAll());
        }

        [SecuredOperation("admin")]
        public IResult Update(Question question)
        {
            QuestionDal.Update(question);
            return new SuccessResult(Messages.SuccessUpdateOperation);
        }
    }
}
