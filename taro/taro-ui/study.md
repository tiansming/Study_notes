# 日期选择器：

```tsx
  <Picker mode="date"onCancel = {this.queding} onChange={this.onChange}>
            <AtList>//可以更换成<div>
                   <AtListItem//可以更换成<div>
                      title="筛选"
                    // extraText={'选择呀'}
                   />
           </AtList>
    </Picker>
    onChange=(e) =>{
        const timeValue = e.detail.value;//获得选择的日期
      }
    
```

