export const convertSecondsToTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const timeLeft = `${days} days ${hours} hours ${minutes} minutes`;
    return timeLeft;
};

export const calculateCountdown = (days, excludeWeekends) => {
    let totalDays = parseInt(days, 10);
    if (excludeWeekends === true) {
        const weeks = Math.floor(totalDays / 5);
        totalDays += weeks * 2; // Add weekends
    }
    return totalDays * 24 * 60 * 60; // Convert days to seconds
};

export const convertSecondsToTimeData = (seconds) => {
    const days = seconds > 0 ? Math.floor(seconds / (24 * 3600)) : Math.ceil(seconds / (24 * 3600));
    const hours = seconds > 0 ? Math.floor((seconds % (24 * 3600)) / 3600) : Math.ceil((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return [days, hours, minutes];
}

export const convertTimestamp = (timeStamp) => {
    // Format the time as 10.09am
    const desiredDate = new Date(timeStamp);
    const hours = desiredDate.getHours();
    const minutes = desiredDate.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedTime = `${hours % 12 || 12}.${minutes}${ampm}`;

    // Format the date as 2nd Apr
    const day = desiredDate.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[desiredDate.getMonth()];
    const daySuffix = (day) => {
        if (day > 3 && day < 21) return 'th'; // catch 11th, 12th, 13th
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    const formattedDate = `${day}${daySuffix(day)} ${month}`;

    // Combine date and time
    return [formattedTime, formattedDate];
}

export const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);

    const month = date.getUTCMonth() + 1; // Months are zero-indexed
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${month}/${day}/${year}`;
}

export const getRemainingTime = (item) => {
    let endTime = new Date(item.currentTime).getTime();
    
    if (!item._doc.startTime) {
        return item._doc.remainingTime;
    }

    const countdown = item._doc.countdown;
    const activityLog = item._doc.activityLog;
    const lastLog = activityLog[activityLog.length - 1];
    /**
     * 
     * Checking Stopped Time by action
     */
    if (lastLog && (lastLog.action === 'pause' || lastLog.action === 'complete' || lastLog.action === 'weekendStart')) {
        endTime = new Date(lastLog.timestamp).getTime();
    }

    /**
     * 
     * calculate diff timestamp
     */
    let entireDiff = Math.floor((endTime - (new Date(item._doc.startTime).getTime())) / 1000);

    activityLog.forEach((log, index) => {
        if (log.action === 'weekendEnd') {
            entireDiff -= 48 * 3600;
        } else if (log.action === 'resume' && activityLog[index - 1].action === 'pause') {
            const stoppedDuration = Math.floor(((new Date(log.timestamp).getTime()) - new Date(activityLog[index-1].timestamp).getTime()) / 1000);
            entireDiff -= stoppedDuration;
        }
    });

    return countdown - entireDiff;
}
