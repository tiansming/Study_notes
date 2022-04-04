#### 页面跳转回退传参

页面跳转

```ts
        Taro.navigateTo({
            url:'pages/stu_3/stu3?id=2&type=test'
        })
接受参数
    componentWillMount() {
        console.log(Current.router?.params);//接受参数
        const aa= Taro.getCurrentPages().length; 所在页面的栈堆
        console.log(aa);
        

    }
```

回退

```ts
   back() {
        Taro.navigateBack({
            delta: 1 //层数，如果大于页面数就会返回首页
        })
    }
```

##taro中使用html标签
// 后端返回的数据类型
```json

{
    "totalElements": 1,
    "totalPages": 1,
    "last": true,
    "first": true,
    "size": 50,
    "number": 0,
    "numberOfElements": 1,
    "models": [
        {
            "createUser": 1,
            "createTime": "2021-10-27 20:13:21",
            "updateUser": 1,
            "updateTime": "2021-10-28 16:59:42",
            "version": 4,
            "comments": null,
            "id": 2,
            "hosId": 61011600,
            "name": "核酸预约须知",
            "content": "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p><span style=\"color: #e74c3c; font-size: 12pt;\">根据疫情防控最新要求，为切实做好疫情防控工作，最大限度降低传播风险，切实保障人民群众的健康安全，请您来院做核酸检测时按照工作人员的指引保持一米间隔有序排队。</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">&nbsp; 【鼻咽拭子相对禁忌症】</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">&nbsp;1.最近有鼻部外伤史或手术病史</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">&nbsp;2.鼻中隔明显偏曲</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">&nbsp;3.慢性鼻道阻塞</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">&nbsp;4.严重凝血障碍病史</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">&nbsp;【口咽拭子患者准备】</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">1.空腹或餐后2小时</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">2.采样前15-30分钟不吸烟、喝酒、不喝热水、咀嚼口香糖等</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">3.清水或生理盐水漱口</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">4.提前准备面巾纸，以便咳嗽时捂住口</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">&nbsp;【温馨提示】</span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\">预约前请认真核对就诊人信息，核酸检测开单申请前，需填写流调问卷，开单申请成功后，可根据提示缴纳核酸检测费用，<span style=\"color: #e74c3c;\">请携带本人身份证赴院检测，可直接到门诊大楼东侧核酸检测点进行采样。<span style=\"color: #000000;\"> 采样时间为早上8:00--11:30，下午2:30--5:00，周六日不休息。</span></span></span></p>\n<p><span style=\"color: #000000; font-size: 12pt;\"><span style=\"color: #e74c3c;\"><span style=\"color: #000000;\">如您缴纳检测费后不再进行检测，需来院办理退费，请您确认后再缴费。</span></span></span></p>\n<p>&nbsp;</p>\n</body>\n</html>",
            "state": "1",
            "addInfo": null,
            "expand1": "nucleic-acid-appointment",
            "expand2": null,
            "expand3": null,
            "producer": "0",
            "keyInfo": null
        }
    ],
    "total": null
}
```
#####应用在公众号上面
```tsx
class Index extends WithRouterComponent<RootStore, any> {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            content: null,
        };
    }
    async componentDidMount() {
        const book_offline = 'nucleic-acid-appointment';
        const result = await NucleicService.bookingInstructions(book_offline);//请求的接口
        const data = await UtilService.responseHandle(result);
        console.log('这是须知', data);
        this.setState({
            name: data.models[0].name,
            content: data.models[0].content,
        });
    }
    render() {
        const {name, content} = this.state;
        return (
            <ComPage
                headerProps={{title: name}}
                style={StyleSheet.transformRNStyle({
                    backgroundColor: '#f3f5f7',
                })}
            >
                <View
                    className="bookScroll"
                    style={StyleSheet.transformRNStyle({
                        backgroundColor: COLOR.white,
                        margin: 16,
                        borderRadius: 8,
                        paddingHorizontal: 16,
                        paddingVertical: 18,
                    })}
                >
                    <View
                        className="modalContent fs-16"
                        dangerouslySetInnerHTML={{__html: content}}
                    ></View>
                </View>
            </ComPage>
        );
    }
}

export default Index;



```

