var wms_layers = [];

var format_Limitesdescommunes_0 = new ol.format.GeoJSON();
var features_Limitesdescommunes_0 = format_Limitesdescommunes_0.readFeatures(json_Limitesdescommunes_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdescommunes_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdescommunes_0.addFeatures(features_Limitesdescommunes_0);
var lyr_Limitesdescommunes_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdescommunes_0, 
                style: style_Limitesdescommunes_0,
                popuplayertitle: 'Limites des communes',
                interactive: true,
                title: '<img src="styles/legend/Limitesdescommunes_0.png" /> Limites des communes'
            });
var lyr_Classification2015_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Classification 2015<br />\
    <img src="styles/legend/Classification2015_1_0.png" /> Mangroves<br />\
    <img src="styles/legend/Classification2015_1_1.png" /> Plan d\'eau<br />\
    <img src="styles/legend/Classification2015_1_2.png" /> Sol nu<br />\
    <img src="styles/legend/Classification2015_1_3.png" /> Culture et jachère<br />\
    <img src="styles/legend/Classification2015_1_4.png" /> Savane marécageuse<br />\
    <img src="styles/legend/Classification2015_1_5.png" /> Habitation<br />\
    <img src="styles/legend/Classification2015_1_6.png" /> Foret dense<br />\
    <img src="styles/legend/Classification2015_1_7.png" /> Savane arboré savane arbustive<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Classification2015_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [181468.556411, 695411.789577, 220522.568876, 721374.601973]
        })
    });
var format_Limite_2 = new ol.format.GeoJSON();
var features_Limite_2 = format_Limite_2.readFeatures(json_Limite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_2.addFeatures(features_Limite_2);
var lyr_Limite_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_2, 
                style: style_Limite_2,
                popuplayertitle: 'Limite ',
                interactive: true,
                title: '<img src="styles/legend/Limite_2.png" /> Limite '
            });
var format_Routesecondaire_3 = new ol.format.GeoJSON();
var features_Routesecondaire_3 = format_Routesecondaire_3.readFeatures(json_Routesecondaire_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routesecondaire_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesecondaire_3.addFeatures(features_Routesecondaire_3);
var lyr_Routesecondaire_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routesecondaire_3, 
                style: style_Routesecondaire_3,
                popuplayertitle: 'Route secondaire',
                interactive: true,
                title: '<img src="styles/legend/Routesecondaire_3.png" /> Route secondaire'
            });
var format_ROUTE_4 = new ol.format.GeoJSON();
var features_ROUTE_4 = format_ROUTE_4.readFeatures(json_ROUTE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROUTE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROUTE_4.addFeatures(features_ROUTE_4);
var lyr_ROUTE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROUTE_4, 
                style: style_ROUTE_4,
                popuplayertitle: 'ROUTE',
                interactive: true,
    title: 'ROUTE<br />\
    <img src="styles/legend/ROUTE_4_0.png" /> RNIE<br />' });

lyr_Limitesdescommunes_0.setVisible(true);lyr_Classification2015_1.setVisible(true);lyr_Limite_2.setVisible(true);lyr_Routesecondaire_3.setVisible(true);lyr_ROUTE_4.setVisible(true);
var layersList = [lyr_Limitesdescommunes_0,lyr_Classification2015_1,lyr_Limite_2,lyr_Routesecondaire_3,lyr_ROUTE_4];
lyr_Limitesdescommunes_0.set('fieldAliases', {'COMM_L': 'COMM_L', 'ZS': 'ZS', 'Dept': 'Dept', 'PDA': 'PDA', });
lyr_Limite_2.set('fieldAliases', {'COMM_L': 'COMM_L', 'ZS': 'ZS', 'Dept': 'Dept', 'PDA': 'PDA', });
lyr_Routesecondaire_3.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_ROUTE_4.set('fieldAliases', {'NUM_ROUTE': 'NUM_ROUTE', 'TYPE': 'TYPE', 'CL_ADMIN': 'CL_ADMIN', 'REVETEMENT': 'REVETEMENT', 'PRATICAB': 'PRATICAB', 'CHAUSSEE_S': 'CHAUSSEE_S', 'VOIE_LOCAL': 'VOIE_LOCAL', 'FRANCHISST': 'FRANCHISST', 'SOURCE': 'SOURCE', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_Limitesdescommunes_0.set('fieldImages', {'COMM_L': 'TextEdit', 'ZS': 'TextEdit', 'Dept': 'TextEdit', 'PDA': 'TextEdit', });
lyr_Limite_2.set('fieldImages', {'COMM_L': 'TextEdit', 'ZS': 'TextEdit', 'Dept': 'TextEdit', 'PDA': 'TextEdit', });
lyr_Routesecondaire_3.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_ROUTE_4.set('fieldImages', {'NUM_ROUTE': 'TextEdit', 'TYPE': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'REVETEMENT': 'TextEdit', 'PRATICAB': 'TextEdit', 'CHAUSSEE_S': 'TextEdit', 'VOIE_LOCAL': 'TextEdit', 'FRANCHISST': 'TextEdit', 'SOURCE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', });
lyr_Limitesdescommunes_0.set('fieldLabels', {'COMM_L': 'header label - always visible', 'ZS': 'no label', 'Dept': 'no label', 'PDA': 'no label', });
lyr_Limite_2.set('fieldLabels', {'COMM_L': 'header label - always visible', 'ZS': 'no label', 'Dept': 'no label', 'PDA': 'no label', });
lyr_Routesecondaire_3.set('fieldLabels', {'MED_DESCRI': 'header label - always visible', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_ROUTE_4.set('fieldLabels', {'NUM_ROUTE': 'no label', 'TYPE': 'no label', 'CL_ADMIN': 'header label - always visible', 'REVETEMENT': 'no label', 'PRATICAB': 'no label', 'CHAUSSEE_S': 'no label', 'VOIE_LOCAL': 'no label', 'FRANCHISST': 'no label', 'SOURCE': 'no label', 'SHAPE_LENG': 'no label', });
lyr_ROUTE_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});