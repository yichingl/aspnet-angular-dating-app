using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class UserDTO
    {
        [Required]
        private string username;

        [Required]
        private string token;

        public string Username { get => username; set => username = value; }
        public string Token { get => token; set => token = value; }
    }
}
