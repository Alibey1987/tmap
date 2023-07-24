var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'GoogleSatellite_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var format_data_1 = new ol.format.GeoJSON();
var features_data_1 = format_data_1.readFeatures(json_data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_data_1.addFeatures(features_data_1);var lyr_data_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_data_1, 
                style: style_data_1,
                title: '<img src="styles/legend/data_1.png" /> data'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_data_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_data_1];
lyr_data_1.set('fieldAliases', {'id': 'id', 'Info': 'Info', 'Rayonun ad': 'Rayonun ad', 'Zona nömr': 'Zona nömr', 'Əmsal': 'Əmsal', 'Növü': 'Növü', 'unvan': 'unvan', 'sifarisci': 'sifarisci', 'Qiymet': 'Qiymet', 'Agent': 'Agent', 'Sahe': 'Sahe', });
lyr_data_1.set('fieldImages', {'id': 'TextEdit', 'Info': 'TextEdit', 'Rayonun ad': 'TextEdit', 'Zona nömr': 'TextEdit', 'Əmsal': 'TextEdit', 'Növü': 'TextEdit', 'unvan': 'TextEdit', 'sifarisci': 'TextEdit', 'Qiymet': 'TextEdit', 'Agent': 'TextEdit', 'Sahe': 'TextEdit', });
lyr_data_1.set('fieldLabels', {'id': 'no label', 'Info': 'no label', 'Rayonun ad': 'inline label', 'Zona nömr': 'inline label', 'Əmsal': 'inline label', 'Növü': 'inline label', 'unvan': 'inline label', 'sifarisci': 'inline label', 'Qiymet': 'inline label', 'Agent': 'inline label', 'Sahe': 'inline label', });
lyr_data_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});