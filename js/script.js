function changeImage(product) {
    var mainImage = product.querySelector('.main-image');
    var hoverImage = product.querySelector('.hover-image');

    mainImage.style.display = 'none';
    hoverImage.style.display = 'block';
}

function restoreImage(product) {
    var mainImage = product.querySelector('.main-image');
    var hoverImage = product.querySelector('.hover-image');

    mainImage.style.display = 'block';
    hoverImage.style.display = 'none';
}