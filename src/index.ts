import { getUsers } from "./utils/octokit";
import * as fs from "fs";

const users = await getUsers();
fs.writeFileSync("./users.json", JSON.stringify(users));