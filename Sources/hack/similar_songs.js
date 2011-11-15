function prepareDOM(links){
	document.getElementById("whole").innerHTML=links;
}

			function locate(term){
			YUI().use('yql', function(Y) {
    
			Y.YQL("SELECT * FROM amazon.ecs WHERE AWSAccessKeyId='AKIAIIG7UJWTQYBMR33Q' AND secret='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' AND ResponseGroup='Large' AND Title='"+term+"' AND SearchIndex = 'MP3Downloads' ", function(r) {
			var html="";
			if (r.query && r.query.results ){
			
				
				 html = "";	
				var directories = r.query.results.Item;
				
				Y.each(directories, function(v, k){
				var artist=v.ItemAttributes.Creator.content;
				var format=" <div><h3 style='background-color:rgb(179,168,164);'>"+artist+"</h3></div><ul>";
				html=html+format;
				
				if(v.SimilarProducts!=undefined){
				if(v.SimilarProducts.SimilarProduct!=undefined){
				var dir_title= v.SimilarProducts.SimilarProduct;
				
				Y.each(dir_title,function(v1,k1){
				
		var str=v1.Title;
				var content= " <a href='http://www.youtube.com/results?search_query="+str+"&aq=f' style='text-decoration:none;color:black; '>"+str+"</a><br/>" ;
				var foo1 = "<li class='mod' style='background-color:white; '><b>"+content+"</b></li><br/>";
				
						
				
				html = html + foo1;
				});
				}
				
					
				
				
				
				}
				html=html+"</ul>";
								 });
				
						
				
			}
				prepareDOM(html);
			
			});
			
			
			
			
			});
			
			}
	
	