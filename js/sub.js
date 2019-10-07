/* 상품 미니 이미지 */
var mainImg = $('#product > .product_img > img')
var minImg = $('#product > .product_img > ul > li')
minImg.click(function (e) {
   e.preventDefault();
   const target = $(this);
   const index = target.index();
   minImg.removeClass('active');
   target.addClass('active');
   mainImg.attr('src', 'images/productImg' + (index + 1) + '.jpg')
});

/* 상품 담기 빼기 */
var plusBtn = $('.product_value > .number > .plus')
var minusBtn = $('.product_value > .number > .minus')
var number = $('.product_value > .number > input')
var plusNum = 2;
var price = $('.product_value > p > span')
plusBtn.click(function (e) {
   e.preventDefault();
   number.val(plusNum);
   price.html(20 * plusNum + ',' + '000');
   plusNum++;
});
minusBtn.click(function (e) {
   e.preventDefault();
   plusNum--;
   if (plusNum >= 1) {
      number.val(plusNum);
      price.html(20 * plusNum + ',' + '000');
   } else {
      plusNum = 1;
   }
});

/* 상세탭 */
var tab = $('#detailPage > .detail_tap > ul > li');
tab.click(function (e) {
   e.preventDefault();
   const target = $(this);
   tab.removeClass('active');
   target.addClass('active');
});