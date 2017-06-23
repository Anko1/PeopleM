User.prototype.__proto__ = SuperUser.prototype;
function User(id) {
    var inst = this;
    var id = id;
    var model = null;

    this.name = null;
    this.sex = null;
    this.date = null;
    this.address = null;
    this.phone = null;
    this.mail = null;
    this.isDataVisible = true;

    this.render = function () {
        var dom = $(`<tr data-id="${id}"><td>${inst.name}</td><td>${inst.sex}</td><td>${inst.date}</td><td>${inst.address}</td><td>${inst.phone}</td><td>${inst.mail}</td></tr>`);
        
        model = dom;

        $('#user-wrap').append(dom);

        dom.click(function () {
            inst.changeDataVsisble();
        })
    };

    this.changeDataVsisble = function () {
        toggleData(inst.isDataVisible);

        inst.isDataVisible = !inst.isDataVisible;
    };
    
    // console.log(this === window);

    function toggleData(val) {
        var c = model.children();
        var opac = 0;

        if(!val){ opac = 1;}

        // alert(val);
        for(var i = 0; i < c.length; i++)
        {
            // console.log(c[i]);
            $(c[i]).css({opacity: opac});
        }


        $(c[0]).css({opacity: 1});
    }
}