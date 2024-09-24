var wms_layers = [];


        var lyr_EsriTopoWorld_0 = new ol.layer.Tile({
            'title': 'Esri Topo World',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Orthophoto_2024_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/swaPETA/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "orthophoto2024_tr1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Orthophoto_2024",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Orthophoto_2024_2, 0]);
var format_KelasLereng_3 = new ol.format.GeoJSON();
var features_KelasLereng_3 = format_KelasLereng_3.readFeatures(json_KelasLereng_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelasLereng_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelasLereng_3.addFeatures(features_KelasLereng_3);
var lyr_KelasLereng_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelasLereng_3, 
                style: style_KelasLereng_3,
                popuplayertitle: "Kelas Lereng",
                interactive: false,
    title: 'Kelas Lereng<br />\
    <img src="styles/legend/KelasLereng_3_0.png" /> Datar<br />\
    <img src="styles/legend/KelasLereng_3_1.png" /> Landai<br />\
    <img src="styles/legend/KelasLereng_3_2.png" /> Agak Curam<br />\
    <img src="styles/legend/KelasLereng_3_3.png" /> Curam<br />\
    <img src="styles/legend/KelasLereng_3_4.png" /> Sangat Curam<br />'
        });
var format_IndikatifTutupanLahan_4 = new ol.format.GeoJSON();
var features_IndikatifTutupanLahan_4 = format_IndikatifTutupanLahan_4.readFeatures(json_IndikatifTutupanLahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndikatifTutupanLahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndikatifTutupanLahan_4.addFeatures(features_IndikatifTutupanLahan_4);
var lyr_IndikatifTutupanLahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndikatifTutupanLahan_4, 
                style: style_IndikatifTutupanLahan_4,
                popuplayertitle: "Indikatif Tutupan Lahan",
                interactive: false,
    title: 'Indikatif Tutupan Lahan<br />\
    <img src="styles/legend/IndikatifTutupanLahan_4_0.png" /> Perkebunan dan Lahan Terbuka<br />\
    <img src="styles/legend/IndikatifTutupanLahan_4_1.png" /> Hutan Regenerasi Muda<br />\
    <img src="styles/legend/IndikatifTutupanLahan_4_2.png" /> Hutan Kerapatan Rendah<br />'
        });
var format_ArealKelolaHKm_5 = new ol.format.GeoJSON();
var features_ArealKelolaHKm_5 = format_ArealKelolaHKm_5.readFeatures(json_ArealKelolaHKm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArealKelolaHKm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArealKelolaHKm_5.addFeatures(features_ArealKelolaHKm_5);
var lyr_ArealKelolaHKm_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArealKelolaHKm_5, 
                style: style_ArealKelolaHKm_5,
                popuplayertitle: "Areal Kelola HKm",
                interactive: false,
                title: '<img src="styles/legend/ArealKelolaHKm_5.png" /> Areal Kelola HKm'
            });
var format_BatasLahanAndilGarapan_6 = new ol.format.GeoJSON();
var features_BatasLahanAndilGarapan_6 = format_BatasLahanAndilGarapan_6.readFeatures(json_BatasLahanAndilGarapan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasLahanAndilGarapan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasLahanAndilGarapan_6.addFeatures(features_BatasLahanAndilGarapan_6);
var lyr_BatasLahanAndilGarapan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasLahanAndilGarapan_6, 
                style: style_BatasLahanAndilGarapan_6,
                popuplayertitle: "Batas Lahan Andil Garapan",
                interactive: false,
                title: '<img src="styles/legend/BatasLahanAndilGarapan_6.png" /> Batas Lahan Andil Garapan'
            });
var format_Pengelola_7 = new ol.format.GeoJSON();
var features_Pengelola_7 = format_Pengelola_7.readFeatures(json_Pengelola_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pengelola_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pengelola_7.addFeatures(features_Pengelola_7);
var lyr_Pengelola_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pengelola_7, 
                style: style_Pengelola_7,
                popuplayertitle: "Pengelola",
                interactive: true,
                title: '<img src="styles/legend/Pengelola_7.png" /> Pengelola'
            });

