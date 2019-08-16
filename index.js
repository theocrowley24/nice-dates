export function niceify(date) {
    var date = date.substring(0, 10);
    var year = date.substring(0, 4);
    var month = date.substring(5, 7);
    var day = date.substring(8, 11);

    var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "November", "October", "December"];
    month = months[parseInt(month, 10) - 1];

    return day + " " + month + " " + year;
}    