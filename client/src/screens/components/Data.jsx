import axios from "axios";

export const ProductsData = [
  {
    id: 1,
    product: "Maggi",
    price: 430,
    qty: 43,
    thresholdValue: 12,
    expiry: "11/12/22",
    avl: "In-stock",
  },
  {
    id: 2,
    product: "Bru",
    price: 257,
    qty: 22,
    thresholdValue: 12,
    expiry: "21/12/22",
    avl: "Out of stock",
  },
  {
    id: 3,
    product: "Coca cola",
    price: 205,
    qty: 41,
    thresholdValue: 10,
    expiry: "11/11/24",
    avl: "Low stock",
  },
  {
    id: 4,
    product: "Pepsi",
    price: 220,
    qty: 35,
    thresholdValue: 15,
    expiry: "12/10/23",
    avl: "In-stock",
  },
  {
    id: 5,
    product: "KitKat",
    price: 150,
    qty: 50,
    thresholdValue: 20,
    expiry: "15/09/23",
    avl: "In-stock",
  },
  {
    id: 6,
    product: "Lays",
    price: 80,
    qty: 60,
    thresholdValue: 25,
    expiry: "25/11/23",
    avl: "In-stock",
  },
  {
    id: 7,
    product: "Nestle Milk",
    price: 300,
    qty: 25,
    thresholdValue: 10,
    expiry: "10/08/23",
    avl: "Out of stock",
  },
  {
    id: 8,
    product: "Doritos",
    price: 120,
    qty: 55,
    thresholdValue: 30,
    expiry: "30/07/23",
    avl: "In-stock",
  },
  {
    id: 9,
    product: "Oreo",
    price: 200,
    qty: 40,
    thresholdValue: 15,
    expiry: "20/06/23",
    avl: "Low stock",
  },
  {
    id: 10,
    product: "Red Bull",
    price: 275,
    qty: 30,
    thresholdValue: 10,
    expiry: "05/05/23",
    avl: "In-stock",
  },
  {
    id: 11,
    product: "Tide",
    price: 320,
    qty: 20,
    thresholdValue: 5,
    expiry: "08/04/23",
    avl: "In-stock",
  },
  {
    id: 12,
    product: "Dove Soap",
    price: 150,
    qty: 15,
    thresholdValue: 5,
    expiry: "12/03/23",
    avl: "In-stock",
  },
  {
    id: 13,
    product: "Colgate Toothpaste",
    price: 100,
    qty: 25,
    thresholdValue: 10,
    expiry: "18/02/23",
    avl: "Low stock",
  },
  {
    id: 14,
    product: "Pantene Shampoo",
    price: 200,
    qty: 20,
    thresholdValue: 8,
    expiry: "22/01/23",
    avl: "In-stock",
  },
  {
    id: 15,
    product: "Lipton Tea",
    price: 180,
    qty: 30,
    thresholdValue: 10,
    expiry: "14/12/22",
    avl: "In-stock",
  },
  {
    id: 16,
    product: "Kissan Jam",
    price: 120,
    qty: 35,
    thresholdValue: 15,
    expiry: "28/11/22",
    avl: "In-stock",
  },
  {
    id: 17,
    product: "Heinz Ketchup",
    price: 150,
    qty: 25,
    thresholdValue: 10,
    expiry: "05/10/22",
    avl: "Out of stock",
  },
  {
    id: 18,
    product: "Nivea Cream",
    price: 250,
    qty: 18,
    thresholdValue: 6,
    expiry: "19/09/22",
    avl: "Low stock",
  },
  {
    id: 19,
    product: "Head & Shoulders Shampoo",
    price: 220,
    qty: 20,
    thresholdValue: 8,
    expiry: "14/08/22",
    avl: "In-stock",
  },
  {
    id: 20,
    product: "Frooti",
    price: 180,
    qty: 40,
    thresholdValue: 15,
    expiry: "30/07/22",
    avl: "In-stock",
  },
  // Additional 10 products
  {
    id: 21,
    product: "Cadbury Dairy Milk",
    price: 120,
    qty: 55,
    thresholdValue: 20,
    expiry: "25/06/23",
    avl: "In-stock",
  },
  {
    id: 22,
    product: "Lipton Green Tea",
    price: 200,
    qty: 30,
    thresholdValue: 10,
    expiry: "15/05/23",
    avl: "In-stock",
  },
  {
    id: 23,
    product: "Sunsilk Shampoo",
    price: 150,
    qty: 25,
    thresholdValue: 10,
    expiry: "20/04/23",
    avl: "Low stock",
  },
  {
    id: 24,
    product: "Dettol Handwash",
    price: 180,
    qty: 40,
    thresholdValue: 15,
    expiry: "10/03/23",
    avl: "In-stock",
  },
  {
    id: 25,
    product: "Britannia Marie Gold",
    price: 90,
    qty: 70,
    thresholdValue: 30,
    expiry: "05/02/23",
    avl: "In-stock",
  },
  {
    id: 26,
    product: "Vaseline Body Lotion",
    price: 250,
    qty: 20,
    thresholdValue: 8,
    expiry: "15/01/23",
    avl: "Low stock",
  },
  {
    id: 27,
    product: "Haldiram's Bhujia",
    price: 100,
    qty: 50,
    thresholdValue: 20,
    expiry: "20/12/22",
    avl: "In-stock",
  },
];

