let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/airbob", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let facilitySeed = [
  //Nashville
  {
    day: new Date().setDate(new Date()),
    profName: "Paw Patrol",
    address: "252 Bransford Avenue Nashville, TN 37204",
    city:"Nashville",
    state: "TN",
    zip: 37204,
    phone: "(555) 555-5550",
    hours: [
      {
        sunday: "7:00AM - 7:00PM",
        monday: "7:00AM - 7:00PM",
        tuesday: "7:00AM - 7:00PM",
        wednesday: "7:00AM - 7:00PM",
        thursday: "7:00AM - 7:00PM",
        friday: "7:00AM - 7:00PM",
        saturday: "7:00AM - 7:00PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 30
          }
        ],
        service2: [
          {
            name:"Day Care for additional Dog",
            price: 15
          }
        ],
        service3: [
          {
            name:"Day Care Package for 1 Dog for 5 days",
            price: 145
          }
        ],
        service4: [
          {
            name:"Day Care Package for 1 Dog for 10 days",
            price: 280
          }
        ],
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 50,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Boarding for 1 additional Dog for 1 night",
            price: 29,
            details: "Includes Day Care service1"
          }
        ],
        service3: [
          {
            name:"Boarding Package for 1 Dog for 5 nights",
            price: 235,
            details: "Includes Day Care service1"
          }
        ],
        service4: [
          {
            name:"Boarding Package for 1 Dog for 10 nights",
            price: 460,
            details: "Includes Day Care service1"
          }
        ],
      }
    ],

    groomingServices: [
      {
        service1: [
          {
            name:"Basic Bath Small Dog",
            price: 20,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service2: [
          {
            name:"Basic Bath Large Dog",
            price: 30,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service3: [
          {
            name:"Deluxe Bath Small Dog",
            price: 30,
            details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ],
        service4: [
          {
            name:"Deluxe Bath Large Dog",
            price: 40,
            additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ],
        service5: [
          {
            name:"De-Skunking Small Dog",
            price: 50,
            additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
          }
        ],
        service6: [
          {
            name:"De-Skunking Large Dog",
            price: 75,
            additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
          }
        ],
      }
    ],

    otherServices: [
      {
        service1: [
          {
            name:"Nail Trim",
            price: 8
          }
        ],
        service2: [
          {
            name:"Nail Dremel",
            price: 10
          }
        ],
        service3: [
          {
            name:"Teeth Brushing",
            price: 5
          }
        ],
        service4: [
          {
            name:"Brush Out",
            price: 10
          }
        ]
      }
    ]
  },


  {
    day: new Date().setDate(new Date()),
    profName: "Spot Sleeper",
    address: "919 Gallatin Pike S Madison, TN 37115",
    city:"Nashville",
    state: "TN",
    zip: 37115,
    phone: "(555) 555-5551",
    hours: [
      {
        sunday: "7:00AM - 7:00PM",
        monday: "7:00AM - 7:00PM",
        tuesday: "7:00AM - 7:00PM",
        wednesday: "7:00AM - 7:00PM",
        thursday: "7:00AM - 7:00PM",
        friday: "7:00AM - 7:00PM",
        saturday: "7:00AM - 7:00PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 25
          }
        ],
        service2: [
          {
            name:"Day Care for additional Dog",
            price: 14
          }
        ]
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 45,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Boarding for 1 additional Dog for 1 night",
            price: 27,
            details: "Includes Day Care service1"
          }
        ]
        
      }
    ],

    groomingServices: [
      {
        service1: [
          {
            name:"Basic Bath Small Dog",
            price: 18,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service2: [
          {
            name:"Basic Bath Large Dog",
            price: 26,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service3: [
          {
            name:"Deluxe Bath Small Dog",
            price: 28,
            details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ],
        service4: [
          {
            name:"Deluxe Bath Large Dog",
            price: 36,
            additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ],
        service5: [
          {
            name:"De-Skunking Small Dog",
            price: 45,
            additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
          }
        ],
        service6: [
          {
            name:"De-Skunking Large Dog",
            price: 68,
            additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
          }
        ],
      }
    ],

    otherServices: [
      {
        service1: [
          {
            name:"Nail Trim",
            price: 7
          }
        ],
        service2: [
          {
            name:"Nail Dremel",
            price: 9
          }
        ],
        service3: [
          {
            name:"Teeth Brushing",
            price: 4
          }
        ],
        service4: [
          {
            name:"Brush Out",
            price: 9
          }
        ]
      }
    ]
  },



  {
    day: new Date().setDate(new Date()),
    profName: "Where's Fido?",
    address: "2318 12th Avenue S Nashville, TN 37204",
    city:"Nashville",
    state: "TN",
    zip: 37204,
    phone: "(555) 555-5552",
    hours: [
      {
        sunday: "Closed for Day Care",
        monday: "7:00AM - 7:00PM",
        tuesday: "7:00AM - 7:00PM",
        wednesday: "7:00AM - 7:00PM",
        thursday: "7:00AM - 7:00PM",
        friday: "7:00AM - 7:00PM",
        saturday: "7:00AM - 7:00PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 30
          }
        ],
        service2: [
          {
            name:"Day Care for additional Dog",
            price: 15
          }
        ],
        service3: [
          {
            name:"Day Care Package for 1 Dog for 5 days",
            price: 145
          }
        ],
        service4: [
          {
            name:"Day Care Package for 1 Dog for 10 days",
            price: 280
          }
        ],
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 50,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Boarding for 1 additional Dog for 1 night",
            price: 29,
            details: "Includes Day Care service1"
          }
        ],
        service3: [
          {
            name:"Boarding Package for 1 Dog for 5 nights",
            price: 235,
            details: "Includes Day Care service1"
          }
        ],
        service4: [
          {
            name:"Boarding Package for 1 Dog for 10 nights",
            price: 460,
            details: "Includes Day Care service1"
          }
        ],
      }
    ],

    groomingServices: [
      {
        service1: [
          {
            name:"Not Available"
          }
        ]
      }
    ],

    otherServices: [
      {
        service1: [
          {
            name:"Not Available"
          }
        ]
      }
    ]
  },



  {
    day: new Date().setDate(new Date()),
    profName: "Prissy Pooch",
    address: "4121 Hillsboro Pike Nashville, TN 37215",
    city:"Nashville",
    state: "TN",
    zip: 37215,
    phone: "(555) 555-5553",
    hours: [
      {
        sunday: "7:00AM - 9:00PM",
        monday: "7:00AM - 9:00PM",
        tuesday: "7:00AM - 9:00PM",
        wednesday: "7:00AM - 9:00PM",
        thursday: "7:00AM - 9:00PM",
        friday: "7:00AM - 9:00PM",
        saturday: "7:00AM - 9:00PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 35
          }
        ],
        service2: [
          {
            name:"Day Care for additional Dog",
            price: 20
          }
        ],
        service3: [
          {
            name:"Day Care Package for 1 Dog for 5 days",
            price: 171
          }
        ],
        service4: [
          {
            name:"Day Care Package for 1 Dog for 10 days",
            price: 330
          }
        ],
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 55,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Boarding for 1 additional Dog for 1 night",
            price: 34,
            details: "Includes Day Care service1"
          }
        ],
        service3: [
          {
            name:"Boarding Package for 1 Dog for 5 nights",
            price: 260,
            details: "Includes Day Care service1"
          }
        ],
        service4: [
          {
            name:"Boarding Package for 1 Dog for 10 nights",
            price: 510,
            details: "Includes Day Care service1"
          }
        ],
      }
    ],

    groomingServices: [
      {
        service1: [
          {
            name:"Basic Bath Small Dog",
            price: 25,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service2: [
          {
            name:"Basic Bath Large Dog",
            price: 35,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service3: [
          {
            name:"Deluxe Bath Small Dog",
            price: 35,
            details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ],
        service4: [
          {
            name:"Deluxe Bath Large Dog",
            price: 45,
            additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ],
        service5: [
          {
            name:"De-Skunking Small Dog",
            price: 55,
            additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
          }
        ],
        service6: [
          {
            name:"De-Skunking Large Dog",
            price: 80,
            additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
          }
        ],
      }
    ],

    otherServices: [
      {
        service1: [
          {
            name:"Nail Trim",
            price: 9
          }
        ],
        service2: [
          {
            name:"Nail Dremel",
            price: 11
          }
        ],
        service3: [
          {
            name:"Teeth Brushing",
            price: 6
          }
        ],
        service4: [
          {
            name:"Brush Out",
            price: 11
          }
        ]
      }
    ]
  },


  {
    day: new Date().setDate(new Date()),
    profName: "Nashville Tail Blazers",
    address: "2407 DICKERSON PIKE NASHVILLE, TN, 37207",
    city:"Nashville",
    state: "TN",
    zip: 37207,
    phone: "(615) 679-8444",
    hours: [
      {
        sunday: "Closed",
        monday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
        tuesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
        wednesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
        thursday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
        friday: "7:00AM  -11:00AM & 3:00PM- 7:00PM",
        saturday: "Closed"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "https://images.squarespace-cdn.com/content/v1/55a67ddee4b01c59f718c263/1497406601289-MG1IH06QSLI3F2AXY06U/ke17ZwdGBToddI8pDm48kFrZRTj5l-SW-HVUJqp-iAIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqx1BSMNwp01HtMMtAdBPcBnAT6J-RuieqY2hcmMRRm0UFgQBlOJTT-yqvYihsyF6/image-asset.jpeg?format=1500w",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 35
          }
        ],
        service2: [
          {
            name:"Day Care for additional Dog",
            price: 20
          }
        ],
        service3: [
          {
            name:"Day Care Package for 1 Dog for 10 days",
            price: 320
          }
        ],
        service4: [
          {
            name:"1/2 Day(up to 5 hrs) Day Care for 1 Dog",
            price: 25
          }
        ],
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 50,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Boarding for 1 additional Dog for 1 night",
            price: 29,
            details: "Includes Day Care service1"
          }
        ],
        service3: [
          {
            name:"Boarding Package for 1 Dog for 5 nights",
            price: 235,
            details: "Includes Day Care service1"
          }
        ],
        service4: [
          {
            name:"Boarding Package for 1 Dog for 10 nights",
            price: 460,
            details: "Includes Day Care service1"
          }
        ],
      }
    ],

    walkingServices: [
      {
        service1: [
          {
            name:"Single walk",
            price: 21
          }
        ],
        service2: [
          {
            name:"15 walk package",
            price: 285
          }
        ],
        service3: [
          {
            name:"30 walk package",
            price: 510
          }
        ]
      }
    ],
  },


  {
    day: new Date().setDate(new Date()),
    profName: "South Paws",
    address: "1315 8th Avenue South 37203",
    city:"Nashville",
    state: "TN",
    zip: 37203,
    phone: "(615) 736-5700",
    hours: [
      {
        sunday: "11:00AM - 2:00PM",
        monday: "6:30AM - 7:00PM",
        tuesday: "6:30AM - 7:00PM",
        wednesday: "6:30AM - 7:00PM",
        thursday: "6:30AM - 7:00PM",
        friday: "6:30AM - 7:00PM",
        saturday: "10:00AM - 5:00PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "https://static.wixstatic.com/media/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.png/v1/fill/w_91,h_84,al_c,q_85,usm_0.66_1.00_0.01/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.webp",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 32
          }
        ],
        service2: [
          {
            name:"1/2 Day Care",
            price: 16
          }
        ],
        service3: [
          {
            name:"Day Care Package for 1 Dog for 5 days",
            price: 150
          }
        ],
        service4: [
          {
            name:"Day Care Package for 1 Dog for 10 days",
            price: 290
          }
        ],
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 45,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Boarding Package for 1 Dog for 10 nights",
            price: 410,
            details: "Includes Day Care service1"
          }
        ],
      }
    ],
  },


  {
    day: new Date().setDate(new Date()),
    profName: "Pampered Pets",
    address: "149 Barker Road Nashville, TN 37214",
    city:"Nashville",
    state: "TN",
    zip: 37214,
    phone: "(615) 889-1500",
    hours: [
      {
        sunday: "7:30AM - 5:30PM",
        monday: "7:30AM - 5:30PM",
        tuesday: "7:30AM - 5:30PM",
        wednesday: "7:30AM - 5:30PM",
        thursday: "7:30AM - 5:30PM",
        friday: "7:30AM - 5:30PM",
        saturday: "7:30AM - 5:30PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "http://pamperedpetsnashville.com/wp-content/uploads/2012/07/Front-resized.jpg",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 15
          }
        ]
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 34,
            details: "Includes Day Care service1"
          }
        ]
      }
    ],

    groomingServices: [
      {
        service1: [
          {
            name:"Full Groom",
            price: 55
          }
        ],
        service2: [
          {
            name:"Mini Groom",
            price: 40
          }
        ]
      }
    ],

    otherServices: [
      {
        service1: [
          {
            name:"Nail Trim",
            price: 10
          }
        ],
        service2: [
          {
            name:"Nail Dremel",
            price: 5
          }
        ],
        service3: [
          {
            name:"Teeth Brushing",
            price: 10
          }
        ],
        service4: [
          {
            name:"De-Shed",
            price: 20
          }
        ]
      }
    ]
  },
  

  {
    day: new Date().setDate(new Date()),
    profName: "Camp Bow Wow",
    address: "470 Craighead Street Avenue Nashville, TN 37204",
    city:"Nashville",
    state: "TN",
    zip: 37204,
    phone: "(615) 385-2275",
    hours: [
      {
        sunday: "8:00AM - 7:00PM",
        monday: "8:00AM - 7:00PM",
        tuesday: "8:00AM - 7:00PM",
        wednesday: "8:00AM - 7:00PM",
        thursday: "8:00AM - 7:00PM",
        friday: "8:00AM - 7:00PM",
        saturday: "8:00AM - 7:00PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "https://d4ougc3s3r7jj.cloudfront.net/Shared/images/spacer.gif",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 30
          }
        ],
        service2: [
          {
            name:"Day Care for additional Dog",
            price: 15
          }
        ],
        service3: [
          {
            name:"Day Care Package for 1 Dog for 5 days",
            price: 145
          }
        ],
        service4: [
          {
            name:"Day Care Package for 1 Dog for 10 days",
            price: 280
          }
        ],
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 50,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Boarding for 1 additional Dog for 1 night",
            price: 29,
            details: "Includes Day Care service1"
          }
        ],
        service3: [
          {
            name:"Boarding Package for 1 Dog for 5 nights",
            price: 235,
            details: "Includes Day Care service1"
          }
        ],
        service4: [
          {
            name:"Boarding Package for 1 Dog for 10 nights",
            price: 460,
            details: "Includes Day Care service1"
          }
        ],
      }
    ],

    groomingServices: [
      {
        service1: [
          {
            name:"Basic Bath Small Dog",
            price: 20,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service2: [
          {
            name:"Basic Bath Large Dog",
            price: 30,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service3: [
          {
            name:"Deluxe Bath Small Dog",
            price: 30,
            details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ],
        service4: [
          {
            name:"Deluxe Bath Large Dog",
            price: 40,
            additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ],
        service5: [
          {
            name:"De-Skunking Small Dog",
            price: 50,
            additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
          }
        ],
        service6: [
          {
            name:"De-Skunking Large Dog",
            price: 75,
            additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
          }
        ],
      }
    ],

    otherServices: [
      {
        service1: [
          {
            name:"Nail Trim",
            price: 8
          }
        ],
        service2: [
          {
            name:"Nail Dremel",
            price: 10
          }
        ],
        service3: [
          {
            name:"Teeth Brushing",
            price: 5
          }
        ],
        service4: [
          {
            name:"Brush Out",
            price: 10
          }
        ]
      }
    ]
  },


  {
    day: new Date().setDate(new Date()),
    profName: "The Belmont Pet Resort",
    address: "3206 Belmont Boulevard Nashville, TN 37212",
    city:"Nashville",
    state: "TN",
    zip: 37212,
    phone: "(615) 292-7529",
    hours: [
      {
        sunday: "7:00AM - 4:00PM",
        monday: "7:00AM - 6:00PM",
        tuesday: "7:00AM - 6:00PM",
        wednesday: "7:00AM - 6:00PM",
        thursday: "7:00AM - 6:00PM",
        friday: "7:00AM - 6:00PM",
        saturday: "7:00AM - 4:00PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 26
          }
        ],
        service2: [
          {
            name:"1/2 Day Care",
            price: 26
          }
        ],
        service3: [
          {
            name:"Day Care Package for 1 Dog for 10 days",
            price: 378
          }
        ]
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 42,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Deluxe Boarding for 1 Dog for 1 night",
            price: 65,
            details: "Includes Day Care service1"
          }
        ]
      }
    ],

    groomingServices: [
      {
        service1: [
          {
            name:"Basic Bath Small Dog",
            price: 35,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service2: [
          {
            name:"Basic Bath Large Dog",
            price: 45,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service3: [
          {
            name:"Deluxe Bath Small Dog",
            price: 65,
            details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ],
        service4: [
          {
            name:"Deluxe Bath Large Dog",
            price: 80,
            additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
          }
        ]
      }
    ],

    otherServices: [
      {
        service1: [
          {
            name:"Nail Trim",
            price: 15
          }
        ],
        service2: [
          {
            name:"Nail Grinding",
            price: 20
          }
        ],
        service3: [
          {
            name:"Teeth Brushing",
            price: 10
          }
        ],
        service4: [
          {
            name:"Brush Out",
            price: 10
          }
        ]
      }
    ]
  },


  {
    day: new Date().setDate(new Date()),
    profName: "The Dog Spot",
    address: "5001 Alabama Ave. Nashville, TN 37209",
    city:"Nashville",
    state: "TN",
    zip: 37209,
    phone: "(615) 334-0000",
    hours: [
      {
        sunday: "10:00AM - 6:00PM",
        monday: "6:15AM - 8:00PM",
        tuesday: "6:15AM - 8:00PM",
        wednesday: "6:15AM - 8:00PM",
        thursday: "6:15AM - 8:00PM",
        friday: "6:15AM - 8:00PM",
        saturday: "10:00AM - 6:00PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 30
          }
        ],
        service2: [
          {
            name:"Day Care Package for 5 Days",
            price: 140
          }
        ],
        service3: [
          {
            name:"Day Care Package for 10 days",
            price: 270
          }
        ]
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 40,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Boarding for Additional Dog for 1 night",
            price: 32,
            details: "Includes Day Care service1"
          }
        ]
      }
    ],

    groomingServices: [
      {
        service1: [
          {
            name:"Basic Bath Small Dog",
            price: 30,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service2: [
          {
            name:"Basic Bath Large Dog",
            price: 40,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ]
      }
    ],

    otherServices: [
      {
        service1: [
          {
            name:"Nail Grinding",
            price: 16
          }
        ],
        service2: [
          {
            name:"Teeth Brushing",
            price: 10
          }
        ],
        service3: [
          {
            name:"Brush Out",
            price: 10
          }
        ]
      }
    ]
  },


  {
    day: new Date().setDate(new Date()),
    profName: "Peace Love and Paws",
    address: "1221 Brick Church Pike Nashville, Tennessee 37207",
    city:"Nashville",
    state: "TN",
    zip: 37207,
    phone: "(615) 933-7297",
    hours: [
      {
        sunday: "7:00AM - 7:00PM",
        monday: "7:00AM - 7:00PM",
        tuesday: "7:00AM - 7:00PM",
        wednesday: "7:00AM - 7:00PM",
        thursday: "7:00AM - 7:00PM",
        friday: "7:00AM - 7:00PM",
        saturday: "7:00AM - 7:00PM"
      }
    ],
    about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
    safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
    requirements: "All Dogs must have up to date vet records.",
    src: "https://imagery.zoogletools.com/u/315871/aeeb17ea27e31d5b780d05926d29927e52689e03/original/transparent-big.png",
    dayCareServices: [
      {
        service1: [
          {
            name:"Day Care for 1 Dog",
            price: 25
          }
        ],
        service2: [
          {
            name:"Day Care Package for 10 Days",
            price: 230
          }
        ],
        service3: [
          {
            name:"Day Care Package for 20 days",
            price: 420
          }
        ]
      }
    ],

    boardingServices: [
      {
        service1: [
          {
            name:"Boarding for 1 Dog for 1 night",
            price: 35,
            details: "Includes Day Care service1"
          }
        ],
        service2: [
          {
            name:"Deluxe Boarding for 1 Dog for 1 night",
            price: 45,
            details: "Includes Day Care service1"
          }
        ]
      }
    ],

    groomingServices: [
      {
        service1: [
          {
            name:"Basic Bath Small Dog",
            price: 20,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ],
        service2: [
          {
            name:"Basic Bath Large Dog",
            price: 25,
            details: "Includes Shampoo, Conditioner, Towel Dry"
          }
        ]
      }
    ]
  },


// LA
{
  day: new Date().setDate(new Date()),
  profName: "Paradise Ranch Pet Resort",
  address: "10268 La Tuna Canyon Rd, Los Angeles, CA 91352",
  city:"Los Angeles",
  state: "CA",
  zip: 91352,
  phone: "(818) 768-8708",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Oh Hello Dog: DTLA Dog Daycare & Boarding",
  address: "1228 E 8th St, Los Angeles, CA 90021",
  city:"Los Angeles",
  state: "CA",
  zip: 90021,
  phone: "(213) 265-7445",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 14
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 27,
          details: "Includes Day Care service1"
        }
      ]
      
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 18,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 26,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 28,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 36,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 68,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 7
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 9
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 4
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 9
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "The Pupper Club - Dog Daycare, Dog Grooming, Dog Boarding",
  address: "603 S Los Angeles St, Los Angeles, CA 90014",
  city:"Los Angeles",
  state: "CA",
  zip: 90014,
  phone: "(213) 310-8440",
  hours: [
    {
      sunday: "Closed for Day Care",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "D Pet Hotels",
  address: "1041 N Highland Ave, Los Angeles, CA 90038",
  city:"Los Angeles",
  state: "CA",
  zip: 90038,
  phone: "(323) 464-7387",
  hours: [
    {
      sunday: "7:00AM - 9:00PM",
      monday: "7:00AM - 9:00PM",
      tuesday: "7:00AM - 9:00PM",
      wednesday: "7:00AM - 9:00PM",
      thursday: "7:00AM - 9:00PM",
      friday: "7:00AM - 9:00PM",
      saturday: "7:00AM - 9:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 171
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 330
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 55,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 260,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 510,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 35,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 55,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 9
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 11
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 6
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 11
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "CAGE FREE DOG BOARDING",
  address: "8218 Sunset Blvd, Los Angeles, CA 90046",
  city:"Los Angeles",
  state: "CA",
  zip: 90046,
  phone: "(323) 529-3728",
  hours: [
    {
      sunday: "Closed",
      monday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      tuesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      wednesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      thursday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      friday: "7:00AM  -11:00AM & 3:00PM- 7:00PM",
      saturday: "Closed"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://images.squarespace-cdn.com/content/v1/55a67ddee4b01c59f718c263/1497406601289-MG1IH06QSLI3F2AXY06U/ke17ZwdGBToddI8pDm48kFrZRTj5l-SW-HVUJqp-iAIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqx1BSMNwp01HtMMtAdBPcBnAT6J-RuieqY2hcmMRRm0UFgQBlOJTT-yqvYihsyF6/image-asset.jpeg?format=1500w",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 320
        }
      ],
      service4: [
        {
          name:"1/2 Day(up to 5 hrs) Day Care for 1 Dog",
          price: 25
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  walkingServices: [
    {
      service1: [
        {
          name:"Single walk",
          price: 21
        }
      ],
      service2: [
        {
          name:"15 walk package",
          price: 285
        }
      ],
      service3: [
        {
          name:"30 walk package",
          price: 510
        }
      ]
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "South Park Doggie DTLA",
  address: "1320 S Grand Ave, Los Angeles, CA 90015",
  city:"Los Angeles",
  state: "CA",
  zip: 90015,
  phone: "(213) 747-3649",
  hours: [
    {
      sunday: "11:00AM - 2:00PM",
      monday: "6:30AM - 7:00PM",
      tuesday: "6:30AM - 7:00PM",
      wednesday: "6:30AM - 7:00PM",
      thursday: "6:30AM - 7:00PM",
      friday: "6:30AM - 7:00PM",
      saturday: "10:00AM - 5:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://static.wixstatic.com/media/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.png/v1/fill/w_91,h_84,al_c,q_85,usm_0.66_1.00_0.01/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.webp",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 32
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 16
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 150
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 290
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 410,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "Dog Resort",
  address: "5203 Hollywood Blvd, Los Angeles, CA 90027",
  city:"Los Angeles",
  state: "CA",
  zip: 90027,
  phone: "(323) 499-1414",
  hours: [
    {
      sunday: "7:30AM - 5:30PM",
      monday: "7:30AM - 5:30PM",
      tuesday: "7:30AM - 5:30PM",
      wednesday: "7:30AM - 5:30PM",
      thursday: "7:30AM - 5:30PM",
      friday: "7:30AM - 5:30PM",
      saturday: "7:30AM - 5:30PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "http://pamperedpetsnashville.com/wp-content/uploads/2012/07/Front-resized.jpg",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 15
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Full Groom",
          price: 55
        }
      ],
      service2: [
        {
          name:"Mini Groom",
          price: 40
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 10
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 5
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"De-Shed",
          price: 20
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Wag Hotels",
  address: "960 N Highland Ave, Los Angeles, CA 90038",
  city:"Los Angeles",
  state: "CA",
  zip: 90038,
  phone: "(888) 924-5463",
  hours: [
    {
      sunday: "8:00AM - 7:00PM",
      monday: "8:00AM - 7:00PM",
      tuesday: "8:00AM - 7:00PM",
      wednesday: "8:00AM - 7:00PM",
      thursday: "8:00AM - 7:00PM",
      friday: "8:00AM - 7:00PM",
      saturday: "8:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://d4ougc3s3r7jj.cloudfront.net/Shared/images/spacer.gif",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Puparazzi LA Dog Daycare And Boarding",
  address: "1933 Pontius Ave, Los Angeles, CA 90025",
  city:"Los Angeles",
  state: "CA",
  zip: 90025,
  phone: "(424) 325-3151",
  hours: [
    {
      sunday: "7:00AM - 4:00PM",
      monday: "7:00AM - 6:00PM",
      tuesday: "7:00AM - 6:00PM",
      wednesday: "7:00AM - 6:00PM",
      thursday: "7:00AM - 6:00PM",
      friday: "7:00AM - 6:00PM",
      saturday: "7:00AM - 4:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 26
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 26
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 378
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 42,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 65,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 45,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 65,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 15
        }
      ],
      service2: [
        {
          name:"Nail Grinding",
          price: 20
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Doggie Goddess Pet Services",
  address: "810 South La Brea Ave, Los Angeles, CA 90036",
  city:"Los Angeles",
  state: "CA",
  zip: 90036,
  phone: "(323) 919-4798",
  hours: [
    {
      sunday: "10:00AM - 6:00PM",
      monday: "6:15AM - 8:00PM",
      tuesday: "6:15AM - 8:00PM",
      wednesday: "6:15AM - 8:00PM",
      thursday: "6:15AM - 8:00PM",
      friday: "6:15AM - 8:00PM",
      saturday: "10:00AM - 6:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care Package for 5 Days",
          price: 140
        }
      ],
      service3: [
        {
          name:"Day Care Package for 10 days",
          price: 270
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 40,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for Additional Dog for 1 night",
          price: 32,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 40,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Grinding",
          price: 16
        }
      ],
      service2: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service3: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Bone Sweet Bone - Arts District",
  address: "435 Molino St, Los Angeles, CA 90013",
  city:"Los Angeles",
  state: "CA",
  zip: 90013,
  phone: "(213) 628-3982",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://imagery.zoogletools.com/u/315871/aeeb17ea27e31d5b780d05926d29927e52689e03/original/transparent-big.png",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care Package for 10 Days",
          price: 230
        }
      ],
      service3: [
        {
          name:"Day Care Package for 20 days",
          price: 420
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 35,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ]
},


// NYC
{
  day: new Date().setDate(new Date()),
  profName: "Paws In Chelsea",
  address: "145 W 24th St #1, New York, NY 10011",
  city:"New York",
  state: "NY",
  zip: 10011,
  phone: "(212) 645-7297",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "New York Dog Spa and Hotel",
  address: "32 W 25th St, New York, NY 10010",
  city:"New York",
  state: "NY",
  zip: 10010,
  phone: "(212) 243-1199",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 14
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 27,
          details: "Includes Day Care service1"
        }
      ]
      
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 18,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 26,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 28,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 36,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 68,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 7
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 9
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 4
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 9
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "NYC Pet Services",
  address: "31-21 31st St, Queens, NY 11106",
  city:"New York",
  state: "NY",
  zip: 11106,
  phone: "(718) 350-1635",
  hours: [
    {
      sunday: "Closed for Day Care",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "Camp Canine",
  address: "46 W 73rd St, New York, NY 10023",
  city:"New York",
  state: "NY",
  zip: 10023,
  phone: "(212) 787-3647",
  hours: [
    {
      sunday: "7:00AM - 9:00PM",
      monday: "7:00AM - 9:00PM",
      tuesday: "7:00AM - 9:00PM",
      wednesday: "7:00AM - 9:00PM",
      thursday: "7:00AM - 9:00PM",
      friday: "7:00AM - 9:00PM",
      saturday: "7:00AM - 9:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 171
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 330
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 55,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 260,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 510,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 35,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 55,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 9
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 11
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 6
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 11
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Dogs Delight",
  address: "75 Wall St #75, New York, NY 10005",
  city:"New York",
  state: "NY",
  zip: 10005,
  phone: "(646) 912-4133",
  hours: [
    {
      sunday: "Closed",
      monday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      tuesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      wednesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      thursday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      friday: "7:00AM  -11:00AM & 3:00PM- 7:00PM",
      saturday: "Closed"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://images.squarespace-cdn.com/content/v1/55a67ddee4b01c59f718c263/1497406601289-MG1IH06QSLI3F2AXY06U/ke17ZwdGBToddI8pDm48kFrZRTj5l-SW-HVUJqp-iAIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqx1BSMNwp01HtMMtAdBPcBnAT6J-RuieqY2hcmMRRm0UFgQBlOJTT-yqvYihsyF6/image-asset.jpeg?format=1500w",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 320
        }
      ],
      service4: [
        {
          name:"1/2 Day(up to 5 hrs) Day Care for 1 Dog",
          price: 25
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  walkingServices: [
    {
      service1: [
        {
          name:"Single walk",
          price: 21
        }
      ],
      service2: [
        {
          name:"15 walk package",
          price: 285
        }
      ],
      service3: [
        {
          name:"30 walk package",
          price: 510
        }
      ]
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "Happy Dogs",
  address: "403 1st Avenue, New York, NY 10010",
  city:"New York",
  state: "NY",
  zip: 10010,
  phone: "(212) 532-4220",
  hours: [
    {
      sunday: "11:00AM - 2:00PM",
      monday: "6:30AM - 7:00PM",
      tuesday: "6:30AM - 7:00PM",
      wednesday: "6:30AM - 7:00PM",
      thursday: "6:30AM - 7:00PM",
      friday: "6:30AM - 7:00PM",
      saturday: "10:00AM - 5:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://static.wixstatic.com/media/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.png/v1/fill/w_91,h_84,al_c,q_85,usm_0.66_1.00_0.01/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.webp",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 32
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 16
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 150
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 290
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 410,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "Dog Days of New York",
  address: "2581 Broadway, New York, NY 10025",
  city:"New York",
  state: "NY",
  zip: 10025,
  phone: "(212) 767-9022",
  hours: [
    {
      sunday: "7:30AM - 5:30PM",
      monday: "7:30AM - 5:30PM",
      tuesday: "7:30AM - 5:30PM",
      wednesday: "7:30AM - 5:30PM",
      thursday: "7:30AM - 5:30PM",
      friday: "7:30AM - 5:30PM",
      saturday: "7:30AM - 5:30PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "http://pamperedpetsnashville.com/wp-content/uploads/2012/07/Front-resized.jpg",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 15
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Full Groom",
          price: 55
        }
      ],
      service2: [
        {
          name:"Mini Groom",
          price: 40
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 10
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 5
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"De-Shed",
          price: 20
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Camp Ruff Ruff",
  address: "174 Sand Ln, Staten Island, NY 10305",
  city:"New York",
  state: "NY",
  zip: 10305,
  phone: "(347) 844-2652",
  hours: [
    {
      sunday: "8:00AM - 7:00PM",
      monday: "8:00AM - 7:00PM",
      tuesday: "8:00AM - 7:00PM",
      wednesday: "8:00AM - 7:00PM",
      thursday: "8:00AM - 7:00PM",
      friday: "8:00AM - 7:00PM",
      saturday: "8:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://d4ougc3s3r7jj.cloudfront.net/Shared/images/spacer.gif",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "NYC PETCARE",
  address: "415 W 24th St, New York, NY 10011",
  city:"New York",
  state: "NY",
  zip: 10011,
  phone: "(347) 248-0276",
  hours: [
    {
      sunday: "7:00AM - 4:00PM",
      monday: "7:00AM - 6:00PM",
      tuesday: "7:00AM - 6:00PM",
      wednesday: "7:00AM - 6:00PM",
      thursday: "7:00AM - 6:00PM",
      friday: "7:00AM - 6:00PM",
      saturday: "7:00AM - 4:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 26
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 26
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 378
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 42,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 65,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 45,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 65,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 15
        }
      ],
      service2: [
        {
          name:"Nail Grinding",
          price: 20
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Celebrity Pets Hotel",
  address: "1740 Broadway 15th floor, New York, NY 10019",
  city:"New York",
  state: "NY",
  zip: 10019,
  phone: "(646) 588-9817",
  hours: [
    {
      sunday: "10:00AM - 6:00PM",
      monday: "6:15AM - 8:00PM",
      tuesday: "6:15AM - 8:00PM",
      wednesday: "6:15AM - 8:00PM",
      thursday: "6:15AM - 8:00PM",
      friday: "6:15AM - 8:00PM",
      saturday: "10:00AM - 6:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care Package for 5 Days",
          price: 140
        }
      ],
      service3: [
        {
          name:"Day Care Package for 10 days",
          price: 270
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 40,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for Additional Dog for 1 night",
          price: 32,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 40,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Grinding",
          price: 16
        }
      ],
      service2: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service3: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "My Pets Wellness",
  address: "104 W 27th St, New York, NY 10001",
  city:"New York",
  state: "NY",
  zip: 10001,
  phone: "(646) 478-7877",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://imagery.zoogletools.com/u/315871/aeeb17ea27e31d5b780d05926d29927e52689e03/original/transparent-big.png",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care Package for 10 Days",
          price: 230
        }
      ],
      service3: [
        {
          name:"Day Care Package for 20 days",
          price: 420
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 35,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ]
},


// Chicago
{
  day: new Date().setDate(new Date()),
  profName: "VIP's Dog Hotel Day Care & Dog Boarding",
  address: "2926 W Lake St, Chicago, IL 60612",
  city:"Chicago",
  state: "IL",
  zip: 60612,
  phone: "(312) 983-0555",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Dog.",
  address: "1030 N Halsted St, Chicago, IL 60642",
  city:"Chicago",
  state: "IL",
  zip: 60642,
  phone: "(312) 895-3777",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 14
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 27,
          details: "Includes Day Care service1"
        }
      ]
      
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 18,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 26,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 28,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 36,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 68,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 7
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 9
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 4
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 9
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "Found Chicago",
  address: "4108 N Rockwell St, Chicago, IL 60618",
  city:"Chicago",
  state: "IL",
  zip: 60618,
  phone: "(773) 539-3880",
  hours: [
    {
      sunday: "Closed for Day Care",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "Stay. Modern Dog Hotel",
  address: "4130 N Rockwell St, Chicago, IL 60618",
  city:"Chicago",
  state: "IL",
  zip: 60618,
  phone: "(773) 509-0001",
  hours: [
    {
      sunday: "7:00AM - 9:00PM",
      monday: "7:00AM - 9:00PM",
      tuesday: "7:00AM - 9:00PM",
      wednesday: "7:00AM - 9:00PM",
      thursday: "7:00AM - 9:00PM",
      friday: "7:00AM - 9:00PM",
      saturday: "7:00AM - 9:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 171
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 330
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 55,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 260,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 510,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 35,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 55,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 9
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 11
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 6
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 11
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Rockstar Pets",
  address: "2924 N Western Ave, Chicago, IL 60618",
  city:"Chicago",
  state: "IL",
  zip: 60618,
  phone: "(773) 920-7625",
  hours: [
    {
      sunday: "Closed",
      monday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      tuesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      wednesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      thursday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      friday: "7:00AM  -11:00AM & 3:00PM- 7:00PM",
      saturday: "Closed"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://images.squarespace-cdn.com/content/v1/55a67ddee4b01c59f718c263/1497406601289-MG1IH06QSLI3F2AXY06U/ke17ZwdGBToddI8pDm48kFrZRTj5l-SW-HVUJqp-iAIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqx1BSMNwp01HtMMtAdBPcBnAT6J-RuieqY2hcmMRRm0UFgQBlOJTT-yqvYihsyF6/image-asset.jpeg?format=1500w",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 320
        }
      ],
      service4: [
        {
          name:"1/2 Day(up to 5 hrs) Day Care for 1 Dog",
          price: 25
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  walkingServices: [
    {
      service1: [
        {
          name:"Single walk",
          price: 21
        }
      ],
      service2: [
        {
          name:"15 walk package",
          price: 285
        }
      ],
      service3: [
        {
          name:"30 walk package",
          price: 510
        }
      ]
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "Tucker Pup's Pet Resort",
  address: "219 N Carpenter St, Chicago, IL 60607",
  city:"Chicago",
  state: "IL",
  zip: 60607,
  phone: "(312) 829-8787",
  hours: [
    {
      sunday: "11:00AM - 2:00PM",
      monday: "6:30AM - 7:00PM",
      tuesday: "6:30AM - 7:00PM",
      wednesday: "6:30AM - 7:00PM",
      thursday: "6:30AM - 7:00PM",
      friday: "6:30AM - 7:00PM",
      saturday: "10:00AM - 5:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://static.wixstatic.com/media/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.png/v1/fill/w_91,h_84,al_c,q_85,usm_0.66_1.00_0.01/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.webp",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 32
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 16
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 150
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 290
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 410,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "Active! Dog Daycare and Boarding",
  address: "2550 W Diversey Ave, Chicago, IL 60647",
  city:"Chicago",
  state: "IL",
  zip: 60647,
  phone: "(773) 278-7003",
  hours: [
    {
      sunday: "7:30AM - 5:30PM",
      monday: "7:30AM - 5:30PM",
      tuesday: "7:30AM - 5:30PM",
      wednesday: "7:30AM - 5:30PM",
      thursday: "7:30AM - 5:30PM",
      friday: "7:30AM - 5:30PM",
      saturday: "7:30AM - 5:30PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "http://pamperedpetsnashville.com/wp-content/uploads/2012/07/Front-resized.jpg",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 15
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Full Groom",
          price: 55
        }
      ],
      service2: [
        {
          name:"Mini Groom",
          price: 40
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 10
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 5
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"De-Shed",
          price: 20
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Pooch Hotel",
  address: "2228 N Clybourn Ave, Chicago, IL 60614",
  city:"Chicago",
  state: "IL",
  zip: 60614,
  phone: "(773) 348-2646",
  hours: [
    {
      sunday: "8:00AM - 7:00PM",
      monday: "8:00AM - 7:00PM",
      tuesday: "8:00AM - 7:00PM",
      wednesday: "8:00AM - 7:00PM",
      thursday: "8:00AM - 7:00PM",
      friday: "8:00AM - 7:00PM",
      saturday: "8:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://d4ougc3s3r7jj.cloudfront.net/Shared/images/spacer.gif",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "DoGone Fun!",
  address: "1717 S State St, Chicago, IL 60616",
  city:"Chicago",
  state: "IL",
  zip: 60616,
  phone: "(312) 765-9364",
  hours: [
    {
      sunday: "7:00AM - 4:00PM",
      monday: "7:00AM - 6:00PM",
      tuesday: "7:00AM - 6:00PM",
      wednesday: "7:00AM - 6:00PM",
      thursday: "7:00AM - 6:00PM",
      friday: "7:00AM - 6:00PM",
      saturday: "7:00AM - 4:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 26
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 26
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 378
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 42,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 65,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 45,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 65,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 15
        }
      ],
      service2: [
        {
          name:"Nail Grinding",
          price: 20
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Chi-Town Dog House",
  address: "2231 W Belmont Ave, Chicago, IL 60618",
  city:"Chicago",
  state: "IL",
  zip: 60618,
  phone: "(773) 348-9663",
  hours: [
    {
      sunday: "10:00AM - 6:00PM",
      monday: "6:15AM - 8:00PM",
      tuesday: "6:15AM - 8:00PM",
      wednesday: "6:15AM - 8:00PM",
      thursday: "6:15AM - 8:00PM",
      friday: "6:15AM - 8:00PM",
      saturday: "10:00AM - 6:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care Package for 5 Days",
          price: 140
        }
      ],
      service3: [
        {
          name:"Day Care Package for 10 days",
          price: 270
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 40,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for Additional Dog for 1 night",
          price: 32,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 40,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Grinding",
          price: 16
        }
      ],
      service2: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service3: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Canine Social Club",
  address: "5508 N Western Ave, Chicago, IL 60625",
  city:"Chicago",
  state: "IL",
  zip: 60625,
  phone: "(773) 506-6200",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://imagery.zoogletools.com/u/315871/aeeb17ea27e31d5b780d05926d29927e52689e03/original/transparent-big.png",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care Package for 10 Days",
          price: 230
        }
      ],
      service3: [
        {
          name:"Day Care Package for 20 days",
          price: 420
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 35,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ]
},


// Austin
{
  day: new Date().setDate(new Date()),
  profName: "Austin Dogtown Boarding & Daycare",
  address: "537 Woodward St, Austin, TX 78704",
  city:"Austin",
  state: "TX",
  zip: 78704,
  phone: "(512) 535-4244",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Austin Pup Culture",
  address: "606 Kenniston Dr, Austin, TX 78752",
  city:"Austin",
  state: "TX",
  zip: 78752,
  phone: "(512) 524-0057",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 14
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 27,
          details: "Includes Day Care service1"
        }
      ]
      
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 18,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 26,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 28,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 36,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 68,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 7
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 9
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 4
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 9
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "Chinatics",
  address: "4 Kern Ramble St, Austin, TX 78722",
  city:"Austin",
  state: "TX",
  zip: 78722,
  phone: "(773) 539-3880",
  hours: [
    {
      sunday: "Closed for Day Care",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "Bed and Biscuit",
  address: "6004 City Park Rd, Austin, TX 78730",
  city:"Austin",
  state: "TX",
  zip: 78730,
  phone: "(512) 343-0723",
  hours: [
    {
      sunday: "7:00AM - 9:00PM",
      monday: "7:00AM - 9:00PM",
      tuesday: "7:00AM - 9:00PM",
      wednesday: "7:00AM - 9:00PM",
      thursday: "7:00AM - 9:00PM",
      friday: "7:00AM - 9:00PM",
      saturday: "7:00AM - 9:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 171
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 330
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 55,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 260,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 510,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 35,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 55,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 9
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 11
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 6
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 11
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Dogtopia",
  address: "13945 US-183 C-4, Austin, TX 78717",
  city:"Austin",
  state: "TX",
  zip: 78717,
  phone: "(512) 333-1111",
  hours: [
    {
      sunday: "Closed",
      monday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      tuesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      wednesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      thursday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      friday: "7:00AM  -11:00AM & 3:00PM- 7:00PM",
      saturday: "Closed"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://images.squarespace-cdn.com/content/v1/55a67ddee4b01c59f718c263/1497406601289-MG1IH06QSLI3F2AXY06U/ke17ZwdGBToddI8pDm48kFrZRTj5l-SW-HVUJqp-iAIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqx1BSMNwp01HtMMtAdBPcBnAT6J-RuieqY2hcmMRRm0UFgQBlOJTT-yqvYihsyF6/image-asset.jpeg?format=1500w",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 320
        }
      ],
      service4: [
        {
          name:"1/2 Day(up to 5 hrs) Day Care for 1 Dog",
          price: 25
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  walkingServices: [
    {
      service1: [
        {
          name:"Single walk",
          price: 21
        }
      ],
      service2: [
        {
          name:"15 walk package",
          price: 285
        }
      ],
      service3: [
        {
          name:"30 walk package",
          price: 510
        }
      ]
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "Austin Pet Ranch",
  address: "14425 Farm to Market Rd 1826, Austin, TX 78737",
  city:"Austin",
  state: "TX",
  zip: 78737,
  phone: "(512) 301-2279",
  hours: [
    {
      sunday: "11:00AM - 2:00PM",
      monday: "6:30AM - 7:00PM",
      tuesday: "6:30AM - 7:00PM",
      wednesday: "6:30AM - 7:00PM",
      thursday: "6:30AM - 7:00PM",
      friday: "6:30AM - 7:00PM",
      saturday: "10:00AM - 5:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://static.wixstatic.com/media/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.png/v1/fill/w_91,h_84,al_c,q_85,usm_0.66_1.00_0.01/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.webp",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 32
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 16
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 150
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 290
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 410,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "Barking Hound",
  address: "412 Josephine St, Austin, TX 78704",
  city:"Austin",
  state: "TX",
  zip: 78704,
  phone: "(512) 477-3647",
  hours: [
    {
      sunday: "7:30AM - 5:30PM",
      monday: "7:30AM - 5:30PM",
      tuesday: "7:30AM - 5:30PM",
      wednesday: "7:30AM - 5:30PM",
      thursday: "7:30AM - 5:30PM",
      friday: "7:30AM - 5:30PM",
      saturday: "7:30AM - 5:30PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "http://pamperedpetsnashville.com/wp-content/uploads/2012/07/Front-resized.jpg",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 15
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Full Groom",
          price: 55
        }
      ],
      service2: [
        {
          name:"Mini Groom",
          price: 40
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 10
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 5
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"De-Shed",
          price: 20
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Taurus Academy",
  address: "6506 Burnet Rd, Austin, TX 78757",
  city:"Austin",
  state: "TX",
  zip: 78757,
  phone: "(512) 961-6935",
  hours: [
    {
      sunday: "8:00AM - 7:00PM",
      monday: "8:00AM - 7:00PM",
      tuesday: "8:00AM - 7:00PM",
      wednesday: "8:00AM - 7:00PM",
      thursday: "8:00AM - 7:00PM",
      friday: "8:00AM - 7:00PM",
      saturday: "8:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://d4ougc3s3r7jj.cloudfront.net/Shared/images/spacer.gif",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "SOCO Pet Lounge",
  address: "4917 S Congress Ave, Austin, TX 78745",
  city:"Austin",
  state: "TX",
  zip: 78745,
  phone: "(512) 416-7387",
  hours: [
    {
      sunday: "7:00AM - 4:00PM",
      monday: "7:00AM - 6:00PM",
      tuesday: "7:00AM - 6:00PM",
      wednesday: "7:00AM - 6:00PM",
      thursday: "7:00AM - 6:00PM",
      friday: "7:00AM - 6:00PM",
      saturday: "7:00AM - 4:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 26
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 26
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 378
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 42,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 65,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 45,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 65,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 15
        }
      ],
      service2: [
        {
          name:"Nail Grinding",
          price: 20
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Midtown Groom & Board",
  address: "1207 Baylor St, Austin, TX 78703",
  city:"Austin",
  state: "TX",
  zip: 78703,
  phone: "(512) 477-8079",
  hours: [
    {
      sunday: "10:00AM - 6:00PM",
      monday: "6:15AM - 8:00PM",
      tuesday: "6:15AM - 8:00PM",
      wednesday: "6:15AM - 8:00PM",
      thursday: "6:15AM - 8:00PM",
      friday: "6:15AM - 8:00PM",
      saturday: "10:00AM - 6:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care Package for 5 Days",
          price: 140
        }
      ],
      service3: [
        {
          name:"Day Care Package for 10 days",
          price: 270
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 40,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for Additional Dog for 1 night",
          price: 32,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 40,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Grinding",
          price: 16
        }
      ],
      service2: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service3: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Jackie's Play & Stay",
  address: "3822 Airport Blvd, Austin, TX 78722",
  city:"Austin",
  state: "TX",
  zip: 78722,
  phone: "(512) 524-2525",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://imagery.zoogletools.com/u/315871/aeeb17ea27e31d5b780d05926d29927e52689e03/original/transparent-big.png",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care Package for 10 Days",
          price: 230
        }
      ],
      service3: [
        {
          name:"Day Care Package for 20 days",
          price: 420
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 35,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ]
},


// Seattle
{
  day: new Date().setDate(new Date()),
  profName: "Seattle Dog Boarding",
  address: "11715 Roosevelt Way NE, Seattle, WA 98125",
  city:"Seattle",
  state: "WA",
  zip: 98125,
  phone: "(206) 551-0438",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Good Dog Daycare & Boarding",
  address: "9064 Delridge Way SW, Seattle, WA 98106",
  city:"Seattle",
  state: "WA",
  zip: 98106,
  phone: "(206) 932-7833",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 14
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 27,
          details: "Includes Day Care service1"
        }
      ]
      
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 18,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 26,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 28,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 36,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 68,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 7
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 9
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 4
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 9
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "Seattle Canine Club",
  address: "2751 4th Ave S, Seattle, WA 98134",
  city:"Seattle",
  state: "WA",
  zip: 98134,
  phone: "(206) 957-9097",
  hours: [
    {
      sunday: "Closed for Day Care",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Not Available"
        }
      ]
    }
  ]
},



{
  day: new Date().setDate(new Date()),
  profName: "Metro Dog",
  address: "3412 16th Ave W, Seattle, WA 98119",
  city:"Seattle",
  state: "WA",
  zip: 98119,
  phone: "(206) 284-3647",
  hours: [
    {
      sunday: "7:00AM - 9:00PM",
      monday: "7:00AM - 9:00PM",
      tuesday: "7:00AM - 9:00PM",
      wednesday: "7:00AM - 9:00PM",
      thursday: "7:00AM - 9:00PM",
      friday: "7:00AM - 9:00PM",
      saturday: "7:00AM - 9:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 171
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 330
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 55,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 260,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 510,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 35,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 45,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 55,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 9
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 11
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 6
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 11
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "DogCity",
  address: "4457 36th Ave SW, Seattle, WA 98126",
  city:"Seattle",
  state: "WA",
  zip: 98126,
  phone: "(206) 420-1659",
  hours: [
    {
      sunday: "Closed",
      monday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      tuesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      wednesday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      thursday: "7:00AM -11:00AM & 3:00PM - 7:00PM",
      friday: "7:00AM  -11:00AM & 3:00PM- 7:00PM",
      saturday: "Closed"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://images.squarespace-cdn.com/content/v1/55a67ddee4b01c59f718c263/1497406601289-MG1IH06QSLI3F2AXY06U/ke17ZwdGBToddI8pDm48kFrZRTj5l-SW-HVUJqp-iAIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcqx1BSMNwp01HtMMtAdBPcBnAT6J-RuieqY2hcmMRRm0UFgQBlOJTT-yqvYihsyF6/image-asset.jpeg?format=1500w",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 35
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 20
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 320
        }
      ],
      service4: [
        {
          name:"1/2 Day(up to 5 hrs) Day Care for 1 Dog",
          price: 25
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  walkingServices: [
    {
      service1: [
        {
          name:"Single walk",
          price: 21
        }
      ],
      service2: [
        {
          name:"15 walk package",
          price: 285
        }
      ],
      service3: [
        {
          name:"30 walk package",
          price: 510
        }
      ]
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "Tails of the City",
  address: "1621 12th Ave, Seattle, WA 98122",
  city:"Seattle",
  state: "WA",
  zip: 98122,
  phone: "(206) 466-1052",
  hours: [
    {
      sunday: "11:00AM - 2:00PM",
      monday: "6:30AM - 7:00PM",
      tuesday: "6:30AM - 7:00PM",
      wednesday: "6:30AM - 7:00PM",
      thursday: "6:30AM - 7:00PM",
      friday: "6:30AM - 7:00PM",
      saturday: "10:00AM - 5:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://static.wixstatic.com/media/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.png/v1/fill/w_91,h_84,al_c,q_85,usm_0.66_1.00_0.01/528b6e_7fdf35a001cd44aea802bac1ab0568d0~mv2.webp",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 32
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 16
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 150
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 290
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 410,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],
},


{
  day: new Date().setDate(new Date()),
  profName: "Adorable Pet Lodge",
  address: "1043 S 140th St, Seattle, WA 98168",
  city:"Seattle",
  state: "WA",
  zip: 98168,
  phone: "(206) 242-7480",
  hours: [
    {
      sunday: "7:30AM - 5:30PM",
      monday: "7:30AM - 5:30PM",
      tuesday: "7:30AM - 5:30PM",
      wednesday: "7:30AM - 5:30PM",
      thursday: "7:30AM - 5:30PM",
      friday: "7:30AM - 5:30PM",
      saturday: "7:30AM - 5:30PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "http://pamperedpetsnashville.com/wp-content/uploads/2012/07/Front-resized.jpg",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 15
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 34,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Full Groom",
          price: 55
        }
      ],
      service2: [
        {
          name:"Mini Groom",
          price: 40
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 10
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 5
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"De-Shed",
          price: 20
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Citydog! Club",
  address: "809 Olive Way, Seattle, WA 98101",
  city:"Seattle",
  state: "WA",
  zip: 98101,
  phone: "(206) 623-5395",
  hours: [
    {
      sunday: "8:00AM - 7:00PM",
      monday: "8:00AM - 7:00PM",
      tuesday: "8:00AM - 7:00PM",
      wednesday: "8:00AM - 7:00PM",
      thursday: "8:00AM - 7:00PM",
      friday: "8:00AM - 7:00PM",
      saturday: "8:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://d4ougc3s3r7jj.cloudfront.net/Shared/images/spacer.gif",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care for additional Dog",
          price: 15
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 5 days",
          price: 145
        }
      ],
      service4: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 280
        }
      ],
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 50,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for 1 additional Dog for 1 night",
          price: 29,
          details: "Includes Day Care service1"
        }
      ],
      service3: [
        {
          name:"Boarding Package for 1 Dog for 5 nights",
          price: 235,
          details: "Includes Day Care service1"
        }
      ],
      service4: [
        {
          name:"Boarding Package for 1 Dog for 10 nights",
          price: 460,
          details: "Includes Day Care service1"
        }
      ],
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 30,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 40,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service5: [
        {
          name:"De-Skunking Small Dog",
          price: 50,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
      service6: [
        {
          name:"De-Skunking Large Dog",
          price: 75,
          additional: "Includes Basic Grooming service1 plus De-skunking and Blow Dry"
        }
      ],
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 8
        }
      ],
      service2: [
        {
          name:"Nail Dremel",
          price: 10
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 5
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Central Bark",
  address: "838 Poplar Pl S, Seattle, WA 98144",
  city:"Seattle",
  state: "WA",
  zip: 98144,
  phone: "(206) 325-3525",
  hours: [
    {
      sunday: "7:00AM - 4:00PM",
      monday: "7:00AM - 6:00PM",
      tuesday: "7:00AM - 6:00PM",
      wednesday: "7:00AM - 6:00PM",
      thursday: "7:00AM - 6:00PM",
      friday: "7:00AM - 6:00PM",
      saturday: "7:00AM - 4:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 26
        }
      ],
      service2: [
        {
          name:"1/2 Day Care",
          price: 26
        }
      ],
      service3: [
        {
          name:"Day Care Package for 1 Dog for 10 days",
          price: 378
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 42,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 65,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 35,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 45,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service3: [
        {
          name:"Deluxe Bath Small Dog",
          price: 65,
          details: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ],
      service4: [
        {
          name:"Deluxe Bath Large Dog",
          price: 80,
          additional: "Includes Basic Grooming service1 plus Blow Dry, Brush Out and Nail Trim"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Trim",
          price: 15
        }
      ],
      service2: [
        {
          name:"Nail Grinding",
          price: 20
        }
      ],
      service3: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service4: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "Camp Crockett Dog Day Camp",
  address: "5611 Delridge Way SW, Seattle, WA 98106",
  city:"Seattle",
  state: "WA",
  zip: 98106,
  phone: "(206) 327-9301",
  hours: [
    {
      sunday: "10:00AM - 6:00PM",
      monday: "6:15AM - 8:00PM",
      tuesday: "6:15AM - 8:00PM",
      wednesday: "6:15AM - 8:00PM",
      thursday: "6:15AM - 8:00PM",
      friday: "6:15AM - 8:00PM",
      saturday: "10:00AM - 6:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 30
        }
      ],
      service2: [
        {
          name:"Day Care Package for 5 Days",
          price: 140
        }
      ],
      service3: [
        {
          name:"Day Care Package for 10 days",
          price: 270
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 40,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Boarding for Additional Dog for 1 night",
          price: 32,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 30,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 40,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ],

  otherServices: [
    {
      service1: [
        {
          name:"Nail Grinding",
          price: 16
        }
      ],
      service2: [
        {
          name:"Teeth Brushing",
          price: 10
        }
      ],
      service3: [
        {
          name:"Brush Out",
          price: 10
        }
      ]
    }
  ]
},


{
  day: new Date().setDate(new Date()),
  profName: "House of Ruff",
  address: "2603 S Jackson St, Seattle, WA 98144",
  city:"Seattle",
  state: "WA",
  zip: 98144,
  phone: "(206) 325-3476",
  hours: [
    {
      sunday: "7:00AM - 7:00PM",
      monday: "7:00AM - 7:00PM",
      tuesday: "7:00AM - 7:00PM",
      wednesday: "7:00AM - 7:00PM",
      thursday: "7:00AM - 7:00PM",
      friday: "7:00AM - 7:00PM",
      saturday: "7:00AM - 7:00PM"
    }
  ],
  about: "It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With Camp Bow Wow®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.",
  safety: "Our staff is trained in dog behavior and certified in pet first aid and CPR. Our facilities are monitored 24/7. Our live webcams allow pet parents to check on their dogs from anywhere",
  requirements: "All Dogs must have up to date vet records.",
  src: "https://imagery.zoogletools.com/u/315871/aeeb17ea27e31d5b780d05926d29927e52689e03/original/transparent-big.png",
  dayCareServices: [
    {
      service1: [
        {
          name:"Day Care for 1 Dog",
          price: 25
        }
      ],
      service2: [
        {
          name:"Day Care Package for 10 Days",
          price: 230
        }
      ],
      service3: [
        {
          name:"Day Care Package for 20 days",
          price: 420
        }
      ]
    }
  ],

  boardingServices: [
    {
      service1: [
        {
          name:"Boarding for 1 Dog for 1 night",
          price: 35,
          details: "Includes Day Care service1"
        }
      ],
      service2: [
        {
          name:"Deluxe Boarding for 1 Dog for 1 night",
          price: 45,
          details: "Includes Day Care service1"
        }
      ]
    }
  ],

  groomingServices: [
    {
      service1: [
        {
          name:"Basic Bath Small Dog",
          price: 20,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ],
      service2: [
        {
          name:"Basic Bath Large Dog",
          price: 25,
          details: "Includes Shampoo, Conditioner, Towel Dry"
        }
      ]
    }
  ]
}
];

db.Facility.deleteMany({})
  .then(() => db.Facility.collection.insertMany(facilitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
