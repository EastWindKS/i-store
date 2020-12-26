using System.Security.Policy;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SimpleServerAsp.Models
{
    public class Pizza
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("imageUrl")]
        public string ImageUrl { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("types")]
        public int[] Types { get; set; }

        [BsonElement("sizes")]
        public int[] Sizes { get; set; }

        [BsonElement("price")]
        public int Price { get; set; }

        [BsonElement("category")]
        public int Category { get; set; }

        [BsonElement("rating")]
        public int Rating { get; set; }
    }
}
