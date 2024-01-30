function playSelectedText() {
    const text = window.getSelection().toString();
    if (text) {
        fetch(`/play?text=${text}`)
            .then(response => response.text())
            .then(text => {
                console.log(text);
                const button = document.getElementById('play-button');
                if (button) {
                    button.parentNode.removeChild(button);
                }
            })
            .catch(error => console.error(error));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mouseup', () => {
        const selection = window.getSelection();
        if (selection.toString()) {
            const button = document.createElement('button');
            button.id = 'play-button';
            button.innerText = 'Play';
            button.style.position = 'fixed';
            button.style.top = `${selection.getRangeAt(0).getBoundingClientRect().top}px`;
            button.style.left = `${selection.getRangeAt(0).getBoundingClientRect().right}px`;
            button.onclick = function() {
                playSelectedText();
                this.parentNode.removeChild(this);
            };
            document.body.appendChild(button);
        }
    });
});