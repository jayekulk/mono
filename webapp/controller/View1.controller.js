jQuery.sap.includeScript("/webapp/src/src/cordova.js");
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/Text'
], function(Controller, Text) {
	"use strict";
	//var text;
	var self;
	var jsonCart = new Object();
	
/*	abhijeet.padalkar@capgemini.com
Soham206#
AVIKUMA
Rak99112 */
	return Controller.extend("signupzcreate.controller.View1", {
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("View1").attachMatched(this._onRouteMatched, this);
			var model = new sap.ui.model.json.JSONModel();
			var data = [];
			model.setData(data);
			this.getView().setModel(model,"cartModel");
			
		},
		materialData: function() {
			var oModel = this.getOwnerComponent().getModel("defaultModel");
			var serviceUrl = "/materialDataSet(Materialid='000000001000000001') ";

			self = this;
			var mParameters = {

				success: function(oData, response) {

			//		alert("Success");
					self.Dialog(oData);

				},
				error: function(oError) {

				}
			};

			oModel.read(serviceUrl, mParameters);

		},

		_onRouteMatched: function() {},
		onScan: function() {
			//this.oRouter.navTo("details");
			this.materialData();
		
			cordova.plugins.barcodeScanner.scan(this.scanSuccessCallback, this.scanErrorCallback);

		},
		scanSuccessCallback: function(result) {
			alert(result.text);
			/*	var	text = result.text;
				var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			sap.m.MessageBox.confirm(
				"Are you sure you want to purchase"+ text+"?", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);*/
			
			

		},

		scanErrorCallback: function(error) {
			navigator.notification.alert("Scanning failed: " + JSON.stringify(error));
		},

		onGetLocation: function() {
			navigator.geolocation.getCurrentPosition(this.onSuccess2, this.onError2);
		},
		onSuccess2: function(position) {
			alert('Latitude: ' + position.coords.latitude + '\n' +
				'Longitude: ' + position.coords.longitude + '\n' +
				'Altitude: ' + position.coords.altitude + '\n' +
				'Accuracy: ' + position.coords.accuracy + '\n' +
				'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
				'Heading: ' + position.coords.heading + '\n' +
				'Speed: ' + position.coords.speed + '\n' +
				'Timestamp: ' + position.timestamp + '\n');
		},
		onError2: function() {
			alert("Error");
		},
		Dialog: function(oData) {
			var dialog = new sap.m.Dialog({
				title: 'Confirm',
				type: 'Message',
				contentWidth: '530px',
				contentHeight: '150px',
				content: [
					new sap.ui.layout.HorizontalLayout({
						content: [
							new sap.ui.layout.VerticalLayout({
								width: '120px',
								content: [
									new Text({
										text: 'Material Name: '
									}),
									new Text({
										text: 'Material No: '
									}),
									new Text({
										text: 'Price:'
									}),
									new Text({
										text: 'Category: '
									}),
									new Text({
										text: 'For: '
									}),
									new Text({
										text: 'Size: '
									}),

								]
							}),
							new sap.ui.layout.VerticalLayout({
								content: [
									new Text({
										text: '' + oData.Materialname
									}),
									new Text({
										text: '' + oData.Materialid
									}),
									new Text({
										text: '' + parseInt(oData.Price)
									}),
									new Text({
										text: '' + oData.Category
									}),
									new Text({
										text: '' + oData.Gender
									}),
									new Text({
										text: '' + oData.Materialsize
									})

								]
							})
						]
					})

				],
				endButton: new sap.m.Button({
					text: 'Cancel',
					press: function() {
						dialog.close();
					}
				}),
				beginButton: new sap.m.Button({
					text: 'Add to Cart',
					press: function(oEvent) {
						// var data = this.getOwnerComponent().getModel("dataModel").getData();
						// var Model = new sap.ui.model.json.JSONModel();
						var data = this.getView().getModel("cartModel").getData();
						var itemData = oEvent.getSource().getParent().getAggregation("content")[0].getAggregation("content")[1].getAggregation(
							"content");
						var materialNo = itemData[1].getText();
						var materialName = itemData[0].getText();
						var category = itemData[2].getText();
						var size = itemData[3].getText();
						var price = itemData[4].getText();
						var gender = itemData[5].getText();
						var object = {};
						object.Materialid = materialNo;
						object.Materialname = materialName;
						object.Category = category;
						object.Materialsize = size;
						object.Price = price;
						object.Gender = gender;
						// jsonCart.results.push(object);
						data.push(object);
						dialog.close();
					}.bind(this)
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();
		},
		onAddtoCart: function(oEvent) {
			/*var itemData = oEvent.getSource().getParent().getAggregation("content")[0].getAggregation("content")[1].getAggregation("content");
			var materialNo = itemData[1].getText();
			var materailName = itemData[0].getText();
			var category = itemData[1].getText();
			var size = itemData[1].getText();
			var price = itemData[1].getText();
			var gender = itemData[1].getText();*/
			this.oRouter.navTo("checkout");
		}

	});

});