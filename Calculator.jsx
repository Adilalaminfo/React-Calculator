function Add(a,b){
    let sum=a+b;
    return sum;
}
function Sub(a,b){
    let Subtra=a-b;
    return Subtra;
}
function Mul(a,b)
{
    let mul=a*b;
    return mul;
}
function Div(a,b){
    let division=a/b;
    division=division.toFixed(3);
    return division;
}
export {Add,Sub,Mul,Div};