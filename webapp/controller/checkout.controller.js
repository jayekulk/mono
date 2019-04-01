sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("signupzcreate.controller.checkout", {
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("checkout").attachMatched(this._onRouteMatched, this);
			var oDataa = {
				"results": [{
					"title": "Kane Checked Shirt with Patch Pocket",
					"creationDate": "1 hour ago",
					"showEmptyGroup": true,
					"showCloseButton": true,

				}, {
					"title": "FLYING MACHINE Mid-Rise Michael Slim Jeans",
					"creationDate": "1 hour ago",
					"showEmptyGroup": true,
					"showCloseButton": true,

				}]
			};
			var oModelPf1 = new sap.ui.model.json.JSONModel();
			oModelPf1.setData(oDataa);

			this.getView().byId("notificationList").setModel(oModelPf1);

		},
		_onRouteMatched: function() {},
		onListItemPress: function(oEvent) {
			MessageToast.show('Item Pressed: ' + oEvent.getSource().getTitle());
		},

		onRejectPress: function() {
			MessageToast.show('Reject Button Pressed');
		},

		onAcceptPress: function() {
			MessageToast.show('Accept Button Pressed');
		},

		onItemClose: function(oEvent) {
			var oItem = oEvent.getSource(),
				oList = oItem.getParent();

			oList.removeItem(oItem);

			MessageToast.show('Item Closed: ' + oEvent.getSource().getTitle());
		},
		signup: function() {
			this.oRouter.navTo("signin");

		}
	});
});