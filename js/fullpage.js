new fullpage('#fullpage', {
    autoScrolling: true,
    anchors: ['section1', 'section2', 'section3', 'section4'],
    navigation: true,
    navigationPosition: 'left',

    onLeave: (org, des, direction) => {
        let des_section = des.item;
        let des_bars = des_section.querySelectorAll('.border-line span');
        animate(des_bars)
    }
});

function animate(bars) {
    bars.forEach(bar => {
        new TimelineMax({ delay: 0.7 }).fromTo(bar, 0.5, { x: -150 }, { x: 0 });
    });
}

// Animation at app begining
function initAnimation() {
    const bars = $('.s1 .border-line').children().toArray();

    // console.log(imgs1)
    animate(bars);
}

initAnimation()

// Mixitup
$('#mix-wrapper').mixItUp({
    load: {
        sort: 'order:asc'
    },
    animation: {
        effects: 'fade rotateZ(-180deg)',
        duration: 700
    },
    selectors: {
        target: '.mix-target',
        filter: '.filter-btn',
        sort: '.sort-btn'
    },
    callbacks: {
        onMixEnd: function(state) {
            console.log(state)
        }
    }
});