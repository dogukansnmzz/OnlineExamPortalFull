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
    public class AnswersController : ControllerBase
    {
        private IAnswerService AnswerService { get; }

        public AnswersController(IAnswerService answerService)
        {
            AnswerService = answerService;
        }

        [HttpPost("add")]
        public IActionResult Add(Answer answer)
        {
            var result = AnswerService.Add(answer);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpDelete("delete")]
        public IActionResult Delete(Answer answer)
        {
            var result = AnswerService.Delete(answer);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPut("update")]
        public IActionResult Update(Answer answer)
        {
            var result = AnswerService.Update(answer);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("get-all")]
        public IActionResult GetAnswers()
        {
            var result = AnswerService.GetAnswers();
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


        [HttpGet("get-by-answer-id/{answerId}")]
        public IActionResult GetByAnswerId(int answerId)
        {
            var result = AnswerService.GetByAnswerId(answerId);
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("get-all-dto")]
        public IActionResult GetAnswersDto()
        {
            var result = AnswerService.GetAnswersDto();
            if (result.Status)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}
