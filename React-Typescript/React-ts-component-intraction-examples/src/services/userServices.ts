import { IUser } from "../models/IUser";

export class userServices {
  static users: IUser[] = [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Benjamín",
        last: "Fernández",
      },
      location: {
        street: {
          number: 3509,
          name: "Eje vial Morales",
        },
        city: "Los Rodríguez",
        state: "Colima",
        country: "Mexico",
        postcode: 78918,
        coordinates: {
          latitude: "26.4055",
          longitude: "-148.6509",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "benjamin.fernandez@example.com",
      login: {
        uuid: "25d5a74c-c049-4aff-82ed-1824d25a0928",
        username: "whiteswan209",
        password: "bronco",
        salt: "VcrKP09W",
        md5: "66d567952a777743684b998c85590a04",
        sha1: "9fcdaf40abe13a001e8434ddbd0e7925f6c4e12c",
        sha256:
          "e0dc6b93c907bd487a22f37c7db6855fccb9ac38226fa8c669c45d33437f2a6c",
      },
      dob: {
        date: "1973-03-31T19:14:49.607Z",
        age: 51,
      },
      registered: {
        date: "2005-07-09T13:46:14.141Z",
        age: 19,
      },
      phone: "(681) 360 5150",
      cell: "(636) 474 0205",
      id: {
        name: "NSS",
        value: "07 87 80 7826 4",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/25.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/25.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
      },
      nat: "MX",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Fedora",
        last: "Bilyachenko",
      },
      location: {
        street: {
          number: 8119,
          name: "Grinchenka",
        },
        city: "Vuglegirsk",
        state: "Ivano-Frankivska",
        country: "Ukraine",
        postcode: 14210,
        coordinates: {
          latitude: "-84.6161",
          longitude: "-39.1704",
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "fedora.bilyachenko@example.com",
      login: {
        uuid: "a7c60319-0bec-4d0b-93a6-ece168c43508",
        username: "silvergoose592",
        password: "kitchen",
        salt: "Ffks9I0C",
        md5: "43cef93a8c122c987509e9bd74298bac",
        sha1: "ebe6648508206489989ac6bf383b0bee2dd91dc8",
        sha256:
          "bac244f6e7aa03412d5c931ebe8453878cc3ae038304c479cce46efc47a19342",
      },
      dob: {
        date: "1991-01-12T12:04:11.816Z",
        age: 33,
      },
      registered: {
        date: "2005-06-11T18:02:49.121Z",
        age: 19,
      },
      phone: "(066) I20-2143",
      cell: "(098) G41-4570",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/23.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
      },
      nat: "UA",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Carolyn",
        last: "Reynolds",
      },
      location: {
        street: {
          number: 6636,
          name: "Mockingbird Ln",
        },
        city: "Hobart",
        state: "Western Australia",
        country: "Australia",
        postcode: 2988,
        coordinates: {
          latitude: "-72.8564",
          longitude: "-121.8478",
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic",
        },
      },
      email: "carolyn.reynolds@example.com",
      login: {
        uuid: "4f8f78c5-8d23-4144-8417-4c36178b00b2",
        username: "angryladybug762",
        password: "bigbird",
        salt: "xxLLiUkb",
        md5: "b32c36902ddd2b069246a49f0d7e7d27",
        sha1: "7c5dc9aa259f84eb6fc304a355b9a83c9ce81f00",
        sha256:
          "72e3ad987c5b917170e0ebf1abd479993405bfb32828f020b48e88ce8319a639",
      },
      dob: {
        date: "1958-04-11T20:12:09.633Z",
        age: 66,
      },
      registered: {
        date: "2016-12-04T19:27:50.774Z",
        age: 8,
      },
      phone: "00-3528-1442",
      cell: "0424-648-153",
      id: {
        name: "TFN",
        value: "727207522",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/25.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      },
      nat: "AU",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Tomothy",
        last: "Taylor",
      },
      location: {
        street: {
          number: 7364,
          name: "The Avenue",
        },
        city: "Derby",
        state: "County Londonderry",
        country: "United Kingdom",
        postcode: "BC9 7SA",
        coordinates: {
          latitude: "44.3930",
          longitude: "135.8158",
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo",
        },
      },
      email: "tomothy.taylor@example.com",
      login: {
        uuid: "6a87f256-992b-4202-87b3-b41483d16744",
        username: "ticklishswan523",
        password: "yummy",
        salt: "RrOgynq6",
        md5: "7b476d0063c83c1bb4e9e0f6fee413b9",
        sha1: "2c59b7f8b2a543e7ba27766c929204033eeb66f1",
        sha256:
          "09b036998c93bc3a732667803d64c4953405aa6829abd031bdb52908e43145dc",
      },
      dob: {
        date: "1993-09-23T23:11:22.652Z",
        age: 31,
      },
      registered: {
        date: "2020-07-21T01:19:58.076Z",
        age: 4,
      },
      phone: "015242 17616",
      cell: "07567 205749",
      id: {
        name: "NINO",
        value: "XT 73 49 78 Y",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/68.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Soledad",
        last: "Bustos",
      },
      location: {
        street: {
          number: 7722,
          name: "Eje vial Norte Tirado",
        },
        city: "San José del Cabo",
        state: "Morelos",
        country: "Mexico",
        postcode: 20475,
        coordinates: {
          latitude: "-3.4119",
          longitude: "40.3325",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "soledad.bustos@example.com",
      login: {
        uuid: "6d186c4b-30c9-4444-b1ee-cbd43db4a163",
        username: "crazyfish111",
        password: "bite",
        salt: "FGb4ULbz",
        md5: "8d633fd6a0dbdaa60d7b6a1849cf10b8",
        sha1: "bd84a9137ecd0b560b50c2b269d6fe4eb90e9e4a",
        sha256:
          "a20678c0448d83382f992bc4bcb379ecbfbffcc478216f8ca3d93a617e3aa74b",
      },
      dob: {
        date: "1974-06-13T14:21:47.202Z",
        age: 50,
      },
      registered: {
        date: "2008-08-08T06:49:44.421Z",
        age: 16,
      },
      phone: "(650) 528 7834",
      cell: "(658) 552 0947",
      id: {
        name: "NSS",
        value: "15 09 97 7790 7",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/69.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/69.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/69.jpg",
      },
      nat: "MX",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Arthur",
        last: "Thomas",
      },
      location: {
        street: {
          number: 9028,
          name: "College Road",
        },
        city: "Palmerston North",
        state: "Gisborne",
        country: "New Zealand",
        postcode: 29405,
        coordinates: {
          latitude: "-40.7411",
          longitude: "152.9136",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "arthur.thomas@example.com",
      login: {
        uuid: "fde7deaf-484e-4edd-a05e-ab9d5fafb51d",
        username: "orangemouse623",
        password: "tetsuo",
        salt: "hwsljvd9",
        md5: "36bef580a242f9a57296e633dd4e66c3",
        sha1: "3c2d78a229cd7b3d1139020e250916f71b5be208",
        sha256:
          "f5d6465f89d9c8d0b772f90598811bad205bb315301481bb9ba87d1e5e763172",
      },
      dob: {
        date: "1970-04-18T07:53:42.496Z",
        age: 54,
      },
      registered: {
        date: "2018-08-18T22:03:44.380Z",
        age: 6,
      },
      phone: "(064)-469-1064",
      cell: "(927)-295-9944",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/18.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Federico",
        last: "Vergara",
      },
      location: {
        street: {
          number: 7138,
          name: "Cerrada Tlaxcala",
        },
        city: "General Terán",
        state: "Sonora",
        country: "Mexico",
        postcode: 66926,
        coordinates: {
          latitude: "-30.4641",
          longitude: "57.8904",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "federico.vergara@example.com",
      login: {
        uuid: "5e6b5a65-52ed-4e5a-aba2-ab30fcebd4b1",
        username: "crazyfrog946",
        password: "sheba1",
        salt: "RdOKqcBR",
        md5: "868e0006e1070e8b52bed238d0475355",
        sha1: "482396e95bd466d38dae9b400ba2535d59779e7a",
        sha256:
          "42d7f37c55241482370d33cd520c21906573852499e67da90a1898de2a8f576f",
      },
      dob: {
        date: "1955-04-17T15:34:38.638Z",
        age: 69,
      },
      registered: {
        date: "2005-01-02T14:09:21.174Z",
        age: 20,
      },
      phone: "(699) 069 9352",
      cell: "(605) 965 5800",
      id: {
        name: "NSS",
        value: "77 25 82 2191 6",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/25.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/25.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
      },
      nat: "MX",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Luz",
        last: "Martin",
      },
      location: {
        street: {
          number: 4314,
          name: "Paseo de Extremadura",
        },
        city: "San Sebastián",
        state: "Cataluña",
        country: "Spain",
        postcode: 32141,
        coordinates: {
          latitude: "38.4713",
          longitude: "-94.6869",
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin",
        },
      },
      email: "luz.martin@example.com",
      login: {
        uuid: "db059526-29ca-4c4a-866a-5698cda004a3",
        username: "tinytiger109",
        password: "april1",
        salt: "ajqkI23W",
        md5: "c71eabbc49e84387385ec92d2cd6acf4",
        sha1: "9637e9460e31a49c88ecacd8b6a6f60521b67727",
        sha256:
          "2e86f94f2b78e523eb46aa5d89e0f33a0a70af089d5068c1c0b03e1749ab6b7f",
      },
      dob: {
        date: "1992-12-30T07:10:01.050Z",
        age: 32,
      },
      registered: {
        date: "2011-10-11T20:57:43.266Z",
        age: 13,
      },
      phone: "908-170-094",
      cell: "603-250-717",
      id: {
        name: "DNI",
        value: "78193442-J",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/41.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/41.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/41.jpg",
      },
      nat: "ES",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Ahmad",
        last: "Larssen",
      },
      location: {
        street: {
          number: 2525,
          name: "Sturlas vei",
        },
        city: "Lommedalen",
        state: "Finnmark - Finnmárku",
        country: "Norway",
        postcode: "5631",
        coordinates: {
          latitude: "12.2260",
          longitude: "-155.4697",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "ahmad.larssen@example.com",
      login: {
        uuid: "6cfc9b6f-5845-4b50-b058-bb419c6fa6d6",
        username: "whiteelephant309",
        password: "stacey",
        salt: "x0ool0ph",
        md5: "bae2537b05d6db9bdd35f5d55a6c9924",
        sha1: "b5e0adbe19758208cbba747ead053a5625a5478c",
        sha256:
          "170b6b1054ef10257fdb25a96a8aad385cc5720f5c2fdb46482ced740b108aa9",
      },
      dob: {
        date: "2000-05-27T08:31:20.096Z",
        age: 24,
      },
      registered: {
        date: "2017-08-07T00:23:32.075Z",
        age: 7,
      },
      phone: "61469451",
      cell: "47697368",
      id: {
        name: "FN",
        value: "27050091177",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/15.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/15.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
      },
      nat: "NO",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Veena",
        last: "Andrade",
      },
      location: {
        street: {
          number: 9996,
          name: "Mirza Ghalib St",
        },
        city: "Korba",
        state: "Jammu and Kashmir",
        country: "India",
        postcode: 43844,
        coordinates: {
          latitude: "-17.1153",
          longitude: "-153.3066",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "veena.andrade@example.com",
      login: {
        uuid: "1fca0488-1f4a-42f3-8d4d-420c9138f933",
        username: "brownbutterfly380",
        password: "rhino",
        salt: "Ehm3p49Z",
        md5: "bb8a5a9ef5f56d62925d3a5e1a5409e6",
        sha1: "21e0b578745db5d53790d95ff69d039177a0c859",
        sha256:
          "245d2d87ccd2fca62dbfceb6bedd15c9d61afe3a5a898f4f1b86eac61cdf6041",
      },
      dob: {
        date: "1962-12-25T01:20:14.315Z",
        age: 62,
      },
      registered: {
        date: "2022-02-26T01:13:10.755Z",
        age: 2,
      },
      phone: "9787849352",
      cell: "8776039004",
      id: {
        name: "UIDAI",
        value: "370279417957",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/64.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
      },
      nat: "IN",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Lewis",
        last: "Welch",
      },
      location: {
        street: {
          number: 4246,
          name: "Jones Road",
        },
        city: "Ardee",
        state: "Waterford",
        country: "Ireland",
        postcode: 42883,
        coordinates: {
          latitude: "-53.6670",
          longitude: "135.3197",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "lewis.welch@example.com",
      login: {
        uuid: "cc67fbdf-aee1-46dc-ab81-880ec9062440",
        username: "crazyleopard954",
        password: "maddog",
        salt: "ISefHL6m",
        md5: "7044779ec70f094a86f56704afd4a100",
        sha1: "d20c39ef5631da0ce709bd66f68ea19bfaf526b1",
        sha256:
          "27ff35becd0161d461c6572b170c8c1192768369dba311286b004b3a11d81019",
      },
      dob: {
        date: "1998-05-24T13:24:07.127Z",
        age: 26,
      },
      registered: {
        date: "2014-04-02T17:59:11.291Z",
        age: 10,
      },
      phone: "031-861-7661",
      cell: "081-498-7121",
      id: {
        name: "PPS",
        value: "7260880T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/41.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/41.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
      },
      nat: "IE",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Anton",
        last: "Nielsen",
      },
      location: {
        street: {
          number: 9244,
          name: "Skanderborgvej",
        },
        city: "Hurup Thy",
        state: "Nordjylland",
        country: "Denmark",
        postcode: 22492,
        coordinates: {
          latitude: "4.5044",
          longitude: "-66.0667",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "anton.nielsen@example.com",
      login: {
        uuid: "b8194dbd-678d-4883-8f6c-290ffccbf0cc",
        username: "orangefish653",
        password: "poker",
        salt: "qg28Entu",
        md5: "926f4696f4149a6b1404c08c68cc02a5",
        sha1: "98b85543846c49165374f0bd463b46f8c1a08c62",
        sha256:
          "d89755660ef5888faa9b2ad272c3e1136c913d9829244f4265bace064afa1a7b",
      },
      dob: {
        date: "1995-07-12T10:51:55.998Z",
        age: 29,
      },
      registered: {
        date: "2011-09-12T01:30:15.182Z",
        age: 13,
      },
      phone: "38386275",
      cell: "81048654",
      id: {
        name: "CPR",
        value: "120795-5843",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/12.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
      },
      nat: "DK",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Krishna",
        last: "Namnaik",
      },
      location: {
        street: {
          number: 3706,
          name: "Bannerghatta Rd",
        },
        city: "Jaipur",
        state: "Odisha",
        country: "India",
        postcode: 51760,
        coordinates: {
          latitude: "-28.6739",
          longitude: "-142.6267",
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo",
        },
      },
      email: "krishna.namnaik@example.com",
      login: {
        uuid: "b1e29331-5432-450f-a8a9-7d20a77ae10a",
        username: "purpleleopard975",
        password: "pharmacy",
        salt: "K0qoLDy6",
        md5: "388c8b236b530773f6840ea786db22da",
        sha1: "626bcedfd12f2da2e1f92916fe539258468264f1",
        sha256:
          "811f55c7c115702af1c672348c187d5a4fcd47b80c4ffff32936b02db24e62c7",
      },
      dob: {
        date: "1965-04-10T01:17:08.000Z",
        age: 59,
      },
      registered: {
        date: "2011-01-29T22:01:52.258Z",
        age: 13,
      },
      phone: "7068634877",
      cell: "7045583578",
      id: {
        name: "UIDAI",
        value: "733835141463",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/39.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/39.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/39.jpg",
      },
      nat: "IN",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "ستایش",
        last: "صدر",
      },
      location: {
        street: {
          number: 2438,
          name: "دکتر لواسانی",
        },
        city: "شهریار",
        state: "سمنان",
        country: "Iran",
        postcode: 98912,
        coordinates: {
          latitude: "-0.7100",
          longitude: "165.8026",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "stysh.sdr@example.com",
      login: {
        uuid: "4c3f9ff6-7914-4ffb-95ca-b0a9407bc45f",
        username: "tinybear342",
        password: "marco",
        salt: "bHOgy8RI",
        md5: "ca9498c02bcb3933dc1de201060a2b88",
        sha1: "e685e101450621f7a148457b088bbe125d083f8a",
        sha256:
          "b8e0982e3d20549cfcb8133b19d3cd1e4e315320d28cfdf2aab236ac3699ebea",
      },
      dob: {
        date: "1984-08-17T14:43:28.607Z",
        age: 40,
      },
      registered: {
        date: "2012-08-11T02:33:59.554Z",
        age: 12,
      },
      phone: "063-38851384",
      cell: "0969-609-4126",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/68.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/68.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/68.jpg",
      },
      nat: "IR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Antoine",
        last: "Gauthier",
      },
      location: {
        street: {
          number: 5290,
          name: "Rue du 8 Mai 1945",
        },
        city: "Saint-Pierre",
        state: "Paris",
        country: "France",
        postcode: 23038,
        coordinates: {
          latitude: "-56.2500",
          longitude: "-130.2477",
        },
        timezone: {
          offset: "+5:45",
          description: "Kathmandu",
        },
      },
      email: "antoine.gauthier@example.com",
      login: {
        uuid: "4ff09ef5-8308-4f98-8e00-cc38d441e2a4",
        username: "organickoala323",
        password: "live",
        salt: "g4mtLRHk",
        md5: "621cd3f27c2d999dc5c617dc688f7f4a",
        sha1: "59fb9f40ffdb346e598a96f6f70c5ebfc7242b74",
        sha256:
          "ea4376fe3a388adbd5736428b6e5b4954d78ae24bde1a8d8b80399326ee2ceb5",
      },
      dob: {
        date: "1972-06-05T01:45:13.272Z",
        age: 52,
      },
      registered: {
        date: "2004-11-03T16:43:43.296Z",
        age: 20,
      },
      phone: "02-75-44-26-77",
      cell: "06-64-34-40-66",
      id: {
        name: "INSEE",
        value: "1720551556293 74",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/62.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/62.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Misty",
        last: "Barnett",
      },
      location: {
        street: {
          number: 1942,
          name: "Fairview St",
        },
        city: "Queanbeyan",
        state: "New South Wales",
        country: "Australia",
        postcode: 475,
        coordinates: {
          latitude: "26.2690",
          longitude: "27.7999",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "misty.barnett@example.com",
      login: {
        uuid: "8de6eb63-0242-48de-81ee-0d761d2b01f7",
        username: "brownwolf599",
        password: "alabama",
        salt: "M1zN6Ars",
        md5: "67a70cf9d2af1fd37700768b856f0746",
        sha1: "2039f5c3c1774e7c6d098a8353b3f96ceba94dff",
        sha256:
          "35e39737d953c7c11ccdf8b5d3a69cf7f204c3f8df23538a003ccd2dadec4fd2",
      },
      dob: {
        date: "1983-02-05T06:42:38.336Z",
        age: 41,
      },
      registered: {
        date: "2003-04-18T14:57:48.499Z",
        age: 21,
      },
      phone: "03-6638-7487",
      cell: "0491-515-370",
      id: {
        name: "TFN",
        value: "672498382",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/74.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg",
      },
      nat: "AU",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Peetu",
        last: "Koskinen",
      },
      location: {
        street: {
          number: 7305,
          name: "Myllypuronkatu",
        },
        city: "Säkylä",
        state: "Pirkanmaa",
        country: "Finland",
        postcode: 89626,
        coordinates: {
          latitude: "-85.7559",
          longitude: "-54.5188",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "peetu.koskinen@example.com",
      login: {
        uuid: "481b1bbd-2f57-4645-b507-b4d7406f332f",
        username: "redmeercat381",
        password: "clyde",
        salt: "vyHbxbaa",
        md5: "b718d2e2a46afd4bc9ab1738e629ec51",
        sha1: "14f0cfbbc102855875ce1381d5c840609245d98f",
        sha256:
          "cc072398056374b51141677f30baeb8b044a627b2343b374959a2e835c940749",
      },
      dob: {
        date: "1982-07-15T03:58:27.106Z",
        age: 42,
      },
      registered: {
        date: "2020-07-27T00:37:00.475Z",
        age: 4,
      },
      phone: "09-529-549",
      cell: "044-675-12-19",
      id: {
        name: "HETU",
        value: "NaNNA025undefined",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/45.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
      },
      nat: "FI",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Athena",
        last: "Paulsrud",
      },
      location: {
        street: {
          number: 5328,
          name: "Gjerdesmutten",
        },
        city: "Vågsvåg",
        state: "Sogn og Fjordane",
        country: "Norway",
        postcode: "3833",
        coordinates: {
          latitude: "-44.7717",
          longitude: "-135.2280",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "athena.paulsrud@example.com",
      login: {
        uuid: "df33fc28-16ae-4791-8caf-b69c298ef151",
        username: "smalllion692",
        password: "49ers",
        salt: "YJbOBQJK",
        md5: "94745222e98ac407330b19ecfd7cf735",
        sha1: "922e92bbf26719872050919d4c008663d19dfb1d",
        sha256:
          "33d9b7030d8846cff47989d5904c67f9e44a1e9e9e0e1b9e207eb8787f9a4c31",
      },
      dob: {
        date: "1987-03-24T05:22:23.304Z",
        age: 37,
      },
      registered: {
        date: "2008-03-08T05:59:16.659Z",
        age: 16,
      },
      phone: "75374299",
      cell: "99990899",
      id: {
        name: "FN",
        value: "24038748277",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/50.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/50.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/50.jpg",
      },
      nat: "NO",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Magnus",
        last: "Petersen",
      },
      location: {
        street: {
          number: 310,
          name: "Tøndervej",
        },
        city: "Sommersted",
        state: "Syddanmark",
        country: "Denmark",
        postcode: 81637,
        coordinates: {
          latitude: "89.9284",
          longitude: "18.0508",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      email: "magnus.petersen@example.com",
      login: {
        uuid: "866713e3-efdc-4314-9fae-bccc7f5846bc",
        username: "orangemeercat704",
        password: "pearl",
        salt: "dPVRLJta",
        md5: "8200b6604121e2fc24cf2d552b6155bd",
        sha1: "2e7a76b7956640a1901c78941505c0b5f8018a7a",
        sha256:
          "f4c8db2bca641206ccb1a7157cf115979510522f5372cb889b5d7a8f9e85de99",
      },
      dob: {
        date: "1949-08-11T11:10:23.502Z",
        age: 75,
      },
      registered: {
        date: "2013-02-08T07:35:02.489Z",
        age: 11,
      },
      phone: "75567334",
      cell: "46514860",
      id: {
        name: "CPR",
        value: "110849-1726",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/84.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
      },
      nat: "DK",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Kasper",
        last: "Habberstad",
      },
      location: {
        street: {
          number: 4440,
          name: "Røslyngveien",
        },
        city: "Storsteinnes",
        state: "Nord-Trøndelag",
        country: "Norway",
        postcode: "8805",
        coordinates: {
          latitude: "25.6840",
          longitude: "-147.5335",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "kasper.habberstad@example.com",
      login: {
        uuid: "5e1075c0-4bf7-41ce-8c86-af9650d58b11",
        username: "whitelion282",
        password: "terminat",
        salt: "9hkG0lMq",
        md5: "2ce2d711b2a347738ffa03eb08a055d2",
        sha1: "9315ee97c7095f4dbb9a94553d2884491feab08e",
        sha256:
          "b5348cfa57d0642459632662960510a04d907b9b6b025abb6796ecd4f5aad9eb",
      },
      dob: {
        date: "1998-09-30T01:50:07.300Z",
        age: 26,
      },
      registered: {
        date: "2015-03-17T14:32:24.949Z",
        age: 9,
      },
      phone: "38458728",
      cell: "92442956",
      id: {
        name: "FN",
        value: "30099814523",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/13.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
      },
      nat: "NO",
    },
  ];

  static getUsers(): IUser[] {
    return this.users;
  }
}
