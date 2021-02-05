fs = require('fs')
const DOMParser = require('xmldom').DOMParser;
// const XMLSerializer = require('xmldom').XMLSerializer;
const path = require('path');

const countries = {
    "Afghanistan": {
        "iso": "AF",
        "name": "Afghanistan",
        "places": "1"
    },
    "Albania": {
        "iso": "AL",
        "name": "Albania",
        "places": "85"
    },
    "Algeria": {
        "iso": "DZ",
        "name": "Algeria",
        "places": "12"
    },
    "Andorra": {
        "iso": "AD",
        "name": "Andorra",
        "places": "15"
    },
    "Antarctica": {
        "iso": "AQ",
        "name": "Antarctica",
        "places": "1"
    },
    "Argentina": {
        "iso": "AR",
        "name": "Argentina",
        "places": "195"
    },
    "Armenia": {
        "iso": "AM",
        "name": "Armenia",
        "places": "40"
    },
    "Australia": {
        "iso": "AU",
        "name": "Australia",
        "places": "271"
    },
    "Austria": {
        "iso": "AT",
        "name": "Austria",
        "places": "416"
    },
    "Azerbaijan": {
        "iso": "AZ",
        "name": "Azerbaijan",
        "places": "25"
    },
    "Belarus": {
        "iso": "BY",
        "name": "Belarus",
        "places": "134"
    },
    "Belgium": {
        "iso": "BE",
        "name": "Belgium",
        "places": "568"
    },
    "Belize": {
        "iso": "BZ",
        "name": "Belize",
        "places": "3"
    },
    "Bhutan": {
        "iso": "BT",
        "name": "Bhutan",
        "places": "2"
    },
    "Bolivia": {
        "iso": "BO",
        "name": "Bolivia",
        "places": "13"
    },
    "Bosnia and Herzegovina": {
        "iso": "BA",
        "name": "Bosnia and Herzegovina",
        "places": "108"
    },
    "Botswana": {
        "iso": "BW",
        "name": "Botswana",
        "places": "7"
    },
    "Brazil": {
        "iso": "BR",
        "name": "Brazil",
        "places": "394"
    },
    "Bulgaria": {
        "iso": "BG",
        "name": "Bulgaria",
        "places": "287"
    },
    "Cambodia": {
        "iso": "KH",
        "name": "Cambodia",
        "places": "21"
    },
    "Canada": {
        "iso": "CA",
        "name": "Canada",
        "places": "585"
    },
    "Cape Verde": {
        "iso": "CV",
        "name": "Cape Verde",
        "places": "3"
    },
    "Chile": {
        "iso": "CL",
        "name": "Chile",
        "places": "91"
    },
    "China": {
        "iso": "CN",
        "name": "China",
        "places": "95"
    },
    "Colombia": {
        "iso": "CO",
        "name": "Colombia",
        "places": "44"
    },
    "Costa Rica": {
        "iso": "CR",
        "name": "Costa Rica",
        "places": "13"
    },
    "Croatia": {
        "iso": "HR",
        "name": "Croatia",
        "places": "331"
    },
    "Cuba": {
        "iso": "CU",
        "name": "Cuba",
        "places": "3"
    },
    "Cyprus": {
        "iso": "CY",
        "name": "Cyprus",
        "places": "45"
    },
    "Czech Republic": {
        "iso": "CZ",
        "name": "Czech Republic",
        "places": "754"
    },
    "Denmark": {
        "iso": "DK",
        "name": "Denmark",
        "places": "384"
    },
    "Djibouti": {
        "iso": "DJ",
        "name": "Djibouti",
        "places": "2"
    },
    "Dominican Republic": {
        "iso": "DO",
        "name": "Dominican Republic",
        "places": "3"
    },
    "Ecuador": {
        "iso": "EC",
        "name": "Ecuador",
        "places": "77"
    },
    "Egypt": {
        "iso": "EG",
        "name": "Egypt",
        "places": "7"
    },
    "Eritrea": {
        "iso": "ER",
        "name": "Eritrea",
        "places": "1"
    },
    "Estonia": {
        "iso": "EE",
        "name": "Estonia",
        "places": "100"
    },
    "Ethiopia": {
        "iso": "ET",
        "name": "Ethiopia",
        "places": "1"
    },
    "Falkland Islands (Malvinas)": {
        "iso": "FK",
        "name": "Falkland Islands (Malvinas)",
        "places": "1"
    },
    "Faroe Islands": {
        "iso": "FO",
        "name": "Faroe Islands",
        "places": "7"
    },
    "Finland": {
        "iso": "FI",
        "name": "Finland",
        "places": "353"
    },
    "France": {
        "iso": "FR",
        "name": "France",
        "places": "2694"
    },
    "French Guiana": {
        "iso": "GF",
        "name": "French Guiana",
        "places": "3"
    },
    "Georgia": {
        "iso": "GE",
        "name": "Georgia",
        "places": "103"
    },
    "Germany": {
        "iso": "DE",
        "name": "Germany",
        "places": "2905"
    },
    "Gibraltar": {
        "iso": "GI",
        "name": "Gibraltar",
        "places": "3"
    },
    "Greece": {
        "iso": "GR",
        "name": "Greece",
        "places": "272"
    },
    "Greenland": {
        "iso": "GL",
        "name": "Greenland",
        "places": "2"
    },
    "Guadeloupe": {
        "iso": "GP",
        "name": "Guadeloupe",
        "places": "2"
    },
    "Guatemala": {
        "iso": "GT",
        "name": "Guatemala",
        "places": "5"
    },
    "Guernsey": {
        "iso": "GG",
        "name": "Guernsey",
        "places": "1"
    },
    "Haiti": {
        "iso": "HT",
        "name": "Haiti",
        "places": "2"
    },
    "Holy See (Vatican City State)": {
        "iso": "VA",
        "name": "Holy See (Vatican City State)",
        "places": "1"
    },
    "Honduras": {
        "iso": "HN",
        "name": "Honduras",
        "places": "1"
    },
    "Hungary": {
        "iso": "HU",
        "name": "Hungary",
        "places": "534"
    },
    "Iceland": {
        "iso": "IS",
        "name": "Iceland",
        "places": "125"
    },
    "India": {
        "iso": "IN",
        "name": "India",
        "places": "13"
    },
    "Indonesia": {
        "iso": "ID",
        "name": "Indonesia",
        "places": "18"
    },
    "Iran": {
        "iso": "IR",
        "name": "Iran",
        "places": "65"
    },
    "Iraq": {
        "iso": "IQ",
        "name": "Iraq",
        "places": "10"
    },
    "Ireland": {
        "iso": "IE",
        "name": "Ireland",
        "places": "322"
    },
    "Isle of Man": {
        "iso": "IM",
        "name": "Isle of Man",
        "places": "1"
    },
    "Israel": {
        "iso": "IL",
        "name": "Israel",
        "places": "83"
    },
    "Italy": {
        "iso": "IT",
        "name": "Italy",
        "places": "632"
    },
    "Japan": {
        "iso": "JP",
        "name": "Japan",
        "places": "56"
    },
    "Jordan": {
        "iso": "JO",
        "name": "Jordan",
        "places": "10"
    },
    "Kazakhstan": {
        "iso": "KZ",
        "name": "Kazakhstan",
        "places": "45"
    },
    "Kenya": {
        "iso": "KE",
        "name": "Kenya",
        "places": "4"
    },
    "Kyrgyzstan": {
        "iso": "KG",
        "name": "Kyrgyzstan",
        "places": "25"
    },
    "Lao People's Democratic Republic": {
        "iso": "LA",
        "name": "Lao People's Democratic Republic",
        "places": "10"
    },
    "Latvia": {
        "iso": "LV",
        "name": "Latvia",
        "places": "241"
    },
    "Lesotho": {
        "iso": "LS",
        "name": "Lesotho",
        "places": "1"
    },
    "Libyan Arab Jamahiriya": {
        "iso": "LY",
        "name": "Libyan Arab Jamahiriya",
        "places": "1"
    },
    "Liechtenstein": {
        "iso": "LI",
        "name": "Liechtenstein",
        "places": "3"
    },
    "Lithuania": {
        "iso": "LT",
        "name": "Lithuania",
        "places": "290"
    },
    "Luxembourg": {
        "iso": "LU",
        "name": "Luxembourg",
        "places": "30"
    },
    "Macedonia": {
        "iso": "MK",
        "name": "Macedonia",
        "places": "103"
    },
    "Malawi": {
        "iso": "MW",
        "name": "Malawi",
        "places": "3"
    },
    "Malaysia": {
        "iso": "MY",
        "name": "Malaysia",
        "places": "28"
    },
    "Malta": {
        "iso": "MT",
        "name": "Malta",
        "places": "2"
    },
    "Martinique": {
        "iso": "MQ",
        "name": "Martinique",
        "places": "3"
    },
    "Mauritania": {
        "iso": "MR",
        "name": "Mauritania",
        "places": "6"
    },
    "Mexico": {
        "iso": "MX",
        "name": "Mexico",
        "places": "121"
    },
    "Moldova": {
        "iso": "MD",
        "name": "Moldova",
        "places": "42"
    },
    "Monaco": {
        "iso": "MC",
        "name": "Monaco",
        "places": "3"
    },
    "Mongolia": {
        "iso": "MN",
        "name": "Mongolia",
        "places": "19"
    },
    "Montenegro": {
        "iso": "ME",
        "name": "Montenegro",
        "places": "97"
    },
    "Montserrat": {
        "iso": "MS",
        "name": "Montserrat",
        "places": "1"
    },
    "Morocco": {
        "iso": "MA",
        "name": "Morocco",
        "places": "119"
    },
    "Mozambique": {
        "iso": "MZ",
        "name": "Mozambique",
        "places": "1"
    },
    "Myanmar": {
        "iso": "MM",
        "name": "Myanmar",
        "places": "4"
    },
    "Namibia": {
        "iso": "NA",
        "name": "Namibia",
        "places": "3"
    },
    "Nepal": {
        "iso": "NP",
        "name": "Nepal",
        "places": "4"
    },
    "Netherlands": {
        "iso": "NL",
        "name": "Netherlands",
        "places": "1061"
    },
    "New Caledonia": {
        "iso": "NC",
        "name": "New Caledonia",
        "places": "1"
    },
    "New Zealand": {
        "iso": "NZ",
        "name": "New Zealand",
        "places": "229"
    },
    "Nicaragua": {
        "iso": "NI",
        "name": "Nicaragua",
        "places": "12"
    },
    "Norway": {
        "iso": "NO",
        "name": "Norway",
        "places": "539"
    },
    "Oman": {
        "iso": "OM",
        "name": "Oman",
        "places": "1"
    },
    "Pakistan": {
        "iso": "PK",
        "name": "Pakistan",
        "places": "5"
    },
    "Palestinian Territory, Occupied": {
        "iso": "PS",
        "name": "Palestinian Territory, Occupied",
        "places": "9"
    },
    "Panama": {
        "iso": "PA",
        "name": "Panama",
        "places": "4"
    },
    "Papua New Guinea": {
        "iso": "PG",
        "name": "Papua New Guinea",
        "places": "1"
    },
    "Paraguay": {
        "iso": "PY",
        "name": "Paraguay",
        "places": "4"
    },
    "Peru": {
        "iso": "PE",
        "name": "Peru",
        "places": "28"
    },
    "Philippines": {
        "iso": "PH",
        "name": "Philippines",
        "places": "1"
    },
    "Poland": {
        "iso": "PL",
        "name": "Poland",
        "places": "1534"
    },
    "Portugal": {
        "iso": "PT",
        "name": "Portugal",
        "places": "253"
    },
    "Qatar": {
        "iso": "QA",
        "name": "Qatar",
        "places": "1"
    },
    "Romania": {
        "iso": "RO",
        "name": "Romania",
        "places": "624"
    },
    "Russian Federation": {
        "iso": "RU",
        "name": "Russian Federation",
        "places": "687"
    },
    "San Marino": {
        "iso": "SM",
        "name": "San Marino",
        "places": "1"
    },
    "Saudi Arabia": {
        "iso": "SA",
        "name": "Saudi Arabia",
        "places": "1"
    },
    "Senegal": {
        "iso": "SN",
        "name": "Senegal",
        "places": "2"
    },
    "Serbia": {
        "iso": "RS",
        "name": "Serbia",
        "places": "259"
    },
    "Seychelles": {
        "iso": "SC",
        "name": "Seychelles",
        "places": "1"
    },
    "Singapore": {
        "iso": "SG",
        "name": "Singapore",
        "places": "2"
    },
    "Slovakia": {
        "iso": "SK",
        "name": "Slovakia",
        "places": "316"
    },
    "Slovenia": {
        "iso": "SI",
        "name": "Slovenia",
        "places": "252"
    },
    "Somalia": {
        "iso": "SO",
        "name": "Somalia",
        "places": "1"
    },
    "South Africa": {
        "iso": "ZA",
        "name": "South Africa",
        "places": "16"
    },
    "South Korea": {
        "iso": "KR",
        "name": "South Korea",
        "places": "74"
    },
    "Spain": {
        "iso": "ES",
        "name": "Spain",
        "places": "862"
    },
    "Sudan": {
        "iso": "SD",
        "name": "Sudan",
        "places": "2"
    },
    "Suriname": {
        "iso": "SR",
        "name": "Suriname",
        "places": "1"
    },
    "Svalbard and Jan Mayen": {
        "iso": "SJ",
        "name": "Svalbard and Jan Mayen",
        "places": "1"
    },
    "Sweden": {
        "iso": "SE",
        "name": "Sweden",
        "places": "560"
    },
    "Switzerland": {
        "iso": "CH",
        "name": "Switzerland",
        "places": "383"
    },
    "Syria": {
        "iso": "SY",
        "name": "Syria",
        "places": "9"
    },
    "Taiwan, Province of China": {
        "iso": "TW",
        "name": "Taiwan, Province of China",
        "places": "24"
    },
    "Tajikistan": {
        "iso": "TJ",
        "name": "Tajikistan",
        "places": "11"
    },
    "Tanzania, United Republic of": {
        "iso": "TZ",
        "name": "Tanzania, United Republic of",
        "places": "2"
    },
    "Thailand": {
        "iso": "TH",
        "name": "Thailand",
        "places": "23"
    },
    "Trinidad and Tobago": {
        "iso": "TT",
        "name": "Trinidad and Tobago",
        "places": "1"
    },
    "Tunisia": {
        "iso": "TN",
        "name": "Tunisia",
        "places": "2"
    },
    "Turkey": {
        "iso": "TR",
        "name": "Turkey",
        "places": "511"
    },
    "Turkmenistan": {
        "iso": "TM",
        "name": "Turkmenistan",
        "places": "4"
    },
    "Uganda": {
        "iso": "UG",
        "name": "Uganda",
        "places": "10"
    },
    "Ukraine": {
        "iso": "UA",
        "name": "Ukraine",
        "places": "453"
    },
    "United Arab Emirates": {
        "iso": "AE",
        "name": "United Arab Emirates",
        "places": "1"
    },
    "United Kingdom": {
        "iso": "GB",
        "name": "United Kingdom",
        "places": "1004"
    },
    "United States": {
        "iso": "US",
        "name": "United States",
        "places": "1054"
    },
    "Uruguay": {
        "iso": "UY",
        "name": "Uruguay",
        "places": "56"
    },
    "Uzbekistan": {
        "iso": "UZ",
        "name": "Uzbekistan",
        "places": "20"
    },
    "Venezuela": {
        "iso": "VE",
        "name": "Venezuela",
        "places": "9"
    },
    "Viet Nam": {
        "iso": "VN",
        "name": "Viet Nam",
        "places": "13"
    },
    "Western Sahara": {
        "iso": "EH",
        "name": "Western Sahara",
        "places": "3"
    },
    "Zambia": {
        "iso": "ZM",
        "name": "Zambia",
        "places": "4"
    },
    "Zimbabwe": {
        "iso": "ZW",
        "name": "Zimbabwe",
        "places": "5"
    }
}