export const SuppliersData = [
  {
    id: 1,
    supplierName: "Richard Martin",
    product: "Kit kat",
    contact: "7687764556",
    email: "richard@gmail.com",
    type: "Taking Return",
    stockInTransit: 13,
  },
  {
    id: 2,
    supplierName: "Tom Homan",
    product: "Maaza",
    contact: "9667754096",
    email: "tomhoman@gmail.com",
    type: "Taking Return",
    stockInTransit: null,
  },
  {
    id: 3,
    supplierName: "Veandir",
    product: "Dairy Milk",
    contact: "9668754096",
    email: "veandir@gmail.com",
    type: "Not Taking Return",
    stockInTransit: null,
  },
  {
    id: 4,
    supplierName: "Charin",
    product: "Tomato",
    contact: "9267545457",
    email: "charin@gmail.com",
    type: "Taking Return",
    stockInTransit: 12,
  },
  {
    id: 5,
    supplierName: "Hoffman",
    product: "Milk Bikis",
    contact: "9367546531",
    email: "hoffman@gmail.com",
    type: "Taking Return",
    stockInTransit: null,
  },
  {
    id: 6,
    supplierName: "Fainden Juke",
    product: "Marie Gold",
    contact: "9667545982",
    email: "fainden@gmail.com",
    type: "Not Taking Return",
    stockInTransit: 9,
  },
  {
    id: 7,
    supplierName: "Martin",
    product: "Saffola",
    contact: "9867545457",
    email: "martin@gmail.com",
    type: "Taking Return",
    stockInTransit: null,
  },
  {
    id: 8,
    supplierName: "Joe Nike",
    product: "Good day",
    contact: "9567545769",
    email: "joenike@gmail.com",
    type: "Taking Return",
    stockInTransit: null,
  },
  {
    id: 9,
    supplierName: "Dender Luke",
    product: "Apple",
    contact: "9667545980",
    email: "dender@gmail.com",
    type: "Not Taking Return",
    stockInTransit: 7,
  },
  {
    id: 10,
    supplierName: "Fainden Juke",
    product: "Marie Gold",
    contact: "9667545982",
    email: "fainden@gmail.com",
    type: "Not Taking Return",
    stockInTransit: 9,
  },
  {
    id: 11,
    supplierName: "Fainden Juke",
    product: "Marie Gold",
    contact: "9667545982",
    email: "fainden@gmail.com",
    type: "Not Taking Return",
    stockInTransit: 9,
  },
  {
    id: 12,
    supplierName: "Richard Martin",
    product: "Kit kat",
    contact: "7687764556",
    email: "richard@gmail.com",
    type: "Taking Return",
    stockInTransit: 13,
  },
  {
    id: 13,
    supplierName: "Fainden Juke",
    product: "Marie Gold",
    contact: "9667545982",
    email: "fainden@gmail.com",
    type: "Not Taking Return",
    stockInTransit: 9,
  },
  {
    id: 14,
    supplierName: "Veandir",
    product: "Dairy Milk",
    contact: "9668754096",
    email: "veandir@gmail.com",
    type: "Not Taking Return",
    stockInTransit: null,
  },
  {
    id: 15,
    supplierName: "Richard Martin",
    product: "Kit kat",
    contact: "7687764556",
    email: "richard@gmail.com",
    type: "Taking Return",
    stockInTransit: 13,
  },
  {
    id: 16,
    supplierName: "Tom Homan",
    product: "Maaza",
    contact: "9667754096",
    email: "tomhoman@gmail.com",
    type: "Taking Return",
    stockInTransit: null,
  },
  {
    id: 17,
    supplierName: "Veandir",
    product: "Dairy Milk",
    contact: "9668754096",
    email: "veandir@gmail.com",
    type: "Not Taking Return",
    stockInTransit: null,
  },
  {
    id: 18,
    supplierName: "Charin",
    product: "Tomato",
    contact: "9267545457",
    email: "charin@gmail.com",
    type: "Taking Return",
    stockInTransit: 12,
  },
  {
    id: 19,
    supplierName: "Hoffman",
    product: "Milk Bikis",
    contact: "9367546531",
    email: "hoffman@gmail.com",
    type: "Taking Return",
    stockInTransit: null,
  },
  {
    id: 20,
    supplierName: "Fainden Juke",
    product: "Marie Gold",
    contact: "9667545982",
    email: "fainden@gmail.com",
    type: "Not Taking Return",
    stockInTransit: 9,
  },
  {
    id: 21,
    supplierName: "Martin",
    product: "Saffola",
    contact: "9867545457",
    email: "martin@gmail.com",
    type: "Taking Return",
    stockInTransit: null,
  },
  {
    id: 22,
    supplierName: "Joe Nike",
    product: "Good day",
    contact: "9567545769",
    email: "joenike@gmail.com",
    type: "Taking Return",
    stockInTransit: null,
  },
  {
    id: 23,
    supplierName: "Dender Luke",
    product: "Apple",
    contact: "9667545980",
    email: "dender@gmail.com",
    type: "Not Taking Return",
    stockInTransit: 7,
  },
  {
    id: 24,
    supplierName: "Fainden Juke",
    product: "Marie Gold",
    contact: "9667545982",
    email: "fainden@gmail.com",
    type: "Not Taking Return",
    stockInTransit: 9,
  },
  {
    id: 25,
    supplierName: "Fainden Juke",
    product: "Marie Gold",
    contact: "9667545982",
    email: "fainden@gmail.com",
    type: "Not Taking Return",
    stockInTransit: 9,
  },
];

