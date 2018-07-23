const GET_ALL = 'https://8f67gcip2m.execute-api.us-east-1.amazonaws.com/dev/alerts/getAll';

// TODO: Local Storage

export function getAlerts(query) {
    if (query) {
        // TODO: Handle Query
        return []
    }

    return fetch(GET_ALL).then(res => {
        return res.json().then(data => {
            return data
        })
    }).catch((e) => {
        return e;
    });

}

export default {
    getAlerts,
}