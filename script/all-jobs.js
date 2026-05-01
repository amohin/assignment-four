

// updateCounts
function updateCounts() {
    const total = document.querySelectorAll('#all-jobs-section .card').length;
    const interviewCount = document.querySelectorAll('#interview-section .card').length;
    const rejectedCount = document.querySelectorAll('#rejected-section .card').length;

    document.getElementById('total-jobs').innerText = total;
    document.getElementById('interviewCardsCount').innerText = interviewCount;
    document.getElementById('rejectedCardsCount').innerText = rejectedCount;
    document.getElementById('jobs-count').innerText = `${total} jobs`;
}

// updateAllStatus 
function updateAllStatus(id,type) {
    document.querySelectorAll(`.card[data-id="${id}"]`).forEach(card => {
        const si = card.querySelector('.status-interview');
        const sr = card.querySelector('.status-rejected');
        if (type === 'interview') {
            si.classList.remove('hidden');
            sr.classList.add('hidden');
        } else {
            sr.classList.remove('hidden');
            si.classList.add('hidden');
        }
    });
}

// click delegation
const interviewSection = document.getElementById('interview-section');
const rejectedSection = document.getElementById('rejected-section');

document.addEventListener('click', function (e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const card = btn.closest('.card');
    if (!card) return;

    const id = card.dataset.id;

    // delete remove all copies of this card everywhere
    if (btn.classList.contains('delete-btn-card')) {
        document.querySelectorAll(`.card[data-id="${id}"]`).forEach(c => c.remove());
        updateCounts();
        return;
    }

    // interview button
    if (btn.classList.contains('interview-btn-card')) {
        const isInAllJobs = card.closest('#all-jobs-section');

        // remove old copy from interview or rejected section
        document.querySelectorAll(
            `#interview-section .card[data-id="${id}"],
             #rejected-section .card[data-id="${id}"]`
        ).forEach(c => c.remove());

        updateAllStatus(id, 'interview');

        if (isInAllJobs) {
            interviewSection.appendChild(card.cloneNode(true));
        } else {
            interviewSection.appendChild(card);
        }
        updateCounts();
    }

    // rejected button
    if (btn.classList.contains('rejected-btn-card')) {
        const isInAllJobs = card.closest('#all-jobs-section');

        // remove old copy from interview or rejected section
        document.querySelectorAll(
            `#interview-section .card[data-id="${id}"],
             #rejected-section .card[data-id="${id}"]`
        ).forEach(c => c.remove());

        updateAllStatus(id,'rejected');

        if (isInAllJobs) {
            rejectedSection.appendChild(card.cloneNode(true));
        } else {
            rejectedSection.appendChild(card);
        }
        updateCounts();
    }
});

updateCounts();