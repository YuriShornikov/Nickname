export default class Validator {
    validateUsername(username) {

        const usernameRegex = /^(?![_-])[\w-]*[a-zA-Z]+[\w-]*$/;
        const digitsRegex = /\d{4,}/;
        const startEndRegex = /^[a-zA-Z][\w-]*[a-zA-Z]$/;

        // Проверяем на несоответствие
        if (digitsRegex.test(username) || !usernameRegex.test(username) || !startEndRegex.test(username)) {
            return false;
        }

        return true;
    }
}
