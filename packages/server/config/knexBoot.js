import Knex from "knex";
import knexfile from "../knexfile.js";
import { Model } from "objection";

const knex = Knex(knexfile);
Model.knex(knex);

export default knex;