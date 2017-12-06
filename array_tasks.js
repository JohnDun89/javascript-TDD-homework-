var arrayTasks = {

	concat: function (arr1, arr2) {
		 result = arr1.concat(arr2);
		return result;
	},

	// insertAt: function (arr, itemToAdd, index) {
	// 	 result = [3,3,3];
	// 	 result.splice(arr, itemToAdd, index);
	// 	return result;
	// },

	square: function (arr) {

		var result = [];
		arr.map(function(item) {
			 var squared = item * item;
			result.push(squared);
		});
		return result;
	},

	sum: function (arr) {
		function add(a, b) {
			return a + b;
		}
		result = arr.reduce(add, 0);

		return result;
	},

	findDuplicates: function (arr) {
		let result = [];
		arr.forEach(function(item,index){
			if (arr.indexOf(item, index +1)> -1) {
				if(result.indexOf(item) === -1){
					result.push(item);
				}
			}
		});
		return result;
	},

	removeAndClone: function (arr, valueToRemove) {
			let result = [];
			arr.forEach(function(item){
				if (item === valueToRemove){
					item.pop;
				}
				else result.push(item);
			});
			return result;
	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
