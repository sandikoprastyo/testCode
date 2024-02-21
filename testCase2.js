function find_common_slot(meetings) {
    // sortir atau urutkan setiap pertemuan berdasarkan waktu mulai
    meetings.forEach(meeting => meeting.sort((a, b) => a - b));

    let pointers = [0, 0, 0]; // Pointer untuk setiap pertemuan
    let commonSlot = [];  // Variabel untuk menyimpan slot umum

     // Selama ada pertemuan yang memiliki waktu tersedia
    while (pointers[0] < meetings[0].length && pointers[1] < meetings[1].length && pointers[2] < meetings[2].length) {
         // Temukan waktu mulai maksimum dan waktu selesai minimum di antara pertemuan
        let maxStartTime = Math.max(meetings[0][pointers[0]][0], meetings[1][pointers[1]][0], meetings[2][pointers[2]][0]);
        let minEndTime = Math.min(meetings[0][pointers[0]][1], meetings[1][pointers[1]][1], meetings[2][pointers[2]][1]);

        // Jika ada slot yang tersedia, simpan ke commonSlot
        if (maxStartTime < minEndTime) {
            commonSlot = [maxStartTime, minEndTime];
            break;
        }

        // Temukan pertemuan dengan waktu selesai minimum dan naikkan pointer untuk pertemuan tersebut
        let minEnd = Math.min(meetings[0][pointers[0]][1], meetings[1][pointers[1]][1], meetings[2][pointers[2]][1]);
        for (let i = 0; i < 3; i++) {
            if (meetings[i][pointers[i]][1] === minEnd) {
                pointers[i]++;
            }
        }
    }

     // Jika tidak ada commonSlot yang tersedia, kembalikan pesan "No common slot available"
    if (commonSlot.length === 0) {
        return ["No common slot available"];
    } else {
        // else return commonSlot
        return commonSlot;
    }
}

export default find_common_slot; // export fungsi untuk digunakan di luar modul
