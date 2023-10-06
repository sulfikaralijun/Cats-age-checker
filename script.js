// fungsi untuk mengecek apakah kucing dewasa atau kucing kecil
function checkCats(CatsTuti, CatsNining) {
  // membuat salinan array dari data Tuti
  const correctTuti = [...CatsTuti];
  
  // menghapus data pertama dari data Tuti
  correctTuti.shift();
  
  // menghapus Dua data terakhir dari data Tuti
	correctTuti.pop(); 
	correctTuti.pop();

  // menggabungkan data Tuti yang telah dikoreksi dengan data Nining
  const combinedData = correctTuti.concat(CatsNining);
  
  
  console.log("==========Start==========");
  
  // mengecek setiap data untuk menentukan apakah kucing dewasa dan kucing kecil
	for (let i = 0; i < combinedData.length; i++) {
		if (combinedData[i] >= 3) {
			console.log(`Kucing Ke-${i + 1} adalah Kucing Dewasa.`);
		} else {
			console.log(`Kucing Ke-${i + 1} adalah kucing Kecil(Kitten).`);
		}
  }
  
  console.log("===========End===========");
}

// Data uji 1
const dataTuti_1 = [3, 5, 2, 12, 7];
const dataNining_1 = [4, 1, 15, 8, 3];
// menjalankan fungsi checkCats dengan parameter Data uji 1
checkCats(dataTuti_1, dataNining_1);

// Data uji 2
const dataTuti_2 = [9, 16, 6, 8, 3];
const dataNining_2 = [10, 5, 6, 1, 4];
// menjalanakn fungsi checkCats dengan parameter Data uji 2
checkCats(dataTuti_2, dataNining_2)
