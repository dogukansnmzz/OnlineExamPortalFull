using Entities.Concrete;
using ResultsNetStandard.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IQuestionService
    {
        IListDataResult<Question> GetQuestions();
        ISingleDataResult<Question> GetByQuestionId(int questionId);

        IResult Add(Question question);
        IResult Delete(Question question);
        IResult Update(Question question);
    }
}
