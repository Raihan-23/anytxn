import { S as M, i as Q, s as X, C as Y, D as ee, c as w, k as I, p as E, q as se, E as te, u as p, v as h, w as k, J as T, K as U, F as z, e as F, b as D, d as V, f as j, h as v, j as C, m as b, n as H, o as S, G, H as O, I as P, t as Z, g as y, L as x } from "./index.b1a51e70.js";
import { P as ne } from "./PortableText.1d01a1ba.js";
import { H as ae } from "./H2.7116a46a.js";
import { H as ie } from "./H6.c4c7bff0.js";
import { i as le, a as oe } from "./helpers.b4f12cfb.js";
import { S as fe } from "./sanity-image.c13ea8e9.js";
import { I as re } from "./IntersectionObserver.f67bf426.js";
function me(n) {
    let s, t, o, i, m, l, e;
    o = new fe({
        props: {
            lqip: !0,
            src: n[0],
            alt: n[0].alt,
            class: "object-cover w-full h-full",
            imageUrlBuilder: le,
            sizes: "(min-width: 1024px) 45vw, 95vw",
            loading: "lazy"
        }
    });
    const a = n[6].default
        , r = z(a, n, n[10], null);
    return {
        c() {
            s = F("div"),
                t = F("figure"),
                w(o.$$.fragment),
                m = D(),
                r && r.c(),
                this.h()
        },
        l(f) {
            s = V(f, "DIV", {
                class: !0
            });
            var c = j(s);
            t = V(c, "FIGURE", {
                class: !0,
                style: !0
            });
            var g = j(t);
            I(o.$$.fragment, g),
                g.forEach(v),
                m = C(c),
                r && r.l(c),
                c.forEach(v),
                this.h()
        },
        h() {
            b(t, "class", "w-[76%] mx-auto"),
                b(t, "style", i = `box-shadow: ${n[1] ? "0px 0px" : "0px 23px 30px 0px #16437763"}`),
                b(s, "class", l = n[5].class + " relative h-fit lg:text-clip")
        },
        m(f, c) {
            H(f, s, c),
                S(s, t),
                E(o, t, null),
                S(s, m),
                r && r.m(s, null),
                n[8](s),
                e = !0
        },
        p(f, c) {
            const g = {};
            c & 1 && (g.src = f[0]),
                c & 1 && (g.alt = f[0].alt),
                o.$set(g),
                (!e || c & 2 && i !== (i = `box-shadow: ${f[1] ? "0px 0px" : "0px 23px 30px 0px #16437763"}`)) && b(t, "style", i),
                r && r.p && (!e || c & 1024) && G(r, a, f, f[10], e ? P(a, f[10], c, null) : O(f[10]), null),
                (!e || c & 32 && l !== (l = f[5].class + " relative h-fit lg:text-clip")) && b(s, "class", l)
        },
        i(f) {
            e || (p(o.$$.fragment, f),
                p(r, f),
                e = !0)
        },
        o(f) {
            h(o.$$.fragment, f),
                h(r, f),
                e = !1
        },
        d(f) {
            f && v(s),
                k(o),
                r && r.d(f),
                n[8](null)
        }
    }
}
function ce(n) {
    let s, t, o, i, m;
    function l(a) {
        n[9](a)
    }
    let e = {
        element: n[2],
        $$slots: {
            default: [me]
        },
        $$scope: {
            ctx: n
        }
    };
    return n[3] !== void 0 && (e.intersecting = n[3]),
        s = new re({
            props: e
        }),
        Y.push(() => ee(s, "intersecting", l)),
    {
        c() {
            w(s.$$.fragment)
        },
        l(a) {
            I(s.$$.fragment, a)
        },
        m(a, r) {
            E(s, a, r),
                o = !0,
                i || (m = se(window, "scroll", n[7]),
                    i = !0)
        },
        p(a, [r]) {
            const f = {};
            r & 4 && (f.element = a[2]),
                r & 1063 && (f.$$scope = {
                    dirty: r,
                    ctx: a
                }),
                !t && r & 8 && (t = !0,
                    f.intersecting = a[3],
                    te(() => t = !1)),
                s.$set(f)
        },
        i(a) {
            o || (p(s.$$.fragment, a),
                o = !0)
        },
        o(a) {
            h(s.$$.fragment, a),
                o = !1
        },
        d(a) {
            k(s, a),
                i = !1,
                m()
        }
    }
}
function ue(n, s, t) {
    let { $$slots: o = {}, $$scope: i } = s, { image: m } = s, { noShadow: l } = s, e, a = !1, r = 0;
    const f = () => {
        a && t(4, r = oe(e))
    }
        ;
    function c(d) {
        Y[d ? "unshift" : "push"](() => {
            e = d,
                t(2, e)
        }
        )
    }
    function g(d) {
        a = d,
            t(3, a)
    }
    return n.$$set = d => {
        t(5, s = T(T({}, s), U(d))),
            "image" in d && t(0, m = d.image),
            "noShadow" in d && t(1, l = d.noShadow),
            "$$scope" in d && t(10, i = d.$$scope)
    }
        ,
        s = U(s),
        [m, l, e, a, r, s, o, f, c, g, i]
}
class L extends M {
    constructor(s) {
        super(),
            Q(this, s, ue, ce, X, {
                image: 0,
                noShadow: 1
            })
    }
}
const _e = n => ({})
    , N = n => ({})
    , ge = n => ({})
    , R = n => ({})
    , de = n => ({})
    , W = n => ({})
    , pe = n => ({})
    , A = n => ({});
