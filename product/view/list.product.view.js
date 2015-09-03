var DisplayView = function(){
	Observer.call(this);
	Subject.call(this);
	var self = this;
	
	self.update = function(){
		$("#createForm").hide();
		$("#editForm").hide();
		$("#productList").empty();
		
		$.each(productModel.products, function(index, prod){
		$("#productList").append('<tr><td class="col-xs-1"><img src="'+ prod.imageUrl + '"></td><td class="col-xs-1">' + prod.id + '</td><td class="col-xs-1">' + prod.label + '</td><td class="col-xs-1">' 
		+ prod.price + '</td><td class="col-xs-3"><button id="edit' + prod.id +'" class="edit btn btn-success" >Editer</button><button id="suppress' + prod.id +'" class="suppress btn btn-danger">Supprimer</button></td></tr>');
		});
		
		$(".edit").click(function(){
		
			var id = '';
			id = $(this).attr('id').substring(4);
			console.log(id);
			self.updateProduct(id);
		});
		
		$(".suppress").click(function(){
			var id = $(this).attr('id').substring(8);
			self.suppressProduct(id);
			console.log(id);
		});
		
		$("#list").show();
	}
	
	self.showCreationForm = function(){
		$("#createForm").show();
		$("#list").hide();
	}
	
	self.addProduct = function(){
		var newProduct = new Product($("#idInput").val(), $("#labelInput").val(), $("#priceInput").val(), $("#urlInput").val());
		self.notify("new", newProduct);
		$("#createForm").hide();
		self.update();
	}
	
	self.updateProduct = function(id){
		var updatedProduct = productModel.products.filter(function(e){ 
			return e.id == id; });		
		self.notify("edit", updatedProduct);	
	}
	
	self.suppressProduct = function(id){
		var suppressedProduct = productModel.products.filter(function(e){ 
			return e.id == id; });
		self.notify("delete", suppressedProduct);
	}
	
	$("#newEditBtn").click(self.showCreationForm);
	$("#listBtn").click(function(){
		$("#list").show();
		$("#createForm").hide();
	});
	
	$("#submitCreation").click(self.addProduct);
	
	
	
	
	
	
	
	
}

var displayView = new DisplayView();
