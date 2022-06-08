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
    password: 'testspa',
    email: 'testspa@gmail.com',
    firstname: 'testspafirstName',
    lastname: 'testspalastName',
    username: 'testspa',
};

const login = {
    username: 'testspa',
    password: 'testspa',
}

sendRequest('POST', `${requestURL}/users/register`, null, body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

sendRequest('POST', `${requestURL}/login`, null, login, true)
    .then((data) => {
        console.log(data);
        localStorage.setItem('jwt', data['access_token']);
    })
    .catch((err) => console.log(err));

const jwt = localStorage.getItem('jwt')

sendRequest('GET', `${requestURL}/users/profile`, jwt)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


sendRequest('DELETE', `${requestURL}/users`, jwt)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));