function promiseAllP(items, block) {
    var promises = [];
    items.forEach(function (item, index) {
        promises.push(function (item, i) {
            return new Promise(function (resolve, reject) {
                return block.apply(this, [item, index, resolve, reject]);
            });
        }(item, index))
    });
    return Promise.all(promises);
} //promiseAll

function readFiles(dirname) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, function (err, filenames) {
            if (err) return reject(err);
            promiseAllP(filenames,
                (filename, index, resolve, reject) => {
                    fs.readFile(path.resolve(dirname, filename), 'utf8', function (err, content) {
                        if (err) return reject(err);
                        return resolve({filename: filename, contents: content});
                    });
                })
                .then(results => {
                    return resolve(results);
                })
                .catch(error => {
                    return reject(error);
                });
        });
    });
}

const readHitchspots = () => {
    return new Promise((resolve, reject) => {
        readFiles('./public/assets/kml/hitchspots').then(files => {
            const poi = []
            files.forEach((file, index) => {
                    const placemarks = new DOMParser().parseFromString(file.contents, 'text/xml').getElementsByTagName("Placemark")
                    for (let i = 0; i < placemarks.length; i++) {
                        const desc = placemarks[i].getElementsByTagName("description")[0];
                        poi.push({
                            coords: placemarks[i].getElementsByTagName("coordinates")[0].textContent,
                            description: desc ? desc.textContent : "",
                        })
                    }
                }
            )
            resolve(poi)
        }).catch(reject)
    })
}

