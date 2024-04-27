// 1] $match  :  It's work link if condition

[
  {
    $match: {
      IsActive: true,
    },
  },
];

// It show all IsActive key value true

// 2] $count : We can count using count

[
  {
    $count: "user",
  },
];

// 3] group

[
  {
    $group: {
      _id: "$gender",
      ageAvarageIs: {
        $avg: "$age",
      },
    },
  },
];

// group value count 
[
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1, ///   increament  : 1, It target direct value
      },
    },
  },
];

//group sort

[
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: 1, /// It sort in Accending order
    },
  },
];

// group limit

[
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: 1,
    },
  },
  {
    $limit: 3,   /// first 3 recordes show 
  },
];