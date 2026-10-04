'use strict';

let getSell = selector => document.querySelector(selector);
let getSellAll = selector => document.querySelectorAll(selector);
let inputCheck = getSellAll('#user input');

// 'add' botton  style
getSell('#botton').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#1c2025';
})
getSell('#botton').addEventListener('mouseout', function () {
    this.style.backgroundColor = '#33393f';
})
getSell('#botton').addEventListener('focus', function () {
    this.style.boxShadow = '0px 0px 0px 2px rgba(168,170,171,1)'
})
getSell('#botton').addEventListener('blur', function () {
    this.style.boxShadow = 'none';
})

// CreateElement on botton click 
getSell('#botton').addEventListener('click', () => {
    if (getSell('#text').value != '') {
        let label = document.createElement('label');
        getSell('#user>form').appendChild(label);
        getSell('#user>form').lastChild.setAttribute('for', 'labelOne');
        let inputs = document.createElement('input');
        getSell('#user>form').lastChild.appendChild(inputs);
        getSell('#user>form').lastChild.firstChild.setAttribute('type', 'checkbox');
        let spans = document.createElement('span');
        getSell('#user>form').lastChild.appendChild(spans);
        getSell('#user>form').lastChild.lastChild.textContent = getSell('#text').value;/*вставляє текст з input у span*/
        inputCheck = getSellAll('#user input');
        getSell('#text').value = '';
    } else {
        getSell('#error1').style.display = 'block';
    }
});

//  batton for exit in 'error' div
//функція, яка працює з помилками
//номер іконки --- index, errorN --- id блоку з помилкою
let errorFun = function (index, errorN) {
    getSellAll('i')[index].addEventListener('mouseover', function () {
        this.style.backgroundImage = 'url(img2.png)';
    })
    getSellAll('i')[index].addEventListener('mouseout', function () {
        this.style.backgroundImage = 'url(img1.png)';
    })
    getSellAll('i')[index].addEventListener('click', function () {
        getSell(errorN).style.display = 'none';
    })
};

//error - 'empty string'
errorFun(0, '#error1');
//error - 'last Checkbox'
errorFun(1, '#error2');

// remove label
debugger;
/*target --- це елемент, на якому реально відбулася подія*/
getSell('#user').addEventListener('click', (event) => {
    if (event.target.type === 'checkbox') {
        let all = getSellAll('#user input');
        if (all.length === 1) {
            getSell('#error2').style.display = 'block';
            event.target.checked = false;
        } else if (e.target.checked) {
            event.target.parentElement.remove();
        }
    }
})

