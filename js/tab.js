window.onload = function() {
    var li = document.getElementsByTagName('li');
    var div = document.getElementsByTagName('div');
    for (var i = 0; i < li.length; i++) {
        li[i].index = i;
        li[i].addEventListener('click', function() {
            for (var n = 0; n < li.length; n++) {
                li[n].className = '';
                div[n].className = '';
            }
            this.setAttribute('class', 'checked');
            div[this.index].setAttribute('class', 'show')
        })
    }
}