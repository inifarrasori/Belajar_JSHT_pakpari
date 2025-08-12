// 1. Apakah Angka Positif?
// Buat fungsi yang mengembalikan: (inputnya 1)

// "Positif" jika lebih dari 0

// "Negatif" jika kurang dari 0

// "Nol" jika sama dengan 



// 2. Lebih Besar atau Sama
// Buat fungsi yang membandingkan dua angka: (inputnya 2)

// Jika angka pertama lebih besar atau sama dengan angka kedua tampilkan angka pertama lebih besar
// dll

const angka1 = 1
const angka2 = 2

if(typeof angka1 != "number"){
    console.log(`${angka1} bukanlah angka`)
} else{
    if (angka1 > 0) {
        console.log(`${angka1} positif`)
    } else if(angka1 < 0){
        console.log(`${angka1} negatif`)
    } else{
        console.log(`${angka1} adalah nol`)
    }

    if (angka1 > angka2){
        console.log(`${angka1} lebih besar dari ${angka2}`)
    } else if(angka1 < angka2){
        console.log(`${angka1} lebih kecil dari ${angka2}`)
    } else{
        console.log(`${angka1} sama dengan ${angka2}`)
    }
}