export const OrdersData = [
  {
    id: 1,
    productName: "Maggi",
    orderValue: "₹4306",
    qty: "43 Packets",
    orderId: "7535",
    expectedDelivery: "11/12/22",
    status: "Delayed",
  },
  {
    id: 2,
    productName: "Bru",
    orderValue: "₹2557",
    qty: "22 Packets",
    orderId: "5724",
    expectedDelivery: "21/12/22",
    status: "Confirmed",
  },
  {
    id: 3,
    productName: "Coca cola",
    orderValue: "₹2015",
    qty: "41 Packets",
    orderId: "2775",
    expectedDelivery: "11/11/24",
    status: "Returned",
  },
  {
    id: 4,
    productName: "Maggi",
    orderValue: "₹4130",
    qty: "43 Packets",
    orderId: "1256",
    expectedDelivery: "11/12/22",
    status: "Out for delivery",
  },
  {
    id: 5,
    productName: "Bru",
    orderValue: "₹257",
    qty: "22 Packets",
    orderId: "3412",
    expectedDelivery: "21/12/22",
    status: "Returned",
  },
  {
    id: 6,
    productName: "Coca cola",
    orderValue: "₹205",
    qty: "41 Packets",
    orderId: "1230",
    expectedDelivery: "11/11/24",
    status: "Out for delivery",
  },
  {
    id: 7,
    productName: "Maggi",
    orderValue: "₹430",
    qty: "43 Packets",
    orderId: "6612",
    expectedDelivery: "11/12/22",
    status: "Delayed",
  },
  {
    id: 8,
    productName: "Bru",
    orderValue: "₹257",
    qty: "22 Packets",
    orderId: "1432",
    expectedDelivery: "21/12/22",
    status: "Confirmed",
  },
  {
    id: 9,
    productName: "Coca cola",
    orderValue: "₹205",
    qty: "41 Packets",
    orderId: "4510",
    expectedDelivery: "11/11/24",
    status: "Delayed",
  },
  {
    id: 10,
    productName: "Maggi",
    orderValue: "₹4306",
    qty: "43 Packets",
    orderId: "7535",
    expectedDelivery: "11/12/22",
    status: "Delayed",
  },
  {
    id: 11,
    productName: "Bru",
    orderValue: "₹2557",
    qty: "22 Packets",
    orderId: "5724",
    expectedDelivery: "21/12/22",
    status: "Confirmed",
  },
  {
    id: 12,
    productName: "Coca cola",
    orderValue: "₹2015",
    qty: "41 Packets",
    orderId: "2775",
    expectedDelivery: "11/11/24",
    status: "Returned",
  },
  {
    id: 13,
    productName: "Maggi",
    orderValue: "₹4130",
    qty: "43 Packets",
    orderId: "1256",
    expectedDelivery: "11/12/22",
    status: "Out for delivery",
  },
  {
    id: 14,
    productName: "Bru",
    orderValue: "₹257",
    qty: "22 Packets",
    orderId: "3412",
    expectedDelivery: "21/12/22",
    status: "Returned",
  },
  {
    id: 15,
    productName: "Coca cola",
    orderValue: "₹205",
    qty: "41 Packets",
    orderId: "1230",
    expectedDelivery: "11/11/24",
    status: "Out for delivery",
  },
  {
    id: 16,
    productName: "Maggi",
    orderValue: "₹430",
    qty: "43 Packets",
    orderId: "6612",
    expectedDelivery: "11/12/22",
    status: "Delayed",
  },
  {
    id: 17,
    productName: "Bru",
    orderValue: "₹257",
    qty: "22 Packets",
    orderId: "1432",
    expectedDelivery: "21/12/22",
    status: "Confirmed",
  },
  {
    id: 18,
    productName: "Coca cola",
    orderValue: "₹205",
    qty: "41 Packets",
    orderId: "4510",
    expectedDelivery: "11/11/24",
    status: "Delayed",
  },
  {
    id: 19,
    productName: "Maggi",
    orderValue: "₹4306",
    qty: "43 Packets",
    orderId: "7535",
    expectedDelivery: "11/12/22",
    status: "Delayed",
  },
  {
    id: 20,
    productName: "Bru",
    orderValue: "₹2557",
    qty: "22 Packets",
    orderId: "5724",
    expectedDelivery: "21/12/22",
    status: "Confirmed",
  },
  {
    id: 21,
    productName: "Coca cola",
    orderValue: "₹2015",
    qty: "41 Packets",
    orderId: "2775",
    expectedDelivery: "11/11/24",
    status: "Returned",
  },
  {
    id: 22,
    productName: "Maggi",
    orderValue: "₹4130",
    qty: "43 Packets",
    orderId: "1256",
    expectedDelivery: "11/12/22",
    status: "Out for delivery",
  },
  {
    id: 23,
    productName: "Bru",
    orderValue: "₹257",
    qty: "22 Packets",
    orderId: "3412",
    expectedDelivery: "21/12/22",
    status: "Returned",
  },
  {
    id: 24,
    productName: "Coca cola",
    orderValue: "₹205",
    qty: "41 Packets",
    orderId: "1230",
    expectedDelivery: "11/11/24",
    status: "Out for delivery",
  },
  {
    id: 25,
    productName: "Maggi",
    orderValue: "₹430",
    qty: "43 Packets",
    orderId: "6612",
    expectedDelivery: "11/12/22",
    status: "Delayed",
  },
  {
    id: 26,
    productName: "Bru",
    orderValue: "₹257",
    qty: "22 Packets",
    orderId: "1432",
    expectedDelivery: "21/12/22",
    status: "Confirmed",
  },
  {
    id: 27,
    productName: "Coca cola",
    orderValue: "₹205",
    qty: "41 Packets",
    orderId: "4510",
    expectedDelivery: "11/11/24",
    status: "Delayed",
  },
  {
    id: 28,
    productName: "Maggi",
    orderValue: "₹4306",
    qty: "43 Packets",
    orderId: "7535",
    expectedDelivery: "11/12/22",
    status: "Delayed",
  },
];

