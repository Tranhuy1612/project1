//Lấy các phần tử HTML bằng phương thức getElementById() và lấy giá trị của một biến lưu trữ trong Local Storage:
let inputcmt = document.getElementById("input-cmt");
let btncmt = document.getElementById("btn-cmt");
let comment = document.getElementById("comment");
let view = localStorage.getItem("view");
let content = JSON.parse(localStorage.getItem("content"));
let video = document.getElementById("video");
let tieuDe = document.getElementById("tieude");
let kenh = document.getElementById("kenh");
let check = -1;


//Vòng lặp for để kiểm tra nếu ID của video trùng với ID trong Local Storage thì gán giá trị cho biến check:
for (let i = 0; i < content.length; i++) {
    if (content[i].id == view) {
        check = i;
    }
}
//Thiết lập thuộc tính src cho thẻ video, gán giá trị tiêu đề và kênh:
video.setAttribute("src", content[check].link);
tieuDe.innerHTML = content[check].name;
kenh.innerHTML = content[check].kenh;


//Thiết lập sự kiện click cho nút bình luận, lấy giá trị của input và render bình luận lên trang:
btncmt.onclick = function () {
    let cmt = inputcmt.value
    // phía dưới là render comment
    comment.innerHTML = `<div class="video-list-comment">
    <img src="https://kenh14cdn.com/203336854389633024/2022/12/29/photo-12-16723014612472105260477.jpg"
        alt="">
    <div class="video-comment-all ">
        <div class="video-comment">
            <div class="video-comment-name">
                f8 Official
            </div>
            <div class="video-comment-date">
                1 giây trước
            </div>
        </div>
        <ul class="comment">
            <li> ${cmt}
             </li>
        </ul>
        <div class="comment-item">
        <span> <i class="fa-regular fa-thumbs-up"></i></span>
        <span><i class="fa-regular fa-thumbs-down"></i></span>
            <span>Phản hồi</span>
            <div class="delete-comment">Xóa</div>
        </div>
    </div>
</div>`
        + comment.innerHTML;
    inputcmt.value = '';
}

// thêm sự kiện chỉnh sửa bình luận
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-comment')) {
        let commentText = event.target.parentNode.firstChild.textContent;
        let newCommentText = prompt('Chỉnh sửa bình luận', commentText);
        event.target.parentNode.firstChild.textContent = newCommentText;
    }
});

// function editComment(button) {
//     // Lấy phần tử li chứa bình luận hiện tại
//     let commentItem = button.parentElement.parentElement.parentElement;
//     // Lấy nội dung bình luận hiện tại
//     let commentContent = commentItem.querySelector('.comment').textContent.trim();
//     // Tạo một thẻ input mới để nhập nội dung bình luận mới
//     let inputComment = document.createElement('input');
//     inputComment.value = commentContent;
//     // Thay thế phần tử li cũ bằng input mới
//     commentItem.replaceChild(inputComment, commentItem.querySelector('.comment'));
//     // Thay đổi nút chỉnh sửa thành nút lưu
//     button.textContent = 'Lưu';
//     button.onclick = function () {
//         // Lấy nội dung bình luận mới từ input
//         let newCommentContent = inputComment.value;
//         // Tạo lại phần tử li chứa bình luận với nội dung mới
//         let newCommentItem = document.createElement('span');
//         newCommentItem.innerHTML = `${newCommentContent} <button class="edit-comment" onclick="editComment(this)">Chỉnh sửa</button>`;
//         // Thay thế input bằng phần tử li mới
//         commentItem.replaceChild(newCommentItem, inputComment);
//         // Thay đổi nút lưu thành nút chỉnh sửa
//         button.textContent = 'Chỉnh sửa';
//         button.onclick = function () {
//             editComment(this);
//         };
//     };
// }


// thêm sự kiện xóa bình luận
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-comment')) {
        event.target.closest('.video-list-comment').remove();
    }
});
// Nếu phần tử đó chứa lớp 'delete-comment',
//  nó tiếp tục tìm phần tử gần nhất có lớp 'video-list-comment' và xóa nó bằng cách sử dụng phương thức remove().




//like và dislike
let likeBtn = document.querySelector('.like-click-change');
let amountLike = document.querySelector('.amount_like-click-change');
let lineBtn = document.querySelector('.line-click-change');
let likeUpDown = document.querySelector('.like-up-down');
let dislikeUpDown = document.querySelector('.dislike-up-down');
let dislikeBtn = document.querySelector('.dislike-click-change');
let amountDislike = document.querySelector('.amount-dislike-click-change');
let dislikeMain = document.querySelector('.dislike-click-main');



likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('like-active');
    amountLike.classList.toggle('like-active');
    lineBtn.classList.toggle('like-active');
    dislikeBtn.classList.remove('dislike-active');
    amountDislike.classList.remove('dislike-active');

    let likeAdd = document.querySelector('.like-active');
    if (likeAdd) {
        amountLike.innerText = '543';
    } else {
        amountLike.innerText = '542';
    }

    if (likeAdd) {
        amountDislike.innerText = '0';
    } else {
        amountDislike.innerText = '1';
    }
});

