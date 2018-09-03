import axios from 'axios'
import { base_url, fetch_object_api, fetch_list_api } from './common.js'


export function fetch_tags(callback, limit) {
    return fetch_list_api('/content/tag/', "", callback)
}


export function fetch_categories(callback, limit) {
    return fetch_list_api('/content/category/', "", callback)
}
