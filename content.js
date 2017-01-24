Notification.requestPermission().then(function(result) {
  console.log(result);
});

var queue = document.querySelector('.queue')

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
    }
});
