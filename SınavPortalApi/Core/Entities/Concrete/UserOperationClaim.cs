﻿using Core.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities.Concrete
{
    public class UserOperationClaim : BaseEntity,IEntity
    {
        public int UserId { get; set; }
        public int OperationClaimId { get; set; }
        public bool IsApproved { get; set; }
    }
}
