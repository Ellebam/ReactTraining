import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  //console.log(getState().posts);

  //the following line makes use of lodashs own map function which can search
  // for unique entries through the usage of the _.uniq function
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data,
    });
  };
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

/*
//This action creator does the same thing as the one above, only with the 
//memozied approach applied
export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

//this function is wrapped with the _.memoize method from lodash. This prevents
//the action creator from having multiple api requests for the same user
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});
*/
