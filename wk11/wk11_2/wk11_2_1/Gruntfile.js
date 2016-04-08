module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //编译less文件，将其编译为css文件
        less:{
            development:{
                files:{
                    'output/reset.css':'styles/reset.less',
                    'output/variable.css':'styles/variable.less',
                    'output/common.css':'styles/common.less',
                    'output/mixin.css':'styles/mixin.less',
                    'output/stopBoard.css':'styles/stopBoard.less'
                }
            }
        },
        watch: {
            scripts: {
                files: ["styles/*.less"],
                tasks: ['less','concat','cssmin','copy'],
                options: { livereload: false }
            }
        },       
        //合并
        concat: {
            dist: {
                files: {
                    'output/concat/busStopBoard.css': ['output/*.css']
                }
            }
        },
        //压缩
        uglify:{
            dist:{
                files:{
                    // 'dist/js/BackToTop.js':['js/BackToTop.js'],
                    // 'dist/js/DisplaySubNav.js':['js/DisplaySubNav.js'],
                    // 'dist/js/focus.js':['js/focus.js'],
                    // 'dist/js/ImgSwitch.js':['js/ImgSwitch.js'],
                    // 'dist/js/ImgSwitchMore.js':['js/ImgSwitchMore.js'],
                    // 'dist/js/rotateShowSpan.js':['js/rotateShowSpan.js']
                }
            }
        },       
        // css文件压缩
        cssmin: {
            css: {
                files:{
                'styles/busStopBoard.css':'output/concat/busStopBoard.css',  
                }
            }
        },
        htmlmin: {                                     // Task 
            dist: {                                      // Target 
              options: {                                 // Target options 
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files 
                'dist/busStopBoard.html': 'busStopBoard.html'   // 'destination': 'source' 
              }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['js/three/*.js'],
                    dest: 'dist/'
                },{
                    expand: true,
                    src: ['styles/*.css'],
                    dest: 'dist/'
                }]
            }
        },
        imagemin: {      
            png: {
                files: [{
                    expand: true,
                    src: 'images/*.png',
                    dest: 'dist/'
                }]
            },
            jpg: {
                files: [{
                expand: true,
                src: 'images/*.jpg',
                dest: 'dist/'
                }]
            },
            jpeg: {
                files: [{
                    expand: true,
                    src: 'images/*.jpeg',
                    dest: 'dist/'
                }]
            },
            gif: {
                files: [{
                    expand: true,
                    src: 'images/*.gif',
                    dest: 'dist/'
                }]
            }
        }
    })

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 默认被执行的任务列表。
    grunt.registerTask('default', 
        ['less','uglify','concat','cssmin','htmlmin','copy','imagemin','watch']);
};
