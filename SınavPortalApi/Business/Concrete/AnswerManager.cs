using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Core.Constants;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.Dtos;
using Results.State;
using ResultsNetStandard.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class AnswerManager : IAnswerService
    {
        private IAnswerDal AnswerDal { get; }

        public AnswerManager(IAnswerDal answerDal)
        {
            AnswerDal = answerDal;
        }

        [SecuredOperation("admin")]
        public IResult Add(Answer answer)
        {
            AnswerDal.Add(answer);
            return new SuccessResult(Messages.SuccessAddOperation);
        }

        [SecuredOperation("admin")]
        public IResult Delete(Answer answer)
        {
            AnswerDal.Delete(answer);
            return new SuccessResult(Messages.SuccessDeleteOperation);
        }

        public IListDataResult<Answer> GetAnswers()
        {
            return new SuccessListDataResult<Answer>(AnswerDal.GetAll());
        }

        public ISingleDataResult<Answer> GetByAnswerId(int answerId)
        {
            return new SuccessSingleDataResult<Answer>(AnswerDal.Get(answer => answer.Id == answerId));
        }

        [SecuredOperation("admin")]
        public IResult Update(Answer answer)
        {
            AnswerDal.Update(answer);
            return new SuccessResult(Messages.SuccessUpdateOperation);
        }

        public IListDataResult<AnswerDto> GetAnswersDto() => new SuccessListDataResult<AnswerDto>(AnswerDal.GetAllDto());
    }
}
