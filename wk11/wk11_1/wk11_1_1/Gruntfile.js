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
                tasks: ['less']
                options: { livereload: false }
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less']);
};
