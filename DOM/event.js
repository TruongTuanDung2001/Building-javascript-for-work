// DOM EVENT JAVASCRIPT
// Click
let btnClickEvent = document.getElementById('btn-clickEvent');
btnClickEvent.addEventListener('click', () => console.log('Clicked !!!')
);

// Input
let inputEvent = document.getElementById('input-Event');
inputEvent.addEventListener('input', function(e){ // e là biến phát sinh ra event, có thể dùng inputEvent.value nhưng nếu nhiều input cùng class thì kh nên, nên dùng e.target nha
    console.log(e.target.value);
});

