nvpair
===================
-  k,v pair-list
-  for duplicate key supported 

install
=======
- npm install nvpair

usage
=====

    const nvpair = require("nvpair")

    const Tlist = nvpair.Tlist;
    
    
    var tl = [ 
        [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], 
        [ 'mmm', 'a' ], [ 1, 'b' ],['t','c'],
        [ 0, 'a' ]
    ]
    var TL0 = new nvpair.Tlist(tl)

    > TL0
    {
        0 : "a" ,
        1 : "b" ,
        2 : "c" ,
        "mmm" : "a" ,
        1 : "b" ,
        "t" : "c" ,
        0 : "a"
    }

    >
   
    
    > var TL0 = new nvpair.Tlist(tl)
    > TL0.$_[0]
    'a'
    > TL0.$_.mmm
    'a'
    > TL0.$_.t
    'c'
    >
    
    > TL0.$_.mmm = 'AAAA'
    'AAAA'
    >
    > TL0
    {
        0 : "a" ,
        1 : "b" ,
        2 : "c" ,
        "mmm" : "AAAA" ,
        1 : "b" ,
        "t" : "c" ,
        0 : "a"
    }
    
    >
    
    
    delete TL0.$_.t
    
    > TL0
    {
        0 : "a" ,
        1 : "b" ,
        2 : "c" ,
        "mmm" : "AAAA" ,
        1 : "b" ,
        0 : "a"
    }
    
    >



funcs
-----

### is\_pair 

        > nvpair.is_pair([100,200])
        true
        > nvpair.is_pair([100])
        false
        > nvpair.is_pair([100,200,300])
        false

### is\_dele 

        > nvpair.is_dele({a:100})
        true
        > nvpair.is_dele({})
        false
        >
        > nvpair.is_dele({a:100,b:200})
        false
        >

### t2dele 

        > nvpair.t2dele(['a',100])
        { a: 100 }
        >

### dele2t 

        > nvpair.dele2t({ a: 100 })
        [ 'a', 100 ]
        >

### swaplr 

        > var pair = [1,2]
        undefined
        > nvpair.pair_swaplr(pair)
        [ 2, 1 ]
        >
        > pair
        [ 2, 1 ]
        >
        > var dele = {a:100}
        undefined
        > nvpair.dele_swaplr(dele)
        { '100': 'a' }
        >
        > dele
        { '100': 'a' }
        >




### is\_tl

        > nvpair.is_tl([[1,2],[3,4],[5,6]])
        true
        > nvpair.is_tl([])
        true
        >

### tl\_swaplr

        > nvpair.tl_swaplr([['a',100],['b',200]])
        [ [ 100, 'a' ], [ 200, 'b' ] ]
        >



### is\_dl 

        > nvpair.is_dl([])
        true
        > nvpair.is_dl([{a:100},{b:200}])
        true
        >


### l2tl 

        
        > nvpair.l2tl([])
        []
        >
        > nvpair.l2tl([1,2,3])
        [ [ 1, 2 ] ]
        >
        > nvpair.l2tl([1,2,3,4])
        [ [ 1, 2 ], [ 3, 4 ] ]
        >


### tl2l 

       > nvpair.tl2l([ [ 1, 2 ], [ 3, 4 ] ])
       [ 1, 2, 3, 4 ]
       >

### d2tl

        > nvpair.d2tl({a:100,b:200,c:300})
        [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        >

### tl2d 

        > nvpair.tl2d([ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ])
        { a: 100, b: 200, c: 300 }
        >

### dl2tl 

        > nvpair.dl2tl([ { a: 100 }, { b: 200 }, { c: 300 } ])
        [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        >


### tl2dl

        > nvpair.tl2dl([ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ])
        [ { a: 100 }, { b: 200 }, { c: 300 } ]
        >


### fmt\_kvl

        > nvpair.fmt_kvl(['a','b','c'],[100,200,300])
        [ [ 'a', 'b', 'c' ], [ 100, 200, 300 ] ]
        >
        > nvpair.fmt_kvl(['a','b','c'],[100,200])
        [ [ 'a', 'b' ], [ 100, 200 ] ]
        >
        > nvpair.fmt_kvl(['a','b'],[100,200,300])
        [ [ 'a', 'b' ], [ 100, 200 ] ]
        >

### tl2kvl 

        > var [kl,vl] = nvpair.tl2kvl([ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ])
        
        > kl
        [ 'a', 'b', 'c' ]
        > vl
        [ 100, 200, 300 ]
        >

### kvl2tl 

        > nvpair.kvl2tl([ 'a', 'b', 'c' ],[ 100, 200, 300 ])
        [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        >
        > nvpair.kvl2tl([ 'a', 'b', 'c' ],[ 100, 200])
        [ [ 'a', 100 ], [ 'b', 200 ] ]
        >
        > nvpair.kvl2tl([ 'a', 'b'],[ 100, 200, 300 ])
        [ [ 'a', 100 ], [ 'b', 200 ] ]
        >

        > nvpair.fast_kvl2tl([ 'a', 'b', 'c' ],[ 100, 200, 300 ])
        [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        >
        > nvpair.fast_kvl2tl([ 'a', 'b'],[ 100, 200, 300 ])
        [ [ 'a', 100 ], [ 'b', 200 ] ]
        >
        > nvpair.fast_kvl2tl([ 'a', 'b', 'c'],[ 100, 200])
        [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', undefined ] ]
        >



### append

    > var tl = [['a',100],['b',200],['c',300]]
    > nvpair.append(tl,'d',400)
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ], [ 'd', 400 ] ]
    > tl
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ], [ 'd', 400 ] ]
    >


### append\_tl

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var ntl = [ [ 'd', 400 ], [ 'e', 500 ] ]

        > nvpair.append_tl(tl,ntl)
        [
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ],
          [ 'd', 400 ],
          [ 'e', 500 ]
        ]
        > tl
        [
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ],
          [ 'd', 400 ],
          [ 'e', 500 ]
        ]
        >

### append\_l 

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var l = [ 'd', 400 , 'e', 500 ]

        > nvpair.append_l(tl,l)
        [
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ],
          [ 'd', 400 ],
          [ 'e', 500 ]
        ]
        > tl
        [
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ],
          [ 'd', 400 ],
          [ 'e', 500 ]
        ]


