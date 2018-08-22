
export function to_query_string(obj) {
    var str = [];
    Object.entries(obj).forEach(element => {
        str.push(encodeURIComponent(element[0]) + "=" + encodeURIComponent(element[1]))
    })
        
    return str.join("&");
}