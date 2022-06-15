import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN, });

async function getUsers() {
    const response = await octokit.request("GET /users", { headers: { "Content-Type": "application/json" } });
    return response.data;
}

export default octokit;
export { getUsers };