### append\_d

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var d   = {'d':400,'e':500}

        > nvpair.append_d(tl,d)
        [
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ],
          [ 'd', 400 ],
          [ 'e', 500 ]
        ]
        > tl
        [
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ],
          [ 'd', 400 ],
          [ 'e', 500 ]
        ]



### append\_params

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        nvpair.append_params(tl, 'd', 400 , 'e', 500 )
        > tl
        [
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ],
          [ 'd', 400 ],
          [ 'e', 500 ]
        ]
        >


### append\_dl

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var dl  = [{'d':400 }, {'e':500}]
        nvpair.append_dl(tl,dl)
        > tl
        [
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ],
          [ 'd', 400 ],
          [ 'e', 500 ]
        ]
        >

### append\_kvl
        
        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var kl  = ['d','e']
        var vl  = [400,500] 
        >     var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        >
        > nvpair.append_kvl(tl,kl,vl)
        > tl
        [
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ],
          [ 'd', 400 ],
          [ 'e', 500 ]
        ]
        >


### prepend

    > var tl = [['a',100],['b',200],['c',300]]
    > nvpair.prepend(tl,'d',400)
    [ [ 'd', 400 ], [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
    > tl
    [ [ 'd', 400 ], [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
    >



### prepend\_tl

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var ntl = [ [ 'd', 400 ], [ 'e', 500 ] ]
        nvpair.prepend_tl(tl,ntl)
        tl
        >     tl
        [
          [ 'd', 400 ],
          [ 'e', 500 ],
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ]
        ]
        >

### prepend\_l 

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var l = [ 'd', 400 , 'e', 500 ]
        nvpair.prepend_l(tl,l)
        tl
        >     tl
        [
          [ 'd', 400 ],
          [ 'e', 500 ],
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ]
        ]
        >

### prepend\_d

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var d = {'d':400,'e':500}
        nvpair.prepend_d(tl,d)
        
        >     tl
        [
          [ 'd', 400 ],
          [ 'e', 500 ],
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ]
        ]
        >



### prepend\_params

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        nvpair.prepend_params(tl, 'd', 400 , 'e', 500 )
        tl
        >     tl
        [
          [ 'd', 400 ],
          [ 'e', 500 ],
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ]
        ]
        >

### prepend\_dl

        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var dl  = [{'d':400 }, {'e':500}]
        nvpair.prepend_dl(tl,dl)
        tl
        >     tl
        [
          [ 'd', 400 ],
          [ 'e', 500 ],
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ]
        ]
        >

### prepend\_kvl
        
        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        var kl  = ['d','e']
        var vl  = [400,500] 
        var tl  = [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ] ]
        nvpair.prepend_kvl(tl,kl,vl)
        tl
        >     tl
        [
          [ 'd', 400 ],
          [ 'e', 500 ],
          [ 'a', 100 ],
          [ 'b', 200 ],
          [ 'c', 300 ]
        ]
        >


### insert\_before 

    var tl = [['a',100],['b',200],['c',300]]
    
    > nvpair.insert_before(tl,1,'d',400)
    [ [ 'a', 100 ], [ 'd', 400 ], [ 'b', 200 ], [ 'c', 300 ] ]
    > tl
    [ [ 'a', 100 ], [ 'd', 400 ], [ 'b', 200 ], [ 'c', 300 ] ]
    >
    
###  insert\_tl\_before

    var tl = [['a',100],['b',200],['c',300]]
    var ntl = [['d',400],['e',500]]
    nvpair.insert_tl_before(tl,1,ntl)
    >
    [
      [ 'a', 100 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'b', 200 ],
      [ 'c', 300 ]
    ]
    >
    
###  insert\_dl\_before

    var tl = [['a',100],['b',200],['c',300]]
    var dl = [{d:400},{e:500}]
    nvpair.insert_dl_before(tl,1,dl)
    >
    [
      [ 'a', 100 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'b', 200 ],
      [ 'c', 300 ]
    ]
    >
    
###  insert\_l\_before
    
    var tl = [['a',100],['b',200],['c',300]]
    var l = ['d',400,'e',500]
    nvpair.insert_l_before(tl,1,l)
    >
    [
      [ 'a', 100 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'b', 200 ],
      [ 'c', 300 ]
    ]
    >

###  insert\_d\_before

    var tl = [['a',100],['b',200],['c',300]]
    var d = {'d':400,'e':500}
    nvpair.insert_d_before(tl,1,d)
    >
    [
      [ 'a', 100 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'b', 200 ],
      [ 'c', 300 ]
    ]
    >



    
### insert\_params\_before

    var tl = [['a',100],['b',200],['c',300]]
    nvpair.insert_params_before(tl,1,'d',400,'e',500)
    >
    [
      [ 'a', 100 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'b', 200 ],
      [ 'c', 300 ]
    ]
    >
    
### insert\_kvl\_before
    
    var tl = [['a',100],['b',200],['c',300]]
    var kl = ['d','e']
    var vl = [400,500]
    nvpair.insert_kvl_before(tl,1,kl,vl)
    >
    [
      [ 'a', 100 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'b', 200 ],
      [ 'c', 300 ]
    ]
    >

### insert\_after 

    var tl = [['a',100],['b',200],['c',300]]
    nvpair.insert_after(tl,1,'d',400)
    >
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'd', 400 ], [ 'c', 300 ] ]
    >
    
###  insert\_tl\_after

    var tl = [['a',100],['b',200],['c',300]]
    var ntl = [['d',400],['e',500]]
    nvpair.insert_tl_after(tl,1,ntl)
    >
    [
      [ 'a', 100 ],
      [ 'b', 200 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'c', 300 ]
    ]
    >

    
###  insert\_dl\_after

    var tl = [['a',100],['b',200],['c',300]]
    var dl = [{d:400},{e:500}]
    nvpair.insert_dl_after(tl,1,dl)
    >
    [
      [ 'a', 100 ],
      [ 'b', 200 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'c', 300 ]
    ]
    >

###  insert\_l\_after
    
    var tl = [['a',100],['b',200],['c',300]]
    var l = ['d',400,'e',500]
    nvpair.insert_l_after(tl,1,l)

    >
    [
      [ 'a', 100 ],
      [ 'b', 200 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'c', 300 ]
    ]
    >

