

function showOnly(id){
   console.log("Clicked:", id);
   const allJobs = document.getElementById('all-jobs-section');
   const interview = document.getElementById('interview-section');
   const rejected = document.getElementById('rejected-section');

   allJobs.classList.add('hidden');
   interview.classList.add('hidden');
   rejected.classList.add('hidden');

   const selected = document.getElementById(id);
   selected.classList.remove('hidden');
}


 
