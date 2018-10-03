//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    userInfo: {}, 
  },  
  onLoad: function () {
    var that = this

    var slideList = [
          
      { type:0, "image": "https://ws1.sinaimg.cn/large/006tNc79gy1fvtsprssu0j31kw2dckjt.jpg" },
      { type:0,"image": "https://ws4.sinaimg.cn/large/006tNc79gy1fvtsphxn84j31kw2dce8g.jpg" },
      { type: 0,"image": "https://ws4.sinaimg.cn/large/006tNc79gy1fvtsqtqu9tj31kw2dce8d.jpg" },
      { type: 0,"image": "https://ws2.sinaimg.cn/large/006tNc79gy1fvtsr5vyq4j31kw2dcnpn.jpg" },
      { type: 0,"image": "https://ws3.sinaimg.cn/large/006tNc79gy1fvtsrfsfn3j31kw2dc4qy.jpg" },
      { type: 0, "image": "https://ws2.sinaimg.cn/large/006tNbRwgy1fvuxq9byf1j31kw2dc7wr.jpg" },
      { type: 0, "image": "https://ws2.sinaimg.cn/large/006tNbRwgy1fvuxpv09cmj31kw2dcqvd.jpg" },
      { type: 0, "image": "https://ws2.sinaimg.cn/large/006tNbRwgy1fvuxoyjj0kj31kw2dc1l6.jpg" },
      { type: 0, "image": "https://ws2.sinaimg.cn/large/006tNbRwgy1fvuxonmw3xj31kw2dc1l4.jpg" },
      { type: 0, "image": "https://ws2.sinaimg.cn/large/006tNbRwgy1fvuxoencjjj31kw2dcu17.jpg" },
      { type: 1, "image": "http://ozptojnsh.bkt.clouddn.com/wedding-video.mp4" }

      ];
    that.setData({      
      slideList: slideList
    });

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: that.data.mainInfo.share,
      imageUrl: that.data.mainInfo.thumb,
      path: 'pages/index/index',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  }
})
