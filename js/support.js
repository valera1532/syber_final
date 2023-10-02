
document.querySelector('.support__head-create').addEventListener('click', function () {
    document.querySelector('.support__head-create').classList.add('selected');
    document.querySelector('.support__head-history').classList.remove('selected');
    document.querySelector('.support__form').classList.remove('none');
    document.querySelector('.support__table').classList.add('none');
})
document.querySelector('.support__head-history').addEventListener('click', function () {
    document.querySelector('.support__head-history').classList.add('selected');
    document.querySelector('.support__head-create').classList.remove('selected');
    document.querySelector('.support__form').classList.add('none');
    document.querySelector('.support__table').classList.remove('none');
})
document.querySelector('.support__chat-content').addEventListener('click', function () {
    document.querySelector('.support__chat-active ').classList.add('active');
    document.querySelector('.support__chat-content').classList.add('none');

})
document.querySelector('.support__chat-close').addEventListener('click', function () {
    document.querySelector('.support__chat-active ').classList.remove('active');
    document.querySelector('.support__chat-content').classList.remove('none');

})
document.querySelector('.support__download ').addEventListener('click', function () {
    document.querySelector('.popup__file').classList.add('active');
    document.querySelector('.shadow').classList.add('active');
    document.querySelector('body').classList.add('lock');
})
