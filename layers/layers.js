var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_lab1buildings_1 = new ol.format.GeoJSON();
var features_lab1buildings_1 = format_lab1buildings_1.readFeatures(json_lab1buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1buildings_1.addFeatures(features_lab1buildings_1);
var lyr_lab1buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1buildings_1, 
                style: style_lab1buildings_1,
                popuplayertitle: 'lab1 — buildings',
                interactive: true,
                title: '<img src="styles/legend/lab1buildings_1.png" /> lab1 — buildings'
            });
var format_lab1highway_2 = new ol.format.GeoJSON();
var features_lab1highway_2 = format_lab1highway_2.readFeatures(json_lab1highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1highway_2.addFeatures(features_lab1highway_2);
var lyr_lab1highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1highway_2, 
                style: style_lab1highway_2,
                popuplayertitle: 'lab1 — highway',
                interactive: true,
                title: '<img src="styles/legend/lab1highway_2.png" /> lab1 — highway'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_lab1buildings_1.setVisible(true);lyr_lab1highway_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_lab1buildings_1,lyr_lab1highway_2];
lyr_lab1buildings_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'ref:sobory.ru': 'ref:sobory.ru', 'denomination': 'denomination', 'source:addr': 'source:addr', 'addr:city': 'addr:city', 'shop': 'shop', 'ref': 'ref', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name:ru': 'name:ru', 'fuel:octane_95': 'fuel:octane_95', 'fuel:octane_92': 'fuel:octane_92', 'fuel:discount': 'fuel:discount', 'fuel:diesel': 'fuel:diesel', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'cafe': 'cafe', 'brand': 'brand', 'layer': 'layer', 'amenity': 'amenity', 'name': 'name', 'tourism': 'tourism', 'addr:street': 'addr:street', 'type': 'type', 'building': 'building', 'addr:postcode': 'addr:postcode', 'addr:place': 'addr:place', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_lab1highway_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'layer': 'layer', 'bridge': 'bridge', 'oneway': 'oneway', 'old_ref': 'old_ref', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'int_ref': 'int_ref', 'surface': 'surface', 'ref': 'ref', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', });
lyr_lab1buildings_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'ref:sobory.ru': 'TextEdit', 'denomination': 'TextEdit', 'source:addr': 'TextEdit', 'addr:city': 'TextEdit', 'shop': 'TextEdit', 'ref': 'TextEdit', 'operator': 'TextEdit', 'opening_hours': 'TextEdit', 'name:ru': 'TextEdit', 'fuel:octane_95': 'TextEdit', 'fuel:octane_92': 'TextEdit', 'fuel:discount': 'TextEdit', 'fuel:diesel': 'TextEdit', 'contact:website': 'TextEdit', 'contact:phone': 'TextEdit', 'cafe': 'TextEdit', 'brand': 'TextEdit', 'layer': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'tourism': 'TextEdit', 'addr:street': 'TextEdit', 'type': 'TextEdit', 'building': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:place': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': 'TextEdit', });
lyr_lab1highway_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'layer': '', 'bridge': '', 'oneway': '', 'old_ref': '', 'maxspeed': '', 'lanes': '', 'int_ref': '', 'surface': '', 'ref': '', 'name:etymology:wikidata': '', 'name': '', });
lyr_lab1buildings_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'religion': 'no label', 'ref:sobory.ru': 'no label', 'denomination': 'no label', 'source:addr': 'no label', 'addr:city': 'no label', 'shop': 'no label', 'ref': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name:ru': 'no label', 'fuel:octane_95': 'no label', 'fuel:octane_92': 'no label', 'fuel:discount': 'no label', 'fuel:diesel': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'cafe': 'no label', 'brand': 'no label', 'layer': 'no label', 'amenity': 'no label', 'name': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'type': 'no label', 'building': 'no label', 'addr:postcode': 'no label', 'addr:place': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_lab1highway_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'oneway': 'no label', 'old_ref': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'int_ref': 'no label', 'surface': 'no label', 'ref': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', });
lyr_lab1highway_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});