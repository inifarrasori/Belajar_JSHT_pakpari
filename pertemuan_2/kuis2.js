/*
1. Gabung String
Buat fungsi yang menerima dua string dan menggabungkannya.
Tampilkan juga panjang string hasil gabungan.
Test case & output yang diharapkan:
str1 = "halo", str2 = "dunia" → Gabungan: halodunia, Panjang: 9
str1 = "a", str2 = "b"         → Gabungan: ab, Panjang: 2
str1 = "123", str2 = "456"     → Gabungan: 123456, Panjang: 6


2. Konversi Number → String → Number
Buat fungsi yang menerima angka:
- Ubah menjadi string, tampilkan panjangnya
- Ubah kembali ke angka, tambahkan 1, tampilkan hasilnya
Test case & output yang diharapkan:
angka = 7        → Panjang string: 1, Hasil setelah +1: 8
angka = 1000     → Panjang string: 4, Hasil setelah +1: 1001
angka = 987654   → Panjang string: 6, Hasil setelah +1: 987655


3. Cek Positif dan Genap
Buat fungsi yang menerima angka dan mengembalikan:
- "Positif dan genap" jika lebih dari 0 dan habis dibagi 2
- "Positif" jika lebih dari 0 dan ganjil
- "Negatif" jika kurang dari 0
- "Nol" jika sama dengan 0
Test case & output yang diharapkan:
input = -3  → Negatif
input = 0   → Nol
input = 7   → Positif
input = 8   → Positif dan genap
*/

//  NO 1
let string1 ="hello"
let string2 ="sekai"
let str = string1 + string2
console.log(`Gabungan: ${str}, panjang: ${str.length}`)

//  NO 2
let number = 10
number = String(number)
numlen = number.length
number = Number(number) 
console.log(`Hasil: ${number}, Panjang String: ${numlen}, Hasil setelah ditambah ${number + 1}`)

//  NO 3
let angka = "1"
if(typeof angka == "number"){
    if(angka > 0 && angka % 2 == 0){
        console.log(`Positif dan Genap`)
    }
    else if(angka > 0){
        console.log(`Positif`)
    }
    else if(angka < 0){
        console.log(`Negatif`)
    }
    else{
        console.log(`Nol`)
    }
}
else{
    console.log(`Error: Ubah variabel`)
}