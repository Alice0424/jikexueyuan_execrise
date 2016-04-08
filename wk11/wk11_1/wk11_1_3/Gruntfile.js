module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //编译less文件，将其编译为css文件
        less:{
            development:{
                files:{
                    'output/jikexueyuan.css':'styles/*.less'
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
                    'dist/js/BackToTop.js':['js/BackToTop.js'],
                    'dist/js/DisplaySubNav.js':['js/DisplaySubNav.js'],
                    'dist/js/focus.js':['js/focus.js'],
                    'dist/js/ImgSwitch.js':['js/ImgSwitch.js'],
                    'dist/js/ImgSwitchMore.js':['js/ImgSwitchMore.js'],
                    'dist/js/rotateShowSpan.js':['js/rotateShowSpan.js']
                }
            }
        },
        concat: {
            dist: {
                files: {
                    'output/concat/jikexueyuan.css': ['output/jikexueyuan.css']
                }
            }
        },
        // css文件压缩
        cssmin: {
            css: {
                src:'output/concat/jikexueyuan.css',
                dest:'dist/styles/jikexueyuan.css'
            }

        },
        htmlmin: {                                     // Task 
            dist: {                                      // Target 
              options: {                                 // Target options 
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files 
                'dist/jikexueyuan.html': 'jikexueyuan.html'   // 'destination': 'source' 
              }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['js/three-jQuery/*.js','js/jQuery/**/*.js','js/main.js'],
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
