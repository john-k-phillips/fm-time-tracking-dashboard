$(document).ready(function () {
    const items = document.querySelectorAll('.list-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(e => e.classList.remove('active'));
            item.classList.add('active');
            getData(item.innerHTML.toLowerCase());
        })
    });

    const getData = (dateType) => {
        const data = $.getJSON("./data.json", (data) => {
            data.forEach((item) => {
                const title = item.title.toLowerCase();
                const current = item.timeframes[dateType].current;
                const previous = item.timeframes[dateType].previous;

                handleInnerHTML(title, current, previous);
            });
        })
    }

    const handleInnerHTML = (title, current, previous) => {
        if (title === 'self care') {
            const currentHours = document.querySelector(`.self-care-hours`);
            const prevHours = document.querySelector(`.self-care-previous`);
            currentHours.innerHTML = `${current}hrs`;
        } else {
            const currentHours = document.querySelector(`.${title}-hours`);
            const prevHours = document.querySelector(`.${title}-previous`);
            currentHours.innerHTML = `${current}hrs`;
        }
    }
})

