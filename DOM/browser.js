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
let mode = localStorage.setItem('mode', '#fff');
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

// Exp to do list
let inputTask = document.getElementById('inputTask');
let btnAddTask = document.querySelector('.btn-add');
let btnRemoveTask = document.querySelector('.btn-remove');
let list = document.querySelector('ul.list');
let tasks = [];

btnAddTask.addEventListener('click', function (e) {
    if (inputTask.value.trim() != 0) {//lấy dữ liệu
        //lưu vào local
        let task = { //tạo dữ liệu gồm id là date, task name là input value
            id: Date.now(),
            taskName: inputTask.value,
        }
        tasks.push(task); //thêm vào mảng
        //
        localStorage.setItem('tasks', JSON.stringify(tasks));//thêm vào local

        //render
        renderTask();//xuất ra màn hình

    } else {
        console.log('No data');
    }
});

function renderTask() {
    list.innerHTML = '';//ul list = rỗng
    //render
    tasks.forEach(task =>{ //duyệt mảng tasks có bnh phần tử rồi load ra
        list.innerHTML += `
            <li class="item">
                ID:${task.id}
                Task name: ${task.taskName};
                <button class="btn-remove" data-id="${task.id}">Remove task</button> 
            </li>`; //quan trọng là button có cái data-id đó để truy xuất e.target.dataset để kiểm tra id để xóa
    })
    
}

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-remove')) {
        let id = Number(e.target.dataset.id);//lấy cái id task trong button: data-id ="task.id";
        console.log(id);
        
        tasks = tasks.filter(task => task.id != id); //phải tạo ra mảng mới, lọc id nào giống thì bỏ, kh giống thì lấy
        
        localStorage.setItem('tasks', JSON.stringify(tasks));//gán lại dữ liệu mới lọc vào local
        renderTask();

        // e.target.parentElement.remove();
        console.log('Remove task success !!!');
    } else {
        console.log('Click sai chỗ òiiiii');
    }
});

//hiện dữ liệu ban đầu
let dataTask = localStorage.getItem('tasks'); //lấy dữ liệu trong local
if(dataTask){ //nếu có thì gán cái mảng tasks lúc đầu vô và render ra
    tasks = JSON.parse(dataTask);
    renderTask();
    console.log(dataTask);
}


//Exp form daft
let inputDaft = document.querySelector('.inputDaft');
let resultInput = document.querySelector('.resultInput');

inputDaft.addEventListener('input', function(){
    localStorage.setItem('userInput', inputDaft.value);
    resultInput.innerText = localStorage.getItem('userInput');
});
