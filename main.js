// === Câu 1: Khai báo constructor function Product ===
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// === Câu 2: Khởi tạo mảng products (ít nhất 6 sp, 2 danh mục) ===
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Smartphones", true),
    new Product(2, "Samsung S24 Ultra", 31000000, 5, "Smartphones", true),
    new Product(3, "MacBook M3", 45000000, 3, "Laptops", true),
    new Product(4, "Chuột Magic Mouse", 2000000, 0, "Accessories", false),
    new Product(5, "Bàn phím cơ", 3500000, 12, "Accessories", true),
    new Product(6, "Ốp lưng iPhone", 500000, 50, "Accessories", true)
];

// === Câu 3: Tạo mảng mới chỉ chứa name và price ===
const namesAndPrices = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3 - Tên và Giá:", namesAndPrices);

// === Câu 4: Lọc các sản phẩm còn hàng (quantity > 0) ===
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", inStockProducts);

// === Câu 5: Kiểm tra có ít nhất một sp giá trên 30.000.000 ===
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có sp > 30tr không?", hasExpensiveProduct);

// === Câu 6: Kiểm tra tất cả sp thuộc "Accessories" có đang bán không ===
const allAccSelling = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable);
console.log("Câu 6 - Tất cả Accessories đang bán?", allAccSelling);

// === Câu 7: Tính tổng giá trị kho hàng ===
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue.toLocaleString(), "VND");

// === Câu 8: Dùng for...of in ra: Tên - Danh mục - Trạng thái ===
console.log("--- Câu 8: Danh sách sản phẩm ---");
for (const p of products) {
    let status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// === Câu 9: Dùng for...in in ra thuộc tính và giá trị (ví dụ cho sp đầu tiên) ===
console.log("--- Câu 9: Chi tiết sản phẩm đầu tiên ---");
let firstItem = products[0];
for (const key in firstItem) {
    if (typeof firstItem[key] !== 'function') { // Chỉ in thuộc tính, bỏ qua method nếu có
        console.log(`${key}: ${firstItem[key]}`);
    }
}

// === Câu 10: Danh sách tên sản phẩm đang bán và còn hàng ===
const availableProductNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("Câu 10 - Tên sp đang bán & còn hàng:", availableProductNames);