export const branchData = [
  {
    id: 1,
    branchName: "ABC Mart",
    address: "1A/Krihnarajapuram, 3rd street sulur",
    state: "Coimbatore",
    pin: "12345",
    contact: "123-456-7890",
    branchImg:
      "https://imgs.search.brave.com/1OKjQ3NYoT2gRXJr960MS_JrWIjtAIxWm7cNIP0iqxo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEzLzA1Lzkw/LzM2MF9GXzMxMzA1/OTA0Ml9HN1E5NXJ0/Tkl0ZkhRTUszMW54/TFVIY3hvWU9ETlpZ/VC5qcGc",
  },
  {
    id: 2,
    branchName: "XYZ Store",
    address: "456 Oak Avenue",
    state: "New York",
    pin: "54321",
    contact: "987-654-3210",
    branchImg:
      "https://imgs.search.brave.com/LP3C-H_FNU_ztWlSTAyEApSel2r_nZ-fB5STM9fnUHI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hcmNo/aXRlY3R1cmVzaWRl/YXMuYi1jZG4ubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA4L3NtYWxsLW9m/ZmljZS1idWlsZGlu/Zy1kZXNpZ24yNS1l/MTU3MTM4ODc2MDE3/NC5qcGc",
  },
  {
    id: 3,
    branchName: "PQR Market",
    address: "789 Elm Boulevard",
    state: "Texas",
    pin: "67890",
    contact: "456-789-0123",
    branchImg:
      "https://imgs.search.brave.com/GGc09jNQh_7isxybp8g0W6wwFzT0qBU5CfhtYFkXEIg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d2JkZy5vcmcvaW1h/Z2VzL29mZmljZV8w/OC5qcGc",
  },
  // Add more branches as needed
];

