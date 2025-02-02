import {S as x, i as k, s as A, e as B, c as m, d as C, f as z, k as p, h as f, m as $, n as _, p as g, u as c, v as u, w as h, J as w, K as S, x as v, y as V, z as j, A as q, b as D, j as E} from "./index.b1a51e70.js";
import {i as I} from "./helpers.b4f12cfb.js";
import {S as J} from "./sanity-image.c13ea8e9.js";
import {S as K, a as L} from "./swiper-slide.10e3a326.js";
import {A as N} from "./autoplay.ccf11a22.js";
import "./autoplay.min.4ed993c7.js";
import "./image-url.umd.aa29a042.js";
import "./_commonjsHelpers.042e6b4d.js";
function y(i, t, l) {
    const a = i.slice();
    return a[2] = t[l],
    a
}
function P(i) {
    let t, l, a;
    return t = new J({
        props: {
            imageUrlBuilder: I,
            src: i[2],
            sizes: "170px",
            loading: "lazy"
        }
    }),
    {
        c() {
            m(t.$$.fragment),
            l = D()
        },
        l(e) {
            p(t.$$.fragment, e),
            l = E(e)
        },
        m(e, r) {
            g(t, e, r),
            _(e, l, r),
            a = !0
        },
        p(e, r) {
            const s = {};
            r & 1 && (s.src = e[2]),
            t.$set(s)
        },
        i(e) {
            a || (c(t.$$.fragment, e),
            a = !0)
        },
        o(e) {
            u(t.$$.fragment, e),
            a = !1
        },
        d(e) {
            h(t, e),
            e && f(l)
        }
    }
}
function b(i) {
    let t, l;
    return t = new L({
        props: {
            class: "flex items-center my-auto !w-[170px]",
            $$slots: {
                default: [P]
            },
            $$scope: {
                ctx: i
            }
        }
    }),
    {
        c() {
            m(t.$$.fragment)
        },
        l(a) {
            p(t.$$.fragment, a)
        },
        m(a, e) {
            g(t, a, e),
            l = !0
        },
        p(a, e) {
            const r = {};
            e & 33 && (r.$$scope = {
                dirty: e,
                ctx: a
            }),
            t.$set(r)
        },
        i(a) {
            l || (c(t.$$.fragment, a),
            l = !0)
        },
        o(a) {
            u(t.$$.fragment, a),
            l = !1
        },
        d(a) {
            h(t, a)
        }
    }
}
function T(i) {
    let t, l, a = i[0], e = [];
    for (let s = 0; s < a.length; s += 1)
        e[s] = b(y(i, a, s));
    const r = s => u(e[s], 1, 1, () => {
        e[s] = null
    }
    );
    return {
        c() {
            for (let s = 0; s < e.length; s += 1)
                e[s].c();
            t = v()
        },
        l(s) {
            for (let o = 0; o < e.length; o += 1)
                e[o].l(s);
            t = v()
        },
        m(s, o) {
            for (let n = 0; n < e.length; n += 1)
                e[n] && e[n].m(s, o);
            _(s, t, o),
            l = !0
        },
        p(s, o) {
            if (o & 1) {
                a = s[0];
                let n;
                for (n = 0; n < a.length; n += 1) {
                    const d = y(s, a, n);
                    e[n] ? (e[n].p(d, o),
                    c(e[n], 1)) : (e[n] = b(d),
                    e[n].c(),
                    c(e[n], 1),
                    e[n].m(t.parentNode, t))
                }
                for (V(),
                n = a.length; n < e.length; n += 1)
                    r(n);
                j()
            }
        },
        i(s) {
            if (!l) {
                for (let o = 0; o < a.length; o += 1)
                    c(e[o]);
                l = !0
            }
        },
        o(s) {
            e = e.filter(Boolean);
            for (let o = 0; o < e.length; o += 1)
                u(e[o]);
            l = !1
        },
        d(s) {
            q(e, s),
            s && f(t)
        }
    }
}
function U(i) {
    let t, l, a, e;
    return l = new K({
        props: {
            slidesPerView: "auto",
            loopedSlides: i[0].length,
            modules: [N],
            loop: !0,
            spaceBetween: 32,
            grabCursor: !0,
            mousewheel: {
                forceToAxis: !0
            },
            autoplay: !0,
            speed: 1500,
            centeredSlides: !0,
            "aria-label": "Company Logos",
            $$slots: {
                default: [T]
            },
            $$scope: {
                ctx: i
            }
        }
    }),
    {
        c() {
            t = B("div"),
            m(l.$$.fragment),
            this.h()
        },
        l(r) {
            t = C(r, "DIV", {
                class: !0
            });
            var s = z(t);
            p(l.$$.fragment, s),
            s.forEach(f),
            this.h()
        },
        h() {
            $(t, "class", a = i[1].class)
        },
        m(r, s) {
            _(r, t, s),
            g(l, t, null),
            e = !0
        },
        p(r, [s]) {
            const o = {};
            s & 1 && (o.loopedSlides = r[0].length),
            s & 33 && (o.$$scope = {
                dirty: s,
                ctx: r
            }),
            l.$set(o),
            (!e || s & 2 && a !== (a = r[1].class)) && $(t, "class", a)
        },
        i(r) {
            e || (c(l.$$.fragment, r),
            e = !0)
        },
        o(r) {
            u(l.$$.fragment, r),
            e = !1
        },
        d(r) {
            r && f(t),
            h(l)
        }
    }
}
function F(i, t, l) {
    let {logos: a} = t;
    return i.$$set = e => {
        l(1, t = w(w({}, t), S(e))),
        "logos"in e && l(0, a = e.logos)
    }
    ,
    t = S(t),
    [a, t]
}
class Y extends x {
    constructor(t) {
        super(),
        k(this, t, F, U, A, {
            logos: 0
        })
    }
}
export {Y as default};
