import { base_url, fetch_object_api, fetch_list_api } from './common.js'


export function fetch_post_by_id(id, callback) {
    return fetch_object_api(`/post/post/${id}/`, callback)
}

export function fetch_post_list(query, callback, limit) {
    return fetch_list_api('/post/post/', query, callback, limit)
}
