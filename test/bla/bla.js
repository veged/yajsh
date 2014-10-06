function bla(a, b) {
    /*
     * Bla
     */
    function x(y, z) {
        var xx = { a: 1, b: '2' + "3\n", c: /a.*b/gi },
            yy = [1.2, 2e3, 3e-2, -4], // test
            zz = function () {};

        this;
        this.a = Infinity;
        this.b = NaN;

        if(this.a instanceof this.b) return null;
            else return undefined;

        delete this.a;

        new this.f(1, 2).b(3, 4);

        return typeof this;
    }

    try {
        someAction();
        throw new Error();
    } catch(e) {
        // catch error
    } finally {
        // finally
    }

    switch(a) {
        case '1':
            do1();
            break;
        default:
            do2();
    }


    for(var i = 0; i < Things.length; i++) {
        Things[i];
    }

    for(var k in obj) {
        obj[k]();
    }

    do {
        if(b === 1) continue;
        a++;
        --b;
    } while(a !== b );

    while(a in b) {
        var a = 1 + (2 - 2),
            b = null,
            aa = 1 + a++,
            bb = 1 - b--,
            t = true,
            f = false;

        x();
        b[a];
        [1][1];
        new x();
        'str ing \n';
        a ? b : c;
        ;
        continue;
        break;
        continue bla;
        break bla;
    }

    with(obj) {
        bla();
    }
}

label1: {
    a = 1;
    b = '22';
}