function he(n) {
    let s;
    return {
        c() {
            s = Z(n[1])
        },
        l(t) {
            s = y(t, n[1])
        },
        m(t, o) {
            H(t, s, o)
        },
        p: x,
        d(t) {
            t && v(s)
        }
    }
}
function $e(n) {
    let s;
    return {
        c() {
            s = Z(n[2])
        },
        l(t) {
            s = y(t, n[2])
        },
        m(t, o) {
            H(t, s, o)
        },
        p: x,
        d(t) {
            t && v(s)
        }
    }
}
function ve(n) {
    let s, t;
    const o = n[7].icons
        , i = z(o, n, n[8], A)
        , m = n[7].frame
        , l = z(m, n, n[8], W);
    return {
        c() {
            i && i.c(),
                s = D(),
                l && l.c()
        },
        l(e) {
            i && i.l(e),
                s = C(e),
                l && l.l(e)
        },
        m(e, a) {
            i && i.m(e, a),
                H(e, s, a),
                l && l.m(e, a),
                t = !0
        },
        p(e, a) {
            i && i.p && (!t || a & 256) && G(i, o, e, e[8], t ? P(o, e[8], a, pe) : O(e[8]), A),
                l && l.p && (!t || a & 256) && G(l, m, e, e[8], t ? P(m, e[8], a, de) : O(e[8]), W)
        },
        i(e) {
            t || (p(i, e),
                p(l, e),
                t = !0)
        },
        o(e) {
            h(i, e),
                h(l, e),
                t = !1
        },
        d(e) {
            i && i.d(e),
                e && v(s),
                l && l.d(e)
        }
    }
}
function be(n) {
    let s, t;
    const o = n[7].icons
        , i = z(o, n, n[8], R)
        , m = n[7].frame
        , l = z(m, n, n[8], N);
    return {
        c() {
            i && i.c(),
                s = D(),
                l && l.c()
        },
        l(e) {
            i && i.l(e),
                s = C(e),
                l && l.l(e)
        },
        m(e, a) {
            i && i.m(e, a),
                H(e, s, a),
                l && l.m(e, a),
                t = !0
        },
        p(e, a) {
            i && i.p && (!t || a & 256) && G(i, o, e, e[8], t ? P(o, e[8], a, ge) : O(e[8]), R),
                l && l.p && (!t || a & 256) && G(l, m, e, e[8], t ? P(m, e[8], a, _e) : O(e[8]), N)
        },
        i(e) {
            t || (p(i, e),
                p(l, e),
                t = !0)
        },
        o(e) {
            h(i, e),
                h(l, e),
                t = !1
        },
        d(e) {
            i && i.d(e),
                e && v(s),
                l && l.d(e)
        }
    }
}
function Se(n) {
    let s, t, o, i, m, l, e, a, r, f, c, g, d, q;
    return o = new ie({
        props: {
            $$slots: {
                default: [he]
            },
            $$scope: {
                ctx: n
            }
        }
    }),
        m = new ae({
            props: {
                $$slots: {
                    default: [$e]
                },
                $$scope: {
                    ctx: n
                }
            }
        }),
        e = new L({
            props: {
                noShadow: n[0],
                class: "!my-[60px] md:hidden block",
                image: n[4],
                $$slots: {
                    default: [ve]
                },
                $$scope: {
                    ctx: n
                }
            }
        }),
        f = new ne({
            props: {
                value: n[3]
            }
        }),
        g = new L({
            props: {
                noShadow: n[0],
                class: "hidden md:block",
                image: n[4],
                $$slots: {
                    default: [be]
                },
                $$scope: {
                    ctx: n
                }
            }
        }),
    {
        c() {
            s = F("section"),
                t = F("div"),
                w(o.$$.fragment),
                i = D(),
                w(m.$$.fragment),
                l = D(),
                w(e.$$.fragment),
                a = D(),
                r = F("div"),
                w(f.$$.fragment),
                c = D(),
                w(g.$$.fragment),
                this.h()
        },
        l(u) {
            s = V(u, "SECTION", {
                class: !0
            });
            var _ = j(s);
            t = V(_, "DIV", {
                class: !0
            });
            var $ = j(t);
            I(o.$$.fragment, $),
                i = C($),
                I(m.$$.fragment, $),
                l = C($),
                I(e.$$.fragment, $),
                a = C($),
                r = V($, "DIV", {
                    class: !0
                });
            var B = j(r);
            I(f.$$.fragment, B),
                B.forEach(v),
                $.forEach(v),
                c = C(_),
                I(g.$$.fragment, _),
                _.forEach(v),
                this.h()
        },
        h() {
            b(r, "class", "lg:pt-2"),
                b(t, "class", "md:space-y-sm space-y-xs"),
                b(s, "class", d = n[5].class + " grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative")
        },
        m(u, _) {
            H(u, s, _),
                S(s, t),
                E(o, t, null),
                S(t, i),
                E(m, t, null),
                S(t, l),
                E(e, t, null),
                S(t, a),
                S(t, r),
                E(f, r, null),
                S(s, c),
                E(g, s, null),
                q = !0
        },
        p(u, [_]) {
            const $ = {};
            _ & 256 && ($.$$scope = {
                dirty: _,
                ctx: u
            }),
                o.$set($);
            const B = {};
            _ & 256 && (B.$$scope = {
                dirty: _,
                ctx: u
            }),
                m.$set(B);
            const J = {};
            _ & 1 && (J.noShadow = u[0]),
                _ & 256 && (J.$$scope = {
                    dirty: _,
                    ctx: u
                }),
                e.$set(J);
            const K = {};
            _ & 1 && (K.noShadow = u[0]),
                _ & 256 && (K.$$scope = {
                    dirty: _,
                    ctx: u
                }),
                g.$set(K),
                (!q || _ & 32 && d !== (d = u[5].class + " grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative")) && b(s, "class", d)
        },
        i(u) {
            q || (p(o.$$.fragment, u),
                p(m.$$.fragment, u),
                p(e.$$.fragment, u),
                p(f.$$.fragment, u),
                p(g.$$.fragment, u),
                q = !0)
        },
        o(u) {
            h(o.$$.fragment, u),
                h(m.$$.fragment, u),
                h(e.$$.fragment, u),
                h(f.$$.fragment, u),
                h(g.$$.fragment, u),
                q = !1
        },
        d(u) {
            u && v(s),
                k(o),
                k(m),
                k(e),
                k(f),
                k(g)
        }
    }
}
function we(n, s, t) {
    let { $$slots: o = {}, $$scope: i } = s
        , { props: m } = s
        , { noShadow: l = !1 } = s;
    const { title: e, subtitle: a, description: r, image: f } = m;
    return n.$$set = c => {
        t(5, s = T(T({}, s), U(c))),
            "props" in c && t(6, m = c.props),
            "noShadow" in c && t(0, l = c.noShadow),
            "$$scope" in c && t(8, i = c.$$scope)
    }
        ,
        s = U(s),
        [l, e, a, r, f, s, m, o, i]
}
class Be extends M {
    constructor(s) {
        super(),
            Q(this, s, we, Se, X, {
                props: 6,
                noShadow: 0
            })
    }
}
export { Be as C };
import { S as M, i as Q, s as X, C as Y, D as ee, c as w, k as I, p as E, q as se, E as te, u as p, v as h, w as k, J as T, K as U, F as z, e as F, b as D, d as V, f as j, h as v, j as C, m as b, n as H, o as S, G, H as O, I as P, t as Z, g as y, L as x } from "./index.b1a51e70.js";
import { P as ne } from "./PortableText.1d01a1ba.js";
import { H as ae } from "./H2.7116a46a.js";
import { H as ie } from "./H6.c4c7bff0.js";
import { i as le, a as oe } from "./helpers.b4f12cfb.js";
import { S as fe } from "./sanity-image.c13ea8e9.js";
import { I as re } from "./IntersectionObserver.f67bf426.js";
function me(n) {
    let s, t, o, i, m, l, e;
    o = new fe({
        props: {
            lqip: !0,
            src: n[0],
            alt: n[0].alt,
            class: "object-cover w-full h-full",
            imageUrlBuilder: le,
            sizes: "(min-width: 1024px) 45vw, 95vw",
            loading: "lazy"
        }
    });
    const a = n[6].default
        , r = z(a, n, n[10], null);
    return {
        c() {
            s = F("div"),
                t = F("figure"),
                w(o.$$.fragment),
                m = D(),
                r && r.c(),
                this.h()
        },
        l(f) {
            s = V(f, "DIV", {
                class: !0
            });
            var c = j(s);
            t = V(c, "FIGURE", {
                class: !0,
                style: !0
            });
            var g = j(t);
            I(o.$$.fragment, g),
                g.forEach(v),
                m = C(c),
                r && r.l(c),
                c.forEach(v),
                this.h()
        },
        h() {
            b(t, "class", "w-[76%] mx-auto"),
                b(t, "style", i = `box-shadow: ${n[1] ? "0px 0px" : "0px 23px 30px 0px #16437763"}`),
                b(s, "class", l = n[5].class + " relative h-fit lg:text-clip")
        },
        m(f, c) {
            H(f, s, c),
                S(s, t),
                E(o, t, null),
                S(s, m),
                r && r.m(s, null),
                n[8](s),
                e = !0
        },
        p(f, c) {
            const g = {};
            c & 1 && (g.src = f[0]),
                c & 1 && (g.alt = f[0].alt),
                o.$set(g),
                (!e || c & 2 && i !== (i = `box-shadow: ${f[1] ? "0px 0px" : "0px 23px 30px 0px #16437763"}`)) && b(t, "style", i),
                r && r.p && (!e || c & 1024) && G(r, a, f, f[10], e ? P(a, f[10], c, null) : O(f[10]), null),
                (!e || c & 32 && l !== (l = f[5].class + " relative h-fit lg:text-clip")) && b(s, "class", l)
        },
        i(f) {
            e || (p(o.$$.fragment, f),
                p(r, f),
                e = !0)
        },
        o(f) {
            h(o.$$.fragment, f),
                h(r, f),
                e = !1
        },
        d(f) {
            f && v(s),
                k(o),
                r && r.d(f),
                n[8](null)
        }
    }
}
function ce(n) {
    let s, t, o, i, m;
    function l(a) {
        n[9](a)
    }
    let e = {
        element: n[2],
        $$slots: {
            default: [me]
        },
        $$scope: {
            ctx: n
        }
    };
    return n[3] !== void 0 && (e.intersecting = n[3]),
        s = new re({
            props: e
        }),
        Y.push(() => ee(s, "intersecting", l)),
    {
        c() {
            w(s.$$.fragment)
        },
        l(a) {
            I(s.$$.fragment, a)
        },
        m(a, r) {
            E(s, a, r),
                o = !0,
                i || (m = se(window, "scroll", n[7]),
                    i = !0)
        },
        p(a, [r]) {
            const f = {};
            r & 4 && (f.element = a[2]),
                r & 1063 && (f.$$scope = {
                    dirty: r,
                    ctx: a
                }),
                !t && r & 8 && (t = !0,
                    f.intersecting = a[3],
                    te(() => t = !1)),
                s.$set(f)
        },
        i(a) {
            o || (p(s.$$.fragment, a),
                o = !0)
        },
        o(a) {
            h(s.$$.fragment, a),
                o = !1
        },
        d(a) {
            k(s, a),
                i = !1,
                m()
        }
    }
}
function ue(n, s, t) {
    let { $$slots: o = {}, $$scope: i } = s, { image: m } = s, { noShadow: l } = s, e, a = !1, r = 0;
    const f = () => {
        a && t(4, r = oe(e))
    }
        ;
    function c(d) {
        Y[d ? "unshift" : "push"](() => {
            e = d,
                t(2, e)
        }
        )
    }
    function g(d) {
        a = d,
            t(3, a)
    }
    return n.$$set = d => {
        t(5, s = T(T({}, s), U(d))),
            "image" in d && t(0, m = d.image),
            "noShadow" in d && t(1, l = d.noShadow),
            "$$scope" in d && t(10, i = d.$$scope)
    }
        ,
        s = U(s),
        [m, l, e, a, r, s, o, f, c, g, i]
}
class L extends M {
    constructor(s) {
        super(),
            Q(this, s, ue, ce, X, {
                image: 0,
                noShadow: 1
            })
    }
}
const _e = n => ({})
    , N = n => ({})
    , ge = n => ({})
    , R = n => ({})
    , de = n => ({})
    , W = n => ({})
    , pe = n => ({})
    , A = n => ({});
