$(document).ready(function() {
    startTimer();

    var lockStatus = false;
    var hourOfDay;

    $(".hourBar").on("click", checkLockStatus);

    // ------------------------------------------Gets the current date------------------------------------------
    $(document).ready(function() {
        let date = moment().format("dddd, Do MMMM");
        $("#currentDay").text(date);

        for (let i = 9; i <= 18; i++) {
            getData = localStorage.getItem("hour" + i);
            parsedData = JSON.parse(getData);
            console.log(parsedData);
            let inputID = "#hour" + i;
            $(inputID).val(parsedData);
        }
    });

    // -----------------Gets the hour of the day. This is used to see if the hour has passed and color should be marked gray-------------------------
    function getHourOfDay() {
        let date = new Date();
        hourOfDay = date.getHours();
        return hourOfDay;
    }
    // -----------------function that checks if the hour has passed. This passing in getHourOfDay function -------------------------
    function hasTheHourPassedCheck() {
        let currentHour = getHourOfDay();
        for (i = 8; i < 18; i++) {
            if (currentHour > i) {
                $("#hour" + i).css("background-color", "#838383");
            } else if (currentHour === i) {
                $("#hour" + i).css("background-color", "lightblue");
            } else {
                $("#hour" + i).css("background-color", "#b6eb7a");
            }
        }
    }
    // -----------------function that checks if the hour has passed. This passing in hastheHourPassedCheck function -------------------------
    function startTimer() {
        timeFunc = setInterval(function() {
            hasTheHourPassedCheck();
        }, 100);
    }
    // -----------------function that checks if the button is locked and chances lockStatus to true or false -------------------------
    function checkLockStatus() {
        let lockIcon = this.className;
        let lockPosition = lockIcon.includes("fas fa-lock-open");

        if (lockPosition) {
            $(this).removeClass("fas fa-lock-open");
            $(this).addClass("fas fa-lock");
            lockStatus = false;
            console.log(lockStatus);
            $(this).parent().find("input").attr("disabled", true);

            var userKey = $(this).parent().find("input").attr("id");
            var userInput = $(this).parent().find("input").val();
            localStorage.setItem(userKey, JSON.stringify(userInput));
        } else {
            $(this).removeClass("fas fa-lock");
            $(this).addClass("fas fa-lock-open");
            lockStatus = true;
            $(this).parent().find("input").attr("disabled", false);
        }
        return lockStatus;
    }

    // -----------------Function stores data------------------------
});