let bars = document.querySelector(".bars");
let nav_container = document.querySelector(".nav_container");

bars.onclick = function () {
    nav_container.classList.toggle("small-sidebar");
}

let lichSuXem = document.getElementById("lichsuxem");
let history = JSON.parse(localStorage.getItem("history"));
let content = JSON.parse(localStorage.getItem("content"));
console.log(content[0].id);
console.log(history);
lichSuXem.innerHTML = "";
for (let i = 0; i < content.length; i++) {
    for (let j = 0; j < history.length; j++) {
        if (history[j] == content[i].id) {
            lichSuXem.innerHTML += `<div class="side-video-list">
            <a href="/html/youtube.html" class="small-video"><iframe width="300" height="170"
                    src="${content[i].link}"
                    title="${content[i].name}" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe></a>
            <div class="vid-info">
                <a href="/html/youtube.html">${content[i].name}</a>
                <p>"${content[i].kenh}"</p>
                <p>151N lượt xem &bull; 5 Tháng trước</p>
            </div>`
        }
    }
}

// Trước hết, đoạn code sử dụng hai biến lichSuXem và history để lấy dữ liệu lịch sử xem video được lưu trữ trong localStorage.
//  Biến content được sử dụng để lấy thông tin về các video đã được lưu trữ trong hệ thống.



// Tiếp theo, vòng lặp đầu tiên sẽ duyệt qua các video trong content.
// Vòng lặp thứ hai sẽ duyệt qua các phần tử trong mảng history,
// và nếu id của video hiện tại đang được duyệt trong content bằng với một phần tử trong history,
// thì nó sẽ hiển thị video đó trong lịch sử xem.



// Nếu có video trong lịch sử xem, đoạn code sẽ thêm các phần tử HTML tương ứng vào trong biến lichSuXem.
// Các phần tử này sẽ được hiển thị dưới dạng danh sách các video, bao gồm tên, kênh, số lượt xem và ảnh đại diện của video.

let deleted = document.getElementById('delete');
deleted.onclick = function () {
    history = [];
    localStorage.setItem("history", JSON.stringify(history))
    location.reload();
}