export const inventoryData = {
  categories: {
    count: 14,
    lastUpdated: "Last 7 days",
  },
  totalProducts: {
    count: 868,
    lastUpdated: "Last 7 days",
    revenue: "₹ 25000",
  },
  mostUsed: {
    count: 5,
    lastUpdated: "Last 7 days",
    cost: "₹ 2500",
  },
  lowStocks: {
    ordered: 12,
    notInStock: 2,
  },
};

export const overviewData = {
  totalProfit: "₹21,190",
  revenue: "₹80,432",
  sales: "₹17,432",
  netPurchaseValue: "₹1,21,190",
  netSalesValue: "₹80,493",
  momProfit: "₹30,432",
  yoyProfit: "₹1,10,497",
};

export const revenueData = [
  {
    "label": "Sep",
    "revenue": 20000,
    "profit": 41349
  },
  {
    "label": "Oct",
    "revenue": 45000,
    "profit": 30000
  },
  {
    "label": "Nov",
    "revenue": 25000,
    "profit": 35000
  },
  {
    "label": "Dec",
    "revenue": 76000,
    "profit": 55000
  },
  {
    "label": "Jan",
    "revenue": 50000,
    "profit": 53000
  },
  {
    "label": "Feb",
    "revenue": 58000,
    "profit": 42000
  },
  {
    "label": "Mar",
    "revenue": 38000,
    "profit": 50262
  }
]

