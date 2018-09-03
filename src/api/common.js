import axios from 'axios'
import { to_query_string } from './query'

var api_version = "v1"
var base_url = "http://127.0.0.1:8000/api/" + api_version

export {api_version, base_url}

// functions that return api objects for generic resources
// callback accepts two params: status ('success' or 'error') and data (all loaded data)

export function fetch_object_api(url, callback) {
    var api = {
        data: null,
        callback,
        status: 'loading',
    }
    axios.request({
        url: base_url + url,
        method: 'get'
    }).then(response => {
        api.status = 'success'
        api.data = response.data
        if(callback)
            api.callback('success', api.data)
    }).catch(error => {
        api.status = 'error'
        console.log(error)
        if(callback)
            api.callback('error', null)
    })
    return api
}

export function fetch_list_api(url, query, callback, limit) {
    if (typeof (query) === 'object') {
        query = to_query_string(query)
    }

    if (typeof limit === 'undefined')
        limit = 10

    var api = {
        next_url: base_url + url + `?${query}`,
        count: 0,
        data: [],
        callback,
        status: 'ready',
        has_next() {
            return !!this.next_url
        },
        get_next() {
            this.status = 'loading'
            axios.request({
                url: this.next_url,
                method: 'get'
            }).then(response => {
                this.status = 'ready'
                this.count = response.data.count
                this.next_url = response.data.next
                this.data = this.data.concat(response.data.results)
                if(callback)
                    this.callback('success', this.data)
            })
                .catch(error => {
                    this.status = 'error'
                    console.log(error)
                    if(callback)
                        this.callback('error', this.data)
                })

        }
    }
    return api
}