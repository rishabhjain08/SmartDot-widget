function prepareDOM(links){
	//alert(links);
		document.getElementById("whole").innerHTML=links;
}
			function locate(term){
				YUI().use( 'yql', function(Y) {
    
			
				
			
			var html="";
			Y.YQL("SELECT * FROM amazon.ecs WHERE AWSAccessKeyId='AKIAIIG7UJWTQYBMR33Q' AND secret='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' AND ResponseGroup='Large' AND Title='"+term+"%' AND SearchIndex = 'Video'", function(r) {
			
			if (r.query && r.query.results ){
			
				//Y.log(r);
				
				html = "";	
				var Title = r.query.results.Item[0].ItemAttributes.Title;
				html=html+"<div id='title'><h3 style='background-color:rgb(179,168,164);'>"+Title+"</h3></div>";
				var Review=r.query.results.Item[0].EditorialReviews.EditorialReview;
				//var Source = r.query.results.Item[0].EditorialReviews.EditorialReview[0].Source;
				//var content = r.query.results.Item[0].EditorialReviews.EditorialReview[0].Content;
				//console.log(Source);
				Y.each(Review,function(v,k){
				var Source=v.Source;
				var Content=v.Content;
				html=html+"<div><div class='source'><h4 style='color:red;'>SOURCE:"+Source+"</h4></div><div class='reviews'>"+Content+"</div>";
				
				
				
				
				
				
				});
				
				
				
				
			//alert(content); 	
			/*	
				Y.each(directories, function(v, k){
				var title=v.ItemAttributes.Title;
				if(v.EditorialReviews!=undefined){
					if(v.EditorialReviews.EditorialReview!=undefined){
				var review=v.EditorialReviews.EditorialReview;	
				
				Y.each(review,function(v1,k1){
				
				var source=v1.Source;
				var reviews=v1.Content;
				
				var content= "<div><div class='source'>"+source+"</div><div class='reviews'>"+reviews+"</div>";
				
				html=html+content;
				
				
				});
				}
				}
				
				 });
				 */
				
						
				
			}
				prepareDOM(html);
			
			});
			
			
			
			
			});
			
			}