function he(n) {
    let s;
    return {
        c() {
            s = Z(n[1])
        },
        l(t) {
            s = y(t, n[1])
        },
        m(t, o) {
            H(t, s, o)
        },
        p: x,
        d(t) {
            t && v(s)
        }
    }
}
function $e(n) {
    let s;
    return {
        c() {
            s = Z(n[2])
        },
        l(t) {
            s = y(t, n[2])
        },
        m(t, o) {
            H(t, s, o)
        },
        p: x,
        d(t) {
            t && v(s)
        }
    }
}
function ve(n) {
    let s, t;
    const o = n[7].icons
        , i = z(o, n, n[8], A)
        , m = n[7].frame
        , l = z(m, n, n[8], W);
    return {
        c() {
            i && i.c(),
                s = D(),
                l && l.c()
        },
        l(e) {
            i && i.l(e),
                s = C(e),
                l && l.l(e)
        },
        m(e, a) {
            i && i.m(e, a),
                H(e, s, a),
                l && l.m(e, a),
                t = !0
        },
        p(e, a) {
            i && i.p && (!t || a & 256) && G(i, o, e, e[8], t ? P(o, e[8], a, pe) : O(e[8]), A),
                l && l.p && (!t || a & 256) && G(l, m, e, e[8], t ? P(m, e[8], a, de) : O(e[8]), W)
        },
        i(e) {
            t || (p(i, e),
                p(l, e),
                t = !0)
        },
        o(e) {
            h(i, e),
                h(l, e),
                t = !1
        },
        d(e) {
            i && i.d(e),
                e && v(s),
                l && l.d(e)
        }
    }
}
function be(n) {
    let s, t;
    const o = n[7].icons
        , i = z(o, n, n[8], R)
        , m = n[7].frame
        , l = z(m, n, n[8], N);
    return {
        c() {
            i && i.c(),
                s = D(),
                l && l.c()
        },
        l(e) {
            i && i.l(e),
                s = C(e),
                l && l.l(e)
        },
        m(e, a) {
            i && i.m(e, a),
                H(e, s, a),
                l && l.m(e, a),
                t = !0
        },
        p(e, a) {
            i && i.p && (!t || a & 256) && G(i, o, e, e[8], t ? P(o, e[8], a, ge) : O(e[8]), R),
                l && l.p && (!t || a & 256) && G(l, m, e, e[8], t ? P(m, e[8], a, _e) : O(e[8]), N)
        },
        i(e) {
            t || (p(i, e),
                p(l, e),
                t = !0)
        },
        o(e) {
            h(i, e),
                h(l, e),
                t = !1
        },
        d(e) {
            i && i.d(e),
                e && v(s),
                l && l.d(e)
        }
    }
}
function Se(n) {
    let s, t, o, i, m, l, e, a, r, f, c, g, d, q;
    return o = new ie({
        props: {
            $$slots: {
                default: [he]
            },
            $$scope: {
                ctx: n
            }
        }
    }),
        m = new ae({
            props: {
                $$slots: {
                    default: [$e]
                },
                $$scope: {
                    ctx: n
                }
            }
        }),
        e = new L({
            props: {
                noShadow: n[0],
                class: "!my-[60px] md:hidden block",
                image: n[4],
                $$slots: {
                    default: [ve]
                },
                $$scope: {
                    ctx: n
                }
            }
        }),
        f = new ne({
            props: {
                value: n[3]
            }
        }),
        g = new L({
            props: {
                noShadow: n[0],
                class: "hidden md:block",
                image: n[4],
                $$slots: {
                    default: [be]
                },
                $$scope: {
                    ctx: n
                }
            }
        }),
    {
        c() {
            s = F("section"),
                t = F("div"),
                w(o.$$.fragment),
                i = D(),
                w(m.$$.fragment),
                l = D(),
                w(e.$$.fragment),
                a = D(),
                r = F("div"),
                w(f.$$.fragment),
                c = D(),
                w(g.$$.fragment),
                this.h()
        },
        l(u) {
            s = V(u, "SECTION", {
                class: !0
            });
            var _ = j(s);
            t = V(_, "DIV", {
                class: !0
            });
            var $ = j(t);
            I(o.$$.fragment, $),
                i = C($),
                I(m.$$.fragment, $),
                l = C($),
                I(e.$$.fragment, $),
                a = C($),
                r = V($, "DIV", {
                    class: !0
                });
            var B = j(r);
            I(f.$$.fragment, B),
                B.forEach(v),
                $.forEach(v),
                c = C(_),
                I(g.$$.fragment, _),
                _.forEach(v),
                this.h()
        },
        h() {
            b(r, "class", "lg:pt-2"),
                b(t, "class", "md:space-y-sm space-y-xs"),
                b(s, "class", d = n[5].class + " grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative")
        },
        m(u, _) {
            H(u, s, _),
                S(s, t),
                E(o, t, null),
                S(t, i),
                E(m, t, null),
                S(t, l),
                E(e, t, null),
                S(t, a),
                S(t, r),
                E(f, r, null),
                S(s, c),
                E(g, s, null),
                q = !0
        },
        p(u, [_]) {
            const $ = {};
            _ & 256 && ($.$$scope = {
                dirty: _,
                ctx: u
            }),
                o.$set($);
            const B = {};
            _ & 256 && (B.$$scope = {
                dirty: _,
                ctx: u
            }),
                m.$set(B);
            const J = {};
            _ & 1 && (J.noShadow = u[0]),
                _ & 256 && (J.$$scope = {
                    dirty: _,
                    ctx: u
                }),
                e.$set(J);
            const K = {};
            _ & 1 && (K.noShadow = u[0]),
                _ & 256 && (K.$$scope = {
                    dirty: _,
                    ctx: u
                }),
                g.$set(K),
                (!q || _ & 32 && d !== (d = u[5].class + " grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative")) && b(s, "class", d)
        },
        i(u) {
            q || (p(o.$$.fragment, u),
                p(m.$$.fragment, u),
                p(e.$$.fragment, u),
                p(f.$$.fragment, u),
                p(g.$$.fragment, u),
                q = !0)
        },
        o(u) {
            h(o.$$.fragment, u),
                h(m.$$.fragment, u),
                h(e.$$.fragment, u),
                h(f.$$.fragment, u),
                h(g.$$.fragment, u),
                q = !1
        },
        d(u) {
            u && v(s),
                k(o),
                k(m),
                k(e),
                k(f),
                k(g)
        }
    }
}
function we(n, s, t) {
    let { $$slots: o = {}, $$scope: i } = s
        , { props: m } = s
        , { noShadow: l = !1 } = s;
    const { title: e, subtitle: a, description: r, image: f } = m;
    return n.$$set = c => {
        t(5, s = T(T({}, s), U(c))),
            "props" in c && t(6, m = c.props),
            "noShadow" in c && t(0, l = c.noShadow),
            "$$scope" in c && t(8, i = c.$$scope)
    }
        ,
        s = U(s),
        [l, e, a, r, f, s, m, o, i]
}
class Be extends M {
    constructor(s) {
        super(),
            Q(this, s, we, Se, X, {
                props: 6,
                noShadow: 0
            })
    }
}
export { Be as C };
