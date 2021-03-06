Notification.requestPermission().then(function(result) {
    console.log("permission " + result);
});

if (Notification.permission === "granted"){
    var title = "COMP110 Notifications Started!";
    var noti = new Notification(
        title, {
            body: "Office hours woo!",
            icon: 'https://i.imgur.com/eScsLDw.png'
        }
    );
} else{
    console.log("Permissions denied for notification, office hours notifications will not work.");
}

var queue = document.querySelector('.queue')

try{
    queue.addEventListener('DOMNodeInserted', function(event) {
        var target = event.target;
        // Checking if the target element is a new ticket (not just called)
        let callButton = document.querySelector('button.success');
        if (callButton != null){
            if (callButton.innerText === "Call") {
                console.log(target);
                callButton.innerText = "~Call~";
                document.querySelector('button.warning').innerText = "~Cancel~";
                var title = 'A new student has arrived';
                var noti = new Notification(
                    title, {
                        body: target.querySelector(".Staff_Ticket_View .problem span").innerText,
                        icon: 'https://i.imgur.com/eScsLDw.png'
                    }
                );
                noti.onclick = function(event) {
                    window.focus();
                }
            }
    }
    });
} catch (TypeError){
    console.log("The queue was not found on the page. Make sure you are on the office hours staff help page and you are checked in to the queue.")
    var title = "Error starting Office Hours Notifications";
    var noti = new Notification(
        title, {
            body: "The queue was not found on the page. Make sure you are on the office hours staff help page and you are checked in to the queue.",
            icon: 'https://i.imgur.com/eScsLDw.png'
        }
    );
}
