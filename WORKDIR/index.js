const {
    is_node,
    add_repr,
    is_ary,
    is_dict,
    iflet,
    forlst,
    indent,
    instof,
    empty,
} = require("nv-facutil-basic");

const {is_int_str} = require("nv-string-basic");

////

const is_pair = (o) => is_ary(o) && (o.length === 2);

const pair_eq  = (t1,t2) => (t1[0]===t2[0] && t1[1] === t2[1]);
const pair_keq = (t1,t2) => (t1[0]===t2[0]);
const pair_veq = (t1,t2) => (t1[1]===t2[1]);




const pair_kvgt  = (t1,t2) => {
    if(t1[0] === t2[0]) {
        return(t1[1] > t2[1])
    } else {
        return(t1[0] > t2[0])
    }
}
const pair_vkgt  = (t1,t2) => {
    if(t1[1] === t2[1]) {
        return(t1[0] > t2[0])
    } else {
        return(t1[1] > t2[1])
    }
}
const pair_kgt = (t1,t2) => (t1[0] > t2[0]);
const pair_vgt = (t1,t2) => (t1[1] > t2[1]);


const pair_kvlt  = (t1,t2) => {
    if(t1[0] === t2[0]) {
        return(t1[1] < t2[1])
    } else {
        return(t1[0] < t2[0])
    }
}
const pair_vklt  = (t1,t2) => {
    if(t1[1] === t2[1]) {
        return(t1[0] < t2[0])
    } else {
        return(t1[1] < t2[1])
    }
}
const pair_klt = (t1,t2) => (t1[0] < t2[0]);
const pair_vlt = (t1,t2) => (t1[1] < t2[1]);


const pair_kvge  = (t1,t2) => pair_eq(t1,t2) || pair_kvgt(t1,t2); 
const pair_vkge  = (t1,t2) => pair_eq(t1,t2) || pair_vkgt(t1,t2);
const pair_kge = (t1,t2) => (t1[0] >= t2[0]);
const pair_vge = (t1,t2) => (t1[1] >= t2[1]);


const pair_kvle  = (t1,t2) => pair_eq(t1,t2) || pair_kvlt(t1,t2);
const pair_vkle  = (t1,t2) => pair_eq(t1,t2) || pair_vklt(t1,t2);
const pair_kle = (t1,t2) => (t1[0] <= t2[0]);
const pair_vle = (t1,t2) => (t1[1] <= t2[1]);


const pair_kcmp = (t1,t2) => {
    if(pair_klt(t1,t2)) {
        return(-1);
    } else if(pair_keq(t1,t2)) {
        return(0);
    } else {
        return(1)
    }
}

const pair_vcmp = (t1,t2) => {
    if(pair_vlt(t1,t2)) {
        return(-1);
    } else if(pair_veq(t1,t2)) {
        return(0);
    } else {
        return(1)
    }
}


const pair_kvcmp = (t1,t2) => {
    if(pair_kvlt(t1,t2)) {
        return(-1);
    } else if(pair_eq(t1,t2)) {
        return(0);
    } else {
        return(1)
    }
}

const pair_vkcmp = (t1,t2) => {
    if(pair_vklt(t1,t2)) {
        return(-1);
    } else if(pair_eq(t1,t2)) {
        return(0);
    } else {
        return(1)
    }
}



const is_dele = (d) => {
    if(is_dict(d)) {
        let es = Object.entries(d);
        return(es.length===1 && es[0].length===2)
    } else {
        return(false)
    }
}

const t2dele = (t) => ({[t[0]]:t[1]});
const dele2t = (d) => (Object.entries(d)[0]);

const pair_swaplr = (t) => {
    let tmp = t[0]
    t[0] = t[1]
    t[1] = tmp
    return(t)
}

const dele_swaplr = (d) => {
    let t = dele2t(d);
    delete d[t[0]];
    t = pair_swaplr(t);
    d[t[0]] = t[1];
    return(d)
}


////

const is_tl      = (o) => is_ary(o) && o.every(r=>is_pair(r));

const tl_swaplr  = (tl) => {
    tl.forEach(t=>pair_swaplr(t))
    return(tl)
}


const l2tl  = (l) => {
    let tl = [];
    for(let i=0;i<l.length-1;i=i+2) {tl.push([l[i],l[i+1]])}
    return(tl) 
}
const tl2l       = (tl) => tl.flat(); 

const d2tl       = (d)  => Object.entries(d);
const tl2d       = (tl) => Object.fromEntries(tl); 

const fast_kvl2tl     = (kl,vl) => {
    let tl =[];
    for(let i=0;i<kl.length;i++) {
        tl.push([kl[i],vl[i]])
    }
    return(tl)
}

const fmt_kvl    = (kl,vl) => {
    let klngth = kl.length;
    let vlngth = vl.length;
    let lngth  = Math.min(klngth,vlngth);
    return([kl.slice(0,lngth),vl.slice(0,lngth)])
}


const kvl2tl     = (kl,vl) => fast_kvl2tl(...fmt_kvl(kl,vl));

const tl2kvl     = (tl) => {
    let kl = tl.map(e=>e[0]);
    let vl = tl.map(e=>e[1]);
    return([kl,vl])
}

const dl2tl      = (dl) => dl.map(dele=>dele2t(dele));
const tl2dl      = (tl) => tl.map(t=>t2dele(t));

const is_dl      = (o) => is_ary(o) && o.every(r=>is_dele(r)); 


////

const _FNARY = ["tl","dl","l","params","kvl"]


////
const append_tl        = (tl,ntl) => {
    ntl.forEach(t=>tl.push(t))
    return(tl)
}

const append_dl        =  (tl,dl)            => append_tl(tl,dl2tl(dl));
const append_l         =  (tl,l)             => append_tl(tl,l2tl(l));
const append_d         =  (tl,d)             => append_tl(tl,d2tl(d));
const append_params    =  (tl,...params)     => append_l(tl,params);
const append_kvl       =  (tl,kl,vl)         => append_tl(tl,kvl2tl(kl,vl));

const _APPEND_ME = {append_tl,append_dl,append_l,append_params,append_kvl}

const append = (tl,k,v) => {tl.push([k,v]);return(tl)}

////
const prepend_tl        = (tl,ntl) => {
    forlst(ntl,(t)=>{tl.unshift(t)}) 
    return(tl)
}

const prepend_dl        =  (tl,dl)            => prepend_tl(tl,dl2tl(dl));
const prepend_l         =  (tl,l)             => prepend_tl(tl,l2tl(l));
const prepend_d         =  (tl,d)              => prepend_tl(tl,d2tl(d));
const prepend_params    =  (tl,...params)     => prepend_l(tl,params);
const prepend_kvl       =  (tl,kl,vl)         => prepend_tl(tl,kvl2tl(kl,vl));

const _PREPEND_ME = {prepend_tl,prepend_dl,prepend_l,prepend_params,prepend_kvl}

const prepend = (tl,k,v) => {tl.unshift([k,v]);return(tl)}


////

const hasi = (tl,index) => (index>=0 && index<tl.length)


////

const insert_tl_before  = (tl,index,ntl) => {
    if(hasi(tl,index)) {
        tl.splice(index,0,...ntl)
    } else {}
    return(tl)
}

const insert_dl_before      = (tl,index,dl) => insert_tl_before(tl,index,dl2tl(dl));
const insert_l_before       = (tl,index,l) => insert_tl_before(tl,index,l2tl(l));
const insert_d_before       = (tl,index,d) => insert_tl_before(tl,index,d2tl(d));
const insert_params_before  = (tl,index,...params) => insert_tl_before(tl,index,l2tl(params));
const insert_kvl_before     = (tl,index,kl,vl) => insert_tl_before(tl,index,kvl2tl(kl,vl));


const _INSERT_BEFORE_ME = [
    insert_tl_before,
    insert_dl_before,
    insert_l_before,
    insert_d_before,
    insert_params_before,
    insert_kvl_before,
]

const insert_before = (tl,index,k,v) => insert_tl_before(tl,index,[[k,v]]);

////

const insert_tl_after  = (tl,index,ntl) => {
    if(hasi(tl,index)) {
        tl.splice(index+1,0,...ntl)
    } else {}
    return(tl)
}

const insert_dl_after      = (tl,index,dl) => insert_tl_after(tl,index,dl2tl(dl));
const insert_l_after       = (tl,index,l) => insert_tl_after(tl,index,l2tl(l));
const insert_d_after       = (tl,index,d) => insert_tl_after(tl,index,d2tl(d));
const insert_params_after  = (tl,index,...params) => insert_tl_after(tl,index,l2tl(params));
const insert_kvl_after     = (tl,index,kl,vl) => insert_tl_after(tl,index,kvl2tl(kl,vl));


