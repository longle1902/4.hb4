function checkout() {
  return false; // ❌ BUG: luôn trả về false
}

if (!checkout()) {
  console.log("❌ Thanh toán thất bại"); // bug hiện rõ
} else {
  console.log("✅ Thanh toán thành công");
}
