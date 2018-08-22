import axios from 'axios'
import {base_url} from './base_url'
import {to_query_string} from './query'

export function fetch_post_by_id(id) {
    return axios.request({
        url: base_url + `/post/post/${id}/`,
        method: 'get'
    })
}

export function fetch_post_list(query) {
    if(typeof(query)==='object'){
        query = to_query_string(query)
    }
    return axios.request({
        url: base_url + `/post/post/?${query}/`,
        method: 'get'
    })
}