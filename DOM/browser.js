// BROWSER API JS
// settimeOut
let timeOut = setTimeout(function () {
    console.log('I Love You');
}, 2000);
//Sau 2 giây -> chạy, chỉ chạy 1 lần duy nhất

//setInterval
let interval = setInterval(() => {
    console.log('18H sân Đất Việt');
}, 3000);
//Sau 10 giây -> chạy, chạy liên tục

//ngắt 
clearTimeout(timeOut); //ngắt setTimeout
clearInterval(interval); //ngắt interval

// Countdown 5 4 3 2 1 go
let numberCount = 6;
let countDown = setInterval(function () {
    if (numberCount <= 1) {
        numberCount = 'Go';
        clearInterval(countDown);
    } else {
        numberCount--;
    }
    console.log(numberCount);
}, 1000);
clearInterval(countDown);
//change image
//https://i.pinimg.com/736x/e1/eb/e3/e1ebe369e6cf740cb924d566893ad264.jpg
let imageBox = document.getElementById('image-box');
let num = 0;
setInterval(() => {
    if (num == 0) {
        imageBox.src = 'https://i.pinimg.com/1200x/e9/22/65/e92265cb0a9f8a78d7d0b12e983263fc.jpg';
        num++;
    }
    else {
        imageBox.src = 'https://i.pinimg.com/736x/06/54/72/0654722f51fee0a18ca11c3d497ae6dd.jpg';
        num--;
    }
}, 2000);

//Debounce search
let time;
let debounceSearch = document.querySelector('.debounceSearch');
debounceSearch.addEventListener('input', function (e) {
    clearTimeout(time); //nếu kh clear: người dùng nhập nhanh 3 lần số 1 thì log ra số 111 (3 lần)
    //nếu có clear thì, log ra số 111 (1 lần) vì nó clear, chỉ chạy khi người dùng xong
    time = setTimeout(() => {
        console.log(e.target.value);
    }, 500)
});

//Local Storage / Session Storage
localStorage.setItem('name', 'dung');// thêm dữ liệu: 'name' là key, 'dung' là value
localStorage.setItem('favorite', 'Football'); // y như trên, chú ý key chỉ có 1 nha
let data = localStorage.getItem('name');//lấy dữ liệu của key = 'name'
console.log(data);
// localStorage.removeItem('');//xóa key trong '' remove
// localStorage.clear(); //xóa toàn bộ dữ liệu


//session storage
sessionStorage.setItem('user', 'lee min hoo');

//lưu object
let user = {
    id: 1,
    name: 'Truong Tuan Dung',
    age: 25,
}

localStorage.setItem('user', JSON.stringify(user));//chỉ lưu value là sring thôi, nên phải biến đổi thành chuỗi string

let getUser = localStorage.getItem('user');// lấy dữ liệu từ key {..., ..., ...} nó là 1 string dài
let newUser = JSON.parse(getUser); //chuyển đổi cái string dài đó thành object ban đầu
console.log(newUser);
console.log(newUser.name); //sử dụng object bình thường
console.log(typeof newUser);

//exp local / session
let btnMode = document.getElementById('btn-mode');
let mode = localStorage.setItem('mode', '#000');
let body = document.getElementById('body');
let background = localStorage.getItem('mode');
body.style.background = background;

btnMode.addEventListener('click', function () {
    if (background == '#000') {
        localStorage.setItem('mode', '#fff');
        background = localStorage.getItem('mode');

    } else {
        localStorage.setItem('mode', '#000');
        background = localStorage.getItem('mode');
    }
    body.style.background = background;
    console.log(background);

});