export const BSCategory = [
  {
    category: "Vegetable",
    turnOver: "₹27000",
    increaseBy: "60.3%",
  },
  {
    category: "Instant Food",
    turnOver: "₹22000",
    increaseBy: "2%",
  },
  {
    category: "Household",
    turnOver: "₹18000",
    increaseBy: "1.5%",
  },
  {
    category: "Vegetable",
    turnOver: "₹27000",
    increaseBy: "3.3%",
  },
  {
    category: "Instant Food",
    turnOver: "₹22000",
    increaseBy: "2%",
  },
  {
    category: "Household",
    turnOver: "₹18000",
    increaseBy: "1.5%",
  },
  {
    category: "Vegetable",
    turnOver: "₹27000",
    increaseBy: "3.3%",
  },
  {
    category: "Instant Food",
    turnOver: "₹22000",
    increaseBy: "2%",
  },
  {
    category: "Household",
    turnOver: "₹18000",
    increaseBy: "1.5%",
  },
  {
    category: "Vegetable",
    turnOver: "₹27000",
    increaseBy: "3.3%",
  },
  {
    category: "Instant Food",
    turnOver: "₹22000",
    increaseBy: "2%",
  },
  {
    category: "Household",
    turnOver: "₹18000",
    increaseBy: "1.5%",
  },
]

export const BSProduct = [
  {
    product: "Tomato",
    productId: 23567,
    category: "vegetable",
    remainingQuantity: "225 kg",
    turnOver: "₹17,000",
    increaseBy: "2.3%",
  },
  {
    product: "Onion",
    productId: 25831,
    category: "vegetable",
    remainingQuantity: "200 kg",
    turnOver: "₹12,000",
    increaseBy: "1.3%",
  },
  {
    product: "Maggi",
    productId: 56841,
    category: "Instant Food",
    remainingQuantity: "200 packets",
    turnOver: "₹10,000",
    increaseBy: "2.3%",
  },
  {
    product: "Surf Excel",
    productId: 23567,
    category: "Household",
    remainingQuantity: "125 packets",
    turnOver: "₹9,000",
    increaseBy: "1%",
  },
  {
    product: "Tomato",
    productId: 23567,
    category: "vegetable",
    remainingQuantity: "225 kg",
    turnOver: "₹17,000",
    increaseBy: "2.3%",
  },
  {
    product: "Onion",
    productId: 25831,
    category: "vegetable",
    remainingQuantity: "200 kg",
    turnOver: "₹12,000",
    increaseBy: "1.3%",
  },
  {
    product: "Maggi",
    productId: 56841,
    category: "Instant Food",
    remainingQuantity: "200 packets",
    turnOver: "₹10,000",
    increaseBy: "2.3%",
  },
  {
    product: "Surf Excel",
    productId: 23567,
    category: "Household",
    remainingQuantity: "125 packets",
    turnOver: "₹9,000",
    increaseBy: "1%",
  },
  {
    product: "Tomato",
    productId: 23567,
    category: "vegetable",
    remainingQuantity: "225 kg",
    turnOver: "₹17,000",
    increaseBy: "2.3%",
  },
  {
    product: "Onion",
    productId: 25831,
    category: "vegetable",
    remainingQuantity: "200 kg",
    turnOver: "₹12,000",
    increaseBy: "1.3%",
  },
  {
    product: "Maggi",
    productId: 56841,
    category: "Instant Food",
    remainingQuantity: "200 packets",
    turnOver: "₹10,000",
    increaseBy: "2.3%",
  },
  {
    product: "Surf Excel",
    productId: 23567,
    category: "Household",
    remainingQuantity: "125 packets",
    turnOver: "₹9,000",
    increaseBy: "1%",
  },
  {
    product: "Tomato",
    productId: 23567,
    category: "vegetable",
    remainingQuantity: "225 kg",
    turnOver: "₹17,000",
    increaseBy: "2.3%",
  },
  {
    product: "Onion",
    productId: 25831,
    category: "vegetable",
    remainingQuantity: "200 kg",
    turnOver: "₹12,000",
    increaseBy: "1.3%",
  },
  {
    product: "Maggi",
    productId: 56841,
    category: "Instant Food",
    remainingQuantity: "200 packets",
    turnOver: "₹10,000",
    increaseBy: "2.3%",
  },
  {
    product: "Surf Excel",
    productId: 23567,
    category: "Household",
    remainingQuantity: "125 packets",
    turnOver: "₹9,000",
    increaseBy: "1%",
  },
]


