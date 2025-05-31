var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_kesesuaian_lahan_baru_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kesesuaian_lahan_baru<br />\
    <img src="styles/legend/kesesuaian_lahan_baru_1_0.png" /> 2,1000<br />\
    <img src="styles/legend/kesesuaian_lahan_baru_1_1.png" /> 2,6000<br />\
    <img src="styles/legend/kesesuaian_lahan_baru_1_2.png" /> 3,1000<br />\
    <img src="styles/legend/kesesuaian_lahan_baru_1_3.png" /> 3,6000<br />\
    <img src="styles/legend/kesesuaian_lahan_baru_1_4.png" /> 4,1000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/kesesuaian_lahan_baru_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12400073.055138, -936619.683163, 12450821.699950, -880885.221042]
        })
    });

lyr_GoogleRoad_0.setVisible(true);lyr_kesesuaian_lahan_baru_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_kesesuaian_lahan_baru_1];
