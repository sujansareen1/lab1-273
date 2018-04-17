const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const LogIn = (data) =>
    fetch(`${api}/backend/logIn`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        console.log(res)
        console.log("res.status",res.status)
        return res.status;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
