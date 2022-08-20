// For the given JSON iterate over all for loops

// 1.For Loop
for (let i=1;i<=10;i++){
    console.log("Number=",i);
}

// 2.for in
const details = {
title: 'Dr.APJ Sir',
time:'11am',
venue: 'srh school'
};
for(let key in details){
    //  Here We Use Bracket Notation
    console.log(key + ":",details[key])
}

// 3.for of
let Car=['lambo','bmw','benz'];
for (let index of Car){
    console.log("Car:" + Car);

}

// 4.foreach 

const array =['school','college','work'];

array.forEach(element=>console.log(element));


// 2.OWN RESUME WITH JSON FORMAT

let myResume={

    "basics": {
      "name": "SHARMILA M",
      "email": "sharmilaeee17@gamil.com",
      "phone": 9080622979,
      "degree": "B.E",
      "location": {
        "address": "4/542,Sathyamangalam",
        "postalCode": "638401",
        "city": "Erode",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/sharmila-m-65804b18b/",
          "github":"https://github.com/sharmilaeee17"
        }
      ]
    },
    "work": [
      {
        "company": "Guvi Research park",
        "position": "Student",
        "startDate": "08-08-2022",
        "summary": "i am a ex-employee of Cubes Solution pvt",
      },
    ],
    "education": [
      {
        "institution": "Bannari Amman Institute Of Technology",
        "department": "EEE",
        "studyType": "fulltime",
        "batch start year": 2017,
        "batch end year": 2021,
        "gpa": 7.5,
      }
    ],
    "skills": [
      {
        "name": "c,javascript",
        "level": "beginer",
        "project": [
          "automatic pick and place robotic system"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "software employee,skilled Developer,",
      }
    ]
  }
  console.log(myResume);