amountLike.addEventListener('click', () => {
    likeBtn.classList.toggle('like-active');
    amountLike.classList.toggle('like-active');
    lineBtn.classList.toggle('like-active');
    dislikeBtn.classList.remove('dislike-active');
    amountDislike.classList.remove('dislike-active');

    let likeAdd = document.querySelector('.like-active');
    if (likeAdd) {
        amountLike.innerText = '543';
    } else {
        amountLike.innerText = '542';
    }

    if (likeAdd) {
        amountDislike.innerText = '0';
    } else {
        amountDislike.innerText = '1';
    }
});


likeBtn.addEventListener('mousedown', () => {
    likeUpDown.classList.toggle('btn-up-social-like');
});



dislikeMain.addEventListener('click', () => {
    dislikeBtn.classList.toggle('dislike-active');
    amountDislike.classList.toggle('dislike-active');
    likeBtn.classList.remove('like-active');
    amountLike.classList.remove('like-active');
    lineBtn.classList.remove('like-active');

    let dislikeAdd = document.querySelector('.dislike-active');
    if (dislikeAdd) {
        amountDislike.innerText = '1';
    } else {
        amountDislike.innerText = '0';
    }

    if (dislikeAdd) {
        amountLike.innerText = '542';
    } else {
        amountLike.innerText = '543';
    }
});

amountDislike.addEventListener('click', () => {
    dislikeMain.classList.toggle('dislike-active');
    amountDislike.classList.toggle('dislike-active');
    likeBtn.classList.remove('like-active');
    amountLike.classList.remove('like-active');
    lineBtn.classList.remove('like-active');

});


dislikeMain.addEventListener('mousedown', () => {
    dislikeUpDown.classList.toggle('btn-up-social-dislike');
});

//chia sẻ video lên các trang mạng xã hội 


// Đối với nút chia sẻ video:
// Khi người dùng click vào nút chia sẻ video, đoạn code sẽ thêm lớp "overlay-change" vào phần tử "shareOverlay" và "videoBoxShare".
// Khi người dùng click vào phần overlay đen xung quanh video hoặc click vào nút đóng (biểu tượng "x"),
//  đoạn code sẽ xóa lớp "overlay-change" và "video_box-share-change" khỏi các phần tử tương ứng để đóng hộp thoại chia sẻ
let shareBtn = document.querySelector('.video_info-share');
let shareOverlay = document.querySelector('.overlay');
let videoBoxShare = document.querySelector('.video_box-share');
let closeBoxShare = document.querySelector('.bxf-x');
shareBtn.addEventListener('click', () => {
    shareOverlay.classList.toggle('overlay-change');
    videoBoxShare.classList.toggle('video_box-share-change');
});


shareOverlay.addEventListener('click', () => {
    videoBoxShare.classList.remove('video_box-share-change');
});


closeBoxShare.addEventListener('click', () => {
    videoBoxShare.classList.remove('video_box-share-change');
    shareOverlay.classList.remove('overlay-change');
});

// Đoạn mã trên tạo ra một nút like và dislike cho một bài đăng và thay đổi số lượng like và dislike khi người dùng click vào nút tương ứng.
//  Đây là mã JavaScript, được sử dụng để thêm các tính năng tương tác vào trang web.

// Các biến được khai báo đầu tiên sử dụng phương thức querySelector để lấy các phần tử HTML theo class name và gán chúng cho các biến tương ứng.
// Các biến này được sử dụng sau đó để thực hiện các hành động tương ứng trong các hàm.

// Sau đó, các hàm được gán vào các sự kiện click và mousedown của các nút và vùng chứa số lượng like và dislike tương ứng.
//  Khi nút like hoặc dislike được click, các hàm sẽ được gọi và thực hiện các thay đổi trạng thái và hiển thị số lượng like và dislike.

// Nếu người dùng click vào nút like, các lớp CSS của các phần tử được thay đổi để tạo ra một hiệu ứng trực quan.
//  Nếu lớp 'like-active' được thêm vào nút like, số lượng like tăng lên và số lượng dislike giảm xuống.
//   Ngược lại, nếu lớp 'like-active' không được thêm vào nút like, số lượng like giảm xuống và số lượng dislike tăng lên.

// Tương tự, khi người dùng click vào nút dislike, các lớp CSS của các phần tử được thay đổi để tạo ra một hiệu ứng trực quan.
//  Nếu lớp 'dislike-active' được thêm vào nút dislike, số lượng dislike tăng lên và số lượng like giảm xuống.
//   Ngược lại, nếu lớp 'dislike-active' không được thêm vào nút dislike, số lượng dislike giảm xuống và số lượng like tăng lên.

// Cuối cùng, các hàm mousedown được gán vào nút like và dislike để tạo ra hiệu ứng khi người dùng nhấn nút.
// Các lớp CSS tương ứng được thay đổi để tạo ra hiệu ứng đó.

