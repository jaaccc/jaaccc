function typewriter (elementId, text, speed = 50, delay = 0, callback = null) {
    const el = document.getElementById (elementId);
    if (!el) return;

    let i = 0;

    function type () {
        if (i < text.length) {
            el.textContent += text.charAt (i);
            i++;
            setTimeout (type, speed);
        } else if (callback) {
            setTimeout (callback, delay);
        }
    }

    type ();
}