###  insert\_d\_after

    var tl = [['a',100],['b',200],['c',300]]
    var d = {'d':400,'e':500}
    nvpair.insert_d_after(tl,1,d)

    >
    [
      [ 'a', 100 ],
      [ 'b', 200 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'c', 300 ]
    ]
    >


    
### insert\_params\_after

    var tl = [['a',100],['b',200],['c',300]]
    nvpair.insert_params_after(tl,1,'d',400,'e',500)

    >
    [
      [ 'a', 100 ],
      [ 'b', 200 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'c', 300 ]
    ]
    >


    
### insert\_kvl\_after
    
    var tl = [['a',100],['b',200],['c',300]]
    var kl = ['d','e']
    var vl = [400,500]
    nvpair.insert_kvl_after(tl,1,kl,vl)

    >
    [
      [ 'a', 100 ],
      [ 'b', 200 ],
      [ 'd', 400 ],
      [ 'e', 500 ],
      [ 'c', 300 ]
    ]
    >


### pop\_between

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]

    > nvpair.pop_between(tl,1,3)
    [ [ 'b', 200 ], [ 'b', 2000 ] ]
    > tl
    [ [ 'a', 100 ], [ 'c', 300 ], [ 'd', 400 ] ]
    >


### pop\_before

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]

    > nvpair.pop_before(tl,3)
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ] ]
    > tl
    [ [ 'c', 300 ], [ 'd', 400 ] ]
    >


### pop\_after

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    > nvpair.pop_after(tl,3)
    [ [ 'd', 400 ] ]
    > tl
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ], [ 'c', 300 ] ]
    >


### pop\_from

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    nvpair.pop_from(tl,3)
    > nvpair.pop_from(tl,3)
    [ [ 'c', 300 ], [ 'd', 400 ] ]
    > tl
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ] ]
    >

### pop\_to

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    nvpair.pop_to(tl,3)
    >     nvpair.pop_to(tl,3)
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ]]
    >
    > tl
    [ ['c',300],[ 'd', 400 ] ]
    >


### pop\_some

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    nvpair.pop_some(tl,1,3)
    >     nvpair.pop_some(tl,1,3)
    [ [ 'b', 200 ], [ 'c', 300 ] ]
    > tl
    [ [ 'a', 100 ], [ 'b', 2000 ], [ 'd', 400 ] ]
    >


### pop

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    > nvpair.pop(tl)
    [ 'd', 400 ]
    > tl
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ], [ 'c', 300 ] ]
    >

    //if params.length === 1
    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    > nvpair.pop(tl,2)
    [ 'b', 2000 ]
    > tl
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ], [ 'd', 400 ] ]
    >

    //if params.length > 1
    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    > nvpair.pop(tl,1,3)
    [ [ 'b', 200 ], [ 'c', 300 ] ]
    >
    > tl
    [ [ 'a', 100 ], [ 'b', 2000 ], [ 'd', 400 ] ]
    >


### shift

    //if n>1
    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    nvpair.shift(tl,3)
    > nvpair.shift(tl,3)
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ] ]
    >
    > tl
    [ [ 'c', 300 ], [ 'd', 400 ] ]
    >

    //if n===1 or undefined
    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    > tl.shift()
    [ 'a', 100 ]
    > tl
    [ [ 'b', 200 ], [ 'b', 2000 ], [ 'c', 300 ], [ 'd', 400 ] ]
    >

### rm\_between

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]

    > nvpair.rm_between(tl,1,3)
    [ [ 'a', 100 ], [ 'c', 300 ], [ 'd', 400 ] ]
    >



### rm\_before

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    
    > nvpair.rm_before(tl,3)
    [ [ 'c', 300 ], [ 'd', 400 ] ]
    >


### rm\_after

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    > nvpair.rm_after(tl,3)
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ], [ 'c', 300 ] ]
    >


### rm\_from

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    nvpair.rm_from(tl,3)
    > nvpair.rm_from(tl,3)
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ] ]
    >

### rm\_to

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    nvpair.rm_to(tl,3)
    > 
    [ ['c',300],[ 'd', 400 ] ]
    >


### rm\_some

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    nvpair.rm_some(tl,1,3)
    >     nvpair.rm_some(tl,1,3)
    [ [ 'a', 100 ], [ 'b', 2000 ], [ 'd', 400 ] ]
    >

### rm\_fst
    
    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    nvpair.rm_fst(tl)
    >     nvpair.rm_fst(tl)
    [ [ 'b', 200 ], [ 'b', 2000 ], [ 'c', 300 ], [ 'd', 400 ] ]
    >


### rm\_lst
    
    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    nvpair.rm_lst(tl)
    > nvpair.rm_lst(tl)
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ], [ 'c', 300 ] ]
    >


### rm 

    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]

     
    //if params.length === 1
    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    > nvpair.rm(tl,2)
    [ [ 'a', 100 ], [ 'b', 200 ], [ 'c', 300 ], [ 'd', 400 ] ]
    >
    
    //if params.length > 1
    var tl = [['a',100],['b',200],['b',2000],['c',300],['d',400]]
    > nvpair.rm(tl,1,3)
    [ [ 'a', 100 ], [ 'b', 2000 ], [ 'd', 400 ] ]
    >


### get

    > nvpair.get(tl,3)
    [ 'c', 200 ]
    >
    > nvpair.get_some(tl,2,3,5)
    [ [ 'b', 2000 ], [ 'c', 200 ], [ 'c', 200 ] ]
    >

### idx

    nvpair.all_idxs_of_k(tl,'b')
    nvpair.all_idxs_of_v(tl,200)
    nvpair.all_idxs_of_kv(tl,'b',200)

    > nvpair.all_idxs_of_k(tl,'b')
    [ 1, 2, 4, 6 ]
    > nvpair.all_idxs_of_v(tl,200)
    [ 1, 3, 5, 6 ]
    > nvpair.all_idxs_of_kv(tl,'b',200)
    [ 1, 6 ]
    >

    > nvpair.fst_idx_of_k(tl,'b')
    1
    > nvpair.fst_idx_of_v(tl,200)
    1
    > nvpair.fst_idx_of_kv(tl,'b',200)
    1
    >

    nvpair.lst_idx_of_k(tl,'b')
    nvpair.lst_idx_of_v(tl,200)
    nvpair.lst_idx_of_kv(tl,'b',200)

    > nvpair.lst_idx_of_k(tl,'b')
    6
    > nvpair.lst_idx_of_v(tl,200)
    6
    > nvpair.lst_idx_of_kv(tl,'b',200)
    6
    >

    > nvpair.which_idx_of_k(tl,'b',1)
    2
    >


    nvpair.some_idxs_of_k(tl,'b',0,2)

    > nvpair.some_idxs_of_k(tl,'b',0,2)
    [ 1, 4 ]
    >

