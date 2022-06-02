using Entities.Concrete;
using Entities.Dtos;
using ResultsNetStandard.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IAnswerService
    {
        IListDataResult<AnswerDto> GetAnswersDto();
        IListDataResult<Answer> GetAnswers();
        ISingleDataResult<Answer> GetByAnswerId(int answerId);
        IResult Add(Answer answer);
        IResult Delete(Answer answer);
        IResult Update(Answer answer);
    }
}
