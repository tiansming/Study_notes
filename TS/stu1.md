类型的声明

const  变量：变量的类型声明 = 符合的变量

```js
const a:number = 10;
function sum(a:number,b:number):number { // number函数返回值的类型
		return a+b
}
类型可以使用联合类型
let a:number|string
any:任意类型----不建议使用---可以赋值给任意变量
unknow :不能直接赋值给其他变量
类型断言：--告诉解析器变量的实际类型
s = e as string;或者 s =<string>e //string 数据类型
viod: 函数没有返回值
function fn():viod {//函数没有返回值
    
}
function fun():never{//永远没有返回结果---通常用于报错
    throw new Error("报错了")
}
object 对象
{}//用来指定对象中包含的哪些属性
语法：{属性名1：属性值 ,属性名2?：属性值......}//?表示这个属性值可选
let b:{name:string}
b = {name:"GGG"}

 let b:{name:string， [xx:string]:any}
 [xx:string]:表示任意属性名,xx可随意命名
  any:表示任意类型
 
let d:(name:number,b:number)=>number;表示函数返回值为number---定义函数的结构

 数组---表示数组里面值的类型--两种
let d:string[]      
let d:Array<number>
      
元组----就是固定长度的数组
语法：[类型，类型，类型，....]
let h:[string,string,.....] 

    
枚举：
enum Gender{//定义枚举：
    maleL:0,
    famel:1
}
使用：
let i:{name:string, gender:Gender};
i = {
    name:"GG",
    gender:Gender.maleL
}
类的别名：
type  别名 = 类型
```

# 接口

```ts
Ts 接口--实际上就是一个类型的限制
interface labelValue{
   label:string;
}
 
function printLabel(labelObj:labelValue){
    console.log( labelObj.label );
}
 
let myObj2={  size:10,label:"Size 10 Object" };
printLabel(myObj2);
```

返回值与传入的参数类型相同

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

