using Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class AnswerDto : IDto
    {
        public int AnswerId { get; set; }
        public int QuestionId { get; set; }
        public int UserId { get; set; }

        public string Value { get; set; }

        public string UserEmail { get; set; }


        public string QuestionTitle { get; set; }
        public string QuestionDescription { get; set; }
    }
}
