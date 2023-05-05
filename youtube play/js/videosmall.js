// thêm nhận xét 
let inputcmt = document.getElementById("input-cmt");
let btncmt = document.getElementById("btn-cmt");
let comment = document.getElementById("comment");

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
            <li> ${cmt} </li>
        </ul>
        <div class="comment-item">
        <span> <i class="fa-regular fa-thumbs-up"></i></span>
        <span><i class="fa-regular fa-thumbs-down"></i></span>
            <span>Phản hồi</span>
        </div>
    </div>
</div>`
        + comment.innerHTML;
    inputcmt.value = '';
}// kết thúc nhận xét 

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
