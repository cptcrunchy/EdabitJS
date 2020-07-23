function monthName(num) {
    const months = {
        1: () => 'January'.concat(" is your birth month"),
        2: 'February',
        3: 'March'
    };
    return months[num]
}

function monthNameSwitch(num) {
    switch (num) {
        case 1:
            return "January";
        case 2:
            return "February";
        default:
            return "Unknown month Sorry";
    }
}


monthNameSwitch(2)//?
var feb = monthName(2)//?
var myMonth = monthName(1)()//?