Notification.requestPermission().then(function(result) {
    console.log("permission " + result);
});

var queue = document.querySelector('.queue')

try{
    queue.addEventListener('DOMNodeInserted', function(event) {
        var target = event.target;
        // Checking if the target element is a new ticket (not just called)
        if (!target.querySelector('img')) {
            console.log(target);
            var title = 'A new student has arrived';
            var noti = new Notification(
                title, {
                    body: target.querySelector('.problem').textContent,
                    icon: 'http://comp110.com/cpresources/userphotos/kris@cs.unc.edu/100/Screen-Shot-2015-12-27-at-11.06.24-AM.png?d=1451835909'
                }
            );
            noti.onclick = function(event) {
                window.focus();
            }
        }
    });
    var noti = new Notification("COMP110 Notifications Started!", null);
    noti.onclick = function(event) {
        window.focus();
        
    }
} catch (TypeError){
    console.log("The queue was not found on the page. Make sure you are on the office hours staff help page and you are checked in to the queue.")
    var title = "Error starting Office Hours Notifications";
    var noti = new Notification(
        title, {
            body: "The queue was not found on the page. Make sure you are on the office hours staff help page and you are checked in to the queue.",
            icon: 'http://comp110.com/cpresources/userphotos/kris@cs.unc.edu/100/Screen-Shot-2015-12-27-at-11.06.24-AM.png?d=1451835909'
        }
    );
}