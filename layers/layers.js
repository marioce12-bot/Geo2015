var wms_layers = [];

var lyr_Classification2015_0 = new ol.layer.Image({
                source: new ol.source.ImageStatic({
                    url: 'images/classification2015.webp',
                    imageExtent: [186249.600066, 693858.162100, 228294.723069, 721117.786032],
                    projection: 'EPSG:3857'
                }),
                popuplayertitle: 'Classification 2015',
                interactive: false,
    title: 'Classification 2015<br />\
    <img src="styles/legend/Classification2015_0_0.png" /> Mangroves<br />\
    <img src="styles/legend/Classification2015_0_1.png" /> Plan d\'eau<br />\
    <img src="styles/legend/Classification2015_0_2.png" /> Sol nu<br />\
    <img src="styles/legend/Classification2015_0_3.png" /> Culture et jachère<br />\
    <img src="styles/legend/Classification2015_0_4.png" /> Savane marécageuse<br />\
    <img src="styles/legend/Classification2015_0_5.png" /> Habitations<br />\
    <img src="styles/legend/Classification2015_0_6.png" /> Foret dense <br />\
    <img src="styles/legend/Classification2015_0_7.png" /> Savane arboré savane arbustive<br />' });
var format_Routesecondaire_1 = new ol.format.GeoJSON();
var features_Routesecondaire_1 = format_Routesecondaire_1.readFeatures(json_Routesecondaire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routesecondaire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routesecondaire_1.addFeatures(features_Routesecondaire_1);
var lyr_Routesecondaire_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routesecondaire_1, 
                style: style_Routesecondaire_1,
                popuplayertitle: 'Route secondaire',
                interactive: true,
                title: '<img src="styles/legend/Routesecondaire_1.png" /> Route secondaire'
            });
var format_Limitecommune_2 = new ol.format.GeoJSON();
var features_Limitecommune_2 = format_Limitecommune_2.readFeatures(json_Limitecommune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitecommune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitecommune_2.addFeatures(features_Limitecommune_2);
var lyr_Limitecommune_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitecommune_2, 
                style: style_Limitecommune_2,
                popuplayertitle: 'Limite commune',
                interactive: true,
                title: '<img src="styles/legend/Limitecommune_2.png" /> Limite commune'
            });
var format_ROUTE_3 = new ol.format.GeoJSON();
var features_ROUTE_3 = format_ROUTE_3.readFeatures(json_ROUTE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROUTE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROUTE_3.addFeatures(features_ROUTE_3);
var lyr_ROUTE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROUTE_3, 
                style: style_ROUTE_3,
                popuplayertitle: 'ROUTE',
                interactive: true,
    title: 'ROUTE<br />\
    <img src="styles/legend/ROUTE_3_0.png" /> RNIE<br />' });

lyr_Classification2015_0.setVisible(true);lyr_Routesecondaire_1.setVisible(true);lyr_Limitecommune_2.setVisible(true);lyr_ROUTE_3.setVisible(true);
var layersList = [lyr_Classification2015_0,lyr_Routesecondaire_1,lyr_Limitecommune_2,lyr_ROUTE_3];
lyr_Classification2015_0.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Routesecondaire_1.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_Limitecommune_2.set('fieldAliases', {'COMM_L': 'COMM_L', 'ZS': 'ZS', 'Dept': 'Dept', 'PDA': 'PDA', });
lyr_ROUTE_3.set('fieldAliases', {'NUM_ROUTE': 'NUM_ROUTE', 'TYPE': 'TYPE', 'CL_ADMIN': 'CL_ADMIN', 'REVETEMENT': 'REVETEMENT', 'PRATICAB': 'PRATICAB', 'CHAUSSEE_S': 'CHAUSSEE_S', 'VOIE_LOCAL': 'VOIE_LOCAL', 'FRANCHISST': 'FRANCHISST', 'SOURCE': 'SOURCE', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_Classification2015_0.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Routesecondaire_1.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_Limitecommune_2.set('fieldImages', {'COMM_L': 'TextEdit', 'ZS': 'TextEdit', 'Dept': 'TextEdit', 'PDA': 'TextEdit', });
lyr_ROUTE_3.set('fieldImages', {'NUM_ROUTE': 'TextEdit', 'TYPE': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'REVETEMENT': 'TextEdit', 'PRATICAB': 'TextEdit', 'CHAUSSEE_S': 'TextEdit', 'VOIE_LOCAL': 'TextEdit', 'FRANCHISST': 'TextEdit', 'SOURCE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', });
lyr_Classification2015_0.set('fieldLabels', {'Id': 'no label', 'gridcode': 'inline label - visible with data', });
lyr_Routesecondaire_1.set('fieldLabels', {'MED_DESCRI': 'inline label - visible with data', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_Limitecommune_2.set('fieldLabels', {'COMM_L': 'inline label - visible with data', 'ZS': 'no label', 'Dept': 'no label', 'PDA': 'no label', });
lyr_ROUTE_3.set('fieldLabels', {'NUM_ROUTE': 'no label', 'TYPE': 'no label', 'CL_ADMIN': 'inline label - visible with data', 'REVETEMENT': 'no label', 'PRATICAB': 'no label', 'CHAUSSEE_S': 'no label', 'VOIE_LOCAL': 'no label', 'FRANCHISST': 'no label', 'SOURCE': 'no label', 'SHAPE_LENG': 'no label', });
lyr_ROUTE_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
