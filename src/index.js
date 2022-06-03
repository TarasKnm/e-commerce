function sendRequest(method, url, jwt = null, body = null, login = false) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';
        if (jwt) {
            xhr.setRequestHeader('Authorization', `Bearer ${jwt}`);
        }
        let params = JSON.stringify(body)
        if (login) {
            params = new URLSearchParams(Object.entries(body)).toString()
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        else {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject(xhr.response);
        };
        xhr.send(params);
    });
}
const requestURL = 'http://127.0.0.1:8000';

const body = {
    password: 'user1',
    email: 'user1@gmail.com',
    firstname: 'user1firstName',
    lastname: 'user1lastName',
    username: 'user1',
};

const login = {
    username: 'user1',
    password: 'user1',
}

sendRequest('POST', `${requestURL}/users/registration`, null, body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// sendRequest('POST', `${requestURL}/login/login/access-token`, null, login, true)
//     .then((data) => localStorage.setItem('jwt', data['access_token']))
//     .catch((err) => console.log(err));

const jwt = localStorage.getItem('jwt')

// sendRequest('GET', `${requestURL}/users/me`, jwt)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


// sendRequest('DELETE', `${requestURL}/users/me`, jwt)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));