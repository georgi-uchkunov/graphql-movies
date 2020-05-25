export default `

    input MovieInput {
        _id: String!
        name: String!
        description: String!
        imageUrl: String!
        price: Float!
    }

    type Movie {
        _id: String!
        name: String!
        description: String!
        imageUrl: String!
        price: Float!
    }

    type Query {
        movie(_id: String!): Movie
        movies: [Movie]
    }

    type Mutation {
        addMovie(name: String!, description: String!, imageUrl: String!, price: Float!): Movie
        deleteMovie(_id: String!): Movie
        editMovie(_id: String!, name: String, description: String, imageUrl: String, price: Float): Movie
    }

`