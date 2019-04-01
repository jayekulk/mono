sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("signupzcreate.controller.signup", {
		onInit: function(){
			 this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("signup").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {},
		createUser: function() {
			var user = this.getView().byId("user").getValue();
			var pass = this.getView().byId("pass").getValue();
			var address = this.getView().byId("address").getValue();
			var age = this.getView().byId("age").getValue();
			var mobile = this.getView().byId("mobile").getValue();
			var email = this.getView().byId("email").getValue();

			if (user != "" && mobile != "" && pass != "") {
				var payload = new Object();
				payload.Username = user;
				payload.Password = pass;
				payload.Address = address;
				payload.Age = age;
				payload.Mobilenuber = mobile;
				payload.Emailid = email;

				var oModel = this.getOwnerComponent().getModel("defaultModel");
				var sUrl = "/UserDataSet";
				var that = this;
				
				var mParameters = {
					success: function(oData, response) {
					

					},
					error: function(oError) {
					
					}
				};
				oModel.create(sUrl, payload, mParameters);

			}

		}, 
		signin : function() {
			
		}
	});
});