

export interface GithubUser {
  login?:             string;
  id?:                number;
  nodeID?:            string;
  avatarURL?:         string;
  gravatarID?:        string;
  url?:               string;
  htmlURL?:           string;
  followersURL?:      string;
  followingURL?:      string;
  gistsURL?:          string;
  starredURL?:        string;
  subscriptionsURL?:  string;
  organizationsURL?:  string;
  reposURL?:          string;
  eventsURL?:         string;
  receivedEventsURL?: string;
  type?:              string;
  siteAdmin?:         boolean;
  name?:              string;
  company?:           string;
  blog?:              string;
  location?:          string;
  email?:             null;
  hireable?:          boolean;
  bio?:               string;
  twitterUsername?:   string;
  publicRepos?:       number;
  publicGists?:       number;
  followers?:         number;
  following?:         number;
  createdAt?:         Date;
  updatedAt?:         Date;
}

export interface GithubRepo {
  id?:                       number;
  nodeID?:                   string;
  name?:                     string;
  fullName?:                 string;
  private?:                  boolean;
  owner?:                    GithubUser;
  htmlURL?:                  string;
  description?:              string;
  fork?:                     boolean;
  url?:                      string;
  forksURL?:                 string;
  keysURL?:                  string;
  collaboratorsURL?:         string;
  teamsURL?:                 string;
  hooksURL?:                 string;
  issueEventsURL?:           string;
  eventsURL?:                string;
  assigneesURL?:             string;
  branchesURL?:              string;
  tagsURL?:                  string;
  blobsURL?:                 string;
  gitTagsURL?:               string;
  gitRefsURL?:               string;
  treesURL?:                 string;
  statusesURL?:              string;
  languagesURL?:             string;
  stargazersURL?:            string;
  contributorsURL?:          string;
  subscribersURL?:           string;
  subscriptionURL?:          string;
  commitsURL?:               string;
  gitCommitsURL?:            string;
  commentsURL?:              string;
  issueCommentURL?:          string;
  contentsURL?:              string;
  compareURL?:               string;
  mergesURL?:                string;
  archiveURL?:               string;
  downloadsURL?:             string;
  issuesURL?:                string;
  pullsURL?:                 string;
  milestonesURL?:            string;
  notificationsURL?:         string;
  labelsURL?:                string;
  releasesURL?:              string;
  deploymentsURL?:           string;
  createdAt?:                Date;
  updatedAt?:                Date;
  pushedAt?:                 Date;
  gitURL?:                   string;
  sshURL?:                   string;
  cloneURL?:                 string;
  svnURL?:                   string;
  homepage?:                 null;
  size?:                     number;
  stargazersCount?:          number;
  watchersCount?:            number;
  language?:                 null;
  hasIssues?:                boolean;
  hasProjects?:              boolean;
  hasDownloads?:             boolean;
  hasWiki?:                  boolean;
  hasPages?:                 boolean;
  hasDiscussions?:           boolean;
  forksCount?:               number;
  mirrorURL?:                null;
  archived?:                 boolean;
  disabled?:                 boolean;
  openIssuesCount?:          number;
  license?:                  null;
  allowForking?:             boolean;
  isTemplate?:               boolean;
  webCommitSignoffRequired?: boolean;
  topics?:                   any[];
  visibility?:               string;
  forks?:                    number;
  openIssues?:               number;
  watchers?:                 number;
  defaultBranch?:            string;
  tempCloneToken?:           null;
  networkCount?:             number;
  subscribersCount?:         number;
}

export async function fetchGithubUser(username: string): Promise<GithubUser|null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();
    const user = Convert.toGithubUser(json);
    console.log("user fetched.")
    return user;
  } catch (error) { return null; }
}

