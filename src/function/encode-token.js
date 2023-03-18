const sign = require('jwt-encode');

const secret = 'jwt_secret_key'

const encodeToken = () => {

    let date = new Date()

    const iatTimeStamp = Math.floor(date.getTime() / 1000);

    date.setDate(date.getDate() + 7)
    const expTimeStamp = Math.floor(date.getTime() / 1000);

    const data = {
        userId: 1,
        iat: iatTimeStamp,
        exp: expTimeStamp
    }

    const jwt = sign(data, secret);

    return jwt
}

export default encodeToken