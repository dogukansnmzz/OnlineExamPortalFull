using Core.DataAccess.Concrete;
using DataAccess.Abstract;
using DataAccess.Contexts;
using Entities.Concrete;
using Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;

namespace DataAccess.Concrete
{
    public class EfAnswerDal : EfEntityRepositoryBase<Answer, SınavPortalDb>, IAnswerDal
    {
        public List<AnswerDto> GetAllDto(Expression<Func<AnswerDto, bool>> filter = null)
        {
            using (SınavPortalDb sınavPortalDb = new SınavPortalDb())
            {
                var result = from answer in sınavPortalDb.Answers
                             join question in sınavPortalDb.Questions on answer.QuestionId equals question.Id
                             join user in sınavPortalDb.Users on answer.UserId equals user.Id
                             select new AnswerDto()
                             {
                                AnswerId = answer.Id,
                                Value = answer.Value,

                                UserId = user.Id,
                                UserEmail = user.Email,

                                QuestionId = question.Id,
                                QuestionTitle = question.Title,
                                QuestionDescription = question.Description
                             };
                if (filter == null)
                {
                    return result.ToList();
                }
                else 
                { 
                    return result.Where(filter).ToList();
                }
            }
        }
    }
}
