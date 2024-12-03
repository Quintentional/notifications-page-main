const mark = document.querySelector('#read');
const notifications = document.querySelectorAll('.notification');
const unread = document.querySelectorAll('.unread-background');
const notificationNumber = document.querySelector('#notification-number');
let number = unread.length;

function notiNumber() {
    notificationNumber.innerText = number
}

notiNumber();

// ------------------on individual notification click-----------------------

notifications.forEach((notification) => {
    notification.addEventListener('click', () => {
        // Check if the notification is unread before removing styling
        if (notification.classList.contains('unread-background')) {
            // Decrement the number only if it was unread
            number--;

            // Update the counter
            notificationNumber.innerText = Math.max(number, 0);
        }

        // Remove styling
        const unreadDot = notification.querySelector('.unread');
        notification.classList.remove('unread-background');
        unreadDot.style.display = 'none';
    });
});
// ------------------on "mark all as read" click-----------------------

mark.addEventListener('click', () => {
    // change notification number to 0
    number = 0;
    notificationNumber.innerText = 0;

    // remove all red dots
    const unreadDot = document.querySelectorAll('.unread');
    unreadDot.forEach((dot) => {
        dot.style.display='none';
    })

    // change all notification backgrounds to white

    notifications.forEach((notification) => {
        notification.classList.remove('unread-background');
    })
})

// ---------------------------------------------


