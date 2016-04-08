module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //编译less文件，将其编译为css文件
        less:{
            development:{
                files:{
                    'dist/jikexueyuan.css':'css/*.less'
                }
            }
        },
        watch: {
            scripts: {
                files: ["css/*.less"],
                tasks: ['less'],
                options: { livereload: false }
            }
        },
        uglify:{
            dist:{
                files:{
                    'dist/BackToTop.min.js':['js/BackToTop.js'],
                    'dist/DisplaySubNav.min.js':['js/DisplaySubNav.js'],
                    'dist/focus.min.js':['js/focus.js'],
                    'dist/ImgSwitch.min.js':['js/ImgSwitch.js'],
                    'dist/ImgSwitchMore.min.js':['js/ImgSwitchMore.js'],
                    'dist/rotateShowSpan.min.js':['js/rotateShowSpan.js']
                }
            }
        },
        concat: {
            dist: {
                files: {
                    'output/jikexueyuan.css': ['dist/*.css']
                }
            }
        },
        // css文件压缩
        cssmin: {
            css: {
                src:'output/jikexueyuan.css',
                dest:'output/jikexueyuan-min.css'
            }

        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less','uglify','concat','cssmin']);
};
