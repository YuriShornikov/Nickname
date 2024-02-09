export default class Validator {
    validateUsername(username) {

        const usernameRegex = /^(?![_-])[\w-]*[a-zA-Z]+[\w-]*$/;
        const digitsRegex = /\d{4,}/;

        // Проверяем на несоответствие
        if (digitsRegex.test(username) || !usernameRegex.test(username)) {
            return false;
        }

        return true;
    }
}
