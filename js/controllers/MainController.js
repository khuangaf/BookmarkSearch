app.controller("MainController", function($scope) {
	$scope.apple=123;
	$scope.bookmarks=[];
	


	function retrieveBookmarks (query){
		// if(treeNode.title)
		var dfrd = $.Deferred();
		chrome.bookmarks.getTree(function(treeNodes){
		
			
			for(var i=0; i<treeNodes.length;i++){
				// console.log('1');
				getBookmarkChildren(treeNodes[i],query);
			}
			dfrd.resolve();
			
			
		});
		
		
		return dfrd.promise();

	};


	function getBookmarkChildren (treeNode,query){
		// console.log(query);
		if(treeNode.title && treeNode.url){
			if(!query){
				// console.log(treeNode.title,treeNode.url);	
				$scope.bookmarks.push(treeNode);
			}
			else{
				if(String(treeNode.title).toLowerCase().indexOf(query.toLowerCase())!=-1){
					// console.log(treeNode.title);
					$scope.bookmarks.push(treeNode);

				}
			}
			// $scope.$apply();
			
    		
			
		}
		if(treeNode.children && treeNode.children.length >0){
			for(var i=0;i<treeNode.children.length;i++){
				getBookmarkChildren(treeNode.children[i],query);

			}
		}
	}

	
	document.getElementById("search").addEventListener("keyup", function(){
		var search = document.getElementById("search").value;
		
		$scope.bookmarks.length=0;
   
    	retrieveBookmarks($scope.search).done(function(){
    		
    		$scope.$apply();
    	});
    	
    	

	});
  	

});


