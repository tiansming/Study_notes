function setName(obj){
    obj.name = "setName";
    obj = new Object();
    obj.name = "gggtt";
}
let obj1= new Object();
setName(obj1);
console.log(obj1.name)