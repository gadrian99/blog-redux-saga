import { takeEvery, takeLatest, call, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

function* getUsers() {
    try {
        const result = yield call(api.getUsers)
        yield put(actions.getUsersSuccess({
            items: result.data
        }))
    } catch(e) {
        console.log(e)
    }
}

function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

const usersSagas = [
    fork(watchGetUsersRequest)
]

export default usersSagas