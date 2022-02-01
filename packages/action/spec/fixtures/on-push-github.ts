// https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#push

export const onPushGithubFixture = {
  context: {
    payload: {
      after: '8ee87144dc29b2d7e713d42aa97deb477137f7dd',
      base_ref: null,
      before: '64115ba22d01fe905b8ac623866707692f5ec6ee',
      commits: [
        {
          author: {
            email: 'saulotoshi@gmail.com',
            name: 'sauloxd',
            username: 'Sauloxd',
          },
          committer: {
            email: 'saulotoshi@gmail.com',
            name: 'sauloxd',
            username: 'Sauloxd',
          },
          distinct: true,
          id: '8ee87144dc29b2d7e713d42aa97deb477137f7dd',
          message: 'log github',
          timestamp: '2021-12-26T14:21:46-03:00',
          tree_id: '6c69cca3bf53774cb781b2cfbb12301814ddec28',
          url: 'https://github.com/Sauloxd/review-apps/commit/8ee87144dc29b2d7e713d42aa97deb477137f7dd',
        },
      ],
      compare:
        'https://github.com/Sauloxd/review-apps/compare/64115ba22d01...8ee87144dc29',
      created: false,
      deleted: false,
      forced: false,
      head_commit: {
        author: {
          email: 'saulotoshi@gmail.com',
          name: 'sauloxd',
          username: 'Sauloxd',
        },
        committer: {
          email: 'saulotoshi@gmail.com',
          name: 'sauloxd',
          username: 'Sauloxd',
        },
        distinct: true,
        id: '8ee87144dc29b2d7e713d42aa97deb477137f7dd',
        message: 'log github',
        timestamp: '2021-12-26T14:21:46-03:00',
        tree_id: '6c69cca3bf53774cb781b2cfbb12301814ddec28',
        url: 'https://github.com/Sauloxd/review-apps/commit/8ee87144dc29b2d7e713d42aa97deb477137f7dd',
      },
      pusher: {
        email: 'saulotoshi@gmail.com',
        name: 'Sauloxd',
      },
      ref: 'refs/heads/issue-8/branch/with/nested/names',
      repository: {
        allow_forking: true,
        archive_url:
          'https://api.github.com/repos/Sauloxd/review-apps/{archive_format}{/ref}',
        archived: false,
        assignees_url:
          'https://api.github.com/repos/Sauloxd/review-apps/assignees{/user}',
        blobs_url:
          'https://api.github.com/repos/Sauloxd/review-apps/git/blobs{/sha}',
        branches_url:
          'https://api.github.com/repos/Sauloxd/review-apps/branches{/branch}',
        clone_url: 'https://github.com/Sauloxd/review-apps.git',
        collaborators_url:
          'https://api.github.com/repos/Sauloxd/review-apps/collaborators{/collaborator}',
        comments_url:
          'https://api.github.com/repos/Sauloxd/review-apps/comments{/number}',
        commits_url:
          'https://api.github.com/repos/Sauloxd/review-apps/commits{/sha}',
        compare_url:
          'https://api.github.com/repos/Sauloxd/review-apps/compare/{base}...{head}',
        contents_url:
          'https://api.github.com/repos/Sauloxd/review-apps/contents/{+path}',
        contributors_url:
          'https://api.github.com/repos/Sauloxd/review-apps/contributors',
        created_at: 1598315371,
        default_branch: 'main',
        deployments_url:
          'https://api.github.com/repos/Sauloxd/review-apps/deployments',
        description: null,
        disabled: false,
        downloads_url:
          'https://api.github.com/repos/Sauloxd/review-apps/downloads',
        events_url: 'https://api.github.com/repos/Sauloxd/review-apps/events',
        fork: false,
        forks: 2,
        forks_count: 2,
        forks_url: 'https://api.github.com/repos/Sauloxd/review-apps/forks',
        full_name: 'Sauloxd/review-apps',
        git_commits_url:
          'https://api.github.com/repos/Sauloxd/review-apps/git/commits{/sha}',
        git_refs_url:
          'https://api.github.com/repos/Sauloxd/review-apps/git/refs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/Sauloxd/review-apps/git/tags{/sha}',
        git_url: 'git://github.com/Sauloxd/review-apps.git',
        has_downloads: true,
        has_issues: true,
        has_pages: true,
        has_projects: true,
        has_wiki: true,
        homepage: null,
        hooks_url: 'https://api.github.com/repos/Sauloxd/review-apps/hooks',
        html_url: 'https://github.com/Sauloxd/review-apps',
        id: 290071259,
        is_template: false,
        issue_comment_url:
          'https://api.github.com/repos/Sauloxd/review-apps/issues/comments{/number}',
        issue_events_url:
          'https://api.github.com/repos/Sauloxd/review-apps/issues/events{/number}',
        issues_url:
          'https://api.github.com/repos/Sauloxd/review-apps/issues{/number}',
        keys_url:
          'https://api.github.com/repos/Sauloxd/review-apps/keys{/key_id}',
        labels_url:
          'https://api.github.com/repos/Sauloxd/review-apps/labels{/name}',
        language: 'JavaScript',
        languages_url:
          'https://api.github.com/repos/Sauloxd/review-apps/languages',
        license: {
          key: 'mit',
          name: 'MIT License',
          node_id: 'MDc6TGljZW5zZTEz',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
        },
        master_branch: 'main',
        merges_url: 'https://api.github.com/repos/Sauloxd/review-apps/merges',
        milestones_url:
          'https://api.github.com/repos/Sauloxd/review-apps/milestones{/number}',
        mirror_url: null,
        name: 'review-apps',
        node_id: 'MDEwOlJlcG9zaXRvcnkyOTAwNzEyNTk=',
        notifications_url:
          'https://api.github.com/repos/Sauloxd/review-apps/notifications{?since,all,participating}',
        open_issues: 4,
        open_issues_count: 4,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/11878589?v=4',
          email: 'saulotoshi@gmail.com',
          events_url: 'https://api.github.com/users/Sauloxd/events{/privacy}',
          followers_url: 'https://api.github.com/users/Sauloxd/followers',
          following_url:
            'https://api.github.com/users/Sauloxd/following{/other_user}',
          gists_url: 'https://api.github.com/users/Sauloxd/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/Sauloxd',
          id: 11878589,
          login: 'Sauloxd',
          name: 'Sauloxd',
          node_id: 'MDQ6VXNlcjExODc4NTg5',
          organizations_url: 'https://api.github.com/users/Sauloxd/orgs',
          received_events_url:
            'https://api.github.com/users/Sauloxd/received_events',
          repos_url: 'https://api.github.com/users/Sauloxd/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/Sauloxd/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Sauloxd/subscriptions',
          type: 'User',
          url: 'https://api.github.com/users/Sauloxd',
        },
        private: false,
        pulls_url:
          'https://api.github.com/repos/Sauloxd/review-apps/pulls{/number}',
        pushed_at: 1640539313,
        releases_url:
          'https://api.github.com/repos/Sauloxd/review-apps/releases{/id}',
        size: 9440,
        ssh_url: 'git@github.com:Sauloxd/review-apps.git',
        stargazers: 5,
        stargazers_count: 5,
        stargazers_url:
          'https://api.github.com/repos/Sauloxd/review-apps/stargazers',
        statuses_url:
          'https://api.github.com/repos/Sauloxd/review-apps/statuses/{sha}',
        subscribers_url:
          'https://api.github.com/repos/Sauloxd/review-apps/subscribers',
        subscription_url:
          'https://api.github.com/repos/Sauloxd/review-apps/subscription',
        svn_url: 'https://github.com/Sauloxd/review-apps',
        tags_url: 'https://api.github.com/repos/Sauloxd/review-apps/tags',
        teams_url: 'https://api.github.com/repos/Sauloxd/review-apps/teams',
        topics: [],
        trees_url:
          'https://api.github.com/repos/Sauloxd/review-apps/git/trees{/sha}',
        updated_at: '2021-12-26T13:08:42Z',
        url: 'https://github.com/Sauloxd/review-apps',
        visibility: 'public',
        watchers: 5,
        watchers_count: 5,
      },
      sender: {
        avatar_url: 'https://avatars.githubusercontent.com/u/11878589?v=4',
        events_url: 'https://api.github.com/users/Sauloxd/events{/privacy}',
        followers_url: 'https://api.github.com/users/Sauloxd/followers',
        following_url:
          'https://api.github.com/users/Sauloxd/following{/other_user}',
        gists_url: 'https://api.github.com/users/Sauloxd/gists{/gist_id}',
        gravatar_id: '',
        html_url: 'https://github.com/Sauloxd',
        id: 11878589,
        login: 'Sauloxd',
        node_id: 'MDQ6VXNlcjExODc4NTg5',
        organizations_url: 'https://api.github.com/users/Sauloxd/orgs',
        received_events_url:
          'https://api.github.com/users/Sauloxd/received_events',
        repos_url: 'https://api.github.com/users/Sauloxd/repos',
        site_admin: false,
        starred_url:
          'https://api.github.com/users/Sauloxd/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Sauloxd/subscriptions',
        type: 'User',
        url: 'https://api.github.com/users/Sauloxd',
      },
    },
    eventName: 'push',
    sha: '8ee87144dc29b2d7e713d42aa97deb477137f7dd',
    ref: 'refs/heads/issue-8/branch/with/nested/names',
    workflow: 'Workflow to help develop this action',
    action: '__self',
    actor: 'Sauloxd',
    job: 'develop',
    runNumber: 65,
    runId: 1624576651,
    apiUrl: 'https://api.github.com',
    serverUrl: 'https://github.com',
    graphqlUrl: 'https://api.github.com/graphql',
  },
};

export type GithubPushPayload = typeof onPushGithubFixture.context.payload;
