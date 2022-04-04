# 可视化技术选型

ECharts  ,vue, vueRouter,  vuex    ,webpack,    axios,    webSocket

# Echarts介绍

基于js开源的可视化库，兼容性强，底层依赖矢量图形库ZRender 

###### 多种数据格式支持

```
key-value数据格式
二维表
typeArray格式
```

###### 流数据的支持

```
流数据的动态渲染
增量渲染
```

# ECharts实现步骤

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="main" style="width: 600px;height:400px;"></div>
</body>
</html>
<script src="echarts.js"></script>
<script type="module">
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {//直角坐标系中的X轴
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},//直角坐标系中的Y轴
  series: [//系列列表每个系列通过type来决定自己的图表类型
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});
</script>
```

# 通用配置

###### toolbox

```

内置工具栏
```

# 矢量地图的实现步骤

使用ajax 获取矢量地图数据

# 图表自适应

1.监听窗口事件大小

2.在事件处理函数中调用ECharts 实例对象的resize即可

```js
    window.onresize = function(){
        myChart.resize();
    }
```

# 动画的使用

###### 加载动画

echarts内部已经内置好了加载数据的动画，我们只需要在合适的时机显示隐藏就好

```
显示加载动画：mcharts.showLoading()//加载数据获取之前
隐藏加载动画：myCharts.heideLoading()
```



###### 适量动画

# 图表动画的配置项：

``` 
animation:false/true  //控制动画是否开启
animationDuration: 时长 // 动画时长，时长以毫秒为单位 
animationDuration: function(arg){
	可以控制单个元素出现动画
}
缓动动画：
animationEasing :'liner'
动画阈值
animationThreshold: 数量   // 单种形式的元素数量，大于这个阈值时会关闭动画
```

# 全局echarts对象常用方法

```
echartsinstance对象  使用过echarts.init方法调用之后得到
注册地图数据
registerMap  
$.get ('地图json文件地址',function(ret){
	echarts.resgister("命名"，ret)
})
geo组件使用地图数据
var option ={
geo :{
type:"map",
map:"命名"
}
}
```

# echarts全局关联

echats.conect([第一个图表，第二个图表，......])

# echartsinstance对象

###### setOption()

```
设置或者修改实力配置项的数据
多次调用setOption 方法

```

###### resize()

```
重新计算和绘制图表
一般和window对象的resize事件结合
    window.onresize = function(){
        myChart.resize();
    }
```

on/of 方法

```
解除或者绑定事件处理函数
鼠标事件
事件参数arg:和事件相关的数据信息
echarts事件

```

dispath Action方法

```
出发某些行为
使用代码模拟用户行为
mycharts.dispathAtion({
 type:"事件类型"，
 seriesindex:图标索引
 dataindex:图标哪一项高亮
})
```

clear 方法

```
清空当前实例，会移除实例中所有的组件和图标
清空之后可以再次setoption
```

dispose 方法

```
销毁s
```