const _INSERT_AFTER_ME = [
    insert_tl_after,
    insert_dl_after,
    insert_l_after,
    insert_d_after,
    insert_params_after,
    insert_kvl_after,
]

const insert_after = (tl,index,k,v) => insert_tl_after(tl,index,[[k,v]]);


////

const pop_between    = (tl,from,to) => tl.splice(from,to-from);
const pop_before     = (tl,index)   => {
    if(hasi(tl,index-1)) {
        return(pop_between(tl,0,index))
    } else {return([])}
}
const pop_after      = (tl,index)   => {
    if(hasi(tl,index+1)) {
        return(pop_between(tl,index+1,tl.length))
    } else {return([])}
}

const pop_to         = (tl,index)   => pop_before(tl,index);
const pop_from       = (tl,index)   => pop_after(tl,index-1);

const pop_some = (tl,...indexes) => {
    let poped = []
    indexes = indexes.filter(index=>hasi(tl,index));
    indexes.sort();
    if(indexes.length>0) {
        poped.push(tl.splice(indexes[0],1)[0]);
        let i=1;
        while(i<indexes.length) {
            let index = indexes[i]-i;
            poped.push(tl.splice(index,1)[0]);
            i = i +1;
        }
    }
    return(poped)
}


const _POP_ME = { 
    pop_between,
    pop_before,
    pop_after,
    pop_from,
    pop_to,
    pop_some,
}

const pop = (tl,...indexes) => {
    if(indexes.length ===0) {
        return(tl.pop())
    } else if(indexes.length ===1) {
        return(tl.splice(indexes[0],1)[0])
    } else {
        return(pop_some(tl,...indexes))
    }
}

const shift = (tl,n=1) => {
    if(n===1) {
        return(tl.shift())
    } else {
        return(tl.splice(0,n))
    }
}

////

const rm_between = (tl,from,to) => {
    pop_between(tl,from,to);
    return(tl)
}

const rm_before = (tl,index) => {
    pop_before(tl,index);
    return(tl)
}

const rm_after = (tl,index) => {
    pop_after(tl,index);
    return(tl)
}


const rm_from = (tl,index) => {
    pop_from(tl,index);
    return(tl)
}

const rm_to = (tl,index) => {
    pop_to(tl,index);
    return(tl)
}


const rm_some = (tl,...indexes) => {
    pop_some(tl,...indexes);
    return(tl)
}


const _RM_ME = {
    rm_between,
    rm_before,
    rm_after,
    rm_from,
    rm_to,
    rm_some,
}

const rm_fst  = (tl) => {
    tl.shift();
    return(tl)
}

const rm_lst  = (tl) => {
    tl.pop();
    return(tl)
}


const rm      = (tl,...indexes) => {
    if(indexes.length ===0) {
    } else if(indexes.length ===1) {
        tl.splice(indexes[0],1);
    } else {
        pop_some(tl,...indexes)
    }
    return(tl)
}


////

const get         = (tl,index) => tl[index];
const get_some    = (tl,...indexes) => tl.filter((t,i)=>indexes.includes(i));

const _GET_ME = { get,get_some}

////

const _kmatch  = (t,k,v)=> t[0]===k;
const _vmatch  = (t,k,v)=> t[1] ===v;
const _kvmatch = (t,k,v)=> t[0]===k && t[1] ===v;

const all_idxs_engine = (tl,k,v,f) => {
    let idxs = []
    for(let i=0;i<tl.length;i++) {
        if(f(tl[i],k,v)) {idxs.push(i)}
    }
    return(idxs)
}


const lst_idx_engine  = (tl,k,v,f) => {
    for(let i=tl.length-1;i>-1;i--) {
        if(f(tl[i],k,v)) {return(i)}
    }
    return(-1)
}

const which_idx_engine = (tl,k,v,f,ri) => {
    let c = 0
    for(let i=0;i<tl.length;i++) {
        if(f(tl[i],k,v)) {
            if(c===ri) {return(i)}
            c = c+1
        }
    }
    return(-1)

}

const some_idxs_engine = (tl,k,v,f,...ris) => {
    let idxs = []
    let c = 0
    for(let i=0;i<tl.length;i++) {
        if(f(tl[i],k,v)) {
            if(ris.includes(c)) {idxs.push(i)}
            c = c+1
        }
    }
    return(idxs)
}


const all_idxs_of_k     = (tl,k) => all_idxs_engine(tl,k,undefined,_kmatch);
const fst_idx_of_k      = (tl,k) => which_idx_engine(tl,k,undefined,_kmatch,0);
const lst_idx_of_k      = (tl,k) => lst_idx_engine(tl,k,undefined,_kmatch);
const which_idx_of_k    = (tl,k,ri) => which_idx_engine(tl,k,undefined,_kmatch,ri);
const some_idxs_of_k    = (tl,k,...ris) => some_idxs_engine(tl,k,undefined,_kmatch,...ris);

const all_idxs_of_v     = (tl,v) => all_idxs_engine(tl,undefined,v,_vmatch);
const fst_idx_of_v      = (tl,v) => which_idx_engine(tl,undefined,v,_vmatch,0);
const lst_idx_of_v      = (tl,v) => lst_idx_engine(tl,undefined,v,_vmatch);
const which_idx_of_v    = (tl,v,ri) => which_idx_engine(tl,undefined,v,_vmatch,ri);
const some_idxs_of_v    = (tl,v,...ris) => some_idxs_engine(tl,undefined,v,_vmatch,...ris);


const all_idxs_of_kv    = (tl,k,v) => all_idxs_engine(tl,k,v,_kvmatch)
const fst_idx_of_kv     = (tl,k,v) => which_idx_engine(tl,k,v,_kvmatch,0);
const lst_idx_of_kv     = (tl,k,v) => lst_idx_engine(tl,k,v,_kvmatch);
const which_idx_of_kv   = (tl,k,v,ri) => which_idx_engine(tl,k,v,_kvmatch,ri);
const some_idxs_of_kv   = (tl,k,v,...ris) => some_idxs_engine(tl,k,v,_kvmatch,...ris);


const _IDX_ME = {
    all_idxs_of_k,
    fst_idx_of_k,
    lst_idx_of_k,
    which_idx_of_k,
    some_idxs_of_k,
    all_idxs_of_v,
    fst_idx_of_v,
    lst_idx_of_v,
    which_idx_of_v,
    some_idxs_of_v,
    all_idxs_of_kv,
    fst_idx_of_kv,
    lst_idx_of_kv,
    which_idx_of_kv,
    some_idxs_of_kv,
}


////

const hask  = (tl,k) => tl.some(t=>_kmatch(t,k,undefined)); 
const hasv  = (tl,v) => tl.some(t=>_vmatch(t,undefined,v));
const haskv = (tl,k,v) => tl.some(t=>_kvmatch(t,k,v));


const _HAS_ME = {hask,hasv,haskv}

const count_engine = (tl,k,v,f) => tl.filter(t=>f(t,k,v)).length;

const kcount   = (tl,k)   => count_engine(tl,k,undefined,_kmatch);
const vcount   = (tl,v)   => count_engine(tl,undefined,v,_vmatch);
const kvcount  = (tl,k,v) => count_engine(tl,k,v,_kvmatch);

const _COUNT_ME = {kcount,vcount,kvcount}

////

const every = (tl,f) => {
    for(let i=0;i<tl.length;i++) {
        let [k,v] = tl[i];
        if(f(v,k,i)) {} else {return(false)}
    }
    return(true)
}

const any = (tl,f) => {
    for(let i=0;i<tl.length;i++) {
        let [k,v] = tl[i];
        if(f(v,k,i)) {return(true)} else {}
    }
    return(false)
}


const _COND_ME = {every,any}

////

const mapk   = (tl,f) => tl.map((t,i)=>[f(t[1],t[0],i),t[1]]);
const mapv   = (tl,f) => tl.map((t,i)=>[t[0],f(t[1],t[0],i)]);
const mapkv  = (tl,kf,vf) => tl.map((t,i)=>[kf(t[1],t[0],i),vf(t[1],t[0],i)]);
const map    = (tl,f) => tl.map((t,i)=>f(t[1],t[0],i));

const _MP_ME = {map,mapk,mapv,mapkv}


const filter = (tl,f) => tl.filter((t,i)=>f(t[1],t[0],i));

