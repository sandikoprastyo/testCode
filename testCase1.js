function calculate_diagonal_sum(grid_size) {
  let sum = 1; // Inisialisasi jumlah diagonal (dimulai dari pusat, yaitu 1)
  let current = 1; // Inisialisasi nilai terakhir (dimulai dari 1)
  let increment = 2; // Langkah peningkatan nilai setiap kali perpindahan

  // Iterasi untuk setiap 'layer' dari spiral grid (setengah dari ukuran grid - 1)
  for (let i = 0; i < (grid_size - 1) / 2; i++) { 
     // Iterasi untuk menghitung dan menambahkan nilai dalam setiap arah diagonal
    for (let j = 0; j < 4; j++) { 
      current += increment; // Menambahkan nilai berikutnya dengan langkah peningkatan
      sum += current; // Menambahkan nilai ke dalam jumlah diagonal
    }
    increment += 2; // Menambahkan langkah peningkatan untuk iterasi selanjutnya
  }
  return sum; // Mengembalikan jumlah diagonal keseluruhan
}

export default calculate_diagonal_sum; //export fungsi untuk digunakan di luar modul
