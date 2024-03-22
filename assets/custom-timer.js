 let endDate = document.querySelector("#timer-end-date").dataset.endDate
function updateCountdown(endTime) {
    const now = new Date();
    const timeDifference = endTime - now;
    const remainingTime = new Date(timeDifference)
    const days = remainingTime.getDate()
    const hours = remainingTime.getHours()
    const minutes = remainingTime.getMinutes()
    const seconds = remainingTime.getSeconds()



    // Update the countdown elements
    // Update the countdown elements
    const daysValue = padZero(days);
    document.getElementById('days').textContent = days;

    const hoursValue = padZero(hours);
    document.getElementById('hours').innerHTML = hours;

    const minutesValue = padZero(minutes);
    document.getElementById('minutes').innerHTML = minutes;

    const secondsValue = padZero(seconds);
    document.getElementById('seconds').innerHTML = seconds;

    // If the countdown is still running, update every second
    if (timeDifference > 0) {
        setTimeout(function () {
            updateCountdown(endTime);
        }, 1000);
    } else {
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
        document.querySelector('.shop-now-button').disabled = true;
        document.querySelector('.sale-ends-text').innerHTML = "Sale has ended!";
    }
}

// Function to pad single-digit numbers with a leading zero
function padZero(number) {
    const value = number < 10 ? { firstDigit: 0, secondDigit: number } : { firstDigit: Math.floor(number / 10), secondDigit: number % 10 };
    return value;
}


// Set the end time for the countdown (replace with your desired end time)
const endTime = new Date(endDate);
// Start the countdown
updateCountdown(endTime);