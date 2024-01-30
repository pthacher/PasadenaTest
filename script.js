 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-118.1445, 34.1478],
          zoom: 14
        });

        /********************
         * Add feature layer
         ********************/

        // Carbon storage of trees in Warren Wilson College.
   /*
        var featureLayer = new FeatureLayer({
           portalItem: {
            id: "bbdd49e10a2847a8b8018a7035bc92c7"    
          }
        });
        map.add(featureLayer);
   
   */
   var featureLayer = new FeatureLayer({
     url:"https://services2.arcgis.com/zNjnZafDYCAJAbN0/arcgis/rest/services/Traffic_Collisions/FeatureServer"
   })
        map.add(featureLayer);
 });
