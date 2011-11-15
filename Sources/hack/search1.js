		function alltrim(str) {
                return str.replace(/^\s+|\s+$/g, '');
		}
		
		function semanticSearch(term){
			var str = alltrim(term).replace(" ","+");
			var str1= "http://www.wolframalpha.com/input/?i="+str;
			window.location.href = str1;
		}
	
