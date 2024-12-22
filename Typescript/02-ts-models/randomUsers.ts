import { IUser } from "./models/IUsers";

export class RandomUserService {
  private static users:IUser[] = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Juan Carlos",
        last: "Orta",
      },
      location: {
        street: {
          number: 1965,
          name: "Andador Sur Alcaraz",
        },
        city: "Huaniqueo de Morales",
        state: "Tabasco",
        country: "Mexico",
        postcode: 30064,
        coordinates: {
          latitude: "24.2228",
          longitude: "-103.1822",
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo",
        },
      },
      email: "juancarlos.orta@example.com",
      login: {
        uuid: "9ac315d3-e4eb-43b8-b284-ee5ecf859e18",
        username: "orangefish926",
        password: "bluesky",
        salt: "6s4UmTIS",
        md5: "84949350b5588a3f37fd9b530fc08b61",
        sha1: "7ab1abcb78da51c01c96885a740d14a85b3fe094",
        sha256:
          "9453387ccfb5b90560cf449cbbc2ebd29a192c47a7ba96350a79dd5b446fe7d5",
      },
      dob: {
        date: "1997-10-30T11:26:22.092Z",
        age: 27,
      },
      registered: {
        date: "2009-01-17T19:41:08.817Z",
        age: 15,
      },
      phone: "(679) 535 9158",
      cell: "(633) 249 4328",
      id: {
        name: "NSS",
        value: "25 74 27 9735 0",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/87.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/87.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/87.jpg",
      },
      nat: "MX",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Luis",
        last: "Pineda",
      },
      location: {
        street: {
          number: 9564,
          name: "Boulevard Aguascalientes",
        },
        city: "Singuilucan",
        state: "Queretaro",
        country: "Mexico",
        postcode: 87132,
        coordinates: {
          latitude: "65.8239",
          longitude: "-55.4319",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "luis.pineda@example.com",
      login: {
        uuid: "536f664d-48b7-43ce-b591-a59b3f2dad79",
        username: "brownlion690",
        password: "tool",
        salt: "EK9YoQg7",
        md5: "0854277a6081a62868863c77b54a6918",
        sha1: "5aed93293df9122aab83f529e95bd3789cbb83d2",
        sha256:
          "199ccc8dab3dca24874dd53993770f0abc37bf8ab7046f69431e71b200607903",
      },
      dob: {
        date: "1985-08-19T00:01:20.166Z",
        age: 39,
      },
      registered: {
        date: "2004-12-23T05:52:51.254Z",
        age: 19,
      },
      phone: "(612) 276 9998",
      cell: "(666) 179 2030",
      id: {
        name: "NSS",
        value: "15 75 26 5348 2",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/26.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/26.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/26.jpg",
      },
      nat: "MX",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Nellie",
        last: "Shaw",
      },
      location: {
        street: {
          number: 5615,
          name: "Mcgowen St",
        },
        city: "Santa Clarita",
        state: "West Virginia",
        country: "United States",
        postcode: 72968,
        coordinates: {
          latitude: "84.3218",
          longitude: "112.1356",
        },
        timezone: {
          offset: "+5:45",
          description: "Kathmandu",
        },
      },
      login: {
        uuid: "3b1fe39a-b242-444b-afff-eaa2bf405129",
        username: "organicpanda492",
        password: "bbbb",
        salt: "Rn4mirpJ",
        md5: "012137b49228ae17a380e79d77604d8b",
        sha1: "0f10c4c4039c91886eaf55fe56449ccb2d032478",
        sha256:
          "7a567a5fdc406c59b28d069a5b46a4267080461c33df085ec8c5a14dd252ace0",
      },
      dob: {
        date: "1981-06-17T01:19:08.910Z",
        age: 43,
      },
      registered: {
        date: "2020-03-25T01:39:25.778Z",
        age: 4,
      },
      phone: "(539) 470-0440",
      cell: "(709) 538-3543",
      id: {
        name: "SSN",
        value: "057-19-1095",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/46.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/46.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/46.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Daniela",
        last: "Vidal",
      },
      location: {
        street: {
          number: 2704,
          name: "Calle de Ángel García",
        },
        city: "Parla",
        state: "Castilla y León",
        country: "Spain",
        postcode: 32773,
        coordinates: {
          latitude: "46.3774",
          longitude: "34.7695",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "daniela.vidal@example.com",
      login: {
        uuid: "4b867d4f-fbd0-4c87-8fbb-3e3243919b6a",
        username: "angryelephant226",
        password: "gagged",
        salt: "uSWbzR1B",
        md5: "b5751cca48eaecacc2199e5c8a3ff862",
        sha1: "d479590bc3c068778b2d97a97cb0584f398fb781",
        sha256:
          "f5e6523bcb4026aec7b21907457177e063c361cc15f740cc5b7a29127b15e63f",
      },
      dob: {
        date: "1994-11-16T01:52:30.937Z",
        age: 30,
      },
      registered: {
        date: "2020-10-01T15:51:18.618Z",
        age: 4,
      },
      phone: "902-128-619",
      cell: "637-466-827",
      id: {
        name: "DNI",
        value: "25721489-E",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/87.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/87.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg",
      },
      nat: "ES",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Clara",
        last: "Nazario",
      },
      location: {
        street: {
          number: 5112,
          name: "Eje vial Michoacán de Ocampo",
        },
        city: "Juchitlán",
        state: "Quintana Roo",
        country: "Mexico",
        postcode: 57800,
        coordinates: {
          latitude: "70.7056",
          longitude: "-6.5397",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "clara.nazario@example.com",
      login: {
        uuid: "64e5b006-60a0-4e75-9596-509b3e20f858",
        username: "organicgoose121",
        password: "toejam",
        salt: "QrK1hxUL",
        md5: "55d2f77f35fa0d32a4057037c9515297",
        sha1: "1da59a42fb16c1da39cbecee164bfc178afaac33",
        sha256:
          "fa0cb2a921781644921f97ebe20b06806d6b23c5202c68b47f141188f397b224",
      },
      dob: {
        date: "1946-04-05T00:59:22.150Z",
        age: 78,
      },
      registered: {
        date: "2010-09-01T03:00:19.494Z",
        age: 14,
      },
      phone: "(691) 416 6846",
      cell: "(624) 624 6203",
      id: {
        name: "NSS",
        value: "93 18 51 1013 8",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/85.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
      },
      nat: "MX",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Ludwig",
        last: "Renz",
      },
      location: {
        street: {
          number: 7718,
          name: "Jahnstraße",
        },
        city: "Schmalkalden-Meiningen",
        state: "Saarland",
        country: "Germany",
        postcode: 32777,
        coordinates: {
          latitude: "-39.7219",
          longitude: "179.5252",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "ludwig.renz@example.com",
      login: {
        uuid: "9a4ba545-bc06-4bd7-a042-eee1334da2f5",
        username: "organicgoose860",
        password: "florence",
        salt: "DwVfOj0i",
        md5: "cc6159dcdd72ac7fda9ed6d67814d170",
        sha1: "23e21f4b7277852248b436631b4502c962b1cfa1",
        sha256:
          "c6ddf7953314150d62164341c006c595798835d1091135939a146aa3c98251cf",
      },
      dob: {
        date: "1970-09-28T17:05:50.718Z",
        age: 54,
      },
      registered: {
        date: "2020-01-24T17:43:23.147Z",
        age: 4,
      },
      phone: "0601-7372328",
      cell: "0178-2977548",
      id: {
        name: "SVNR",
        value: "78 280970 R 354",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/86.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg",
      },
      nat: "DE",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Amador",
        last: "Santiago",
      },
      location: {
        street: {
          number: 4062,
          name: "Diagonal Veracruz de Ignacio de la Llave",
        },
        city: "Mitla",
        state: "Tamaulipas",
        country: "Mexico",
        postcode: 36401,
        coordinates: {
          latitude: "50.2934",
          longitude: "-3.6403",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "amador.santiago@example.com",
      login: {
        uuid: "aae4c48b-427d-4f2a-9399-2896b8b49d15",
        username: "bigmouse261",
        password: "sparky",
        salt: "sJ6LE0BO",
        md5: "b7a79121855d684c5da7431e603f3aea",
        sha1: "a675d6d264c1c5cfc4bf957d8c79f3a3e9de3015",
        sha256:
          "2b4005358c84546e40b88a5de6b3bd0d2f5b7a1c99f0860aded99603320f855c",
      },
      dob: {
        date: "1986-04-29T08:24:01.272Z",
        age: 38,
      },
      registered: {
        date: "2008-09-02T12:06:26.593Z",
        age: 16,
      },
      phone: "(633) 315 6500",
      cell: "(601) 267 7093",
      id: {
        name: "NSS",
        value: "75 64 91 0127 4",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/63.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/63.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
      },
      nat: "MX",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Sofie",
        last: "Christiansen",
      },
      location: {
        street: {
          number: 1397,
          name: "Birkevang",
        },
        city: "Argerskov",
        state: "Midtjylland",
        country: "Denmark",
        postcode: 49624,
        coordinates: {
          latitude: "45.3235",
          longitude: "39.7650",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "sofie.christiansen@example.com",
      login: {
        uuid: "e95006ee-261a-4ae7-a379-379315f42d83",
        username: "smallkoala538",
        password: "kathryn",
        salt: "tfKhZc6p",
        md5: "86ebf4b249b4c4f789886d00fbf45361",
        sha1: "917f8503f3561d197453038a311146c96efcd75a",
        sha256:
          "75e0c41d5804189385dae2b6dace17ee3782ed1e13b2fab52858480bf78f7fd4",
      },
      dob: {
        date: "1989-07-21T03:29:23.230Z",
        age: 35,
      },
      registered: {
        date: "2008-07-26T11:34:38.945Z",
        age: 16,
      },
      phone: "15031754",
      cell: "76951056",
      id: {
        name: "CPR",
        value: "200789-6102",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/2.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      },
      nat: "DK",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "بیتا",
        last: "محمدخان",
      },
      location: {
        street: {
          number: 8744,
          name: "شهید شهرام امیری",
        },
        city: "اراک",
        state: "سمنان",
        country: "Iran",
        postcode: 16121,
        coordinates: {
          latitude: "-67.8924",
          longitude: "-144.7298",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "byt.mhmdkhn@example.com",
      login: {
        uuid: "34d32ab7-c7cb-4475-81a2-f2595d7eda12",
        username: "brownmeercat452",
        password: "abbott",
        salt: "wSDOIvcR",
        md5: "838711f29f4f9ea69063442c139f02f4",
        sha1: "72f8d5d2d32760420b07adc6055caea68226f966",
        sha256:
          "e5b8a78de2e73189fb730686a9ccaac64d044bd427606132a4227bcb694a5257",
      },
      dob: {
        date: "1986-07-29T08:23:35.316Z",
        age: 38,
      },
      registered: {
        date: "2011-11-23T21:29:04.596Z",
        age: 13,
      },
      phone: "081-05018667",
      cell: "0986-231-7306",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/73.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
      },
      nat: "IR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Mart",
        last: "Ophuis",
      },
      location: {
        street: {
          number: 5136,
          name: "De Meute",
        },
        city: "Schettens",
        state: "Drenthe",
        country: "Netherlands",
        postcode: "6416 QB",
        coordinates: {
          latitude: "39.1344",
          longitude: "-44.8999",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "mart.ophuis@example.com",
      login: {
        uuid: "c454dd4e-cb97-4deb-ba51-d6698d449e97",
        username: "bigswan111",
        password: "mine",
        salt: "De1Twdvy",
        md5: "00beaa49645a3a5094f9fe652b7a68e0",
        sha1: "5b8ea04d4b9a7efaf0ba456a943f1fde94c63196",
        sha256:
          "7091b8eeb0ba5605544b0f3549b3c8238502547dcc7b7119ef62d8601b7c568b",
      },
      dob: {
        date: "1951-03-13T18:35:26.949Z",
        age: 73,
      },
      registered: {
        date: "2017-11-25T02:54:26.440Z",
        age: 7,
      },
      phone: "(0266) 769391",
      cell: "(06) 74084864",
      id: {
        name: "BSN",
        value: "83427938",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/62.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/62.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
      },
      nat: "NL",
    },
  ];

  public static getAllUsers() {
    return this.users;
  }
}