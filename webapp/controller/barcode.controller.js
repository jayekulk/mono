sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("signupzcreate.controller.barcode", {
		onInit: function(){
			var oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("signupzcreate.model", "/Data.json"));
			this.getView().setModel(oModel);
			 this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("barcode").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {},
		signup : function() {
			this.oRouter.navTo("signup");
			
		},
		barcodeSearch : function() {
			var addbutton = this.getView().byId("addbutton").getValue();
			this.oRouter.navTo("View1");
		},
			onClickSpot : function(){
			this.oRouter.navTo("View1");	
		}
		
	});
});