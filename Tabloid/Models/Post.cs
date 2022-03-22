﻿using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Post
    {
        private int Id;
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; } 
        public string ImageLocation { get; set; }  

        public DateTime CreateDateTime { get; set; }

        public DateTime PublishDateTime { get; set; }

        public bool IsApproved { get; set; }

        //[Required]
        //[DisplayName("Category")]
        //public int CategoryId { get; set; }
        //public Category Category { get; set; }

        [DisplayName("Author")]
        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }

    }
}
