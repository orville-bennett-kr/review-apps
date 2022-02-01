import * as github from '@actions/github';
import { PullRequestAction, UserInput } from '../../interface';
import { withError } from '../../utils/log-error';
import { onPullRequestClosed } from './on-closed';
import { onPullRequestSynchronized } from './on-synchronized';

export const onPullRequest = withError(async function onPullRequest() {
  const action = github.context.payload.action as PullRequestAction;

  switch (action) {
    case PullRequestAction.CLOSED:
      return await onPullRequestClosed();
    default:
      return await onPullRequestSynchronized();
  }
});
