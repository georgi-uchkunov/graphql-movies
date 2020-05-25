import {mergeTypes} from "merge-graphql-schemas";
import User from "./User";
import Movie from "./Movie";

const typeDefs = [User, Movie];

export default mergeTypes(typeDefs, {all: true});