const _FLTR_ME = {filter}


const mapk_inplace   = (tl,f) => {
    for(let i=0;i<tl.length;i++) {
        let t = tl[i];
        t[0] = f(t[1],t[0],i);
        tl[i] = t;
    }
    return(tl)
}
const mapv_inplace   = (tl,f) => {
    for(let i=0;i<tl.length;i++) {
        let t = tl[i];
        t[1] = f(t[1],t[0],i);
        tl[i] = t;
    }
    return(tl)
}

const mapkv_inplace  =  (tl,kf,vf) => {
    for(let i=0;i<tl.length;i++) {
        let t = tl[i];
        t[0] = kf(t[1],t[0],i);
        t[1] = vf(t[1],t[0],i);
        tl[i] = t;
    }
    return(tl)
}
const map_inplace    =  (tl,f) => {
    for(let i=0;i<tl.length;i++) {
        let t = tl[i];
        t = f(t[1],t[0],i);
        tl[i] = t;
    }
    return(tl)
}

const _INPLACE_ME = {mapk_inplace,mapv_inplace,mapkv_inplace,map_inplace}

////

const foldl = (tl,f,acc) => {
    for(let i=0;i<tl.length;i++) {
        let t = tl[i];
        acc = f(acc,t[1],t[0],i)
    }
    return(acc)
}
const foldr = (tl,f,acc) => {
    for(let i=tl.length-1;i>-1;i--) {
        let t = tl[i];
        acc = f(acc,t[1],t[0],i)
    }
    return(acc)
}

const _FOLD_ME = {foldl,foldr}


////
const kget_all = (tl,k) => all_idxs_of_k(tl,k).map(idx=>tl[idx]); 

const kget_fst = (tl,k) => {
    let idx = fst_idx_of_k(tl,k);
    return((idx===-1)?undefined:tl[idx])
}

const kget_lst = (tl,k) => {
    let idx = lst_idx_of_k(tl,k);
    return((idx===-1)?undefined:tl[idx]);
}

const kget_which = (tl,k,ri) => {
    let idx = which_idx_of_k(tl,k,ri);
    return((idx===-1)?undefined:tl[idx]);
}

const kget_some = (tl,k,...ris) => some_idxs_of_k(tl,k,...ris).map(idx=>tl[idx]);



const kget = (tl,...ks) => {
    if(ks.length ===0) {
        return(undefined)
    } else if(ks.length ===1) {
        return(kget_fst(tl,ks[0]))
    } else {
        return(ks.map(k=>kget_fst(tl,k)))
    }
}


const kgetv_fst = (tl,k) => {
    let fst = kget_fst(tl,k);
    return((fst===undefined)?empty:fst[1])
}

const kgetv_lst = (tl,k) => {
    let lst = kget_lst(tl,k);
    return((lst===undefined)?empty:lst[1])
}

const kgetv_which = (tl,k,ri) => {
    let t = kget_which(tl,k,ri);
    return((t===undefined)?empty:t[1])
}

const kgetv_some = (tl,k,...ris) => {
    let ary = kget_some(tl,k,...ris);
    return(ary.map(t=>t[1]))
}

const kgetv_all = (tl,k) => {
    let ary = kget_all(tl,k);
    return(ary.map(t=>t[1]))
}

const kgetv = (tl,...ks) => {
    if(ks.length ===0) {
        return(empty)
    } else if(ks.length ===1) {
        return(kgetv_fst(tl,ks[0]))
    } else {
        return(ks.map(k=>kgetv_fst(tl,k)))
    }
}


const _KGET_ME = {
    kget_all,kget_which,kget_fst,kget_lst,kget_some,
    kgetv,kgetv_all,kgetv_which,kgetv_fst,kgetv_lst,kgetv_some,
}


const vget_all = (tl,v) => all_idxs_of_v(tl,v).map(idx=>tl[idx]);

const vget_fst = (tl,v) => {
    let idx = fst_idx_of_v(tl,v);
    return((idx===-1)?undefined:tl[idx])
}

const vget_lst = (tl,v) => {
    let idx = lst_idx_of_v(tl,v);
    return((idx===-1)?undefined:tl[idx]);
}

const vget_which = (tl,v,ri) => {
    let idx = which_idx_of_v(tl,v,ri);
    return((idx===-1)?undefined:tl[idx]);
}

const vget_some = (tl,v,...ris) => some_idxs_of_v(tl,v,...ris).map(idx=>tl[idx]);



const vget = (tl,...vs) => {
    if(vs.length ===0) {
        return(undefined)
    } else if(vs.length ===1) {
        return(vget_fst(tl,vs[0]))
    } else {
        return(vs.map(v=>vget_fst(tl,v)))
    }
}


const vgetk_fst = (tl,v) => {
    let fst = vget_fst(tl,v);
    return((fst===undefined)?empty:fst[0])
}

const vgetk_lst = (tl,v) => {
    let lst = vget_lst(tl,v);
    return((lst===undefined)?empty:lst[0])
}

const vgetk_which = (tl,v,ri) => {
    let t = vget_which(tl,v,ri);
    return((t===undefined)?empty:t[0])
}

const vgetk_some = (tl,v,...ris) => {
    let ary = vget_some(tl,v,...ris);
    return(ary.map(t=>t[0]))
}

const vgetk_all = (tl,v) => {
    let ary = vget_all(tl,v);
    return(ary.map(t=>t[0]))
}

const vgetk = (tl,...vs) => {
    if(vs.length ===0) {
        return(empty)
    } else if(vs.length ===1) {
        return(vgetk_fst(tl,vs[0]))
    } else {
        return(vs.map(v=>vgetk_fst(tl,v)))
    }
}


const _VGET_ME = {
    vget_all,vget_which,vget_fst,vget_lst,vget_some,
    vgetk,vgetk_all,vgetk_which,vgetk_fst,vgetk_lst,vgetk_some,
}


////

const set         = (tl,index,k,v)   => (tl[index] =[k,v]);
const set_some    = (tl,k,v,...idxs) => {
    idxs.forEach(idx=>{tl[idx]=[k,v]})
}

const _SET_ME = {set,set_some}

////

const kset_fst   = (tl,k,nk,nv) => {
    let t = kget_fst(tl,k);
    if(t!==undefined) {
        t[0] = nk;t[1] = nv;
    } else {}
}
const kset_lst   = (tl,k,nk,nv) => {
    let t = kget_lst(tl,k);
    if(t!==undefined) {
        t[0] = nk;t[1] = nv;
    } else {}
}
const kset_which = (tl,k,ri,nk,nv) => {
    let t = kget_which(tl,k,ri);
    if(t!==undefined) {
        t[0] = nk;t[1] = nv;
    } else {}
}
const kset_some  = (tl,k,nk,nv,...ris) => {
    let ary = kget_some(tl,k,...ris);
    ary.forEach(t=>{t[0] = nk;t[1] = nv;}) 
}

const kset_all   = (tl,k,nk,nv) => {
    let ary = kget_all(tl,k);
    ary.forEach(t=>{t[0] = nk;t[1] = nv;})
}

//

const ksetk_fst   = (tl,k,nk) => {
    let t = kget_fst(tl,k);
    if(t!==undefined) {
        t[0] = nk;
    } else {}
}
const ksetk_lst   = (tl,k,nk) => {
    let t = kget_lst(tl,k);
    if(t!==undefined) {
        t[0] = nk;
    } else {}
}
const ksetk_which = (tl,k,ri,nk) => {
    let t = kget_which(tl,k,ri);
    if(t!==undefined) {
        t[0] = nk;
    } else {}
}
const ksetk_some  = (tl,k,nk,...ris) => {
    let ary = kget_some(tl,k,...ris);
    ary.forEach(t=>{t[0] = nk;})
}
const ksetk_all   = (tl,k,nk) => {
    let ary = kget_all(tl,k);
    ary.forEach(t=>{t[0] = nk;})
}

//

const ksetv_fst   = (tl,k,nv) => {
    let t = kget_fst(tl,k);
    if(t!==undefined) {
        t[1] = nv;
    } else {}
}
const ksetv_lst   = (tl,k,nv) => {
    let t = kget_lst(tl,k);
    if(t!==undefined) {
        t[1] = nv;
    } else {}
}
const ksetv_which = (tl,k,ri,nv) => {
    let t = kget_which(tl,k,ri);
    if(t!==undefined) {
        t[1] = nv;
    } else {}
}
const ksetv_some  = (tl,k,nv,...ris) => {
    let ary = kget_some(tl,k,...ris);
    ary.forEach(t=>{t[1] = nv;})
}
const ksetv_all   = (tl,k,nv) => {
    let ary = kget_all(tl,k);
    ary.forEach(t=>{t[1] = nv;})
}

