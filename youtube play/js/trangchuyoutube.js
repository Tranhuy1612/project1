let bars = document.querySelector(".bars");
let nav_container = document.querySelector(".nav_container");
let history = JSON.parse(localStorage.getItem("history"));
console.log("history", history);
bars.onclick = function () {
    nav_container.classList.toggle("small-sidebar");
}



// lấy dữ liệu được lưu trong biến content từ localStorage và đổ dữ liệu vào phần tử main.
//  Dữ liệu này là danh sách các video được lưu dưới dạng mảng đối tượng,
//   mỗi đối tượng biểu diễn cho một video, bao gồm các thuộc tính id, name, kenh, link.
let content = JSON.parse(localStorage.getItem("content"));

let main = document.getElementById("main");
function renderVideo() {

    main.innerHTML = '';
    for (let i = 0; i < content.length; i++) {
        main.innerHTML +=
            `<div class="side-video-list">
        <a href="" class="small-video"><iframe width="350" height="200"
            src=${content[i].link}
            title="Lâu Lâu Nhắc Lại | Hà Nhi ft Khói | Official Music Video" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe></a>
        <div class="vid-info">
            <a id="${content[i].id}" href="#">${content[i].name} </a>
            <p>${content[i].kenh}</p>
            <p>151N lượt xem &bull; 5 Tháng trước</p>
        </div>
    </div>`

    }
}
renderVideo();
// let history = [];


// gán sự kiện click cho main để lưu lịch sử xem video.
// Khi người dùng click vào một video bất kỳ, nó sẽ lấy id của video đó và lưu vào biến view của localStorage.
//  Sau đó, nó thêm view vào đầu mảng history và lưu vào localStorage. Cuối cùng, nó chuyển hướng sang trang xem video.

main.onclick = function (e) {
    console.log(e.target.id)
    let view = e.target.id
    // Trong đoạn mã trên, view là một biến chứa giá trị của thuộc tính id của phần tử được nhấp chuột.
    //  Sau đó, dòng mã localStorage.setItem("view", view) được sử dụng để lưu trữ giá trị của biến view vào localStorage với key được đặt tên là "view".
    //  Khi cần truy xuất đến giá trị đã lưu, ta chỉ cần sử dụng localStorage.getItem(key) để lấy giá trị tương ứng với key.
    localStorage.setItem("view", view)
    history.unshift(view)
    localStorage.setItem("history", JSON.stringify(history))
    window.location.href = "http://127.0.0.1:5500/html/youtube.html"
};
