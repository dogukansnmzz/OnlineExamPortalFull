using Core.DataAccess.Abstract;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Abstract
{
    public interface IAnswerDal : IEntityRepository<Answer>
    {
        List<AnswerDto> GetAllDto(Expression<Func<AnswerDto,bool>> filter = null);
    }
}