const _KSET_ME = {
    kset_all,kset_which,kset_fst,kset_lst,kset_some,
    ksetk_all,ksetk_which,ksetk_fst,ksetk_lst,ksetk_some,
    ksetv_all,ksetv_which,ksetv_fst,ksetv_lst,ksetv_some,
}

////
const vset_fst   = (tl,v,nk,nv) => {
    let t = vget_fst(tl,v);
    if(t!==undefined) {
        t[0] = nk;t[1] = nv;
    } else {}
}
const vset_lst   = (tl,v,nk,nv) => {
    let t = vget_lst(tl,v);
    if(t!==undefined) {
        t[0] = nk;t[1] = nv;
    } else {}
}
const vset_which = (tl,v,ri,nk,nv) => {
    let t = vget_which(tl,v,ri);
    if(t!==undefined) {
        t[0] = nk;t[1] = nv;
    } else {}
}
const vset_some  = (tl,v,nk,nv,...ris) => {
    let ary = vget_some(tl,v,...ris);
    ary.forEach(t=>{t[0] = nk;t[1] = nv;})
}

const vset_all   = (tl,v,nk,nv) => {
    let ary = vget_all(tl,v);
    ary.forEach(t=>{t[0] = nk;t[1] = nv;})
}

//

const vsetk_fst   = (tl,v,nk) => {
    let t = vget_fst(tl,v);
    if(t!==undefined) {
        t[0] = nk;
    } else {}
}
const vsetk_lst   = (tl,v,nk) => {
    let t = vget_lst(tl,v);
    if(t!==undefined) {
        t[0] = nk;
    } else {}
}
const vsetk_which = (tl,v,ri,nk) => {
    let t = vget_which(tl,v,ri);
    if(t!==undefined) {
        t[0] = nk;
    } else {}
}
const vsetk_some  = (tl,v,nk,...ris) => {
    let ary = vget_some(tl,v,...ris);
    ary.forEach(t=>{t[0] = nk;})
}
const vsetk_all   = (tl,v,nk) => {
    let ary = vget_all(tl,v);
    ary.forEach(t=>{t[0] = nk;})
}

//
const vsetv_fst   = (tl,v,nv) => {
    let t = vget_fst(tl,v);
    if(t!==undefined) {
        t[1] = nv;
    } else {}
}
const vsetv_lst   = (tl,v,nv) => {
    let t = vget_lst(tl,v);
    if(t!==undefined) {
        t[1] = nv;
    } else {}
}
const vsetv_which = (tl,v,ri,nv) => {
    let t = vget_which(tl,v,ri);
    if(t!==undefined) {
        t[1] = nv;
    } else {}
}
const vsetv_some  = (tl,v,nv,...ris) => {
    let ary = vget_some(tl,v,...ris);
    ary.forEach(t=>{t[1] = nv;})
}
const vsetv_all   = (tl,v,nv) => {
    let ary = vget_all(tl,v);
    ary.forEach(t=>{t[1] = nv;})
}

const _VSET_ME = {
    vset_all,vset_which,vset_fst,vset_lst,vset_some,
    vsetk_all,vsetk_which,vsetk_fst,vsetk_lst,vsetk_some,
    vsetv_all,vsetv_which,vsetv_fst,vsetv_lst,vsetv_some,
}

////

const kvset_fst   = (tl,k,v,nk,nv) => {
    let idx = fst_idx_of_kv(tl,k,v);
    if(idx!==-1) {
        tl[idx][0] = nk;tl[idx][1] = nv;
    } else {}
}

const kvset_lst   = (tl,k,v,nk,nv) => {
    let idx = lst_idx_of_kv(tl,k,v);
    if(idx!==-1) {
        tl[idx][0] = nk;tl[idx][1] = nv;
    } else {}
}

const kvset_which = (tl,k,v,ri,nk,nv) => {
    let idx =  which_idx_of_kv(tl,k,v,ri)
    if(idx!==-1) {
        tl[idx][0] = nk;tl[idx][1] = nv;
    } else {}
}
const kvset_some  = (tl,k,v,nk,nv,...ris) => {
    let ary = some_idxs_of_kv(tl,k,v,...ris);
    ary.forEach(idx=>{tl[idx][0] = nk;tl[idx][1] = nv;})
}

const kvset_all   = (tl,k,v,nk,nv) => {
    let ary = all_idxs_of_kv(tl,k,v);
    ary.forEach(idx=>{tl[idx][0] = nk;tl[idx][1] = nv;})
}


const kvsetk_fst   = (tl,k,v,nk) => {
    let idx = fst_idx_of_kv(tl,k,v);
    if(idx!==-1) {
        tl[idx][0] = nk;
    } else {}
}

const kvsetk_lst   = (tl,k,v,nk) => {
    let idx = lst_idx_of_kv(tl,k,v);
    if(idx!==-1) {
        tl[idx][0] = nk;
    } else {}
}

const kvsetk_which = (tl,k,v,ri,nk) => {
    let idx =  which_idx_of_kv(tl,k,v,ri)
    if(idx!==-1) {
        tl[idx][0] = nk;
    } else {}
}
const kvsetk_some  = (tl,k,v,nk,...ris) => {
    let ary = some_idxs_of_kv(tl,k,v,...ris);
    ary.forEach(idx=>{tl[idx][0] = nk;})
}

const kvsetk_all   = (tl,k,v,nk) => {
    let ary = all_idxs_of_kv(tl,k,v);
    ary.forEach(idx=>{tl[idx][0] = nk;})
}

const kvsetv_fst   = (tl,k,v,nv) => {
    let idx = fst_idx_of_kv(tl,k,v);
    if(idx!==-1) {
        tl[idx][1] = nv;
    } else {}
}

const kvsetv_lst   = (tl,k,v,nv) => {
    let idx = lst_idx_of_kv(tl,k,v);
    if(idx!==-1) {
        tl[idx][1] = nv;
    } else {}
}

const kvsetv_which = (tl,k,v,ri,nv) => {
    let idx =  which_idx_of_kv(tl,k,v,ri)
    if(idx!==-1) {
        tl[idx][1] = nv;
    } else {}
}
const kvsetv_some  = (tl,k,v,nv,...ris) => {
    let ary = some_idxs_of_kv(tl,k,v,...ris);
    ary.forEach(idx=>{tl[idx][1] = nv;})
}

const kvsetv_all   = (tl,k,v,nv) => {
    let ary = all_idxs_of_kv(tl,k,v);
    ary.forEach(idx=>{tl[idx][1] = nv;})
}

const _KVSET_ME = {
    kvset_all,kvset_which,kvset_fst,kvset_lst,kvset_some,
    kvsetk_all,kvsetk_which,kvsetk_fst,kvsetk_lst,kvsetk_some,
    kvsetv_all,kvsetv_which,kvsetv_fst,kvsetv_lst,kvsetv_some,
}


////

const uniq = (tl) => {
    let ntl = []
    for(let [k,v] of tl) {
        if(haskv(ntl,k,v)) {
        } else {
            ntl.push([k,v])
        }
    }
    return(ntl)
}

const kuniq = (tl,update=false) => {
    let ntl = []
    for(let [k,v] of tl) {
        let idx = fst_idx_of_k(ntl,k)
        if(idx>=0) {
            if(update) {
                ntl[idx] = [k,v]
            } else {}
        } else {
            ntl.push([k,v])
        }
    }
    return(ntl)
}

const vuniq = (tl,update=false) => {
    let ntl = []
    for(let [k,v] of tl) {
        let idx = fst_idx_of_v(ntl,v)
        if(idx>=0) {
            if(update) {
                ntl[idx] = [k,v]
            } else {}
        } else {
            ntl.push([k,v])
        }
    }
    return(ntl)
}


const _UNIQ_ME = {uniq,kuniq,vuniq}

////

const ksort = (tl) => {tl.sort(pair_kcmp)}
const vsort = (tl) => {tl.sort(pair_vcmp)}
const kvsort = (tl) => {tl.sort(pair_kvcmp)}
const vksort = (tl) => {tl.sort(pair_vkcmp)}

const _SORT_ME = {ksort,vsort,kvsort,vksort}

////

const update_fst = (tl,ntl) => {
    for(let [k,v] of ntl) {
        let idx = fst_idx_of_k(tl,k);
        if(idx !== -1) {
            tl[idx][1] = v
        } else {}
    }
}

