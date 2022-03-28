using System;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetAll();
        void Add(Tag tag);
        Tag GetTagById (int id);
        //void UpdateTag(Tag tag, int id);
        //void DeleteTag(int id);
    }
}