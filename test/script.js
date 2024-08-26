const sectors = document.querySelectorAll('.sector');
const centerCircle = document.querySelector('.center-circle');
const chart_1_0_0__item = document.querySelectorAll('.chart_1_0_0__item');

sectors.forEach((sector, index) => {
    // Gọi đến sự kiện vòng tròn
    sector.addEventListener('click', () => {
        action(sector, index);
    });

    // Gọi đến sự kiện menu
    chart_1_0_0__item[index].addEventListener('click', () => {
        action(sector, index);
    });

});

function action (sector, index) {
    // Xoa các trạng thái active trong vòng tròn
    sectors.forEach(item =>  item.classList.remove("active"));

    // Xoa các trạng thái active trong menu list
    chart_1_0_0__item.forEach(item =>  item.classList.remove("active"));

    // Thêm active vào phần vòng tròn đã click
    sector.classList.add('active');

    // Thêm active vào menu list
    chart_1_0_0__item[index].classList.add('active');

    // Update nội dung vào vòng tròn giữa
    const content = sector.getAttribute('data-content');
    centerCircle.textContent = content;
}