const update_lst = (tl,ntl) => {
    for(let [k,v] of ntl) {
        let idx = lst_idx_of_k(tl,k);
        if(idx !== -1) {
            tl[idx][1] = v
        } else {}
    }
}

const update_which = (tl,ntl,ri) => {
    for(let [k,v] of ntl) {
        let idx = which_idx_of_k(tl,k);
        if(idx !== -1) {
            tl[idx][1] = v
        } else {}
    }
}

const update_some = (tl,ntl,...ris) => {
    for(let [k,v] of ntl) {
        let idxs = some_idxs_of_k(tl,k,...ris);
        idxs.forEach(idx=>{tl[idx][1] = v})
    }
}
 
const update_all = (tl,ntl) => {
    for(let [k,v] of ntl) {
        let idxs = all_idxs_of_k(tl,k);
        idxs.forEach(idx=>{tl[idx][1] = v})
    }
}

const assign_fst = (tl,ntl) => {
    for(let [k,v] of ntl) {
        let idx = fst_idx_of_k(tl,k);
        if(idx !== -1) {
            tl[idx][1] = v
        } else {
            tl.push([k,v])
        }
    }
}

const assign_lst = (tl,ntl) => {
    for(let [k,v] of ntl) {
        let idx = lst_idx_of_k(tl,k);
        if(idx !== -1) {
            tl[idx][1] = v
        } else {
            tl.push([k,v])
        }
    }
}

const assign_which = (tl,ntl,ri) => {
    for(let [k,v] of ntl) {
        let idx = which_idx_of_k(tl,k,ri);
        if(idx !== -1) {
            tl[idx][1] = v
        } else {
            tl.push([k,v])
        }
    }
}

const assign_some = (tl,ntl,...ris) => {
    for(let [k,v] of ntl) {
        let idxs = some_idxs_of_k(tl,k,...ris);
        if(idxs.length !==0) {
            idxs.forEach(idx=>{tl[idx][1] = v});
        } else {
            tl.push([k,v])
        }
    }
}

const assign_all = (tl,ntl) => {
    for(let [k,v] of ntl) {
        let idxs = all_idxs_of_k(tl,k);
        if(idxs.length !==0) {
            idxs.forEach(idx=>{tl[idx][1] = v});
        } else {
            tl.push([k,v])
        }
    }
}

const replenish = (tl,ntl) => {
    ntl = kuniq(ntl,true);
    for(let [k,v] of ntl) {
        if(hask(tl,k,v)) {
        } else {
            tl.push([k,v])
        }
    }
}

const _UP_ASGN_ME = {
    update_fst,update_lst,update_which,update_some,update_all,
    assign_fst,assign_lst,assign_which,assign_some,assign_all,
    replenish,
}

////

const findi_fst = (tl,condf) => {
    for(let i=0;i<tl.length;i++) {
        if(condf(tl[i][1],tl[i][0],i)) {
            return(i)
        }
    }
    return(-1)
}

const findi_lst = (tl,condf) => {
    for(let i=tl.length-1;i>-1;i--) {
        if(condf(tl[i][1],tl[i][0],i)) {
            return(i)
        }
    }
    return(-1)
}

const findi_which = (tl,condf,ri) => {
    let c = 0
    for(let i=0;i<tl.length;i++) {
        if(condf(tl[i][1],tl[i][0],i)) {
            if(c===ri) {return(i)}
            c = c+1;
        }
    }
    return(-1)
}

const findi_some = (tl,condf,...ris) => {
    let c = 0;
    let idxs =[]
    for(let i=0;i<tl.length;i++) {
        if(condf(tl[i][1],tl[i][0],i)) {
            if(ris.includes(c)) {idxs.push(i)}
            c = c+1;
        }
    }
    return(idxs)
}

const findi_all = (tl,condf) => {
    let idxs =[]
    for(let i=0;i<tl.length;i++) {
        if(condf(tl[i][1],tl[i][0],i)) {
            idxs.push(i)
        }
    }
    return(idxs)
}

const findk_fst = (tl,condf) => {
    let idx = findi_fst(tl,condf);
    if(idx ===-1) {
        return(empty)
    } else {
        return(tl[idx][0])
    }
}

const findk_lst = (tl,condf) => {
    let idx = findi_lst(tl,condf);
    if(idx ===-1) {
        return(empty)
    } else {
        return(tl[idx][0])
    }
}

const findk_which = (tl,condf,ri) => {
    let idx = findi_which(tl,condf,ri);
    if(idx ===-1) {
        return(empty)
    } else {
        return(tl[idx][0])
    }
}

const findk_some = (tl,condf,...ris) => {
    let idxs = findi_some(tl,condf,...ris);
    return(idxs.map(idx=>tl[idx][0]))
}

const findk_all =  (tl,condf) => {
    let idxs = findi_all(tl,condf);
    return(idxs.map(idx=>tl[idx][0]))
}

const findv_fst = (tl,condf) => {
    let idx = findi_fst(tl,condf);
    if(idx ===-1) {
        return(empty)
    } else {
        return(tl[idx][1])
    }
}

const findv_lst = (tl,condf) => {
    let idx = findi_lst(tl,condf);
    if(idx ===-1) {
        return(empty)
    } else {
        return(tl[idx][1])
    }
}

const findv_which = (tl,condf,ri) => {
    let idx = findi_which(tl,condf,ri);
    if(idx ===-1) {
        return(empty)
    } else {
        return(tl[idx][1])
    }
}

const findv_some = (tl,condf,...ris) => {
    let idxs = findi_some(tl,condf,...ris);
    return(idxs.map(idx=>tl[idx][1]))
}

const findv_all =  (tl,condf) => {
    let idxs = findi_all(tl,condf);
    return(idxs.map(idx=>tl[idx][1]))
}


const findkv_fst = (tl,condf) => {
    let idx = findi_fst(tl,condf);
    if(idx ===-1) {
        return(empty)
    } else {
        return(tl[idx])
    }
}

const findkv_lst = (tl,condf) => {
    let idx = findi_lst(tl,condf);
    if(idx ===-1) {
        return(undefined)
    } else {
        return(tl[idx])
    }
}

const findkv_which = (tl,condf,ri) => {
    let idx = findi_which(tl,condf,ri);
    if(idx ===-1) {
        return(undefined)
    } else {
        return(tl[idx])
    }
}

const findkv_some = (tl,condf,...ris) => {
    let idxs = findi_some(tl,condf,...ris);
    return(idxs.map(idx=>tl[idx]))
}

const findkv_all =  (tl,condf) => {
    let idxs = findi_all(tl,condf);
    return(idxs.map(idx=>tl[idx]))
}



const _FIND_ME = {
     findi_fst,findi_lst,findi_which,findi_some,findi_all,
     findk_fst,findk_lst,findk_which,findk_some,findk_all,
     findv_fst,findv_lst,findv_which,findv_some,findv_all,
     findkv_fst,findkv_lst,findkv_which,findkv_some,findkv_all,
}


////


const kdel_fst = (tl,k) =>{
    let idx = fst_idx_of_k(tl,k);
    if(idx>=0) {
        return(tl.splice(idx,1)[0])
    } else {
    }
}

const kdel_lst = (tl,k) =>{
    let idx = lst_idx_of_k(tl,k);
    if(idx>=0) {
        return(tl.splice(idx,1)[0])
    } else {
    }
}

const kdel_which = (tl,k,ri) =>{
    let idx = which_idx_of_k(tl,k,ri);
    if(idx>=0) {
        return(tl.splice(idx,1)[0])
    } else {
    }
}


const kdel_some = (tl,k,...ris) =>{
    let idxs = some_idxs_of_k(tl,k,...ris);
    return(pop_some(tl,...idxs)) 
}


const kdel_all = (tl,k) =>{
    let idxs = all_idxs_of_k(tl,k);
    return(pop_some(tl,...idxs))
}

//

const vdel_fst = (tl,v) =>{
    let idx = fst_idx_of_v(tl,v);
    if(idx>=0) {
        return(tl.splice(idx,1)[0])
    } else {
    }
}

const vdel_lst = (tl,v) =>{
    let idx = lst_idx_of_v(tl,v);
    if(idx>=0) {
        return(tl.splice(idx,1)[0])
    } else {
    }
}

const vdel_which = (tl,v,ri) =>{
    let idx = which_idx_of_v(tl,v,ri);
    if(idx>=0) {
        return(tl.splice(idx,1)[0])
    } else {
    }
}


