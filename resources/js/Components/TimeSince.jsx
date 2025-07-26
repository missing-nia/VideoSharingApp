export default function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;
  var format = "";
  var intervalAmount = 0;

  if (interval > 1) {
    intervalAmount = Math.floor(interval)
    format = " years";
    return intervalAmount + adjustFormatting(intervalAmount, format);
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    intervalAmount = Math.floor(interval);
    format = " months";
    return intervalAmount + adjustFormatting(intervalAmount, format);
  }
  interval = seconds / 86400;
  if (interval > 1) {
    intervalAmount = Math.floor(interval);
    format = " days";
    return intervalAmount + adjustFormatting(intervalAmount, format);
  }
  interval = seconds / 3600;
  if (interval > 1) {
    intervalAmount = Math.floor(interval);
    format = " hours";
    return intervalAmount + adjustFormatting(intervalAmount, format);
  }
  interval = seconds / 60;
  if (interval > 1) {
    intervalAmount = Math.floor(interval);
    format = " minutes";
    return intervalAmount + adjustFormatting(intervalAmount, format);
  }
  intervalAmount = Math.floor(seconds); 
  format = " seconds";
  return intervalAmount + adjustFormatting(intervalAmount, format);
}

// Simple function for removing trailin s from time format if the quantity is 1
function adjustFormatting(intervalAmount, format) {
    if (intervalAmount == 1)
    {
        // Remove the s 
        return format.substring(0, format.length - 1);
    }
    return format
}