function prepareDOM(links){
	alert(links);
	document.getElementById("whole").innerHTML=links;
}

			function locate(term){
				alert("KOKOK");
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
				
				
				var content= "song: "+v1.Title+"<br/>" ;
				var foo1 = "<li class='mod'><b>"+content+"</b></li>";
				
				
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
	
	