const vdel_some = (tl,v,...ris) =>{
    let idxs = some_idxs_of_v(tl,v,...ris);
    return(pop_some(tl,...idxs))
}

const vdel_all = (tl,v) =>{
    let idxs = all_idxs_of_v(tl,v);
    return(pop_some(tl,...idxs))
}

//

const kvdel_fst = (tl,k,v) =>{
    let idx = fst_idx_of_kv(tl,k,v);
    if(idx>=0) {
        return(tl.splice(idx,1)[0])
    } else {
    }
}

const kvdel_lst = (tl,k,v) =>{
    let idx = lst_idx_of_kv(tl,k,v);
    if(idx>=0) {
        return(tl.splice(idx,1)[0])
    } else {
    }
}

const kvdel_which = (tl,k,v,ri) =>{
    let idx = which_idx_of_kv(tl,k,v,ri);
    if(idx>=0) {
        return(tl.splice(idx,1)[0])
    } else {
    }
}


const kvdel_some = (tl,k,v,...ris) =>{
    let idxs = some_idxs_of_kv(tl,k,v,...ris);
    return(pop_some(tl,...idxs))
}

const kvdel_all = (tl,k,v) =>{
    let idxs = all_idxs_of_kv(tl,k,v);
    return(pop_some(tl,...idxs))
}



const _DEL_ME = {
     kdel_fst,kdel_lst,kdel_which,kdel_some,kdel_all,
     vdel_fst,vdel_lst,vdel_which,vdel_some,vdel_all,
     kvdel_fst,kvdel_lst,kvdel_which,kvdel_some,kvdel_all,
}


const kdel = (tl,...ks) => {
    if(ks.length ===0) {
    } else if(ks.length===1) {
        return(kdel_fst(tl,ks[0]))
    } else {
        return(ks.map(k=>kdel_fst(tl,k)).filter(t=>t!==undefined))
    }
}

const vdel = (tl,...vs) => {
    if(vs.length ===0) {
    } else if(ks.length===1) {
        return(vdel_fst(tl,vs[0]))
    } else {
        return(vs.map(v=>vdel_fst(tl,v)).filter(t=>t!==undefined))
    }
}

const kvdel = (tl,...kvs) => {
    let ntl = l2tl(kvs);
    if(ntl.length ===0) {
    } else if(ntl.length===1) {
        return(kvdel_fst(tl,ntl[0][0],ntl[0][1]))
    } else {
        return(ntl.map(t=>kvdel_fst(tl,t[0],t[1])).filter(t=>t!==undefined))
    }
}

////


const proxy = (tl) => {
    return(
        new Proxy(
            tl,
            {
                get:function(target, property, receiver) {
                    if(is_int_str(property)) {
                        if(hasi(target,property)) {
                            return(target[property][1])
                        } else if(hask(target,property)) {
                            return(kgetv_fst(target,property))
                        } else {
                            return(empty)
                        }
                    } else {
                        if(hask(target,property)) {
                            return(kgetv_fst(target,property))
                        } else {
                            return(empty)
                        }
                    }
                },
                set:function(target, property, value, receiver) {
                    if(is_int_str(property)) {
                        if(hasi(target,property)) {
                            target[property][1] = value;
                        } else if(hask(target,property)) {
                            ksetv_fst(target,property,value)
                        } else {
                        }
                    } else {
                        if(hask(target,property)) {
                            ksetv_fst(target,property,value)
                        } else {
                        }
                    }
                },
                deleteProperty: function(target, property) {
                    if(is_int_str(property)) {
                        if(hasi(target,property)) {
                            splice(target,property,1);
                            return(true)
                        } else if(hask(target,property)) {
                            kdel_fst(target,property)
                            return(true)
                        } else {
                           return(false) 
                        }
                    } else {
                        if(hask(target,property)) {
                            kdel_fst(target,property);
                            return(true)
                        } else {
                            return(false)
                        }
                    }
                },
            }
        )
    )
}

////

const _SYM_DICT = {
    set_tl : Symbol("set_tl")
}

