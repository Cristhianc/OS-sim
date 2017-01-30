function sleep(milliseconds) {
    var date = new Date();
    var startDate = date.getTime();
    var a = 1;
    var b = 0;
    while (a !== 0) {
        date = new Date();
        if ((date.getTime() - startDate) >= milliseconds) {
            a = 0;
        }
        b++;
    }
};
