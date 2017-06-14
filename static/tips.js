const dialog = {
  // 错误
  error: message => {
    layer.open({
      content: message,
      icon: 2,
      title: '错误提示',
      time: 2000
    })
  },
  //成功弹出层
  success: message => {
    layer.open({
      content: message,
      icon: 1,
      time: 2000
    });
  },

  // 确认弹出层
  confirm: (message, url) => {
    layer.open({
      content: message,
      icon: 3,
      btn: ['yeah', 'no'],
      yes: function () {
        location.href = url;
      },
    });
  },

  toast: message => {
    layer.msg(message);
  },

  post: message => {
    //示范一个公告层
    layer.open({
      type: 1,
      title: false,//不显示标题栏
      closeBtn: false,
      area: '300px;',
      shade: 0.8,
      id: 'LAY_layuipro',//设定一个id，防止重复弹出
      resize: false,
      btn: ['火速围观', '残忍拒绝'],
      btnAlign: 'c',
      moveType: 1,//拖拽模式，0或者1
      content: `<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">${message}</div>`,
      success: function (layero) {
        var btn = layero.find('.layui-layer-btn');
        btn.find('.layui-layer-btn0').attr({
          href: '',
          target: '_blank'
        });
      }
    });
  }

}