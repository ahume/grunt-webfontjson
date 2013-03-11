/*
 * grunt-webfontjson
 * https://github.com/ahume/grunt-webfontjson
 *
 * Copyright (c) 2013 Andy Hume
 * Licensed under the MIT license.
 */

'use strict';

var build = require('webfontjson');


module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('webfontjson', 'Build json to deliver web fonts.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var config = this.options({
      callback: 'webfontjson'
    });

    var done = this.async();
    build.buildFontFiles([config], function() {
      done();
    })

    // Iterate over all specified file groups.
    // this.files.forEach(function(f) {
    //   // Concat specified files.
    //   var src = f.src.filter(function(filepath) {
    //     // Warn on and remove invalid source files (if nonull was set).
    //     if (!grunt.file.exists(filepath)) {
    //       grunt.log.warn('Source file "' + filepath + '" not found.');
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }).map(function(filepath) {
    //     // Read file source.
    //     return grunt.file.read(filepath);
    //   }).join(grunt.util.normalizelf(options.separator));

    //   // Handle options.
    //   src += options.punctuation;

    //   // Write the destination file.
    //   grunt.file.write(f.dest, src);

    //   // Print a success message.
    //   grunt.log.writeln('File "' + f.dest + '" created.');
    // });
  });

};
