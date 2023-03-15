const receivesAFunction = (test) =>{
 test()
}

const returnsANamedFunction = () =>{
    return function mary (){}
}
const returnsAnAnonymousFunction =() => {
 return () => {}
}