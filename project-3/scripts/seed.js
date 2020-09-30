let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/professional", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let professionalSeed = [
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
  }
  
];

db.Professional.deleteMany({})
  .then(() => db.Professional.collection.insertMany(professionalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
