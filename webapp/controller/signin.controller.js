sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("signupzcreate.controller.signin", {
		onInit: function(){
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("signin").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {},
		createUser: function(oEvent) {
				var Id = this.getView().byId("userId").getValue();
			var password = this.getView().byId("password").getValue();
			
			if (Id === "TEST") {
				if (password === "1234") {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("barcode");
				}
			}
		/*	var user = this.getView().byId("user").getValue();
			var pass = this.getView().byId("pass").getValue();

			var oModel = this.getOwnerComponent().getModel("defaultModel");
			var serviceUrl = "/UserDataSet(Username='"+ user + "',Password='" + pass + "')";
		
			var self = this;
			var oBindingContext = oEvent.getSource().getBindingContext();
			var mParameters = {
		
				success: function(oData, response) {
					if(oData.status == "SUCCESS") {
						
					self.oRouter.navTo("barcode");
					
					} else {
						var bCompact = !!self.getView().$().closest(".sapUiSizeCompact").length;
						MessageBox.error(
							"Username Password is Wrong!",
							{
								styleClass: bCompact? "sapUiSizeCompact" : ""
							}
						);
						
					}
				},
				error: function(oError) {

				}
			};

			oModel.read(serviceUrl, mParameters);*/
			

		},
		signup : function() {
			this.oRouter.navTo("signup");
			
		}
	});
});