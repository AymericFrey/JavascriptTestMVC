var ProductModel = function(){

	Subject.call(this);
	this.products = [];
	var produit1 = new Product("1", "sac à main", "12.5", "../images/ben-sac-a-main-1_16995.jpg");
	var produit2 = new Product("2", "sac à main 2", "14.5", "../images/esquisse-3-sac-a-main_112274.jpg");
	this.products.push(produit1);
	this.products.push(produit2);
	
	this.addProduct= function(product){
		
		this.products.push(product);
		this.notify(this);
	}

	this.deleteProduct = function(product){
		products.splice(products.indexOf(product),1);
		this.notify(this);
    }
	
	this.updateProduct = function(product){
		
		for (var i = 0; i < this.products.length; i++)
		{
			
			if(this.products[i].id == product.id)
			{
				
				this.products[i]= product;
				
				this.notify(this);
				
			}
		}
	}
	
	this.suppressProduct = function(product){
		console.log($(product).attr("id"));
		for (var i = 0; i < this.products.length; i++)
		{
			
			if(this.products[i].id == $(product).attr("id"))
			{
				console.log("dgd");
				this.products.splice(i, 1);
				
				this.notify(this);
				
			}
		}
	
	
	
	};
	
	
}


var Product = function(id, label, price, imageUrl)
{
	this.id = id;
	this.label = label;
	this.price = price;
	this.imageUrl = imageUrl;
}

var productModel = new ProductModel();


