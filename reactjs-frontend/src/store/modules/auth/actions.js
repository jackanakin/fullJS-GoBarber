export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUIRED',
        payload: {
            email,
            password,
        },
    };
}

export function signInSuccess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: {
            token,
            user,
        },
    };
}

export default function signInFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}
