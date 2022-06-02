using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private IQuestionService QuestionService { get; }

        public QuestionsController(IQuestionService operationClaimService)
        {
            QuestionService = operationClaimService;
        }

        [HttpPost("add")]
        public IActionResult Add(Question question)
        {
            var result = QuestionService.Add(question);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpDelete("delete")]
        public IActionResult Delete(Question question)
        {
            var result = QuestionService.Delete(question);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPut("update")]
        public IActionResult Update(Question question)
        {
            var result = QuestionService.Update(question);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("get-questions")]
        public IActionResult GetQuestions()
        {
            var result = QuestionService.GetQuestions();
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("get-by-id/{questionId}")]
        public IActionResult GetById(int questionId)
        {
            var result = QuestionService.GetByQuestionId(questionId);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
