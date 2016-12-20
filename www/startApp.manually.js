cordova.define("com.epsilonnet.startapp.startapp", function (require, exports, module) {


var exec = require('cordova/exec');

module.exports = {
	
	 
	set: function(params, extra) {
		var output = [params];
			
		if(extra != undefined) {
			output.push(extra);
		}
		else {
			output.push(null);
		}
		
		return {
			start: function(completeCallback, errorCallback) {
				completeCallback = completeCallback || function() {};
				errorCallback = errorCallback || function() {};
				
				exec(completeCallback, errorCallback, "startApp", "start", output);
			},
			check: function(completeCallback, errorCallback) {
				completeCallback = completeCallback || function() {};
				errorCallback = errorCallback || function() {};
				
				exec(completeCallback, errorCallback, "startApp", "check", output);
			},
			go: function(completeCallback, errorCallback) {
				completeCallback = completeCallback || function() {};
				errorCallback = errorCallback || function() {};
				
				exec(completeCallback, errorCallback, "startApp", "go", output);
			}
		}
	},
	/**
	 * extra values
	 */
	getExtras: function(completeCallback, errorCallback) {
		exec(completeCallback, errorCallback, "startApp", "getExtras", []);
	},
	getExtra: function(extraValue, completeCallback, errorCallback) {
		exec(completeCallback, errorCallback, "startApp", "getExtra", [extraValue]);
	},
	hasExtra: function(extraValue, completeCallback, errorCallback) {
		this.getExtra(extraValue, completeCallback, errorCallback);
	}
}

});
