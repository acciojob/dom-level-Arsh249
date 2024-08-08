//your JS code here. If required.
window.onload = function() {
    function getDomLevel(element) {
        let level = 0;
        while (element) {
            level++;
            element = element.parentElement;
        }
        return level;
    }

    const targetElement = document.getElementById('level');
    if (targetElement) {
        const domLevel = getDomLevel(targetElement);
        alert(`The level of the element is: ${domLevel}`);
    } else {
        alert('Element with id "level" not found.');
    }
};
