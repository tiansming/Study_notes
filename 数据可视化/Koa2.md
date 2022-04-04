# koa2特点：

支持asnyc/await

洋葱模型的中间件

![image-20211016142804221](C:\Users\田双明\AppData\Roaming\Typora\typora-user-images\image-20211016142804221.png)

请求的时候第一层中间件先处理数据到第二层在到第三层处理完成后继续到第三层------第二层------第一层  最后进行响应

# 中间件的特点

app.use()//使用中间件

中间件的执行顺序符合洋葱模型

内层中间件是否执行，取决于万层中间件的next函数是否调用

调用next函数得到的是promise对象

# 后台项目的目标

计算服务器请求的总耗时

2.在相应头上加上响应内容的mime 类型

3.根据url 读取指定目录下的文件内容

# 后台项目的实现步骤

1.项目准备

2.总耗时中间件

3.响应头中间件

4.业务路基中间件

5.允许跨域

# 解决跨域的方法

在后端的响应头 app.use()里面设置

```
// 设置响应头的中间件
module.exports = async (ctx, next) => {
  const contentType = 'application/json; charset=utf-8'
  ctx.set('Content-Type', contentType)
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE")
  await next()
}
```
