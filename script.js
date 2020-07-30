$(document).ready(function() {
    var lockStatus = false;
    var hourOfDay;


    $(".hourBar").on("click", checkLockStatus)


    $(document).ready(function() {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var date = new Date();

        var currentDay = weekDays[date.getDay()]
        var currentMonth = months[date.getMonth()]
        var currentDayOfMonth = date.getDate()
        $("#currentDay").text(currentDay + ", " + currentDayOfMonth + " " + currentMonth)
    });


    function getHourOfDay() {
        let date = new Date();
        hourOfDay = date.getHours();
        return hourOfDay;
    }



    function hasTheHourPassedCheck() {
        let currentHour = getHourOfDay()
        for (i = 9; i < 18; i++) {

            if (currentHour >= i) {
                $("#hour" + i).css("background-color", "#838383")
            } else {
                $("#hour" + i).css("background-color", "#f3f3f3")
            }


        }
    }
    hasTheHourPassedCheck()


    function checkLockStatus(event) {
        event.stopPropagation()

        let lockIcon = this.className
        let lockPosition = lockIcon.includes("fas fa-lock-open")

        if (lockPosition) {
            $(this).removeClass("fas fa-lock-open")
            $(this).addClass("fas fa-lock")
            lockStatus = false
        } else {
            $(this).removeClass("fas fa-lock")
            $(this).addClass("fas fa-lock-open")
            lockStatus = true
        }
        return lockStatus;
    }



});


// fas fa - lock