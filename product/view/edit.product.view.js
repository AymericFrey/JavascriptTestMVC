var EditView = function(){
	Subject.call(this);
	var self = this;
	
	self.displayEdition = function(product){
		
		$("#idEdit").val($(product).attr('id'));
		$("#labelEdit").val($(product).attr('label'));
		$("#priceEdit").val($(product).attr('price'));
		$("#urlEdit").val($(product).attr('imageUrl'));
		$("#list").hide();
		$("#editForm").show();
		
		
		$("#submitEdit").click(function(){
			
			self.updateProduct();
			$("#editForm").hide();
			$("#list").show();
			$("#eForm").val('');
			
		});
	}

	self.updateProduct = function(){
		var updatedProduct = new Product($("#idEdit").val(), $("#labelEdit").val(), $("#priceEdit").val(), $("#urlEdit").val());
		
		self.notify("update", updatedProduct);
		
	}
	
	
	
	

}

var editView = new EditView();