type POI = {
    i: number,
    c: string,
    p: string,
    l: string,
    s: number,
    sc: number,
    t: number,
    tc: number,
    d: string,
    o: string
}
export default function createKmlString(places: POI[]) {
    return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
        "<kml xmlns=\"http://earth.google.com/kml/2.2\">\n" +
        "<Document>\n" +
        "<name>World</name>\n" +
        "<visibility>1</visibility>\n" +
        "<Style id=\"placemark-blue\">\n" +
        "<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/blu-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n" +
        "<LabelStyle><scale>0.5</scale></LabelStyle>\n" +
        "</Style>\n" +
        "<Style id=\"placemark-green\">\n" +
        "<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/grn-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n" +
        "<LabelStyle><scale>0.5</scale></LabelStyle>\n" +
        "</Style>\n" +
        "<Style id=\"placemark-yellow\">\n" +
        "<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/ylw-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n" +
        "<LabelStyle><scale>0.5</scale></LabelStyle>\n" +
        "</Style>\n" +
        "<Style id=\"placemark-red\">\n" +
        "<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/red-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n" +
        "<LabelStyle><scale>0.5</scale></LabelStyle>\n" +
        "</Style>\n" +
        "<Style id=\"placemark-brown\">\n" +
        "<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/wht-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n" +
        "<LabelStyle><scale>0.5</scale></LabelStyle>\n" +
        "</Style>\n" +
        "<Style id=\"placemark-purple\">\n" +
        "<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/purple-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n" +
        "<LabelStyle><scale>0.5</scale></LabelStyle>\n" +
        "</Style>\n" +
        "<Style id=\"placemark-orange\">\n" +
        "<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/orange-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n" +
        "<LabelStyle><scale>0.5</scale></LabelStyle>\n" +
        "</Style>\n" +
        "<Style id=\"placemark-pink\">\n" +
        "<IconStyle><Icon><href>http://maps.google.com/mapfiles/kml/paddle/pink-circle.png</href></Icon><scale>0.75</scale></IconStyle>\n" +
        "<LabelStyle><scale>0.5</scale></LabelStyle>\n" +
        "</Style>\n" +
        "\n" +
        places.map(poi =>
            "<Placemark xmlns=\"http://www.opengis.net/kml/2.2\" id=\"" + poi.i + "\">\n" +
            "<name>Spot " + poi.i + "</name>\n" +
            "<visibility>1</visibility>\n" +
            "<address>" + poi.c + (poi.p ? ", " + poi.p : "") + "</address>\n" +
            "<description><![CDATA[" +
            "<b>Description:</b><hr/>" + (poi.d ?? "") +
            "<br/><b>Comments:</b><hr/>" + (poi.o ?? "") +
            "]]></description>\n" +
            "<Point><coordinates>" + poi.l + "</coordinates></Point>\n" +
            "<styleUrl>#placemark-" + getStyle(poi.s) + "</styleUrl>\n" +
            "</Placemark>"
        ).join("\n") +
        "</Document>\n" +
        "</kml>\n"
}

const getStyle = (score: number) => {
    switch (score) {
        case 5:
            return "green"
        case 4:
            return "blue"
        case 3:
            return "yellow"
        case 2:
            return "orange"
        case 1:
            return "red"
        default:
            return "purple"
    }
}
