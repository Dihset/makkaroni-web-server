export default function validate(user) {
    return user.username && user.firstName && user.lastName
        && /^[A-Za-z]+$/.test(user.username)
        && /^[A-Za-z]+$/.test(user.firstName)
        && /^[A-Za-z]+$/.test(user.lastName)
}