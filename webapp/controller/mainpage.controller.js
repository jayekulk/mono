sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("signupzcreate.controller.mainpage", {
		onInit: function(){
			 this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("mainpage").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {},
		signup : function() {
			this.oRouter.navTo("signup");
			
		},
		barcodeSearch : function() {
			var addbutton = this.getView().byId("addbutton").getValue();
			this.oRouter.navTo("mainpage");
		}
		
	});
});