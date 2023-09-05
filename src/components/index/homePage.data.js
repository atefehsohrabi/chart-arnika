// create function for random number for weight

const randomNumber = (digits) => {
  return Math.floor(Math.random() * Math.pow(10, digits));
};

// create function for generate [-3,3]

function generateIndexValue() {
  return Math.floor(Math.random() * 7) - 3;
}


// create index list

 export const indexList = [
  { name: "سودآوری", id: 1, weight: randomNumber(2) },
  { name: "کیفیت سودآوری", id: 2, weight: randomNumber(2) },
  { name: "استفاده از طرفیت", id: 3, weight: randomNumber(2) },
  { name: "رشد ظرفیت مولد", id: 4, weight: randomNumber(2) },
  { name: "ریسک سرمایه در گردش", id: 5, weight: randomNumber(2) },
  { name: "بازده سرمایه در گردش", id: 6, weight: randomNumber(2) },
  { name: "ریسک مالی", id: 7, weight: randomNumber(2) },
  { name: "بهره گیری از اعتبار", id: 8, weight: randomNumber(2) },
];

// create company list
export const companies = [
  {
    name: "توسعه آهن و فولاد گل گهر",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() },
    ],
  },
  {
    name: "ایران خودرو",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() },
    ],
  },
  {
    name: "گهر انرژی",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() },
    ],
  },
  {
    name: "گهر",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() },
    ],
  },
  {
    name: "سنگ آهک گهر زمین",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() },
    ],
  },
  {
    name: "معدنی و صنعتی گل گهر",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() },
    ],
  },
  {
    name: "مجمع جهانی فولاد",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() },
    ],
  },
  {
    name: "سنگ آهک گهر زمین",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() },
    ],
  },
  {
    name: "کرمان موتور",
    weight: randomNumber(2),
    indexValue: [
      { id: 1, value: generateIndexValue() },
      { id: 2, value: generateIndexValue() },
      { id: 3, value: generateIndexValue() },
      { id: 4, value: generateIndexValue() },
      { id: 5, value: generateIndexValue() },
      { id: 6, value: generateIndexValue() },
      { id: 7, value: generateIndexValue() },
      { id: 8, value: generateIndexValue() },
    ],
  },
];
