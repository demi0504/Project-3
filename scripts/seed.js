let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/facility", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let facilitySeed = [
  {
    day: new Date().setDate(new Date()),
    profName: "Paw Patrol",
    address: "252 Bransford Avenue Nashville, TN 37204",
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
  }  


  {
    day: new Date().setDate(new Date()),
    profName: "South Paws",
    address: "1315 8th Avenue South",
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
