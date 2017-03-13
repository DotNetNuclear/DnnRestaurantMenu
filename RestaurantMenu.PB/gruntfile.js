/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {

	// would like to pull this information from the manifest
	var global = {
		packageName: "DotNetNuclear.RestaurantMenu.PersonaBar",
        personaBarExtPath: "../../admin/dnn.personaBar/modules/Dotnetnuclear.Restaurantmenu",
		version: "1.0.0"
	};
	grunt.initConfig({
		global: global,
		clean: {
			packagingTemp: {
				src: ['packaging/']
			},
			install: {
				src: ['packaging/module/']
			}
        },
		compress: {
			install: {
				options: {
					archive: 'dist/<%= global.packageName %>_<%= global.version %>_Install.zip',
					mode: 'zip'
				},
				files: [
					{ expand: true, src: ['**'], cwd: 'packaging/' }
				]
			},
			installResources: {
				options: {
					archive: 'packaging/Resources.zip',
					mode: 'zip'
				},
				files: [
					{ expand: true, cwd: 'packaging/module/', src: ['**'] }
				]
			}
		},
		copy: {
            assemblies: {
				files: [
                    { expand: true, cwd: 'bin/', src: ['<%= global.packageName %>.*'], dest: '../../../bin/' }
				]
			},
			install: {
				files: [
					{ expand: true, src: ['*.dnn', '*.txt', '*.html'], dest: 'packaging/' },
					{ expand: true, src: ['InstallScripts/*.SqlDataProvider'], dest: 'packaging/' },
                    { expand: true, cwd: 'bin/', src: ['<%= global.packageName %>.*.dll'], dest: 'packaging/bin/' },
					{ expand: true, src: ['Resources/**'], dest: 'packaging/module/' },
				]
			},
            pb: {
                files: [
                    { expand: true, cwd: 'PersonaBar/', src: ['**/*'], dest: '<%= global.personaBarExtPath %>/' }
                ]
            }
		},
		msbuild: {
			debug: {
				src: ['RestaurantMenuPB.csproj'],
				options: {
					projectConfiguration: 'Debug',
					targets: ['Rebuild'],
					version: 14,
					maxCpuCount: 4,
					buildParameters: {
						WarningLevel: 2
					},
					nodeReuse: false,
					customArgs: [],
					verbosity: 'quiet'
				}
			},
			release: {
				src: ['RestaurantMenuPB.csproj'],
				options: {
					projectConfiguration: 'Release',
					targets: ['Rebuild'],
					version: 14,
					maxCpuCount: 4,
					buildParameters: {
						WarningLevel: 2
					},
					nodeReuse: false,
					customArgs: [],
					verbosity: 'quiet'
				}
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-msbuild');

    grunt.registerTask('package', ['msbuild:release', 'copy:install', 'compress:installResources', 'clean:install', 'compress:install', 'clean:packagingTemp']);
    grunt.registerTask('debug', ['msbuild:debug', 'copy:debug', 'copy:pb']);
};