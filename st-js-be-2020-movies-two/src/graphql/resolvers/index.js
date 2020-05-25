import {mergeResolvers} from "merge-graphql-schemas";
import User from "./User";
import Movie from "./Movie";

const resolvers = [User,Movie];

export default mergeResolvers(resolvers);