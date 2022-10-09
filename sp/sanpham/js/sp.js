$(document).ready(function () {
  $(".grid__row-same").slick({
    slidesToShow: 5,
    slidesToScroll: 4,

    infinite: false,
    prevArrow: `<button type='button' class='slick-prev pull-left'> <i class="fa-solid fa-angle-left" ></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'> <i class="fa-solid fa-angle-right"></i></button`,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  });
});

const showMore = document.getElementById("show-more");
const maxHeight = document.querySelector(".max-height");
const showLess = document.getElementById("show-less");
if (showMore) {
  showMore.onclick = () => {
    if (maxHeight) {
      maxHeight.style.maxHeight = "max-content";
      if (showLess) {
        showLess.style.display = "inline-block";
        showMore.style.display = "none";
      }
    }
  };
}
if (showLess) {
  showLess.onclick = () => {
    console.log("call show less");
    if (maxHeight) {
      maxHeight.style.maxHeight = "70px";
      if (showMore) {
        showLess.style.display = "none";
        showMore.style.display = "inline-block";
      }
    }
  };
}
console.log("ACD");

$(document).ready(function () {
  $(".content_sale-list-ticket").slick({
    slidesToShow: 3,
    infinite: false,
    arrows: false,
    prevArrow: `<button type='button' class='slick-prev pull-left'> <i class="fa-solid fa-angle-left" ></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'> <i class="fa-solid fa-angle-right"></i></button`,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  });

  let itemDetailData = getItemDetail();
  console.log(itemDetailData);
  $("#idt-info-box").html(`
    <div class="content-sp">
        <div class="content-sp-img">
            <div class="content-sp-product">
                <ul class="content-sp-product-list-small">
                    <li class="content-sp-product-small-img">
                        <img src="./file/img/sp/thien-than-diet-the---tap-24.jpg" alt="">
                    </li>
                    <li class="content-sp-product-small-img">
                        <img src="./file/img/sp/thien-than-diet-the---tap-24.jpg" alt="">
                    </li>
                </ul>
                <div class="content-sp-produc-big">
                    <img src="./file/img/sp/thien-than-diet-the---tap-24.jpg" alt=""
                        class="content-sp-product-big-img">
                </div>
            </div>
            <div class="idt-content_sp-buy">
                <button class="idt-content-bag-btn-buy">
                    <i class="fa-solid fa-bag-shopping"></i>
                    Thêm giỏ hàng
                </button>
                <button class="idt-buy-now-btn">
                    Mua ngay
                </button>
            </div>
        </div>
        
        <div class="content_sp-info">
        <h1 class="content_sp-info-heading">
          ${ itemDetailData?.productName }
        </h1>
        <div class="content_sp-info-way">
            <div class="content_sp-info-origin">
                <div class="content_sp-info-origin-ncc">
                    Nhà cung cấp: <span> ${ itemDetailData?.provider } </span>
                </div>
                <div class="content_sp-info-origin-nxb">
                    Nhà xuất bản: <span> NXB Kim Đồng</span>
                </div>
                <div class="content_sp-info-origin-set">
                    Bộ: <span> Thiên Thần Diệt Thế</span>
                </div>
            </div>
            <div class="content_sp-info-make">
                <div class="content_sp-info-author">
                    Tác giả: <span> Takaya Kagami, Yamato Yamamoto, Daisuke Furuya</span>
                </div>
                <div class="content_sp-info-material">
                    Hình thức bìa: <span> Bìa Mềm</span>
                </div>
            </div>
        </div>
        <div class="content_sp-item-star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span class="content_sp-item-text-sl">(0 đánh giá)</span>
        </div>
        <div class="content_sp-price-flex">
            <div class="content_sp-price">
                <div class="content_sp-price-current">
                    22.000 đ
                </div>
                <div class="content_sp-price-old">
                    22.000 đ
                </div>
                <div class="content_sp-price-sale">
                    0%
                </div>
            </div>
            <div class="content_sp-share">
                <ion-icon name="share-social-outline"></ion-icon>
            </div>
        </div>
        <div class="content_sp-policy">
            <div class="content_sp-policy-tile">
                Chính sách đổi trả
            </div>
            <div class="content_sp-policy-text">
                Đổi trả sản phẩm trong 30 ngày
            </div>
            <div class="content_sp-policy-more">
                Xem Thêm
            </div>
        </div>
        <div class="content_sp-buy-sl">
            <div class="content_sp-buy-sl-title">
                Số lượng:
            </div>
            <div class="content_sp-buy-sl-more">
                <div class="minus content_sp-buy-sl-put">
                    <i class="fa-solid fa-minus"></i>
                </div>
                <div class="content_sp-buy-sl-number">
                    <input aria-label="quantity" class="input-qty" max="999" min="1" name=""
                        type="number" value="1">
                </div>
                <div class="plus content_sp-buy-sl-put">
                    <i class="fa-solid fa-plus"></i>
                </div>

            </div>
        </div>
      </div>
    </div>
  `);
});

$(function () {
  $("#header").load("../../components/header.html");
});
