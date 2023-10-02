const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['02', '03', '04', '05', '06', '07'],
        datasets: [
            {
                label: 'Общее кол-во сделок',
                data: [15, 25, 14, 25, 35, 20, 20],
                fill: true,
                backgroundColor: 'rgb(208, 7, 7, 0.7)',
                borderColor: 'rgb(208, 7, 7, 0.7)',
                tension: 0.2
            },
            {
                label: 'Удачные сделки',
                data: [25, 39, 80, 41, 38, 25, 30],
                fill: true,
                backgroundColor: 'rgb(0, 29, 255, 0.5)',
                borderColor: 'rgb(0, 29, 255, 0.5)',
                tension: 0.2
            },

            {
                label: 'Не удачные сделки',
                data: [35, 59, 34, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgb(0, 209, 255, 0.5)',
                borderColor: 'rgb(0, 209, 255, 0.5)',
                tension: 0.2
            },]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },

    }

}
);
const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вск'],
        datasets: [
            {
                label: 'Общее кол-во сделок',
                data: [0, 7, 3, 12, 14, 2, 1],
                fill: true,
                backgroundColor: 'rgba(233, 0, 253, 1)',
                borderColor: 'rgba(233, 0, 253, 1)',
                tension: 0.2
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }

    }

}
);
const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вск'],
        datasets: [
            {
                label: 'Общее кол-во сделок',
                data: [0, 7, 3, 2, 4, 2, 1],
                fill: true,
                backgroundColor: 'rgba(2, 238, 248, 1)',
                borderColor: 'rgba(2, 238, 248, 1)',
                tension: 0.2
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }

    }

}
);
let popupDeteil = document.querySelectorAll('.statistics__detail');
let popupDeteilBack = document.querySelectorAll('.popup__derail-btn');
for (let i = 0; i < popupDeteil.length; i++) {
    popupDeteil[i].addEventListener('click', function () {
        document.querySelector('.popup__derail').classList.add('active');
        document.querySelector('.shadow').classList.add('active');
        document.querySelector('body').classList.add('lock');
    })


}
let transactions = document.querySelectorAll('.statistics__head-transaction');
for (let i = 0; i < transactions.length; i++) {

    transactions[i].addEventListener('click', function () {
        for (let j = 0; j < transactions.length; j++) {
            transactions[j].classList.remove('transaction__sel');
        }
        transactions[i].classList.add('transaction__sel');
    })

}
for (let i = 0; i < popupDeteil.length; i++) {

    popupDeteilBack[i].addEventListener('click', function () {
        document.querySelector('.popup__derail').classList.remove('active');
        document.querySelector('.shadow').classList.remove('active');
        document.querySelector('body').classList.remove('lock');
    })

}
document.querySelector('.popup__derail').classList.toggle('active');
document.querySelector('.report__head-deposits-mobile').addEventListener('click', function () {
    document.querySelector('.report__head-deposits-mobile').classList.toggle('active');

});