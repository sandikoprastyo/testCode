function isCircularPalindrome(word) {
  let temp = ''; // variable untunk menyimpan sementara 

  // iterasi dari akhir kata ke awal kata e.g (k[0] a[1] t[2] a[3] k[4]) = 4 
  for (let i = word.length - 1; i >= 0; i--) { 
    temp = temp + word[i]; // Menambahkan kata dari belakang ke depan
  }

   // Memeriksa apakah kata yang di-reverse sama dengan kata aslinya (tanpa memperhatikan kapitalisasi)
  return temp.toLowerCase() === word.toLowerCase();
}

export default isCircularPalindrome; // export fungsi untuk digunakan di luar modul
