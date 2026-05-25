// DOM //
// Lấy phần tử by id
let lolGame = document.getElementById('lol');
console.log(lolGame);

//lấy phần tử by class
let listGame = document.getElementsByClassName('list');
console.log(listGame);
console.log(typeof listGame);
console.log(listGame[0]);


let elementGame = document.getElementsByClassName('element');
console.log(elementGame);
console.log(typeof elementGame);
console.log(elementGame[elementGame.length - 1]);

elementGame[4].innerText = 'China Chess';
// elementGame[4].innerText = '<a href="google.com.vn">Google</a>'; kq: <a href="google.com.vn">Google</a>
elementGame[4].innerHTML = '<a href="google.com.vn">Google</a>';

//Giờ có thẻ P chứa nội dung: nếu dùng innerText là thay nội dung thành 1 chuỗi kí tự, không nhận kiểu thẻ html vd: thẻ a ở trên
// - nếu dùng innerHTML có thể thay đổi nội dung của thẻ p chứa nội dung chứa thẻ html - nhưng không hay đổi thẻ p, thẻ p vẫn ở ngoài chứa nội dung

//nếu muốn thay đổi luôn hoàn toàn thẻ p thì dùng outerHTML
elementGame[4].outerHTML = '<a class="element" href="google.com.vn">Google</a>';
console.log(elementGame);

console.log(elementGame[5]);
console.log(elementGame[5].textContent); //nó sẽ lấy tất cả nội dung trong thẻ cha ra, không lấy HTML nha, kể cả những thẻ đã ẩn rồi thì vẫn lấy ra bình thường.
// elementGame[5].textContent = '<a class="element" href="google.com.vn">Minato</a>'; thay đổi kết quả giống như innerText


// || querySelector - querySelectorAll || //
//Query selector trả về đối tượng đầu tiên lấy được
let listQuery = document.querySelector('.list-query');
console.log(listQuery);

//Query selector all trả về tất cả đối tượng lấy được, mỗi đối tượng là nội dung và thẻ html lun (NodeList);
let item = document.querySelectorAll('.item span'); //Có thể lấy đối tượng con của item trong nhiều item
item[0].innerText = 'Đi chơi';
console.log(item[0]);


// Change properties 
// IMAGE
let changeProperties = document.querySelector('.change-properties');
let image = document.querySelectorAll('.image');
image[1].src = './img/3.jpg';
console.log(image);

// a.href
let w3school = document.querySelector('.w3school');
w3school.href = 'https://www.youtube.com/watch?v=ERABWON9Qck&list=RDERABWON9Qck&start_radio=1';
w3school.innerText = '[UNhiddenGem Mixtape] 3. Cho Con (Lullaby pt.2) - B Ray';

//input
let input = document.querySelector('.input');
input.value = 'Trương Tuấn Dũng';

// ||Style / classlist 
let itemClass = document.querySelector('.item-class');
let btnClassAdd = document.querySelector('.btn-classAdd');
let btnClassRemove = document.querySelector('.btn-classRemove');
let btnClassToggle = document.querySelector('.btn-classToggle');

// Classlist add: thêm 1 class vào 1 thẻ Element
btnClassAdd.addEventListener('click', function(){
    itemClass.classList.add('bg-red');
});

// ClassList remove: xóa 1 class đã có trong Element ra khỏi Element
btnClassRemove.addEventListener('click', () =>
    itemClass.classList.remove('bg-red')
);

//ClassList toggle: thêm hoặc xóa 1 class ra khỏi Element, nếu có thì xóa, nếu kh có thì thêm vào
btnClassToggle.addEventListener('click',
    () => itemClass.classList.toggle('bg-red')
)







