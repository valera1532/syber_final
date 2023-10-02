const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [15, 25, 14, 25, 35, 20, 20],
                fill: false,

                borderColor: '#00FDCF',
                tension: 0.2
            },


        ]
    },
    options: {
        plugins: {
            legend: false,
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: false
        },

    },


}
);
const ctx1 = document.getElementById('myChart1');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [15, 25, 14, 25, 35, 20, 20],
                fill: false,

                borderColor: '#00FDCF',
                tension: 0.2
            },


        ]
    },
    options: {
        plugins: {
            legend: false,
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: false
        },

    },


}
);
const ctx2 = document.getElementById('myChart2');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [15, 25, 14, 25, 35, 20, 20],
                fill: false,

                borderColor: '#00FDCF',
                tension: 0.2
            },


        ]
    },
    options: {
        plugins: {
            legend: false,
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: false
        },

    },


}
);
var bar = document.getElementById('myBar').getContext('2d');
var myChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        datasets: [
            {

                data: [12, 19, 3, 5, 2, 22, 10, 11, 1, 6],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderWidth: 2,
                borderRadius: 10,
                borderSkipped: false,
            },
        ]
    },
    layout: {
        padding: {
            left: 5, // Увеличьте или уменьшите это значение, чтобы регулировать ширину линий
            right: 5 // Увеличьте или уменьшите это значение, чтобы регулировать ширину линий
        }
    },
    options: {
        plugins: {
            legend: false,
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let deposit = document.querySelectorAll('.review__swiper-top-selected');
let depositPop = document.querySelectorAll('.review__swiper-top-pop');
let depositSvg = document.querySelectorAll('.review__swiper-top-selected svg');
for (let i = 0; i < deposit.length; i++) {
    deposit[i].addEventListener('click', function () {
        deposit[i].classList.toggle('active');
        depositPop[i].classList.toggle('active');
        depositSvg[i].classList.toggle('active');
    });
}
document.querySelector('.review__swiper-button').addEventListener('click', function () {
    document.querySelector('.popup__dep').classList.add('active');
    document.querySelector('.shadow').classList.add('active');
    document.querySelector('body').classList.add('lock');
})
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
