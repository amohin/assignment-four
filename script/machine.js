

function showOnly(id) {
    const allJobs = document.getElementById('all-jobs-section');
    const interview = document.getElementById('interview-section');
    const rejected = document.getElementById('rejected-section');

    allJobs.classList.add('hidden');
    interview.classList.add('hidden');
    rejected.classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
    updateCounts();
}



