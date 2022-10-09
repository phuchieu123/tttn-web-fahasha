const fakeData = [
  {
    id: "123",
    img: "./file/img/xuhuong/chu-thuat-hoi-chien---tap-5---giao-luu-truong-ket-nghia-kyoto---mockup.jpg",
    productName:
      "Sơn Goal! - Tập 2 - Tặng Kèm OBI + Bìa Bonus + Postcard Độc Quyền",
    price: "500.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
    provider: "Haha"
  },
  {
    id: "124",
    img: "file/imgh/4-dai-gia-kiem-toan---bia-1.jpg",
    productName:
      "The Big Four - 4 Đại Gia Kiểm Toán: Deloitte - PwC - EY - KPM",
    price: "600.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
  },
  {
    img: "file/imgh/8935325005114_1_.jpg",
    productName:
      "My Hero Academia - Học Viện Siêu Anh Hùng - Tập 30: Điệu Nhảy Của Dabi - Tặng Kèm Bookmark",
    price: "700.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
  },
  {
    img: "file/imgh/8936130671129.jpg",
    productName:
      "Boardgame Thám Tử Lừng Danh Conan - Nàng Dâu Halloween: Thính",
    price: "800.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
  },
  {
    img: "file/imgh/b_a---cherry-magic-1600_1.jpg  ",
    productName:
      "Cherry Magic - Tập 1 - Tặng Kèm Giấy Note + Postcard Bồi 2 Mặt + (Quà Ngẫu Nhiên: Thẻ Card 2 Mặt)",
    price: "900.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
  },
  {
    img: "file/imgh/hoc-vien-an-hung---tap-30---dieu-nhay-cua-dabi---ban-thuong.jpg",
    productName:
      "My Hero Academia - Học Viện Siêu Anh Hùng - Tập 30: Điệu Nhảy Của Dabi - Tặng Kèm Bookmark",
    price: "900.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
  },
  {
    img: "file/imgh/image_187010.jpg",
    productName:
      "Sách Giáo Khoa Bộ Lớp 2 - Cánh Diều - Sách Bài Tập (Bộ 10 Cuốn) (2022) + 1 Cuộn Bao Sách Nylon TP",
    price: "900.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
  },
  {
    img: "file/imgh/image_195509_1_12290.jpg",
    productName:
      "Doraemon Tranh Truyện Màu - Năm 2112 Doraemon Ra Đời (Tái Bản 2019)",
    price: "900.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
  },
  {
    img: "file/imgh/one-piece---tap-99---ban-bia-ao-_-obi.jpg",
    productName: "One Piece Tập 75: Trả Ơn (Tái Bản 2019)",
    price: "900.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
  },
  {
    img: "file/imgh/s_n-goal-bia-ao-dac-biet-tap-1.jpg",
    productName:
      "Sơn Goal! - Tập 1 - Tặng Kèm OBI + Bìa Bonus + Postcard Độc Quyền",
    price: "900.000",
    salePrice: "550.000",
    saleRate: "10%",
    rating: 5,
    buyQlt: 77,
  },
];

const getItemDetail = () => {
  let selectedItem = null;
  let searchString = window.location.search;
  let urlParams = new URLSearchParams(searchString);

  fakeData?.map((item) => {
    if (urlParams?.get("id") === item?.id) {
      selectedItem = item;
    }
    return item;
  });
  return selectedItem;
};