
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Tabloid.Utils;
using Tabloid.Models;
using System;
using System.Linq;

namespace Tabloid.Repositories
{
    public class TagRepository: BaseRepository, ITagRepository
    {
        public TagRepository(IConfiguration configuration) : base(configuration) { }


        public List<Tag> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT Id, Name
                    FROM Tag
                    Order by name asc";

                    var reader = cmd.ExecuteReader();

                    var tags = new List<Tag>();

                    while (reader.Read())
                    {
                        tags.Add(new Tag()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                        });

                    }

                    reader.Close();

                    return tags;

                }
            }
        }

        public void Add(Tag tag)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Tag (Id, Name)
                                        OUTPUT INSERTED.ID
                                        VALUES (@Id, @Name)";
                    DbUtils.AddParameter(cmd, "@Id", tag.Id);
                    DbUtils.AddParameter(cmd, "@FirstName", tag.Name);

                    tag.Id = (int)cmd.ExecuteScalar();
                }

            }

        }
    }
}