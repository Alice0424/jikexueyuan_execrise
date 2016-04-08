// 设置图片合并的最小间隔
// fis.config.set('settings.spriter.csssprites.margin', 20);
// fis.config.set('modules.spriter','csssprites');

// 开启simple插件
fis.config.set('modules.postpackager', 'simple');

// 设置打包规则
fis.config.set('pack', {
    'js/js/baidushouye.js': [
        'js/js/*.js'
    ],
    // 取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
    'css/baidushouye.css': '**.css'
});