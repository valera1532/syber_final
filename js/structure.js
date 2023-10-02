document.querySelector('.ui__table-none-btn').addEventListener('click', function () {
    document.querySelector('.popup__invite').classList.add('active');
    document.querySelector('.shadow').classList.add('active');
});
let personInfo = document.querySelectorAll('.structure__person-icon');
for (let i = 0; i < personInfo.length; i++) {
    personInfo[i].addEventListener('click', function () {
        document.querySelector('.popup__person').classList.add('active');
        document.querySelector('.shadow').classList.add('active');
    })

}

document.querySelector('.structure__intstrument-search').addEventListener('click', function () {
    document.querySelector('body').classList.add('lock');
    document.querySelector('.popup__table').classList.add('active');
    document.querySelector('.shadow').classList.add('active');

});
document.querySelector('.main-block__tab-list').addEventListener('click', function () {


    document.querySelector('.main-block__tab-list').classList.add('active');
    document.querySelector('.main-block__tab-table').classList.remove('active');
    document.querySelector('.ui__table').classList.remove('none');
    document.querySelector('.ui__table-mob').classList.remove('none');
    document.querySelector('.structure__intstruments').classList.add('none');
    document.querySelector('.structure__communications').classList.add('none');

});
document.querySelector('.main-block__tab-table').addEventListener('click', function () {

    document.querySelector('.main-block__tab-list').classList.remove('active');
    document.querySelector('.main-block__tab-table').classList.add('active');
    document.querySelector('.ui__table').classList.add('none');
    document.querySelector('.ui__table-mob').classList.add('none');
    document.querySelector('.structure__intstruments').classList.remove('none');
    document.querySelector('.structure__communications').classList.remove('none');

});