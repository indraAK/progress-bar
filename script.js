const progress = document.getElementById('progress');
let idx = 0;

function runProgress() {

   progress.value = idx * 20;

   if (progress.value == 100) return idx = 0;

   idx++;

}

setInterval(runProgress, 1000);