export async function fetchGithubRepo(user: string, repo: string): Promise<GithubUser|null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${user}/${repo}`);
    const json = await response.json();
    
    return Convert.toGithubRepo(json);
    
  } catch (error) { return null; }
}

// To parse this data:
//
//   import { Convert, GithubUser } from "./file";
//
//   const githubUser = Convert.toGithubUser(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.


// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
const Convert = {
  toGithubUser(json: string): GithubUser {
      return cast(json, r("GithubUser"));
  },

  githubUserToJson(value: GithubUser): string {
      return JSON.stringify(uncast(value, r("GithubUser")), null, 2);
  },

  toGithubRepo(json: string): GithubRepo {
    return cast(JSON.parse(json), r("GithubRepo"));
  },

  githubRepoToJson(value: GithubRepo): string {
      return JSON.stringify(uncast(value, r("GithubRepo")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
      if (typ.length === 2 && typ[0] === undefined) {
          return `an optional ${prettyTypeName(typ[1])}`;
      } else {
          return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
      }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
      return typ.literal;
  } else {
      return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
      typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
      typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
      if (typeof typ === typeof val) return val;
      return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
      // val must validate against one typ in typs
      const l = typs.length;
      for (let i = 0; i < l; i++) {
          const typ = typs[i];
          try {
              return transform(val, typ, getProps);
          } catch (_) {}
      }
      return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
      if (cases.indexOf(val) !== -1) return val;
      return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
  }

  function transformArray(typ: any, val: any): any {
      // val must be an array with no invalid elements
      if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
      return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
      if (val === null) {
          return null;
      }
      const d = new Date(val);
      if (isNaN(d.valueOf())) {
          return invalidValue(l("Date"), val, key, parent);
      }
      return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
          return invalidValue(l(ref || "object"), val, key, parent);
      }
      const result: any = {};
      Object.getOwnPropertyNames(props).forEach(key => {
          const prop = props[key];
          const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
          result[prop.key] = transform(v, prop.typ, getProps, key, ref);
      });
      Object.getOwnPropertyNames(val).forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(props, key)) {
              result[key] = transform(val[key], additional, getProps, key, ref);
          }
      });
      return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
      if (val === null) return val;
      return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
      ref = typ.ref;
      typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
      return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
          : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
          : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: 
  any) {
  return { props, additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  "GithubUser": o([
      { json: "login", js: "login", typ: u(undefined, "") },
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "node_id", js: "nodeID", typ: u(undefined, "") },
      { json: "avatar_url", js: "avatarURL", typ: u(undefined, "") },
      { json: "gravatar_id", js: "gravatarID", typ: u(undefined, "") },
      { json: "url", js: "url", typ: u(undefined, "") },
      { json: "html_url", js: "htmlURL", typ: u(undefined, "") },
      { json: "followers_url", js: "followersURL", typ: u(undefined, "") },
      { json: "following_url", js: "followingURL", typ: u(undefined, "") },
      { json: "gists_url", js: "gistsURL", typ: u(undefined, "") },
      { json: "starred_url", js: "starredURL", typ: u(undefined, "") },
      { json: "subscriptions_url", js: "subscriptionsURL", typ: u(undefined, "") },
      { json: "organizations_url", js: "organizationsURL", typ: u(undefined, "") },
      { json: "repos_url", js: "reposURL", typ: u(undefined, "") },
      { json: "events_url", js: "eventsURL", typ: u(undefined, "") },
      { json: "received_events_url", js: "receivedEventsURL", typ: u(undefined, "") },
      { json: "type", js: "type", typ: u(undefined, "") },
      { json: "site_admin", js: "siteAdmin", typ: u(undefined, true) },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "company", js: "company", typ: u(undefined, "") },
      { json: "blog", js: "blog", typ: u(undefined, "") },
      { json: "location", js: "location", typ: u(undefined, "") },
      { json: "email", js: "email", typ: u(undefined, null) },
      { json: "hireable", js: "hireable", typ: u(undefined, true) },
      { json: "bio", js: "bio", typ: u(undefined, "") },
      { json: "twitter_username", js: "twitterUsername", typ: u(undefined, "") },
      { json: "public_repos", js: "publicRepos", typ: u(undefined, 0) },
      { json: "public_gists", js: "publicGists", typ: u(undefined, 0) },
      { json: "followers", js: "followers", typ: u(undefined, 0) },
      { json: "following", js: "following", typ: u(undefined, 0) },
      { json: "created_at", js: "createdAt", typ: u(undefined, Date) },
      { json: "updated_at", js: "updatedAt", typ: u(undefined, Date) },
  ], false),
  "GithubRepo": o([
    { json: "id", js: "id", typ: u(undefined, 0) },
    { json: "node_id", js: "nodeID", typ: u(undefined, "") },
    { json: "name", js: "name", typ: u(undefined, "") },
    { json: "full_name", js: "fullName", typ: u(undefined, "") },
    { json: "private", js: "private", typ: u(undefined, true) },
    { json: "owner", js: "owner", typ: u(undefined, r("GithubUser")) },
    { json: "html_url", js: "htmlURL", typ: u(undefined, "") },
    { json: "description", js: "description", typ: u(undefined, "") },
    { json: "fork", js: "fork", typ: u(undefined, true) },
    { json: "url", js: "url", typ: u(undefined, "") },
    { json: "forks_url", js: "forksURL", typ: u(undefined, "") },
    { json: "keys_url", js: "keysURL", typ: u(undefined, "") },
    { json: "collaborators_url", js: "collaboratorsURL", typ: u(undefined, "") },
    { json: "teams_url", js: "teamsURL", typ: u(undefined, "") },
    { json: "hooks_url", js: "hooksURL", typ: u(undefined, "") },
    { json: "issue_events_url", js: "issueEventsURL", typ: u(undefined, "") },
    { json: "events_url", js: "eventsURL", typ: u(undefined, "") },
    { json: "assignees_url", js: "assigneesURL", typ: u(undefined, "") },
    { json: "branches_url", js: "branchesURL", typ: u(undefined, "") },
    { json: "tags_url", js: "tagsURL", typ: u(undefined, "") },
    { json: "blobs_url", js: "blobsURL", typ: u(undefined, "") },
    { json: "git_tags_url", js: "gitTagsURL", typ: u(undefined, "") },
    { json: "git_refs_url", js: "gitRefsURL", typ: u(undefined, "") },
    { json: "trees_url", js: "treesURL", typ: u(undefined, "") },
    { json: "statuses_url", js: "statusesURL", typ: u(undefined, "") },
    { json: "languages_url", js: "languagesURL", typ: u(undefined, "") },
    { json: "stargazers_url", js: "stargazersURL", typ: u(undefined, "") },
    { json: "contributors_url", js: "contributorsURL", typ: u(undefined, "") },
    { json: "subscribers_url", js: "subscribersURL", typ: u(undefined, "") },
    { json: "subscription_url", js: "subscriptionURL", typ: u(undefined, "") },
    { json: "commits_url", js: "commitsURL", typ: u(undefined, "") },
    { json: "git_commits_url", js: "gitCommitsURL", typ: u(undefined, "") },
    { json: "comments_url", js: "commentsURL", typ: u(undefined, "") },
    { json: "issue_comment_url", js: "issueCommentURL", typ: u(undefined, "") },
    { json: "contents_url", js: "contentsURL", typ: u(undefined, "") },
    { json: "compare_url", js: "compareURL", typ: u(undefined, "") },
    { json: "merges_url", js: "mergesURL", typ: u(undefined, "") },
    { json: "archive_url", js: "archiveURL", typ: u(undefined, "") },
    { json: "downloads_url", js: "downloadsURL", typ: u(undefined, "") },
    { json: "issues_url", js: "issuesURL", typ: u(undefined, "") },
    { json: "pulls_url", js: "pullsURL", typ: u(undefined, "") },
    { json: "milestones_url", js: "milestonesURL", typ: u(undefined, "") },
    { json: "notifications_url", js: "notificationsURL", typ: u(undefined, "") },
    { json: "labels_url", js: "labelsURL", typ: u(undefined, "") },
    { json: "releases_url", js: "releasesURL", typ: u(undefined, "") },
    { json: "deployments_url", js: "deploymentsURL", typ: u(undefined, "") },
    { json: "created_at", js: "createdAt", typ: u(undefined, Date) },
    { json: "updated_at", js: "updatedAt", typ: u(undefined, Date) },
    { json: "pushed_at", js: "pushedAt", typ: u(undefined, Date) },
    { json: "git_url", js: "gitURL", typ: u(undefined, "") },
    { json: "ssh_url", js: "sshURL", typ: u(undefined, "") },
    { json: "clone_url", js: "cloneURL", typ: u(undefined, "") },
    { json: "svn_url", js: "svnURL", typ: u(undefined, "") },
    { json: "homepage", js: "homepage", typ: u(undefined, null) },
    { json: "size", js: "size", typ: u(undefined, 0) },
    { json: "stargazers_count", js: "stargazersCount", typ: u(undefined, 0) },
    { json: "watchers_count", js: "watchersCount", typ: u(undefined, 0) },
    { json: "language", js: "language", typ: u(undefined, null) },
    { json: "has_issues", js: "hasIssues", typ: u(undefined, true) },
    { json: "has_projects", js: "hasProjects", typ: u(undefined, true) },
    { json: "has_downloads", js: "hasDownloads", typ: u(undefined, true) },
    { json: "has_wiki", js: "hasWiki", typ: u(undefined, true) },
    { json: "has_pages", js: "hasPages", typ: u(undefined, true) },
    { json: "has_discussions", js: "hasDiscussions", typ: u(undefined, true) },
    { json: "forks_count", js: "forksCount", typ: u(undefined, 0) },
    { json: "mirror_url", js: "mirrorURL", typ: u(undefined, null) },
    { json: "archived", js: "archived", typ: u(undefined, true) },
    { json: "disabled", js: "disabled", typ: u(undefined, true) },
    { json: "open_issues_count", js: "openIssuesCount", typ: u(undefined, 0) },
    { json: "license", js: "license", typ: u(undefined, null) },
    { json: "allow_forking", js: "allowForking", typ: u(undefined, true) },
    { json: "is_template", js: "isTemplate", typ: u(undefined, true) },
    { json: "web_commit_signoff_required", js: "webCommitSignoffRequired", typ: u(undefined, true) },
    { json: "topics", js: "topics", typ: u(undefined, a("any")) },
    { json: "visibility", js: "visibility", typ: u(undefined, "") },
    { json: "forks", js: "forks", typ: u(undefined, 0) },
    { json: "open_issues", js: "openIssues", typ: u(undefined, 0) },
    { json: "watchers", js: "watchers", typ: u(undefined, 0) },
    { json: "default_branch", js: "defaultBranch", typ: u(undefined, "") },
    { json: "temp_clone_token", js: "tempCloneToken", typ: u(undefined, null) },
    { json: "network_count", js: "networkCount", typ: u(undefined, 0) },
    { json: "subscribers_count", js: "subscribersCount", typ: u(undefined, 0) },
], false),
};
