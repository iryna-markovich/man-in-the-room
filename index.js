function move(event) {
    let man = document.querySelector('.man');
    let room = window.getComputedStyle(man);

    let left = parseInt(room.left);
    let top = parseInt(room.top);

    switch (event.keyCode) {
        case 37:
            if (left > 0)
                man.style.left = left - 50 + "px";
            man.classList.add('left');
            man.classList.remove('top', 'bottom', 'right');
            break;
        case 38:
            if (top > 0)
                man.style.top = top - 50 + "px";
            man.classList.add('top');
            man.classList.remove('left', 'right', 'bottom');
            break;
        case 39:
            if (left < 300)
                man.style.left = left + 50 + "px";
            man.classList.add('right');
            man.classList.remove('top', 'left', 'bottom');
            break;
        case 40:
            if (top < 250)
                man.style.top = top + 50 + "px";
            man.classList.add('bottom');
            man.classList.remove('top', 'left', 'right');
            break;
    }
}

addEventListener("keydown", move);