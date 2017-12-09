var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ESTADOS_0 = new ol.format.GeoJSON();
var features_ESTADOS_0 = format_ESTADOS_0.readFeatures(json_ESTADOS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTADOS_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ESTADOS_0.addFeatures(features_ESTADOS_0);var lyr_ESTADOS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTADOS_0, 
                style: style_ESTADOS_0,
    title: 'ESTADOS<br />\
    <img src="styles/legend/ESTADOS_0_0.png" /> Aguascalientes<br />\
    <img src="styles/legend/ESTADOS_0_1.png" /> Baja California<br />\
    <img src="styles/legend/ESTADOS_0_2.png" /> Baja California Sur<br />\
    <img src="styles/legend/ESTADOS_0_3.png" /> Campeche<br />\
    <img src="styles/legend/ESTADOS_0_4.png" /> Chiapas<br />\
    <img src="styles/legend/ESTADOS_0_5.png" /> Chihuahua<br />\
    <img src="styles/legend/ESTADOS_0_6.png" /> Coahuila de Zaragoza<br />\
    <img src="styles/legend/ESTADOS_0_7.png" /> Colima<br />\
    <img src="styles/legend/ESTADOS_0_8.png" /> Distrito Federal<br />\
    <img src="styles/legend/ESTADOS_0_9.png" /> Durango<br />\
    <img src="styles/legend/ESTADOS_0_10.png" /> Guanajuato<br />\
    <img src="styles/legend/ESTADOS_0_11.png" /> Guerrero<br />\
    <img src="styles/legend/ESTADOS_0_12.png" /> Hidalgo<br />\
    <img src="styles/legend/ESTADOS_0_13.png" /> Jalisco<br />\
    <img src="styles/legend/ESTADOS_0_14.png" /> Michoac�n de Ocampo<br />\
    <img src="styles/legend/ESTADOS_0_15.png" /> Morelos<br />\
    <img src="styles/legend/ESTADOS_0_16.png" /> M�xico<br />\
    <img src="styles/legend/ESTADOS_0_17.png" /> Nayarit<br />\
    <img src="styles/legend/ESTADOS_0_18.png" /> Nuevo Le�n<br />\
    <img src="styles/legend/ESTADOS_0_19.png" /> Oaxaca<br />\
    <img src="styles/legend/ESTADOS_0_20.png" /> Puebla<br />\
    <img src="styles/legend/ESTADOS_0_21.png" /> Quer�taro<br />\
    <img src="styles/legend/ESTADOS_0_22.png" /> Quintana Roo<br />\
    <img src="styles/legend/ESTADOS_0_23.png" /> San Luis Potos�<br />\
    <img src="styles/legend/ESTADOS_0_24.png" /> Sinaloa<br />\
    <img src="styles/legend/ESTADOS_0_25.png" /> Sonora<br />\
    <img src="styles/legend/ESTADOS_0_26.png" /> Tabasco<br />\
    <img src="styles/legend/ESTADOS_0_27.png" /> Tamaulipas<br />\
    <img src="styles/legend/ESTADOS_0_28.png" /> Tlaxcala<br />\
    <img src="styles/legend/ESTADOS_0_29.png" /> Veracruz de Ignacio de la Llave<br />\
    <img src="styles/legend/ESTADOS_0_30.png" /> Yucat�n<br />\
    <img src="styles/legend/ESTADOS_0_31.png" /> Zacatecas<br />\
    <img src="styles/legend/ESTADOS_0_32.png" /> <br />'
        });

lyr_ESTADOS_0.setVisible(true);
var layersList = [baseLayer,lyr_ESTADOS_0];
lyr_ESTADOS_0.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', });
lyr_ESTADOS_0.set('fieldImages', {'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', });
lyr_ESTADOS_0.set('fieldLabels', {'CVE_ENT': 'header label', 'NOM_ENT': 'header label', });
lyr_ESTADOS_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});