const getScore = (style) => {
    switch (style) {
        case '#placemark-green':
            return 5;
        case '#placemark-blue':
            return 4;
        case '#placemark-yellow':
            return 3;
        case '#placemark-orange':
            return 2;
        case '#placemark-red':
            return 1;
        default:
            return 0;
    }
}
const getWithRegex = (description, regex, fallbackRegex) => {
    const match = description.match(regex)
    if (match) {
        return match[1]
    } else if (fallbackRegex) {
        const match2 = description.match(fallbackRegex)
        if (match2) {
            return match2[1]
        }
    }
    return "";
}
const selectLonger = (first, second) => {
    return first.length >= second.length ? first : second;
}

const selectFirstNonEmpty = (first, second) => {
    return first.length > 0 ? first : second;
}
readHitchspots().then(hitchspots => {
    readFiles('./public/assets/kml/countries')
        .then(files => {
            console.log("loaded ", files.length);
            const poi = []
            files.forEach((file, index) => {
                const parsedFile = new DOMParser().parseFromString(file.contents, 'text/xml')
                // console.log(parsedFile)
                const placemarks = parsedFile.getElementsByTagName("Placemark")
                console.log(index + ". " + placemarks.length)
                for (let i = 0; i < placemarks.length; i++) {
                    const coords = placemarks[i].getElementsByTagName("coordinates")[0].textContent
                    const hitchspot = hitchspots.find(elem => elem.coords === coords)
                    const desc = placemarks[i].getElementsByTagName("description")[0];
                    const descText = desc ? desc.textContent : "";
                    const descText2 = hitchspot ? hitchspot.description : "";
                    poi.push({
                        id: getWithRegex(descText, /place=([0-9]+)/),
                        country: parsedFile.getElementsByTagName("name")[0].textContent,
                        town: getWithRegex(placemarks[i].getElementsByTagName("name")[0].textContent, /spot in (.+), /),
                        coords: coords,
                        style: placemarks[i].getElementsByTagName("styleUrl")[0].textContent,
                        hitchability: selectFirstNonEmpty(
                            getWithRegex(descText, /Hitchability:<\/b> ((.|\n)+) <b/, /Hitchability:<\/b> (Very good|Good|Average|Bad|Senseless)/).replace("Average", "Medium").replace("Senseless", "Very Bad"),
                            getWithRegex(descText2, /<strong>Hitchability:<\/strong> (Very Good|Good|Medium|Bad|Very Bad)/)),
                        hitchabilityVotes: getWithRegex(descText, /\(([0-9]+) (votes|vote)\)/),
                        time: selectLonger(
                            getWithRegex(descText, /Waiting time:<\/b> ((.|\n)+) \([0-9]+ ex/),
                            getWithRegex(descText2, /Waiting time:<\/strong> ((.|\n)+(min|h))<hr>/, /Waiting time:<\/strong> ((.|\n)+(min|h))$/)),
                        timeExp: getWithRegex(descText, /\(([0-9]+) (experience|experiences)\)/),
                        description: selectLonger(
                            getWithRegex(descText, /((.|\n)+<\/p>)/).replace(/<p>/, "“").replace(/<\/p>/, "”"),
                            getWithRegex(descText2, /Description:<\/strong><br>\n((.|\n)+)\n<strong>Comments:/, /Description:<\/strong><br>\n((.|\n)+)$/)),
                        comments: getWithRegex(descText2, /Comments:<\/strong><br>\n((.|\n)+)$/),
                        desc1: descText,
                        desc2: descText2
                    })
                }
            });
            let maxId = Math.max(...poi.filter(elem => elem.id.length > 0).map(elem => parseInt(elem.id)))
            const poiMinified = poi.map((elem, index) => {
                if (poi.find((elem2, index2) => index2 < index && elem.coords === elem2.coords && elem.description === elem2.description && elem.comments === elem2.comments)) {
                    return null
                } else {
                    const temp = {}
                    let id = parseInt(elem.id)
                    if (isNaN(id)) {
                        maxId += 1;
                        id = maxId
                    }
                    temp['i'] = id //id
                    temp['c'] = countries[elem.country].iso //country
                    if (elem.town) {
                        temp['p'] = elem.town //place
                    }
                    temp['l'] = elem.coords //location
                    temp['s'] = getScore(elem.style) //score
                    if (elem.hitchabilityVotes.length > 0) {
                        temp['sc'] = parseInt(elem.hitchabilityVotes) //score count
                    } else {
                        temp['sc'] = 1
                    }
                    if (elem.time.length > 0) {
                        const h = parseInt(getWithRegex(elem.time, /([0-9]+)h/))
                        const m = parseInt(getWithRegex(elem.time, /([0-9]+)min/))

                        let time = 0;
                        if (!isNaN(h)) {
                            time += 60 * h
                        }
                        if (!isNaN(m)) {
                            time += m
                        }
                        if (time === 0) {
                            console.error("invalid time", elem.time)
                        }
                        temp['t'] = time //time
                        if (elem.timeExp.length > 0) {
                            temp['tc'] = parseInt(elem.timeExp) //time count
                        } else {
                            temp['tc'] = 1
                        }
                    }
                    if (elem.description.length > 0) {
                        temp['d'] = elem.description //description
                    }
                    if (elem.comments.length > 0) {
                        temp['o'] = elem.comments // opinions
                    }
                    // temp['desc1']= elem.desc1
                    // temp['desc2']= elem.desc2

                    return temp
                }
            }).filter(elem => elem)
            // poiMinified.filter((x, xi) => poiMinified.find((y, yi) => xi !== yi && x.l === y.l)).forEach(elem => {
            //     console.error(elem)
            // })

            fs.writeFileSync('./public/assets/json/world.json', JSON.stringify(poiMinified, null, 1))
        })
        .catch(error => {
            console.log(error);
        });
})