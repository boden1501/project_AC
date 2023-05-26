const dataBrand=[
    {
        "brand_name":"LG",
        "isActive": false,
        "brand_id":"lg"
    },
    {
        "brand_name":"Daikin",
        "isActive": false,
        "brand_id":"dk"
    },
    {
        "brand_name":"Tosiba",
        "isActive": false,
        "brand_id":"tb"
    },
    {
        "brand_name":"Aqua",
        "isActive": false,
        "brand_id":"aq"
    },
    {
        "brand_name":"Emerson",
        "isActive": false,
        "brand_id":"em"
    },
    {
        "brand_name":"Keystone",
        "isActive": false,
        "brand_id":"kt"
    },
    {
        "brand_name":"Panasonic",
        "isActive": false,
        "brand_id":"pn"
    },
    {
        "brand_name":"Mitsubishi",
        "isActive": false,
        "brand_id":"ms"
    },


]
const dataType = [
    {
        "Type_name":"windowac",
        "isActive": false,
        "type_id":"wac"
    },
    {
        "Type_name":"casseteac",
        "isActive": false,
        "type_id":"cac"
    },
    {
        "Type_name":"splitac",
        "isActive": false,
        "type_id":"sac"
    },
]
const dataProduct=[
    {
        "name":"Aqua Inverter 1 HP AQA-KCRV10NB",
        "img": "./img/máy lạnh aqua/Máy lạnh Aqua Inverter 1 HP AQA-KCRV10NB.jpg",
        "des": "des 1",
        "brand_id": "aq",
        "type_id":"sac",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "1"
    },
    {
        "name": "Aqua Inverter 1 HP AQA-RUV10RB",
        "img": "./img/máy lạnh aqua/Máy lạnh Aqua Inverter 1 HP AQA-RUV10RB.jpg",
        "des": "des 2",
        "brand_id": "aq",
        "type_id":"sac",
        "price": '2$',
        "isNew": true,
        "bestSeller":false,
        "id": "2"
    },
    {
        "name": "Aqua Inverter 1 HP AQA-RV9QC",
        "img": "./img/máy lạnh aqua/Máy lạnh Aqua Inverter 1 HP AQA-RV9QC.jpg",
        "des": "des 3",
        "type_id":"sac",
        "brand_id": "aq",
        "price": '3$',
        "isNew": true,
        "bestSeller": false,
        "id": "3"
    },
    {
        "name": "Aqua Inverter 2 HP AQA-RV18QA",
        "img": "./img/máy lạnh aqua/Máy lạnh Aqua Inverter 2 HP AQA-RV18QA.jpg",
        "des": "des 4",
        "type_id":"sac",
        "brand_id": "aq",
        "price": '4$',
        "isNew": true,
        "bestSeller": true,
        "id": "4"
    },
    {
        "name": "Daikin Inverter 1.5 HP FTHF35VAVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh 2 chiều Daikin Inverter 1.5 HP FTHF35VAVMV.jpg",
        "des": "des 5",
        "type_id":"sac",
        "brand_id": "dk",
        "price": '5$',
        "isNew": true,
        "bestSeller": false,
        "id": "5"
    },
    {
        "name": "Daikin Inverter 1 HP ATKF25XVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh Daikin Inverter 1 HP ATKF25XVMV.jpg",
        "des": "des 6",
        "type_id":"sac",
        "brand_id": "dk",
        "price": '6$',
        "isNew": true,
        "bestSeller": true,
        "id": "6"
    },
    {
        "name": "Daikin Inverter 1 HP FTKB25WMVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh Daikin Inverter 1 HP FTKB25WMVMV.jpg",
        "des": "des 7",
        "type_id":"sac",
        "brand_id": "dk",
        "price": '7$',
        "isNew": true,
        "bestSeller": false,
        "id": "7"
    },
    {
        "name": "Daikin Inverter 1 HP FTKY25WMVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh Daikin Inverter 1 HP FTKY25WMVMV.jpg",
        "des": "des 8",
        "type_id":"sac",
        "brand_id": "dk",
        "price": '8$',
        "isNew": true,
        "bestSeller": true,
        "id": "8"
    },
    {
        "name": "Daikin Inverter 1.5 HP ATKF35XVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh Daikin Inverter 1.5 HP ATKF35XVMV.jpg",
        "des": "des 9",
        "type_id":"sac",
        "brand_id": "dk",
        "price": '9$',
        "isNew": true,
        "bestSeller": true,
        "id": "9"
    },
    {
        "name": "LG Inverter 1 HP V10API1",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1 HP V10API1.jpg",
        "des": "des 10",
        "type_id":"sac",
        "brand_id": "lg",
        "price": '10$',
        "isNew": true,
        "bestSeller": false,
        "id": "10"
    },
    {
        "name": "LG Inverter 1 HP V10WIN",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1 HP V10WIN.jpg",
        "des": "des 11",
        "type_id":"sac",
        "brand_id": "lg",
        "price": '11$',
        "isNew": true,
        "bestSeller": true,
        "id": "11"
    },
    {
        "name": "LG Inverter 1.5 HP V13APFP",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1.5 HP V13APFP.jpg",
        "des": "des 12",
        "type_id":"sac",
        "brand_id": "lg",
        "price": '12$',
        "isNew": true,
        "bestSeller": false,
        "id": "12"
    },
    {
        "name": "LG Inverter 1.5 HP V13API1",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1.5 HP V13API1.jpg",
        "des": "des 13",
        "type_id":"sac",
        "brand_id": "lg",
        "price": '130$',
        "isNew": true,
        "bestSeller": true,
        "id": "13"
    },
    {
        "name": "LG Inverter 1.5 HP V13WIN",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1.5 HP V13WIN.jpg",
        "des": "des 14",
        "type_id":"sac",
        "brand_id": "lg",
        "price": '130$',
        "isNew": true,
        "bestSeller": true,
        "id": "14"
    },
    {
        "name": "Toshiba 1 HP Inverter RAS-H10C4KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba 1 HP Inverter RAS-H10C4KCVG-V.jpg",
        "des": "des 15",
        "brand_id": "tb",
        "type_id":"sac",
        "price": '130$',
        "isNew": true,
        "bestSeller": false,
        "id": "15"
    },
    {
        "name": "Toshiba 1.5 HP Inverter RAS-H13C4KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba 1.5 HP Inverter RAS-H13C4KCVG-V.jpg",
        "des": "des 16",
        "type_id":"sac",
        "brand_id": "tb",
        "price": '130$',
        "isNew": true,
        "bestSeller": true,
        "id": "16"
    },
    {
        "name": "Toshiba 2 HP Inverter RAS-H18C4KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba 2 HP Inverter RAS-H18C4KCVG-V.jpg",
        "des": "des 17",
        "type_id":"sac",
        "brand_id": "tb",
        "price": '130$',
        "isNew": true,
        "bestSeller": false,
        "id": "17"
    },
    {
        "name": "Toshiba Inverter 1 HP RAS-H10E2KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba Inverter 1 HP RAS-H10E2KCVG-V.jpg",
        "des": "des 18",
        "type_id":"sac",
        "brand_id": "tb",
        "price": '130$',
        "isNew": true,
        "bestSeller": false,
        "id": "18"
    },
    {
        "name": "Toshiba Inverter 1 HP RAS-H10Z1KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba Inverter 1 HP RAS-H10Z1KCVG-V.jpg",
        "des": "des 19",
        "type_id":"sac",
        "brand_id": "tb",
        "price": '130$',
        "isNew": true,
        "bestSeller": false,
        "id": "19"
    },
    {
        "name": "Emerson Quiet Kool 15,000 BTU Energy Star Smart Window Air Conditioner",
        "img": "./img/window ac/Emerson Quiet Kool 15,000 BTU Energy Star Smart Window Air Conditioner.jpg",
        "des": "des 20",
        "type_id":"wac",
        "brand_id": "em",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "20"
    },
    {
        "name": "Keystone 6,000 BTU Energy Star Window Mounted Air Conditioner",
        "img": "./img/window ac/Keystone 6,000 BTU Energy Star Window Mounted Air Conditioner.jpg",
        "des": "des 21",
        "type_id":"wac",
        "brand_id": "kt",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "21"
    },
    {
        "name": "LG 6,000 BTU High Efficiency Window AC, Cools 250 Sq.Ft",
        "img": "./img/window ac/LG 6,000 BTU High Efficiency Window AC, Cools 250 Sq.Ft.jpg",
        "des": "des 22",
        "type_id":"wac",
        "brand_id": "lg",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "22"
    },
    {
        "name": "LG 7,500 BTU Window Air Conditioner with Supplemental Heat",
        "img": "./img/window ac/LG 7,500 BTU Window Air Conditioner with Supplemental Heat.jpg",
        "des": "des 23",
        "type_id":"wac",
        "brand_id": "lg",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "23"
    },
    {
        "name": "Daikin ceiling mounted air conditioner (5.5Hp) FCC140AV1V - 3 phase Ion-Plasma air purifier",
        "img": "./img/cassete ac/daikin/Daikin ceiling mounted air conditioner (5.5Hp) FCC140AV1V - 3 phase Ion-Plasma air purifier.webp",
        "des": "des 24",
        "type_id":"cac",
        "brand_id": "dk",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "24"
    },
    {
        "name": "LG Ceiling Cassette Air Conditioner inverter (2.5Hp) ZTNQ24GTLA0 - Gas R32",
        "img": "./img/cassete ac/lg/LG Ceiling Cassette Air Conditioner inverter (2.5Hp) ZTNQ24GTLA0 - Gas R32.webp",
        "des": "des 25",
        "type_id":"cac",
        "brand_id": "lg",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "25"
    },
    {
        "name": "Mitsubishi Heavy ceiling cassette air conditioner inverter (2.5Hp) FDT60YA-W5 model 2022",
        "img": "./img/cassete ac/mitsubishi/Mitsubishi Heavy ceiling cassette air conditioner inverter (2.5Hp) FDT60YA-W5 model 2022.webp",
        "des": "des 26",
        "type_id":"cac",
        "brand_id": "ms",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "26"
    },
    {
        "name": "Panasonic ceiling mounted air conditioning inverter 6.0Hp S-3448PU3H - 3 phases",
        "img": "./img/cassete ac/panasonic/Panasonic ceiling mounted air conditioning inverter 6.0Hp S-3448PU3H - 3 phases.webp",
        "des": "des 27",
        "type_id":"cac",
        "brand_id": "pn",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "27"
    },
    {
        "name": "Toshiba Ceiling Cassette Air Conditioner inverter (6.0Hp) RAV-GV4801A8P-V - 3 phase",
        "img": "./img/cassete ac/toshiba/Toshiba Ceiling Cassette Air Conditioner inverter (6.0Hp) RAV-GV4801A8P-V - 3 phase.webp",
        "des": "des 28",
        "type_id":"cac",
        "brand_id": "tb",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "28"
    },
    


]