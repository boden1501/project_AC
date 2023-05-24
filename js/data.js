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
    }
]
const dataProduct=[
    {
        "name": "Máy lạnh Aqua Inverter 1 HP AQA-KCRV10NB",
        "img": "./img/máy lạnh aqua/Máy lạnh Aqua Inverter 1 HP AQA-KCRV10NB.jpg",
        "des": "des 1",
        "brand_id": "aq",
        "price": '1$',
        "isNew": true,
        "bestSeller": false,
        "id": "1"
    },
    {
        "name": "Máy lạnh Aqua Inverter 1 HP AQA-RUV10RB",
        "img": "./img/máy lạnh aqua/Máy lạnh Aqua Inverter 1 HP AQA-RUV10RB.jpg",
        "des": "des 2",
        "brand_id": "aq",
        "price": '2$',
        "isNew": true,
        "bestSeller":false,
        "id": "2"
    },
    {
        "name": "Máy lạnh Aqua Inverter 1 HP AQA-RV9QC",
        "img": "./img/máy lạnh aqua/Máy lạnh Aqua Inverter 1 HP AQA-RV9QC.jpg",
        "des": "des 3",
        "brand_id": "aq",
        "price": '3$',
        "isNew": true,
        "bestSeller": false,
        "id": "3"
    },
    {
        "name": "Máy lạnh Aqua Inverter 2 HP AQA-RV18QA",
        "img": "./img/máy lạnh aqua/Máy lạnh Aqua Inverter 2 HP AQA-RV18QA.jpg",
        "des": "des 4",
        "brand_id": "aq",
        "price": '4$',
        "isNew": true,
        "bestSeller": true,
        "id": "4"
    },
    {
        "name": "Máy lạnh 2 chiều Daikin Inverter 1.5 HP FTHF35VAVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh 2 chiều Daikin Inverter 1.5 HP FTHF35VAVMV.jpg",
        "des": "des 5",
        "brand_id": "dk",
        "price": '5$',
        "isNew": true,
        "bestSeller": false,
        "id": "5"
    },
    {
        "name": "Máy lạnh Daikin Inverter 1 HP ATKF25XVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh Daikin Inverter 1 HP ATKF25XVMV.jpg",
        "des": "des 6",
        "brand_id": "dk",
        "price": '6$',
        "isNew": true,
        "bestSeller": true,
        "id": "6"
    },
    {
        "name": "Máy lạnh Daikin Inverter 1 HP FTKB25WMVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh Daikin Inverter 1 HP FTKB25WMVMV.jpg",
        "des": "des 7",
        "brand_id": "dk",
        "price": '7$',
        "isNew": true,
        "bestSeller": false,
        "id": "7"
    },
    {
        "name": "Máy lạnh Daikin Inverter 1 HP FTKY25WMVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh Daikin Inverter 1 HP FTKY25WMVMV.jpg",
        "des": "des 8",
        "brand_id": "dk",
        "price": '8$',
        "isNew": true,
        "bestSeller": true,
        "id": "8"
    },
    {
        "name": "Máy lạnh Daikin Inverter 1.5 HP ATKF35XVMV",
        "img": "./img/máy lạnh daikin/Máy lạnh Daikin Inverter 1.5 HP ATKF35XVMV.jpg",
        "des": "des 9",
        "brand_id": "dk",
        "price": '9$',
        "isNew": true,
        "bestSeller": true,
        "id": "9"
    },
    {
        "name": "Máy lạnh LG Inverter 1 HP V10API1",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1 HP V10API1.jpg",
        "des": "des 10",
        "brand_id": "lg",
        "price": '10$',
        "isNew": true,
        "bestSeller": false,
        "id": "10"
    },
    {
        "name": "Máy lạnh LG Inverter 1 HP V10WIN",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1 HP V10WIN.jpg",
        "des": "des 11",
        "brand_id": "lg",
        "price": '11$',
        "isNew": true,
        "bestSeller": true,
        "id": "11"
    },
    {
        "name": "Máy lạnh LG Inverter 1.5 HP V13APFP",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1.5 HP V13APFP.jpg",
        "des": "des 12",
        "brand_id": "lg",
        "price": '12$',
        "isNew": true,
        "bestSeller": false,
        "id": "12"
    },
    {
        "name": "Máy lạnh LG Inverter 1.5 HP V13API1",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1.5 HP V13API1.jpg",
        "des": "des 13",
        "brand_id": "lg",
        "price": '130$',
        "isNew": true,
        "bestSeller": true,
        "id": "13"
    },
    {
        "name": "Máy lạnh LG Inverter 1.5 HP V13WIN",
        "img": "./img/máy lạnh LG/Máy lạnh LG Inverter 1.5 HP V13WIN.jpg",
        "des": "des 14",
        "brand_id": "lg",
        "price": '130$',
        "isNew": true,
        "bestSeller": true,
        "id": "14"
    },
    {
        "name": "Máy lạnh Toshiba 1 HP Inverter RAS-H10C4KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba 1 HP Inverter RAS-H10C4KCVG-V.jpg",
        "des": "des 15",
        "brand_id": "tb",
        "price": '130$',
        "isNew": true,
        "bestSeller": false,
        "id": "15"
    },
    {
        "name": "Máy lạnh Toshiba 1.5 HP Inverter RAS-H13C4KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba 1.5 HP Inverter RAS-H13C4KCVG-V.jpg",
        "des": "des 16",
        "brand_id": "tb",
        "price": '130$',
        "isNew": true,
        "bestSeller": true,
        "id": "16"
    },
    {
        "name": "Máy lạnh Toshiba 2 HP Inverter RAS-H18C4KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba 2 HP Inverter RAS-H18C4KCVG-V.jpg",
        "des": "des 17",
        "brand_id": "tb",
        "price": '130$',
        "isNew": true,
        "bestSeller": false,
        "id": "17"
    },
    {
        "name": "Máy lạnh Toshiba Inverter 1 HP RAS-H10E2KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba Inverter 1 HP RAS-H10E2KCVG-V.jpg",
        "des": "des 18",
        "brand_id": "tb",
        "price": '130$',
        "isNew": true,
        "bestSeller": false,
        "id": "18"
    },
    {
        "name": "Máy lạnh Toshiba Inverter 1 HP RAS-H10Z1KCVG-V",
        "img": "./img/máy lạnh toshiba/Máy lạnh Toshiba Inverter 1 HP RAS-H10Z1KCVG-V.jpg",
        "des": "des 19",
        "brand_id": "tb",
        "price": '130$',
        "isNew": true,
        "bestSeller": false,
        "id": "19"
    },

]