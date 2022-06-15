import { getUsers } from "./utils/octokit";

const users = await getUsers();
console.log(users);