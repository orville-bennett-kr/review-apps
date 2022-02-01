export enum GithubTriggerActions {
  PUSH = 'push',
  PULL_REQUEST = 'pull_request',
}

export enum PullRequestAction {
  OPENED = 'opened',
  CLOSED = 'closed',
  SYNCHRONIZE = 'synchronize',
  LABELED = 'labeled',
  PUSH = 'push',
}

export interface SanitizedPayloadParams {
  action?: PullRequestAction;
  repository: {
    name: string;
    owner: string;
  };
  branch: {
    name: string;
    headCommit: string;
    pullRequest: {
      url?: string;
    };
  };
}

export interface UserInput {
  dist: string;
  slug: string;
  ghPagesBranch: string;
  buildCmd: string;
  githubToken: string;
  skipIndexHtml: boolean;
  tmpDir: string;
  apps: {
    dist: string;
    build?: string;
    slug: string;
  }[];
}

export interface FileManagerPaths {
  byRepo: string;
  byBranch: string;
  byHeadCommit: string;
}

export type App = {
  name: string;
  headCommitId: string;
  updatedAt: Date;
  href: string;
  pullRequestUrl?: string;
  githubPagesUrl: string;
};

export interface Manifest {
  [branch: string]: {
    apps: App[];
  };
}