class Tlist {
    #tl =[]
    ////
    constructor(tl=[]) { is_tl(tl)?(this.#tl = tl):undefined }
    ////
    set [_SYM_DICT.set_tl](tl) {this.#tl = tl}
    ////
    get tlist_ () {return(this.#tl)}
    get list_  () {return(tl2l(this.#tl))}
    get dict_  () {return(tl2d(this.#tl))}
    get dlist_ () {return(tl2dl(this.#tl))}
    get kvl_   () {return(tl2kvl(this.#tl))}
    get length_() {return(this.#tl.length)}
    get keys_()   {return(this.#tl.map(t=>t[0]))}
    get values_() {return(this.#tl.map(t=>t[1]))}
    ////
    clear () {this.#tl.clear()}
    ////
    push(k,v) {append(this.#tl,k,v);return(this)}
    extend(TL) {
        let tl = append_tl(this.#tl,TL.tlist_);
        this.#tl = tl;
        return(this);
    }
    unshift(k,v) {prepend(this.#tl,k,v);return(this)}
    prextend(TL) {
        let tl = prepend_tl(this.#tl,TL.tlist_);
        this.#tl = tl;
        return(this)
    }
    concat(TL) {
        let tl = this.#tl;
        let ntl = TL.tlist_;
        tl = tl.concat(ntl);
        return(new Tlist(tl))
    }
    ////
    swaplr() {
        let tl = tl_swaplr(this.#tl);
        this.#tl = tl;
        return(this)
    }
    reverse() {
        this.#tl.reverse();
        return(this);
    }  
    ////
    slice(si=0,ei) {
        let tl = this.#tl;
        tl = tl.slice(si,ei);
        return(new Tlist(tl))
    }
    fill(t,si=0,ei) {
        if(is_pair(t)) {
            let tl = this.#tl;
            tl.fill(t,si,ei)
        } else {}
        return(this)
    }
    ////
    every(f) {return(_COND_ME.every(this.#tl,f))}
    any(f)   {return(_COND_ME.any(this.#tl,f))}
    ////
    filter(f)       {return(new Tlist(_FLTR_ME.filter(this.#tl,f)))}
    foldl(f,acc)  {return(_FOLD_ME.foldl(this.#tl,f,acc))}
    foldr(f,acc)  {return(_FOLD_ME.foldr(this.#tl,f,acc))}
    ////
    get(i) {return(this.tlist_[i])}
    get_some(...indexes) {return(new Tlist(_GET_ME.get_some(this.#tl,...indexes)))}
    ////
    set(i,k,v) {this.tlist_[i] = [k,v]}
    set_some(k,v,...idxs) {_SET_ME.set_some(this.tlist_,k,v,...idxs)}
    ////
    ////
    uniq() {
        let tl = _UNIQ_ME.uniq(this.tlist_);
        return(new Tlist(tl));
    }
    uniq_inplace() {
        let tl = _UNIQ_ME.uniq(this.tlist_);
        this.#tl = tl;
        return(this)
    }
    kuniq(update=false) {
        let tl = _UNIQ_ME.kuniq(this.tlist_,update);
        return(new Tlist(tl));
    }
    kuniq_inplace(update=false) {
        let tl = _UNIQ_ME.kuniq(this.tlist_,update);
        this.#tl = tl;
        return(this)
    }
    vuniq(update=false) {
        let tl = _UNIQ_ME.vuniq(this.tlist_,update);
        return(new Tlist(tl));
    }
    vuniq_inplace(update=false) {
        let tl = _UNIQ_ME.vuniq(this.tlist_,update);
        this.#tl = tl;
        return(this)
    }
    ////proxy
    get $_() {
        return(
            new Proxy(
                this,
                {
                    get:function(target, property, receiver) {
                        if(is_int_str(property)) {
                            if(target.hasi(property)) {
                                return(target.tlist_[property][1])
                            } else if(target.hask(property)) {
                                return(target.kgetv_fst(property))
                            } else {
                                return(empty)
                            }
                        } else {
                            if(target.hask(property)) {
                                return(target.kgetv_fst(property))
                            } else {
                                return(empty)
                            }
                        }
                    },
                    set:function(target, property, value, receiver) {
                        if(is_int_str(property)) {
                            if(target.hasi(property)) {
                                target.tlist_[property][1] = value;
                            } else if(target.hask(property)) {
                                target.ksetv_fst(property,value)
                            } else {
                            }
                        } else {
                            if(target.hask(property)) {
                                target.ksetv_fst(property,value)
                            } else {
                            }                        
                        }
                    },
                    deleteProperty: function(target, property) {
                        if(is_int_str(property)) {
                            if(target.hasi(property)) {
                                splice(target.tlist_,property,1)
                                return(true)
                            } else if(target.hask(property)) {
                                target.kdel_fst(property)
                                return(true)
                            } else {
                                return(false)
                            }
                        } else {
                            if(target.hask(property)) {
                                target.kdel_fst(property);
                                return(true)
                            } else {
                                return(false)
                            }
                        }
                    },
                }
            )
        )
    }
}

////

function _repr(that) {
    let tl = that.tlist_;
    if(tl.length ===0) {return({})}
    let ary = ["{"];
    for(let i=0;i<tl.length;i++) {
        let t = tl[i];
        let line = JSON.stringify(t[0],null,4);
        line = indent(line); 
        if(t[1] instanceof Tlist) {
            line = line + ' : ' + `Tlist {.../*  .$_[${i}]   */...} ` + ' ,' 
        } else {
            line = line + ' : ' + JSON.stringify(t[1],null,4) + ' ,';
        }
        ary.push(line)
    }
    ary[ary.length-1] = ary[ary.length-1].slice(0,ary[ary.length-1].length-1);
    ary.push("}\n")
    return(ary.join("\n"))
}

add_repr(Tlist,_repr);


function _add_append(Tlist) {
    _FNARY.forEach(
        fn=> {
            Tlist.prototype["append_"+fn] = function (...params) {
                let tl = _APPEND_ME["append_"+fn](this.tlist_,...params);
                this[_SYM_DICT.set_tl] = tl;
                return(this)
            }
        }
    );
    Tlist.prototype["append"] = function(k,v) {
        let tl = append(this.tlist_,k,v);
        this[_SYM_DICT.set_tl] = tl;
        return(this)
    }
}

_add_append(Tlist);


function _add_prepend(Tlist) {
    _FNARY.forEach(
        fn=> {
            Tlist.prototype["prepend_"+fn] = function (...params) {
                let tl = _PREPEND_ME["prepend_"+fn](this.tlist_,...params);
                this[_SYM_DICT.set_tl] = tl;
                return(this)
            }
        }
    );
    Tlist.prototype["prepend"] = function(k,v) {
        let tl = prepend(this.tlist_,k,v);
        this[_SYM_DICT.set_tl] = tl;
        return(this)
    }
}

_add_prepend(Tlist);


function _add_insert_before(Tlist) {
    _FNARY.forEach(
        fn=> {
            Tlist.prototype["insert_"+fn+"_before"] = function (...params) {
                let tl = _INSERT_BEFORE_ME["insert_"+fn+"_before"](this.tlist_,...params);
                this[_SYM_DICT.set_tl] = tl;
                return(this)
            }
        }
    );
    Tlist.prototype["insert_before"] = function(index,k,v) {
        let tl = insert_before(this.tlist_,index,k,v);
        this[_SYM_DICT.set_tl] = tl;
        return(this)
    }
}

_add_insert_before(Tlist);


function _add_insert_after(Tlist) {
    _FNARY.forEach(
        fn=> {
            Tlist.prototype["insert_"+fn+"_after"] = function (...params) {
                let tl = _INSERT_AFTER_ME["insert_"+fn+"_after"](this.tlist_,...params);
                this[_SYM_DICT.set_tl] = tl;
                return(this)
            }
        }
    );
    Tlist.prototype["insert_after"] = function(index,k,v) {
        let tl = insert_after(this.tlist_,index,k,v);
        this[_SYM_DICT.set_tl] = tl;
        return(this)
    }
}

_add_insert_after(Tlist);


////

const _POP_RM_FNARY = ["between","before","after","from","to","some"];

function _add_pop(Tlist) {
    _POP_RM_FNARY.forEach(
        fn => {
            Tlist.prototype["pop_"+fn] = function (...params) {
                let tl = _POP_ME["pop_"+fn](this.tlist_,...params);
                return(new Tlist(tl))
            }
        }
    );
    Tlist.prototype["pop"] = function(...indexes) {
        if(indexes.length ===0) {
            return(this.tlist_.pop())
        } else if(indexes.length ===1) {
            return(this.tlist_.splice(indexes[0],1)[0])
        } else {
            return(new Tlist(pop_some(this.tlist_,...indexes)))
        }
    }
    Tlist.prototype["shift"] = function(n=1) {
        return(new Tlist(shift(this.tlist_,n)));
    }
}

_add_pop(Tlist);

////

function _add_rm(Tlist) {
    _POP_RM_FNARY.forEach(
        fn => {
            Tlist.prototype["rm_"+fn] = function (...params) {
                _RM_ME["rm_"+fn](this.tlist_,...params);
                return(this)
            }
        }
    );
    Tlist.prototype["rm"] = function(...indexes) {
        rm(this.tlist_,...indexes);
        return(this)
    }
    Tlist.prototype["rm_fst"] = function() {
        rm_fst(this.tlist_);
        return(this)
    }
    Tlist.prototype["rm_lst"] = function() {
        rm_lst(this.tlist_);
        return(this)
    }
}

_add_rm(Tlist);


function _add_idx(Tlist) {
    for(let fn in _IDX_ME) {
        Tlist.prototype[fn] = function (...params) {
            return(_IDX_ME[fn](this.tlist_,...params))
        }
    }
}

_add_idx(Tlist);

function _add_has(Tlist) {
    for(let fn in _HAS_ME) {
        Tlist.prototype[fn] = function (...params) {
            return(_HAS_ME[fn](this.tlist_,...params))
        }
    }
    Tlist.prototype['hasi'] = function (i) {return(hasi(this.tlist_,i))}
}

_add_has(Tlist);


function _add_count(Tlist) {
    for(let fn in _COUNT_ME) {
        Tlist.prototype[fn] = function (...params) {return(_COUNT_ME[fn](this.tlist_,...params))}
    }
}

_add_count(Tlist);


////

function _add_map(Tlist) {
    for(let fn in _MP_ME) {
        Tlist.prototype[fn] = function (...params) {
            return(new Tlist(_MP_ME[fn](this.tlist_,...params)))
        }
    }
}

_add_map(Tlist);

function _add_inplace(Tlist) {
    for(let fn in _INPLACE_ME) {
        Tlist.prototype[fn] = function (...params) {
            let tl = _INPLACE_ME[fn](this.tlist_,...params);
            this[_SYM_DICT.set_tl] = tl;
            return(this);
        }
    }
}

_add_inplace(Tlist);


////

function _add_kget(Tlist) {
    for(let fn in _KGET_ME) {
        Tlist.prototype[fn] = function (...params) {
            let tmp = _KGET_ME[fn](this.tlist_,...params);
            if(fn.includes("get_") && (fn.includes("all") || fn.includes("some"))) {
                return(new Tlist(tmp));
            } else {
                return(tmp)
            }
        }
    }
    Tlist.prototype['kget'] = function (...ks) {
        if(ks.length ===0) {
            return(undefined)
        } else if(ks.length ===1) {
            return(kget_fst(this.tlist_,ks[0]))
        } else {
            let tl = ks.map(k=>kget_fst(this.tlist_,k))
            return(new Tlist(tl))
        } 
    }
}

_add_kget(Tlist);

////
function _add_vget(Tlist) {
    for(let fn in _VGET_ME) {
        Tlist.prototype[fn] = function (...params) {
            let tmp = _VGET_ME[fn](this.tlist_,...params);
            if( fn.includes("get_") && (fn.includes("all") || fn.includes("some"))) {
                return(new Tlist(tmp));
            } else {
                return(tmp)
            }        
        }
    }
    Tlist.prototype['vget'] = function (...vs) {
        if(vs.length ===0) {
            return(undefined)
        } else if(vs.length ===1) {
            return(vget_fst(tl,vs[0]))
        } else {
            let tl = vs.map(v=>vget_fst(this.tlist_,v))
            return(new Tlist(tl))
        }
    }
}

_add_vget(Tlist);

////
function _add_kset(Tlist) {
    for(let fn in _KSET_ME) {
        Tlist.prototype[fn] = function (...params) {
            _KSET_ME[fn](this.tlist_,...params);
        }
    }
}

_add_kset(Tlist);

////

function _add_vset(Tlist) {
    for(let fn in _VSET_ME) {
        Tlist.prototype[fn] = function (...params) {
            _VSET_ME[fn](this.tlist_,...params);
        }
    }
}

_add_vset(Tlist);

////
function _add_kvset(Tlist) {
    for(let fn in _KVSET_ME) {
        Tlist.prototype[fn] = function (...params) {
            _KVSET_ME[fn](this.tlist_,...params);
        }
    }
}

_add_kvset(Tlist);

////
function _add_sort(Tlist) {
    for(let fn in _SORT_ME) {
        Tlist.prototype[fn] = function () {
            _SORT_ME[fn](this.tlist_);
        }
    }
}

_add_sort(Tlist);


////
function _add_up_asgn(Tlist) {
    for(let fn in _UP_ASGN_ME) {
        Tlist.prototype[fn] = function (NTL) {
            _UP_ASGN_ME[fn](this.tlist_,NTL.tlist_)
        }
    }
}

_add_up_asgn(Tlist);

////

function _add_find(Tlist) {
    for(let fn in _FIND_ME) {
        if(fn.includes("findkv_") &&(fn.includes("some") || fn.includes("all"))) {
            Tlist.prototype[fn] = function (...params) {
                let tl = _FIND_ME[fn](this.tlist_,...params);
                return(new Tlist(tl))
            }
        } else {
            Tlist.prototype[fn] = function (...params) {
                return(_FIND_ME[fn](this.tlist_,...params))
            }
        }
    }
}

_add_find(Tlist);


////
function _add_del(Tlist) {
    for(let fn in _DEL_ME) {
        if((fn.includes("some") || fn.includes("all"))) {
            Tlist.prototype[fn] = function (...params) {
                let tl = _DEL_ME[fn](this.tlist_,...params);
                return(new Tlist(tl))
            }
        } else {
            Tlist.prototype[fn] = function (...params) {
                return(_DEL_ME[fn](this.tlist_,...params))
            }
        }
    }
    Tlist.prototype['kdel'] = function (...ks) {
        if(ks.length ===0) {
        } else if(ks.length===1) {
            return(kdel_fst(this.tlist_,ks[0]))
        } else {
            let tl = ks.map(k=>kdel_fst(this.tlist_,k)).filter(t=>t!==undefined)
            return(new Tlist(tl))
        }
    }
    Tlist.prototype['vdel'] = function (...vs) {
        if(vs.length ===0) {
        } else if(ks.length===1) {
            return(vdel_fst(this.tlist_,vs[0]))
        } else {
            let tl = vs.map(v=>vdel_fst(this.tlist_,v)).filter(t=>t!==undefined)
            return(new Tlist(tl))
        }
    }
    Tlist.prototype['kvdel'] = function (...kvs) {
        let ntl = l2tl(kvs);
        if(ntl.length ===0) {
        } else if(ntl.length===1) {
            return(kvdel_fst(this.tlist_,ntl[0][0],ntl[0][1]))
        } else {
            let tl = ntl.map(t=>kvdel_fst(this.tlist_,t[0],t[1])).filter(t=>t!==undefined)
            return(new Tlist(tl))
        }
    }

}

_add_del(Tlist);

////


Tlist.__disable_repr = () => {
    if(is_node()) {
        const util = require("util");
        delete Tlist.prototypt[util.inspect.custom]
    } else {}
}

Tlist.SYM_DICT = _SYM_DICT;


Tlist.from_list        = (l)=>(new Tlist(l2tl(l)));
Tlist.from_dict        = (d)=>(new Tlist(d2tl(d)));
Tlist.from_dlist       = (dl)=>(new Tlist(dl2tl(dl)));

Tlist.from             = (o) => iflet(
    is_tl(o),new Tlist(o),
    is_dl(o),new Tlist(dl2tl(dl)),
    is_ary(o),new Tlist(l2tl(o)),
    is_dict(o),new Tlist(d2tl(o)),
    new Tlist()
)

Tlist.from_params      = (...params)=> (new Tlist(l2tl(params)));
Tlist.from_kvl         = (kl,vl) => (new Tlist(kvl2tl(kl,vl)));

Tlist.is_tlist         = (o) => instof(o,Tlist);

////

////

module.exports = {
     ////
     empty,
     is_empty_pair:(o)=>o===undefined,
     ////
     is_pair,
     pair_eq,pair_keq,pair_veq,
     pair_kgt,pair_vgt,pair_kvgt,pair_vkgt,
     pair_klt,pair_vlt,pair_kvlt,pair_vklt,
     pair_kge,pair_vge,pair_kvge,pair_vkge,
     pair_kle,pair_vle,pair_kvle,pair_vkle,
     pair_kcmp,pair_vcmp,pair_kvcmp,pair_vkcmp,
     ////
     is_dele,
     t2dele,
     dele2t,
     pair_swaplr,
     dele_swaplr,
     ////
     is_tl,
     is_dl,
     ////
     tl_swaplr,
     l2tl,tl2l,
     d2tl,tl2d,
     fmt_kvl,fast_kvl2tl,kvl2tl,tl2kvl,
     dl2tl,tl2dl,
     ////
     append,append_tl,append_l,append_d,append_dl,append_params,append_kvl,
     prepend,prepend_tl,prepend_l,prepend_d,prepend_dl,prepend_params,prepend_kvl,
     hasi,
     insert_before,insert_tl_before,insert_dl_before,insert_l_before,insert_d_before,insert_params_before,insert_kvl_before,
     insert_after,insert_tl_after,insert_dl_after,insert_l_after,insert_d_after,insert_params_after,insert_kvl_after,
     ////
     pop,pop_between,pop_before,pop_after,pop_from,pop_to,pop_some,shift,
     rm,rm_fst,rm_lst,rm_between,rm_before,rm_after,rm_from,rm_to,rm_some,
     ////
     get,get_some,
     ////
     all_idxs_engine,which_idx_engine,lst_idx_engine,some_idxs_engine,
     all_idxs_of_k,fst_idx_of_k,lst_idx_of_k,which_idx_of_k,some_idxs_of_k,
     all_idxs_of_v,fst_idx_of_v,lst_idx_of_v,which_idx_of_v,some_idxs_of_v,
     all_idxs_of_kv,fst_idx_of_kv,lst_idx_of_kv,which_idx_of_kv,some_idxs_of_kv,
     ////
     hask,hasv,haskv,
     kcount,vcount,kvcount,
     ////
     every,any,
     ////
     filter,
     mapk,mapv,mapkv,map,
     mapk_inplace,mapv_inplace,mapkv_inplace,map_inplace,
     foldl,foldr,
     ////
     set,set_some,
     ////
     kget,kget_all,kget_which,kget_fst,kget_lst,kget_some,
     kgetv,kgetv_all,kgetv_which,kgetv_fst,kgetv_lst,kgetv_some,   
     vget,vget_all,vget_which,vget_fst,vget_lst,vget_some,
     vgetk,vgetk_all,vgetk_which,vgetk_fst,vgetk_lst,vgetk_some,
     ////
     kset_all,kset_which,kset_fst,kset_lst,kset_some,
     ksetk_all,ksetk_which,ksetk_fst,ksetk_lst,ksetk_some,
     ksetv_all,ksetv_which,ksetv_fst,ksetv_lst,ksetv_some,
     ////
     vset_all,vset_which,vset_fst,vset_lst,vset_some,
     vsetk_all,vsetk_which,vsetk_fst,vsetk_lst,vsetk_some,
     vsetv_all,vsetv_which,vsetv_fst,vsetv_lst,vsetv_some,
     ////
     kvset_all,kvset_which,kvset_fst,kvset_lst,kvset_some,
     kvsetk_all,kvsetk_which,kvsetk_fst,kvsetk_lst,kvsetk_some,
     kvsetv_all,kvsetv_which,kvsetv_fst,kvsetv_lst,kvsetv_some,
     ////
     uniq,kuniq,vuniq,
     ////
     ksort,vsort,kvsort,vksort,
     ////
     update_fst,update_lst,update_which,update_some,update_all,
     assign_fst,assign_lst,assign_which,assign_some,assign_all,
     replenish,
     ////
     findi_fst,findi_lst,findi_which,findi_some,findi_all,
     findk_fst,findk_lst,findk_which,findk_some,findk_all,
     findv_fst,findv_lst,findv_which,findv_some,findv_all,
     findkv_fst,findkv_lst,findkv_which,findkv_some,findkv_all,
     ////
     kdel_fst,kdel_lst,kdel_which,kdel_some,kdel_all,kdel,
     vdel_fst,vdel_lst,vdel_which,vdel_some,vdel_all,vdel,
     kvdel_fst,kvdel_lst,kvdel_which,kvdel_some,kvdel_all,kvdel,
     ////
     proxy,
     ////
     Tlist,
     //// 
}
