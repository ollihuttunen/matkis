var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task ('default', function(){
	console.log ("hip hei! - jäbä teki gulpit");
});

gulp.task ('html', function(){
	console.log ("hip hei! - jäbä teki nyt html:ään muutoksia");
});

gulp.task ('styles', function(){
	console.log ("jäbä teki nyt muutoksia css tyyleihin");
});


gulp.task ('watch', function(){

	watch('./app/index.html', function () {
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css', function () {
		gulp.start('styles');
	})

});