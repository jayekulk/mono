sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	'jquery.sap.global',
	'sap/ui/model/json/JSONModel'
], function(Controller,MessageBox,jQuery,JSONModel) {
	"use strict";

	return Controller.extend("signupzcreate.controller.details", {
		onInit: function(){
			 this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("details").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {
			this.getMaterialData();
		},
		getMaterialData: function() {
			var oModel = this.getOwnerComponent().getModel("defaultModel");
			var serviceUrl = "/materialDataSet(Materialid='000000001000000001') ";
			var self = this;
			var mParameters = {
				success: function(oData, response) {
					if(response.statusText == "OK") {
				
            
            var oModelPf1 = new sap.ui.model.json.JSONModel();
            oModelPf1.setData(oData);

          self.getView().setModel(oModelPf1,"Material");
					} else {
						alert("Error");
					}
				},
				error: function(oError) {

				}
			};

			oModel.read(serviceUrl, mParameters);	
		},
		signup : function() {
			this.oRouter.navTo("signup");
			
		}
	});
});