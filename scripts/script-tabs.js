const tabsBtn = document.querySelectorAll('.btn');

const tabsItem = document.querySelectorAll('.tabs__content');

tabsBtn.forEach((btn, index) => btn.addEventListener('click', () => {
        hideTabs()
        activeTab(index);
}));


function hideTabs() {
    for (const item of tabsItem) {
        item.classList.add('hide');
    }
}

function activeTab(index) {
    tabsItem[index].classList.remove('hide');
}

hideTabs()
activeTab(0)