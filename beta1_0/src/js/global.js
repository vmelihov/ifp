jQuery(function ($) {
    $(".js-select").on("click", function () {
        var _this = $(this),
            _list = _this.find(".js-selectList");

        if (_this.hasClass("opened")) {
            _this.removeClass("opened bottom");
        } else {
            _this.removeClass("opened bottom");
            _this.addClass("opened");

            if (_list.offset().top + _list.height() > $(window).scrollTop() + $(window).height()) {
                _this.addClass("bottom");
            }

            _list.getNiceScroll().resize();
        }
    });
    $(".js-selectList").on("click", "div div", function () {
        var _this = $(this);

        _this.parents(".js-select").find(".js-selectChosen").text(_this.text());
    });
    $(".js-selectList").niceScroll(".js-selectListScroll", {
        cursorborder: "",
        background: "#dedede",
        cursorcolor: "#aaa",
        boxzoom: false,
        autohidemode: false
    });
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".js-select"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass("opened bottom"); // скрываем его
        }
    });


    $(".js-userMenuLink").on("click", function () {
        $(".js-userMenu").toggleClass("opened");
    });
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".js-userMenu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass("opened"); // скрываем его
        }
    });
});