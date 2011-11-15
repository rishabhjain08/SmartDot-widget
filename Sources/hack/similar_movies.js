function prepareDOM(links){
	document.getElementById("whole").innerHTML=links;
}
			function locate(term){
				YUI().use('node', 'yql', function(Y) {
    
			
				
			
			
			Y.YQL("SELECT * FROM amazon.ecs WHERE AWSAccessKeyId='AKIAIIG7UJWTQYBMR33Q' AND secret='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' AND ResponseGroup='Large' AND Title='"+term+"%' AND SearchIndex = 'Video'", function(r) {
			var html="";
			if (r.query && r.query.results ){
			
				//Y.log(r);
				
				 html = "";	
				var directories = r.query.results.Item;
				
				Y.each(directories, function(v, k){
				if(v.SimilarProducts!=undefined){
				if(v.SimilarProducts.SimilarProduct!=undefined){
				var dir_title= v.SimilarProducts.SimilarProduct;
				
				Y.each(dir_title,function(v1,k1){
				
				
				var str=v1.Title;
				var content= "<h4 style='background-color:rgb(179,168,164);'><a href='http://www.youtube.com/results?search_query="+str+"&aq=f'style='text-decoration:none;color:black;'>"+str+"</a></h4> <br/>";
				var foo1 = "<div class='mod'><b>"+content+"</b></div>";
				
				
				html = html + foo1;
				});
				}
				
					
				
				
				
				}
				
				
				 });
				
					//console.log(html);
			
				
			}
				prepareDOM(html);
			
			});
			
			
			
			
			});
			
			}
	
