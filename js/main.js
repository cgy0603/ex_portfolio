// 햄버거 바 클릭시
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
menuBtn.addEventListener("click", function () {
    //x변경
    menuBtn.classList.toggle("active");
    //모바일 메뉴 나타남
    mobileMenu.classList.toggle("active");
});
// 화면 크기 변경시 모바일 메뉴 닫기
window.addEventListener("resize", function () {
    //768px보다 커지면
    if (window.innerWidth > 768) {
        // 모바일메뉴 닫기
        mobileMenu.classList.remove("active");
        // 햄버거 버튼
        menuBtn.classList.remove("active");
    }
});
//모바일 메뉴 링크 클릭시
const mbMenuLink = document.querySelectorAll(".mobile-menu a");
//모바일메뉴 a 각각 꺼낸다
mbMenuLink.forEach((link) => {
    link.addEventListener("click", () => {
        //모바일메뉴 닫기
        mobileMenu.classList.remove("active");
        //햄버거메뉴X -> 원래대로
        menuBtn.classList.remove("active");
    });
});
