module.exports = function(grunt){


	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		sass:{
			dist:{
				src: "scss/styles.scss",
				dest: "css/styles.css"
			}
		}
	});
	grunt.registerTask("default",['sass']);
}