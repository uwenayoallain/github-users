import { Octokit } from "@octokit/core";
import { Endpoints } from "@octokit/types";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
type ListUserFollowersResponse =
  Endpoints["GET /users/{username}/followers"]["response"];

async function getUsers() {
  const response = await octokit.request("GET /users/{username}/followers", {
    username: "uwenayoallain",
    page: 3,
  });
  let users = checkifFlowsMe(response.data);
  return users;
}

function checkifFlowsMe(users: ListUserFollowersResponse["data"]): ListUserFollowersResponse["data"] {
  let buddies: ListUserFollowersResponse["data"];
  users.forEach(async (user) => {
    if (
      await octokit.request("GET /users/{username}/following/{target_user}", {
        username: user.login,
        target_user: "uwenayoallain",
      })
    ){
        console.log(user.login);
        buddies.push(user);
    }
  });
  return buddies;
}

export default octokit;
export { getUsers };