### has 

    var tl = [['a',100],['b',200],['b',2000],['c',200],['b',400],['c',200],['b',200]]

    > nvpair.hasi(tl,0)
    true
    > nvpair.hasi(tl,3)
    true
    > nvpair.hasi(tl,6)
    true
    > nvpair.hasi(tl,7)
    false
    >
    > nvpair.hask(tl,'b')
    true
    > nvpair.hask(tl,'x')
    false
    >
    > nvpair.hasv(tl,999)
    false
    > nvpair.hasv(tl,200)
    true
    >
    > nvpair.haskv(tl,'b',200)
    true
    >
    > nvpair.haskv(tl,'b',500)
    false
    >


### count

     nvpair.kcount(tl,key)
     nvpair.vcount(tl,value)
     nvpair.kvcount(tl,key,value)

### filter 
    
    var tl = [['a',100],['b',200],['b',2000],['c',200],['b',400],['c',200],['b',200]]
    > nvpair.filter(tl,(v,k,i)=>k==='b')
    [ [ 'b', 200 ], [ 'b', 2000 ], [ 'b', 400 ], [ 'b', 200 ] ]
    >


### reduce

    nvpair.foldl(tl,(acc,v,k,i)=>acc+`${i}:${k}:${v}`+' > ', "@ ")
    > 
    '@ 0:a:100 > 1:b:200 > 2:b:2000 > 3:c:200 > 4:b:400 > 5:c:200 > 6:b:200 > '
    >
    
    nvpair.foldr(tl,(acc,v,k,i)=>acc+`${i}:${k}:${v}`+' < ', "@ ")
    > 
    '@ 6:b:200 < 5:c:200 < 4:b:400 < 3:c:200 < 2:b:2000 < 1:b:200 < 0:a:100 < '
    >


### cond

    > nvpair.every(tl,(v,k,i)=>k==='b')
    false
    > nvpair.any(tl,(v,k,i)=>k==='b')
    true
    >


### mapk
    var tl = [['a',100],['b',200],['b',2000],['c',200],['b',400],['c',200],['b',200]]
    > nvpair.mapk(tl,(v,k,i)=>i+':'+k)
    [
      [ '0:a', 100 ],
      [ '1:b', 200 ],
      [ '2:b', 2000 ],
      [ '3:c', 200 ],
      [ '4:b', 400 ],
      [ '5:c', 200 ],
      [ '6:b', 200 ]
    ]
    >


### mapv

    nvpair.mapv(tl,(v,k,i)=>i+':'+v)
    >
    [
      [ 'a', '0:100' ],
      [ 'b', '1:200' ],
      [ 'b', '2:2000' ],
      [ 'c', '3:200' ],
      [ 'b', '4:400' ],
      [ 'c', '5:200' ],
      [ 'b', '6:200' ]
    ]
    >


### mapkv

    > nvpair.mapkv(tl,(v,k,i)=>k+'@k',(v,k,i)=>v+'@v')
    [
      [ 'a@k', '100@v' ],
      [ 'b@k', '200@v' ],
      [ 'b@k', '2000@v' ],
      [ 'c@k', '200@v' ],
      [ 'b@k', '400@v' ],
      [ 'c@k', '200@v' ],
      [ 'b@k', '200@v' ]
    ]
    >



### map

    > nvpair.map(tl,(v,k,i)=>[k,i])
    [
      [ 'a', 0 ],
      [ 'b', 1 ],
      [ 'b', 2 ],
      [ 'c', 3 ],
      [ 'b', 4 ],
      [ 'c', 5 ],
      [ 'b', 6 ]
    ]
    >


### mapk\_inplace

    var tl = [['a',100],['b',200],['b',2000],['c',200],['b',400],['c',200],['b',200]]
    nvpair.mapk_inplace(tl,(v,k,i)=>i+':'+k);
    tl
    [
      [ '0:a', 100 ],
      [ '1:b', 200 ],
      [ '2:b', 2000 ],
      [ '3:c', 200 ],
      [ '4:b', 400 ],
      [ '5:c', 200 ],
      [ '6:b', 200 ]
    ]


### mapv\_inplace

    var tl = [['a',100],['b',200],['b',2000],['c',200],['b',400],['c',200],['b',200]]
    nvpair.mapv_inplace(tl,(v,k,i)=>i+':'+v);
    tl
    [
      [ 'a', '0:100' ],
      [ 'b', '1:200' ],
      [ 'b', '2:2000' ],
      [ 'c', '3:200' ],
      [ 'b', '4:400' ],
      [ 'c', '5:200' ],
      [ 'b', '6:200' ]
    ]

### mapkv\_inplace

    var tl = [['a',100],['b',200],['b',2000],['c',200],['b',400],['c',200],['b',200]]
    nvpair.mapkv_inplace(tl,(v,k,i)=>k+'@k',(v,k,i)=>v+'@v')
    tl

    [
      [ 'a@k', '100@v' ],
      [ 'b@k', '200@v' ],
      [ 'b@k', '2000@v' ],
      [ 'c@k', '200@v' ],
      [ 'b@k', '400@v' ],
      [ 'c@k', '200@v' ],
      [ 'b@k', '200@v' ]
    ]


### map\_inplace

    var tl = [['a',100],['b',200],['b',2000],['c',200],['b',400],['c',200],['b',200]]
    nvpair.map_inplace(tl,(v,k,i)=>[k,i])
    tl
    [
      [ 'a', 0 ],
      [ 'b', 1 ],
      [ 'b', 2 ],
      [ 'c', 3 ],
      [ 'b', 4 ],
      [ 'c', 5 ],
      [ 'b', 6 ]
    ]


