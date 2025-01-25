
export const twoDigitDecimal = (number) => {
    let twoDigitDecimal = parseFloat(number).toFixed(2);
    return twoDigitDecimal;
}

export const isAdmin = (tokenData) => {
    if (tokenData.length > 0) {
        if (tokenData[0].IsCompany == 1 && tokenData[0].RoleID == 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export const isDealer = (tokenData) => {
    if (tokenData.length > 0) {
        if (tokenData[0].IsCompany == 0 && tokenData[0].RoleID == 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
