/*
Místo pro váš program
*/

// Výplňořez

const fillcut = (str, len) => {

    if(str.length > len) {
        return str.slice(0, len);
    }

    if(str.length < len) {
        return str.padStart(len, '.');
    }

    if(str.length === len) {
        return str;
    }
    
}

// Přestupný rok jako funkce

const isLeapYear = (year) => {

    if(((year % 4) === 0) || (((year % 100) === 0) && ((year % 400) === 0))) {
        return true;
    }
    return false;
}