### kget

    var tl = [['a',100],['b',200],['b',2000],['c',200],['b',400],['c',200],['b',200]]

    > nvpair.kget_fst(tl,'b')
    [ 'b', 200 ]
    > nvpair.kget_lst(tl,'b')
    [ 'b', 200 ]
    > nvpair.kget_which(tl,'b')
    [ 'b', 2000 ]
    > nvpair.kget_some(tl,'b',1,2)
    [ [ 'b', 2000 ], [ 'b', 400 ] ]
    >
    > nvpair.kget_all(tl,'b')
    [ [ 'b', 200 ], [ 'b', 2000 ], [ 'b', 400 ], [ 'b', 200 ] ]
    >
    > nvpair.kget(tl,'b')
    [ 'b', 200 ]
    >
    > nvpair.kget(tl,'b','c')
    [ [ 'b', 200 ], [ 'c', 200 ] ]
    >
    > nvpair.kget.toString()
    '(tl,...ks) => {\n' +
      '    if(ks.length ===0) {\n' +
      '        return(undefined)\n' +
      '    } else if(ks.length ===1) {\n' +
      '        return(kget_fst(tl,ks[0]))\n' +
      '    } else {\n' +
      '        return(ks.map(k=>kget_fst(tl,k)))\n' +
      '    }\n' +
      '}'



    nvpair.kgetv_fst(tl,'b')
    nvpair.kgetv_lst(tl,'b')
    nvpair.kgetv_which(tl,'b')
    nvpair.kgetv_some(tl,'b',1,2)
    nvpair.kgetv_all(tl,'b')

    nvpair.kgetv(tl,'b')
    nvpair.kgetv(tl,'b','c')
    nvpair.kgetv.toString()

    > nvpair.kgetv_fst(tl,'b')
    200
    > nvpair.kgetv_lst(tl,'b')
    200
    > nvpair.kgetv_which(tl,'b')
    Symbol(empty)
    > nvpair.kgetv_some(tl,'b',1,2)
    [ 2000, 400 ]
    > nvpair.kgetv_all(tl,'b')
    [ 200, 2000, 400, 200 ]
    >

    > nvpair.kgetv(tl,'b')
    200
    > nvpair.kgetv(tl,'b','c')
    [ 200, 200 ]
    > nvpair.kgetv.toString()
    '(tl,...ks) => {\n' +
      '    if(ks.length ===0) {\n' +
      '        return(empty)\n' +
      '    } else if(ks.length ===1) {\n' +
      '        return(kgetv_fst(tl,ks[0]))\n' +
      '    } else {\n' +
      '        return(ks.map(k=>kgetv_fst(tl,k)))\n' +
      '    }\n' +
      '}'
    >


### vget

    > nvpair.vget_fst(tl,200)
    [ 'b', 200 ]
    > nvpair.vget_lst(tl,200)
    [ 'b', 200 ]
    > nvpair.vget_which(tl,200,2)
    [ 'c', 200 ]
    > nvpair.vget_some(tl,200,2,3)
    [ [ 'c', 200 ], [ 'b', 200 ] ]
    > nvpair.vget_all(tl,200)
    [ [ 'b', 200 ], [ 'c', 200 ], [ 'c', 200 ], [ 'b', 200 ] ]
    >
    > nvpair.vget(tl,200)
    [ 'b', 200 ]
    > nvpair.vget(tl,200,2000)
    [ [ 'b', 200 ], [ 'b', 2000 ] ]
    > nvpair.vget(tl)
    undefined
    >

    > nvpair.vgetk_fst(tl,200)
    'b'
    > nvpair.vgetk_lst(tl,200)
    'b'
    > nvpair.vgetk_which(tl,200,2)
    'c'
    > nvpair.vgetk_some(tl,200,2,3)
    [ 'c', 'b' ]
    > nvpair.vgetk_all(tl,200)
    [ 'b', 'c', 'c', 'b' ]
    >

    > nvpair.vgetk(tl,200)
    'b'
    > nvpair.vgetk(tl,200,400,100)
    [ 'b', 'b', 'a' ]
    >


### set 

#### kset

    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    >
    > nvpair.kset_all(tl,1,'B',999)
    > tl
    [
      [ 0, 'a' ],
      [ 'B', 999 ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 'B', 999 ],
      [ 2, 'c' ]
    ]
    >


    var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    > nvpair.kset_fst(tl,1,'B',999)
    > tl
    [
      [ 0, 'a' ],
      [ 'B', 999 ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    >


    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    > nvpair.kset_lst(tl,1,'B',999)
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 'B', 999 ],
      [ 2, 'c' ]
    ]
    >

    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    > nvpair.kset_which(tl,1,1,'B',999)
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 'B', 999 ],
      [ 2, 'c' ]
    ]
    >

    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.kset_some(tl,1,'B',999,0,1)
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 'B', 999 ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 'B', 999 ],
      [ 2, 'c' ]
    ]
    >


    var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    > nvpair.ksetk_all(tl,1,'X')
    > tl
    [
      [ 0, 'a' ],
      [ 'X', 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 'X', 'b' ],
      [ 2, 'c' ]
    ]
    >

    var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]

    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.ksetk_fst(tl,1,'X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 'X', 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    >
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.ksetk_lst(tl,1,'X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 'X', 'b' ],
      [ 2, 'c' ]
    ]
    >
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.ksetk_which(tl,1,1,'X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 'X', 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.ksetk_some(tl,1,'X',0,1)
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 'X', 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 'X', 'b' ],
      [ 2, 'c' ]
    ]
    >


    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.ksetv_some(tl,1,'X',0,1)
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'X' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'X' ],
      [ 2, 'c' ]
    ]
    >
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.ksetv_which(tl,1,0,'X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'X' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.ksetv_fst(tl,1,'X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'X' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.ksetv_lst(tl,1,'X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'X' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.ksetv_all(tl,1,'X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'X' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'X' ],
      [ 2, 'c' ]
    ]
    >


    var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]


