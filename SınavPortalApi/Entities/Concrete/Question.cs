using Core.Entities.Abstract;
using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class Question : BaseEntity,IEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsApproved { get; set; }
    }
}
