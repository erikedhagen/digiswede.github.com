module.exports = function(grunt) {


    grunt.initConfig({
        sass: {
        	dist: {
        		files: {
        			'css/main.css': 'main.scss' 
        		}
        	}
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: false,
                },
            },
            livereload: {
            	options: {
            		livereload: true
            	},
            	files: ['main.css']
            }
        },
        'http-server': {
	        'dev': {
	            // the server root directory 
	            root: './',
	 
	            // the server port 
	            // can also be written as a function, e.g. 
	            // port: function() { return 8282; } 
	            port: 8282,
	            
	            // the host ip address 
	            // If specified to, for example, "127.0.0.1" the server will  
	            // only be available on that ip. 
	            // Specify "0.0.0.0" to be available everywhere 
	            host: "0.0.0.0",
	 			
	            showDir : true,
	            autoIndex: true,
	 
	            // server default file extension 
	            ext: "html",
	 
	            // run in parallel with other tasks 
	            runInBackground: true
	        }
	    },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('default', ['sass', 'watch']);

};