#### vset 

    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vset_all(tl,'a','X','Y')
    undefined
    > tl
    [
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vset_some(tl,'a','X','Y',0,1)
    undefined
    > tl
    [
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vset_fst(tl,'a','X','Y')
    undefined
    > tl
    [
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vset_lst(tl,'a','X','Y')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    >
    
    
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vset_all(tl,'a','X','Y')
    undefined
    > tl
    [
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vset_some(tl,'a','X','Y',0,1)
    undefined
    > tl
    [
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vset_fst(tl,'a','X','Y')
    undefined
    > tl
    [
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vset_lst(tl,'a','X','Y')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'Y' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vsetk_fst(tl,'a','X')
    undefined
    > tl
    [
      [ 'X', 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vsetk_lst(tl,'a','X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vsetk_which(tl,'a',1,'X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vsetk_some(tl,'a','X',0,1)
    undefined
    > tl
    [
      [ 'X', 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    >
    > nvpair.vsetk_all(tl,'a','X')
    undefined
    > tl
    [
      [ 'X', 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'X', 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    >
    
    
    
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vsetv_all(tl,'a','X')
    undefined
    > tl
    [
      [ 0, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vsetv_fst(tl,'a','X')
    undefined
    > tl
    [
      [ 0, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vsetv_lst(tl,'a','X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vsetv_which(tl,'a',0,'X')
    undefined
    > tl
    [
      [ 0, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]
    > var tl = [ [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], [ 3, 'a' ], [ 1, 'b' ],[2,'c'] ]
    undefined
    > nvpair.vsetv_some(tl,'a','X',0,1)
    undefined
    > tl
    [
      [ 0, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ]
    ]


### kvset

    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.kvsetv_some(tl,0,'a','X',0,1)
    undefined
    > tl
    [
      [ 0, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 0, 'X' ]
    ]
    >
    >
    >
    >
    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.kvsetv_all(tl,0,'a','X')
    undefined
    > tl
    [
      [ 0, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 0, 'X' ]
    ]
    >
    >
    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.kvsetv_fst(tl,0,'a','X')
    undefined
    > tl
    [
      [ 0, 'X' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 0, 'a' ]
    ]
    >
    >
    >
    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.kvsetv_lst(tl,0,'a','X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 0, 'X' ]
    ]
    >
    >
    >
    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.kvsetv_which(tl,0,'a',1,'X')
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 0, 'X' ]
    ]
    >
    >



### set


    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.set(tl,1,11,'B')
    [ 11, 'B' ]
    > tl
    [
      [ 0, 'a' ],
      [ 11, 'B' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 0, 'a' ]
    ]
    >

    > nvpair.set_some(tl,"11111k",'B',0,2,4)
    undefined
    > tl
    [
      [ '11111k', 'B' ],
      [ 11, 'B' ],
      [ '11111k', 'B' ],
      [ 3, 'a' ],
      [ '11111k', 'B' ],
      [ 2, 'c' ],
      [ 0, 'a' ]
    ]
    >

#### uniq 

    var tl = [ 
        [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], 
        [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
        [ 0, 'a' ]
    ]
    
    > nvpair.uniq(tl)
    [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ] ]
    >
    > nvpair.kuniq(tl)
    [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ] ]
    >
    > nvpair.vuniq(tl)
    [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
    >


### sort

    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.ksort(tl)
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 2, 'c' ],
      [ 3, 'a' ]
    ]
    >




    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.vsort(tl)
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 3, 'a' ],
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 2, 'c' ]
    ]
    >
    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.kvsort(tl)
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 2, 'c' ],
      [ 3, 'a' ]
    ]
    >


    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    >
    > nvpair.vksort(tl)
    undefined
    > tl
    [
      [ 0, 'a' ],
      [ 0, 'a' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 2, 'c' ]
    ]
    >

### update 
    var tl = [ 
        [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], 
        [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
        [ 0, 'a' ]
    ]
    
    nvpair.update_all(tl,[[0,'aaa'],[4,'bbb']])
    
    > nvpair.update_all(tl,[[0,'aaa'],[4,'bbb']])
    undefined
    > tl
    [
      [ 0, 'aaa' ],
      [ 3, 'a' ],
      [ 0, 'aaa' ],
      [ 1, 'b' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 2, 'c' ]
    ]
    >

### assign

    var tl = [ 
        [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], 
        [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
        [ 0, 'a' ]
    ]
    
    
    nvpair.assign_all(tl,[[0,'aaa'],[4,'bbb']])

    > tl
    [
      [ 0, 'aaa' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 0, 'aaa' ],
      [ 4, 'bbb' ]
    ]
    >

### replenish

    var tl = [ 
        [ 0, 'a' ], [ 1, 'b' ],[2, 'c'], 
        [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
        [ 0, 'a' ]
    ]
    
    nvpair.replenish(tl,[[0,'aaa'],[4,'bbb']])

    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 3, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 0, 'a' ],
      [ 4, 'bbb' ]
    ]
    >


### find

    var tl = [
        [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
        [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
        [ 0, 'a' ]
    ]

    > nvpair.findi_all(tl,(v,k,i)=>v==='a')
    [ 6, 3, 0 ]
    >


    > nvpair.findk_all(tl,(v,k,i)=>v==='a')
    [ 0, 3, 0 ]
    >
    > nvpair.findkv_all(tl,(v,k,i)=>v==='a')
    [ [ 0, 'a' ], [ 3, 'a' ], [ 0, 'a' ] ]
    >
    > nvpair.findv_all(tl,(v,k,i)=>v==='a')
    [ 'a', 'a', 'a' ]
    >


### kdel

    var tl = [
        [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
        [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
        [ 0, 'a' ]
    ]

    > nvpair.kdel_all(tl,0)
    [ [ 0, 'a' ], [ 0, 'a' ] ]
    > tl
    [ [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
    >


### vdel

    var tl = [
        [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
        [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
        [ 0, 'a' ]
    ]

    nvpair.vdel_all(tl,'a')
    [ [ 0, 'a' ], [ 3, 'a' ], [ 0, 'a' ] ]

    > tl
    [ [ 1, 'b' ], [ 2, 'c' ], [ 1, 'b' ], [ 2, 'c' ] ]
    >


### kvdel

    var tl = [
        [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
        [ 3, 'a' ], [ 1, 'b' ],[2,'c'],
        [ 0, 'a' ]
    ]
    > nvpair.kvdel_all(tl,0,'a')
    [ [ 0, 'a' ], [ 0, 'a' ] ]
    >
    > tl
    [ [ 1, 'b' ], [ 2, 'c' ], [ 3, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]
    >

### proxy

    > var tl = [
    ...     [ 0, 'a' ], [ 1, 'b' ],[2, 'c'],
    ...     [ 'mmm', 'a' ], [ 1, 'b' ],['t','c'],
    ...     [ 0, 'a' ]
    ... ]
    undefined
    > var TL0 = new nvpair.Tlist(tl)
    undefined
    > var proxy = nvpair.proxy(tl)
    undefined
    > (delete proxy.t)
    true
    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'mmm', 'a' ],
      [ 1, 'b' ],
      [ 0, 'a' ]
    ]
    >

    proxy.mmm = 'AAAA'

    > tl
    [
      [ 0, 'a' ],
      [ 1, 'b' ],
      [ 2, 'c' ],
      [ 'mmm', 'AAAA' ],
      [ 1, 'b' ],
      [ 0, 'a' ]
    ]
    >

    > proxy[0]
    'a'
    >


class
-----

    const Tlist = nvpair.Tlist;

    > Tlist.from_list(["a",100,"b",200,"b",2000,"c",300])
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300
    }

    > Tlist.from_params("a",100,"b",200,"b",2000,"c",300)
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300
    }

    > Tlist.from_kvl([ 'a', 'b', 'b', 'c' ], [ 100, 200, 2000, 300 ])
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300
    }

    >
    > Tlist.from_dict({ a: 100, b: 2000, c: 300 })
    {
        "a" : 100 ,
        "b" : 2000 ,
        "c" : 300
    }
    > Tlist.from_dlist([ { a: 100 }, { b: 200 }, { b: 2000 }, { c: 300 } ])
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300
    }

    >





method
------


### repr
    
    var TL0 = new nvpair.Tlist([['a',100],['b',200],['b',2000],['c',300]])
    
    /*
    > TL0
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300
    }
    
    >
    */
    
    var TL1 = new nvpair.Tlist([['x',100],['y',TL0],['z',2000],['y',300]])
    
    /*
    
    > TL1
    {
        "x" : 100 ,
        "y" : Tlist {.../*  .$_[1]   */...}  ,
        "z" : 2000 ,
        "y" : 300
    }
    
    > TL1.$_[1]
      {
          "a" : 100 ,
          "b" : 200 ,
          "b" : 2000 ,
          "c" : 300
      }
    
    >
    >
    
    */
    
    
### to\_xxx
       
        > var TL0 = new nvpair.Tlist([['a',100],['b',200],['b',2000],['c',300]])
        > TL0.tlist_
        [ [ 'a', 100 ], [ 'b', 200 ], [ 'b', 2000 ], [ 'c', 300 ] ]
        >
        > TL0.list_
        [
          'a', 100, 'b',
          200, 'b', 2000,
          'c', 300
        ]
        > TL0.dlist_
        [ { a: 100 }, { b: 200 }, { b: 2000 }, { c: 300 } ]
        >
        > TL0.kvl_
        [ [ 'a', 'b', 'b', 'c' ], [ 100, 200, 2000, 300 ] ]
        >
        >
        > TL0.dict_
        { a: 100, b: 2000, c: 300 }
        >


### push 

    > var TL0 = new nvpair.Tlist([['a',100],['b',200],['b',2000],['c',300]])
    > TL0.push('X',999999)
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300 ,
        "X" : 999999
    }
    >

### unshift

    var TL0 = new nvpair.Tlist([['a',100],['b',200],['b',2000],['c',300]])
    TL0.unshift('X',999999)
    
    > TL0.unshift('X',999999)
    {
        "X" : 999999 ,
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300
    }
    
    >


### extend 

    var TL0 = new nvpair.Tlist([['a',100],['b',200],['b',2000],['c',300]])
    var TL1 = new nvpair.Tlist([['X',1111],['Y',2222]])
    
    TL0.extend(TL1)
    TL0
    TL1
    
    >     TL0
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300 ,
        "X" : 1111 ,
        "Y" : 2222
    }
    
    >     TL1
    {
        "X" : 1111 ,
        "Y" : 2222
    }
    
    >


### prextend 

    var TL0 = new nvpair.Tlist([['a',100],['b',200],['b',2000],['c',300]])
    var TL1 = new nvpair.Tlist([['X',1111],['Y',2222]])
    
    TL0.prextend(TL1)
    TL0
    TL1
    
    >     TL0
    {
        "X" : 1111 ,
        "Y" : 2222 ,
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300
    }
    
    >     TL1
    {
        "X" : 1111 ,
        "Y" : 2222
    }


### swap\_lr

    var TL0 = new nvpair.Tlist([['a',100],['b',200],['b',2000],['c',300]])
    TL0.swaplr()

    > var TL0 = new nvpair.Tlist([['a',100],['b',200],['b',2000],['c',300]])
    
    > TL0
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 300
    }

    > TL0.swaplr()
    {
        100 : "a" ,
        200 : "b" ,
        2000 : "b" ,
        300 : "c"
    }

    > TL0
    {
        100 : "a" ,
        200 : "b" ,
        2000 : "b" ,
        300 : "c"
    }

    >


### prepend

    TL0.prepend
    > TL0.prepend_
    TL0.prepend_dl      TL0.prepend_kvl     TL0.prepend_l       TL0.prepend_params  TL0.prepend_tl


### append

    TL0.append
    > TL0.append_
    TL0.append_dl      TL0.append_kvl     TL0.append_l       TL0.append_params  TL0.append_tl


### insert 

    > TL0.insert_
    TL0.insert_after          TL0.insert_before         TL0.insert_dl_after       TL0.insert_dl_before      TL0.insert_kvl_after
    TL0.insert_kvl_before     TL0.insert_l_after        TL0.insert_l_before       TL0.insert_params_after   TL0.insert_params_before
    TL0.insert_tl_after       TL0.insert_tl_before

### pop(with index)


    > TL0.pop
    TL0.pop          TL0.pop_after    TL0.pop_before   TL0.pop_between  TL0.pop_from     TL0.pop_some     TL0.pop_to
    TL0.shift

### rm(with index)

    > TL0.rm
    TL0.rm
    TL0.rm_after    TL0.rm_before   TL0.rm_between  TL0.rm_from     TL0.rm_fst      TL0.rm_lst      TL0.rm_some     TL0.rm_to


### get(with index)

    > TL0.get(2)
    [ 'b', 2000 ]
    >
    > TL0.get_some(2,4)
    [ [ 'b', 2000 ], [ 'b', 400 ] ]
    >

### idx

    > TL0.fst_idx_of_
    TL0.fst_idx_of_k   TL0.fst_idx_of_kv  TL0.fst_idx_of_v

    > TL0.lst_idx_of_
    TL0.lst_idx_of_k   TL0.lst_idx_of_kv  TL0.lst_idx_of_v

    > TL0.all_idxs_of_
    TL0.all_idxs_of_k   TL0.all_idxs_of_kv  TL0.all_idxs_of_v

    > TL0.which_idx_of_
    TL0.which_idx_of_k   TL0.which_idx_of_kv  TL0.which_idx_of_v

    > TL0.some_idxs_of_
    TL0.some_idxs_of_k   TL0.some_idxs_of_kv  TL0.some_idxs_of_v

### has

    TL0.hasi            TL0.hask            TL0.haskv           TL0.hasv


### count

    var TL0 = new nvpair.Tlist([['a',100],['b',200],['b',2000],['c',200],['b',400],['c',200],['b',200]])
    > TL0
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 200 ,
        "b" : 400 ,
        "c" : 200 ,
        "b" : 200
    }
    
    > TL0.vcount(200)
    4
    > TL0.vcount(555)
    0
    >
    > TL0.kvcount('b',200)
    2
    > TL0.kcount('b')
    4
    >


### reverse 

    > TL0
    {
        "a" : 100 ,
        "b" : 200 ,
        "b" : 2000 ,
        "c" : 200 ,
        "b" : 400 ,
        "c" : 200 ,
        "b" : 200
    }

    > TL0.reverse()
    {
        "b" : 200 ,
        "c" : 200 ,
        "b" : 400 ,
        "c" : 200 ,
        "b" : 2000 ,
        "b" : 200 ,
        "a" : 100
    }

### concat

    var TL0 = new nvpair.Tlist([['a',100],['b',200],['c',200]])
    var TL1 = new nvpair.Tlist([['d',300],['e',400]])
    var TL2 = TL0.concat(TL1)

    > TL2
    {
        "a" : 100 ,
        "b" : 200 ,
        "c" : 200 ,
        "d" : 300 ,
        "e" : 400
    }
    
    > TL0
    {
        "a" : 100 ,
        "b" : 200 ,
        "c" : 200
    }
    
    > TL1
    {
        "d" : 300 ,
        "e" : 400
    }
    
    >


### reduce

    > TL0.fold
    TL0.foldl  TL0.foldr


### filter

    > TL0.filter((v,k,i)=>k==='b')
    {
        "b" : 200 ,
        "b" : 2000 ,
        "b" : 400 ,
        "b" : 200
    }


### cond 

    TL0.every,TL0.any


### map

    > TL0.map
    TL0.map            TL0.map_inplace    TL0.mapk           TL0.mapk_inplace   TL0.mapkv          TL0.mapkv_inplace  TL0.mapv
    TL0.mapv_inplace


### kget

    > TL0.kget
    TL0.kget         TL0.kget_all     TL0.kget_fst     TL0.kget_lst     TL0.kget_some
    TL0.kget_which   TL0.kgetv        TL0.kgetv_all    TL0.kgetv_fst    TL0.kgetv_lst
    TL0.kgetv_some   TL0.kgetv_which


### vget

    > TL0.vget
    TL0.vget         TL0.vget_all     TL0.vget_fst     TL0.vget_lst     TL0.vget_some
    TL0.vget_which   TL0.vgetk        TL0.vgetk_all    TL0.vgetk_fst    TL0.vgetk_lst
    TL0.vgetk_some   TL0.vgetk_which

### set

    > TL0.set
    TL0.set       TL0.set_some
    
    > TL0.kset
    TL0.kset_all     TL0.kset_fst     TL0.kset_lst     TL0.kset_some    TL0.kset_which
    TL0.ksetk_all    TL0.ksetk_fst    TL0.ksetk_lst    TL0.ksetk_some   TL0.ksetk_which
    TL0.ksetv_all    TL0.ksetv_fst    TL0.ksetv_lst    TL0.ksetv_some   TL0.ksetv_which
    
    > TL0.vset
    TL0.vset_all     TL0.vset_fst     TL0.vset_lst     TL0.vset_some    TL0.vset_which
    TL0.vsetk_all    TL0.vsetk_fst    TL0.vsetk_lst    TL0.vsetk_some   TL0.vsetk_which
    TL0.vsetv_all    TL0.vsetv_fst    TL0.vsetv_lst    TL0.vsetv_some   TL0.vsetv_which
    
    > TL0.kvset_
    TL0.kvset_all    TL0.kvset_fst    TL0.kvset_lst    TL0.kvset_some   TL0.kvset_which

### uniq 

    > TL0.uniq
    TL0.uniq          TL0.uniq_inplace
    
    > TL0.kuniq
    TL0.kuniq          TL0.kuniq_inplace
    
    > TL0.vuniq
    TL0.vuniq          TL0.vuniq_inplace


### sort 
   
   TL0.ksort
   TL0.vsort
   TL0.kvsort

### update

    > TL0.update_
    TL0.update_all    TL0.update_fst    TL0.update_lst    TL0.update_some   TL0.update_which

### assign 

    > TL0.assign_
    TL0.assign_all    TL0.assign_fst    TL0.assign_lst    TL0.assign_some   TL0.assign_which

### replenish 

    > TL0.replenish


### find 

    > TL0.find
    TL0.findi_all     TL0.findi_fst     TL0.findi_lst     TL0.findi_some    TL0.findi_which
    TL0.findk_all     TL0.findk_fst     TL0.findk_lst     TL0.findk_some    TL0.findk_which
    TL0.findkv_all    TL0.findkv_fst    TL0.findkv_lst    TL0.findkv_some   TL0.findkv_which
    TL0.findv_all     TL0.findv_fst     TL0.findv_lst     TL0.findv_some    TL0.findv_which

### del 

    > TL0.kdel_
    TL0.kdel
    TL0.kdel_all    TL0.kdel_fst    TL0.kdel_lst    TL0.kdel_some   TL0.kdel_which
    
    > TL0.vdel_
    TL0.vdel
    TL0.vdel_all    TL0.vdel_fst    TL0.vdel_lst    TL0.vdel_some   TL0.vdel_which
    
    > TL0.kvdel_
    TL0.kvdel
    TL0.kvdel_all    TL0.kvdel_fst    TL0.kvdel_lst    TL0.kvdel_some   TL0.kvdel_which

### proxy 

    TL0.$_

LICENSE
=======
- ISC 
