import produce from 'immer';

export const INITIAL_STATE = {
  repositories: [],
  pullrequests: [],
  loading: false,
};

export default function repository(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@repository/GET_REPO_SUCCESS': {
        draft.repositories = action.payload.items;
        draft.loading = false;

        break;
      }
      case '@repository/GET_MOREDATA_SUCCESS': {
        draft.repositories = [...draft.repositories, ...action.payload.items];
        draft.loading = false;

        break;
      }
      case '@repository/GET_REPO_REQUEST': {
        draft.loading = true;

        break;
      }
      case '@repository/GET_PULLS_SUCCESS': {
        draft.pullrequests = action.payload.items;
        draft.loading = false;

        break;
      }
      case '@repository/GET_PULLS_REQUEST': {
        draft.loading = true;

        break;
      }
      case '@repository/GET_MOREDATA_REQUEST': {
        draft.loading = true;
        break;
      }

      default:
    }
  });
}
