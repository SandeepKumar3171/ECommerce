import axios from 'axios';

const baseURL = process.env.REACT_APP_BASEURL;
const token = localStorage.getItem('mvno_admin_token');

// Gets the logged in user data from local session 
const getLoggedInUser = () => {
    const user = localStorage.getItem('authUser');
    if (user)
        return JSON.parse(user);
    return null;
}

const getToken = () => localStorage.getItem('mvno_admin_token') ? localStorage.getItem('mvno_admin_token') : null;
//is user is logged in
const isUserAuthenticated = () => {
    return getLoggedInUser() !== null;
}

// error Message
const getErrorMessage = (error) => {
    var message;
    if (error.response && error.response.status) {
        switch (error.response.status) {
            case 404: message = (error.response.data.message) ? error.response.data.message : "Sorry! the page not found"; break;
            case 500: message = (error.response.data.message) ? error.response.data.message : "Internal server error!"; break;
            case 401: message = (error.response.data.message) ? error.response.data.message : "Invalid credentials"; break;
            case 422: message = (error.response.data.message) ? error.response.data.message : "Email already exists"; break;
            case 409: message = (error.response.data.message) ? error.response.data.message : "Data already exists"; break;
            case 204: message = (error.response.data.message) ? error.response.data.message : "Request failed"; break;
            case 403: message = (error.response.data.message) ? error.response.data.message : "Verification failed"; break;
            default: message = "Internal server error!"; break;
        }
    }
    else {
        message = "Internal server error!";
    }

    return message;
}


// Register Method
const postRegister = (url, data) => {
    return axios.post(baseURL + url, data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        throw getErrorMessage(err);
    });
}

// Login Method
const postLogin = (url
    , data) => {
    return axios.post(baseURL + url, data).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw getErrorMessage(err);
    });
}


// postForgetPwd 
const postForgetPwd = (url, data) => {
    return axios.post(baseURL + url, data).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw getErrorMessage(err);
    });
}

// getList
const getList = (url) => {
    return axios.get(baseURL + url, { headers: { "Authorization": `Bearer ${getToken()}` } }).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw getErrorMessage(err);
    });
}

// getList with Id
const getListwithId = (url, id) => {
    return axios.get(baseURL + url + id, { headers: { "Authorization": `Bearer ${getToken()}` } }).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw getErrorMessage(err);
    });
}

// addData
const addData = (url, data) => {
    return axios.post(baseURL + url, data, { headers: { "Authorization": `Bearer ${getToken()}` } }).then(response => {
        if (response.status >= 200 || response.status <= 299)

            return response.data;
        throw response.data;
    }).catch(err => {

        throw getErrorMessage(err);
    });
}

// editData
const editData = (url, data) => {
    return axios.put(baseURL + url, data, { headers: { "Authorization": `Bearer ${getToken()}` } }).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        throw getErrorMessage(err);
    });
}

// editDatawithId
const editDataWithId = (url, data, id) => {
    return axios.put(baseURL + url + id, data, { headers: { "Authorization": `Bearer ${getToken()}` } }).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        throw getErrorMessage(err);
    });
}


// updateDataStatus
const deleteData = (url) => {
    return axios.delete(baseURL + url, { headers: { "Authorization": `Bearer ${getToken()}` } }).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        throw getErrorMessage(err);
    });
}


export { getLoggedInUser, isUserAuthenticated, postRegister, postLogin, postForgetPwd, getList, addData, deleteData, editData, editDataWithId, getListwithId }
