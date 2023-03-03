let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0){
            value.style.color = 'green';
        }
        else if (count < 0){
            value.style.color = 'red';
        }
        else if (count === 0){
            value.style.color = 'black';
        }

        value.textContent = count;
    })
})