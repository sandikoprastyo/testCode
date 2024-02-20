function find_common_slot(meetings) {
    meetings.forEach(meeting => meeting.sort((a, b) => a - b));

    let pointers = [0, 0, 0];
    let commonSlot = [];

    while (pointers[0] < meetings[0].length && pointers[1] < meetings[1].length && pointers[2] < meetings[2].length) {
        let maxStartTime = Math.max(meetings[0][pointers[0]][0], meetings[1][pointers[1]][0], meetings[2][pointers[2]][0]);
        let minEndTime = Math.min(meetings[0][pointers[0]][1], meetings[1][pointers[1]][1], meetings[2][pointers[2]][1]);

        if (maxStartTime < minEndTime) {
            commonSlot = [maxStartTime, minEndTime];
            break;
        }

        let minEnd = Math.min(meetings[0][pointers[0]][1], meetings[1][pointers[1]][1], meetings[2][pointers[2]][1]);
        for (let i = 0; i < 3; i++) {
            if (meetings[i][pointers[i]][1] === minEnd) {
                pointers[i]++;
            }
        }
    }

    if (commonSlot.length === 0) {
        return ["No common slot available"];
    } else {
        return commonSlot;
    }
}

export default find_common_slot;
