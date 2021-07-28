window.onscroll = function() {scrollFunc()};
function scrollFunc() {
    let header = document.getElementById('header');
    let logo = document.getElementById('logo');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.padding = '0.5rem 2rem';
        logo.style.fontSize = '1.5rem';
        logo.style.padding = '0.2rem 0.5rem';
        logo.style.borderWidth = '1.5px';
    } else {
        header.style.padding = '1.2rem 2rem';
        logo.style.fontSize = '2.5rem';
        logo.style.padding = '0.7rem 0.8rem';
        logo.style.borderWidth = '2.5px';
    }
}

const showAbi = () => {
    var abi1 = document.getElementById('abi1');
    var abi2 = document.getElementById('abi2');
    var abi3 = document.getElementById('abi3');
    var abi4 = document.getElementById('abi4');
    var abi5 = document.getElementById('abi5');
    var abi6 = document.getElementById('abi6');
    if (abi1.style.display === 'none') {
        abi1.style.display = 'block';
        abi1.style.opacity ='0.95';
    } else {
        abi1.style.display ='none';
    }
    if (abi2.style.display === 'none') {
        abi2.style.display = 'block';
        abi2.style.opacity ='0.95';
    } else {
        abi2.style.display ='none';
    }
    if (abi3.style.display === 'none') {
        abi3.style.display = 'block';
        abi3.style.opacity ='0.95';
    } else {
        abi3.style.display ='none';
    }
    if (abi4.style.display === 'none') {
        abi4.style.display = 'block';
        abi4.style.opacity ='0.95';
    } else {
        abi4.style.display ='none';
    }
    if (abi5.style.display === 'none') {
        abi5.style.display = 'block';
        abi5.style.opacity ='0.95';
    } else {
        abi5.style.display ='none';
    }
    if (abi6.style.display === 'none') {
        abi6.style.display = 'block';
        abi6.style.opacity ='0.95';
    } else {
        abi6.style.display ='none';
    }
}
