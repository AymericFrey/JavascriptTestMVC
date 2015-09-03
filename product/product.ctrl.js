var Controller = function(displayView, editView, model){
	var self = this;
	model.addObserver(displayView.update);
	
	self.updateListView = function (action, object){
		switch(action)
		{
			case "new" :
				model.addProduct(object);
				break;
		
			case "edit":
				editView.displayEdition(object);
				break;
				
			case "delete":
				model.suppressProduct(object);
				console.log(object);
				break;
		}
	}
	
	self.update = function (action, object)
	{
		switch(action)
		{
			case "update" :
				model.updateProduct(object);
				break;	
		}
	}
	

	//le controller observe la vue et lance la fonction update à chaque notification
	displayView.addObserver(self.updateListView);
	editView.addObserver(self.update);
}

var controller = new Controller(displayView, editView, productModel);