lyr_EsriTopoWorld_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(false);lyr_Orthophoto_2024_2.setVisible(true);lyr_KelasLereng_3.setVisible(false);lyr_IndikatifTutupanLahan_4.setVisible(false);lyr_ArealKelolaHKm_5.setVisible(true);lyr_BatasLahanAndilGarapan_6.setVisible(true);lyr_Pengelola_7.setVisible(true);
var layersList = [lyr_EsriTopoWorld_0,lyr_GoogleSatellite_1,lyr_Orthophoto_2024_2,lyr_KelasLereng_3,lyr_IndikatifTutupanLahan_4,lyr_ArealKelolaHKm_5,lyr_BatasLahanAndilGarapan_6,lyr_Pengelola_7];
lyr_KelasLereng_3.set('fieldAliases', {'gridcode': 'gridcode', 'Luas': 'Luas', 'Slope': 'Slope', });
lyr_IndikatifTutupanLahan_4.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'Luas': 'Luas', 'Indikatif': 'Indikatif', });
lyr_ArealKelolaHKm_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'KPH': 'KPH', 'Nama_Izin': 'Nama_Izin', 'KODE_PROV': 'KODE_PROV', 'KODE_KAB': 'KODE_KAB', 'PS_ID': 'PS_ID', 'SKEMA': 'SKEMA', 'NAMA_PROV': 'NAMA_PROV', 'NAMA_KAB': 'NAMA_KAB', 'NAMA_KEC': 'NAMA_KEC', 'NAMA_DESA': 'NAMA_DESA', 'LEMBAGA': 'LEMBAGA', 'NO_SK': 'NO_SK', 'TGL_SK': 'TGL_SK', 'Luas_HK': 'Luas_HK', 'LUAS_HL': 'LUAS_HL', 'LUAS_HPT': 'LUAS_HPT', 'LUAS_HP': 'LUAS_HP', 'LUAS_HPK': 'LUAS_HPK', 'Luas_Poli': 'Luas_Poli', 'Jml_KK': 'Jml_KK', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_BatasLahanAndilGarapan_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', });
lyr_Pengelola_7.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'KTH': 'KTH', 'Luas': 'Luas', 'Id_Peta': 'Id Peta', 'ORIG_FID': 'ORIG_FID', 'Pengelola': 'Pengelola', 'Luas Lahan': 'Luas Lahan', 'URL Peta': 'URL Peta', });
lyr_KelasLereng_3.set('fieldImages', {'gridcode': 'TextEdit', 'Luas': 'TextEdit', 'Slope': 'TextEdit', });
lyr_IndikatifTutupanLahan_4.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', 'Luas': 'TextEdit', 'Indikatif': 'TextEdit', });
lyr_ArealKelolaHKm_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'KPH': 'TextEdit', 'Nama_Izin': 'TextEdit', 'KODE_PROV': 'TextEdit', 'KODE_KAB': 'TextEdit', 'PS_ID': 'TextEdit', 'SKEMA': 'TextEdit', 'NAMA_PROV': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_DESA': 'TextEdit', 'LEMBAGA': 'TextEdit', 'NO_SK': 'TextEdit', 'TGL_SK': 'DateTime', 'Luas_HK': 'TextEdit', 'LUAS_HL': 'TextEdit', 'LUAS_HPT': 'TextEdit', 'LUAS_HP': 'TextEdit', 'LUAS_HPK': 'TextEdit', 'Luas_Poli': 'TextEdit', 'Jml_KK': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasLahanAndilGarapan_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Pengelola_7.set('fieldImages', {'Id': 'Hidden', 'Nama': 'Hidden', 'KTH': 'Hidden', 'Luas': 'Hidden', 'Id_Peta': 'TextEdit', 'ORIG_FID': 'Hidden', 'Pengelola': 'TextEdit', 'Luas Lahan': 'TextEdit', 'URL Peta': 'TextEdit', });
lyr_KelasLereng_3.set('fieldLabels', {'gridcode': 'inline label - always visible', 'Luas': 'no label', 'Slope': 'no label', });
lyr_IndikatifTutupanLahan_4.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', 'Luas': 'no label', 'Indikatif': 'no label', });
lyr_ArealKelolaHKm_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'KPH': 'no label', 'Nama_Izin': 'no label', 'KODE_PROV': 'no label', 'KODE_KAB': 'no label', 'PS_ID': 'no label', 'SKEMA': 'no label', 'NAMA_PROV': 'no label', 'NAMA_KAB': 'no label', 'NAMA_KEC': 'no label', 'NAMA_DESA': 'no label', 'LEMBAGA': 'no label', 'NO_SK': 'no label', 'TGL_SK': 'no label', 'Luas_HK': 'no label', 'LUAS_HL': 'no label', 'LUAS_HPT': 'no label', 'LUAS_HP': 'no label', 'LUAS_HPK': 'no label', 'Luas_Poli': 'no label', 'Jml_KK': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_BatasLahanAndilGarapan_6.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', });
lyr_Pengelola_7.set('fieldLabels', {'Id_Peta': 'inline label - visible with data', 'Pengelola': 'inline label - visible with data', 'Luas Lahan': 'inline label - visible with data', 'URL Peta': 'inline label - visible with data', });
lyr_Pengelola_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});