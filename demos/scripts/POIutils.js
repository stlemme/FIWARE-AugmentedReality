/**
 *  Project: FI-WARE  
 *  Copyright (c) 2014 Center for Internet Excellence, University of Oulu, All Rights Reserved
 *  For conditions of distribution and use, see copyright notice in license.txt
 */

(function (namespace) {
    var log = namespace.Util.log;
    var tempBoardCanvas = null;
    function getTextureXML(sourceUrl) {
        return "<texture name=\"diffuseTexture\">\
				    <img src=\"" +sourceUrl +"\"/>\
			    </texture>";
    }
    
    function getMaterialXML(name, textureUrl, color) {
        var texture = "";
        var col = [0.5, 0.5, 0.5];
        if(typeof textureUrl === 'string')
            texture =getTextureXML(textureUrl); 
            
        if(Array.isArray(color))
            col = color;
            
        return "<shader id=\"" +name+ "\" script=\"urn:xml3d:shader:phong\">\
			    " +texture + "\
			    <float3 name=\"diffuseColor\">\
				    "+ col[0] + " " + col[1] + " " + col[2] +
			    "</float3>\
			    <float name=\"ambientIntensity\">\
				    0.5\
			    </float>\
			    <float3 name=\"specularColor\">\
				    0.500000 0.500000 0.500000\
			    </float3>\
			    <float name=\"shininess\">\
				    0.09784735812133072\
			    </float>\
		    </shader>";
    }
    
    function getTransformXML(name) {
        return "<transform id=\"" + name +"Trans" + "\" rotation=\"1.000000 0.000000 0.000000 0.000000\" scale=\"1.000000 1.000000 1.000000\" translation=\"0.000000 0.000000 -50000.000000\"/>";
    }
    
    function getPointer2XML(name, iconMaterialName) {
        return "<group id=\"" + name + "\" transform=\"#" + name + "Trans" + "\">\
		            <group shader=\"#" +name + "Distance" + "\">\
			            <mesh src=\"../../assets/POI/pointer2.xml#mesh_Plane001_distance\" type=\"triangles\"/> \
		            </group>\
		            <group shader=\"#" +name + "Title" + "\">\
			            <mesh src=\"../../assets/POI/pointer2.xml#mesh_Plane001_name\" type=\"triangles\"/>\
		            </group> \
		            <group id=\"" + name + "Icon" + "\" shader=\"#" +iconMaterialName+ "\">\
			            <mesh src=\"../../assets/POI/pointer2.xml#mesh_Plane001_Material\" type=\"triangles\"/>\
		            </group>\
	            </group>";
    }
    
    function textToImage(text, alignment) {
        var ctx;
        
        if(!tempBoardCanvas)
            tempBoardCanvas = document.createElement('canvas');
            
        ctx = tempBoardCanvas.getContext('2d');
        ctx.clearRect(0, 0, tempBoardCanvas.width, tempBoardCanvas.height);        
        ctx.rect(0, 0, 300, 150);
        ctx.fillStyle="red";
        ctx.strokeStyle = "black";
        //ctx.fill();
        ctx.textBaseline = "middle";
        //ctx.font = "10px monospace";
        ctx.font="45px Georgia";
        arrangeText(ctx, text, 300);
        return tempBoardCanvas.toDataURL("png");
    }
    
    function arrangeText(ctx, text, maxWidth) {
         var textStartPos = {'x' : 20, 'y' : 70};
	     var curWidth = ctx.measureText(text).width + textStartPos.x;
	     
	     if(curWidth < maxWidth) {
	         ctx.fillText(text, 20, 70);
	     }
	     else {
	         var i = 0, j = 0, line = {}, lines = [], newLine = true;
	         var words = text.split(/\s+/);
	         var numWords = words.length;

	         while(i < numWords) {
	             
	             if(newLine) {
	                 line = new Object(); 
	                 line.text = "";
	                 line.words = [];
	             }
	             
	             line.text += (words[i] + " ");
	             
	             if((ctx.measureText(line.text).width + textStartPos.x) < maxWidth) {
	                 line.words.push(words[i]);
	                 newLine = false;
	                 i++;
	             }
	             else {
	                 lines.push(line);
	                 newLine = true;
	             }
	             
	             if(i == numWords) {
	                 lines.push(line);    
	             }
	         }
             
             var str, offset = 0;
	         for(i = 0; i < lines.length; ++i) {
	             str = "";
	             for(j = 0; j < lines[i].words.length; ++j) {
	                 str += lines[i].words[j];

	             }
	             ctx.fillText(str, 20, 60 + offset);
	             offset += 50;
	         }
	     }            
    }
    
    this.createPOIPointer = function(name, iconMaterialName, title, distance) {
        var white = [1.0, 1.0, 1.0];
        var titleMaterial = createPOIMaterial(name +"Title", textToImage(title, "center"), white);
        var distMaterial = createPOIMaterial(name +"Distance", textToImage(distance + " m", "center"), white);
        $("xml3d").append(getTransformXML(name));
        $("xml3d").append(getPointer2XML(name, iconMaterialName, title, distance));
    };
    
    this.createPOIMaterial = function(name, textureUrl, color) {
        $("xml3d").append(getMaterialXML(name, textureUrl, color));
    };
    
    this.getPOIPointer = function(name) {
        return $('#' + name)[0];
    };
    
    this.getPOImaterial = function(name) {
        return $('#' + name)[0];
    };
    
}( window['wex'] = window['wex'] || {} ));
