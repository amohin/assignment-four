

// count

const cards = document.querySelectorAll('#all-jobs-section .card');
const total = cards.length;
document.getElementById('total-jobs').innerText = total;

const interviewCards = document.querySelectorAll('#interview-section .card');
const interviewCount = interviewCards.length;
document.getElementById('interviewCardsCount').innerText = interviewCount;






const interviewSection = document.getElementById('interview-section');
const rejectedSection = document.getElementById('rejected-section');

document.addEventListener('click', function (e) {

  const btn = e.target;
  const card = btn.closest('.card');
  if (!card) return;

  const id = card.dataset.id;  
  const exists = document.querySelector(
    `#interview-section .card[data-id="${id}"], 
     #rejected-section .card[data-id="${id}"]`
  ); 

  if (btn.classList.contains('interview-btn-card')){
    if (card.parentElement.id === 'all-jobs-section' && exists) return;
    updateAllStatus(id, 'interview');
    if (card.parentElement.id === 'all-jobs-section') {
      interviewSection.appendChild(card.cloneNode(true));
    } else {
      interviewSection.appendChild(card);
    }
  }

  
  if (btn.classList.contains('rejected-btn-card')){
    if (card.parentElement.id === 'all-jobs-section' && exists) return;
    updateAllStatus(id, 'rejected');
    if (card.parentElement.id === 'all-jobs-section') {
      rejectedSection.appendChild(card.cloneNode(true));
    } 
    else {
      rejectedSection.appendChild(card);
    }
  }

});

function updateAllStatus(id, type) {
  const cards = document.querySelectorAll(`.card[data-id="${id}"]`);
  cards.forEach(card => {
    const si = card.querySelector('.status-interview');
    const sr = card.querySelector('.status-rejected');
    if (type === 'interview') {
      si.classList.remove('hidden');
      sr.classList.add('hidden');
    } 
    else {
      sr.classList.remove('hidden');
      si.classList.add('hidden');
    }
  });
}

// move card

// const interviewSection = document.getElementById('interview-section');
// const rejectedSection = document.getElementById('rejected-section');
// const allJobsSection = document.getElementById('all-jobs-section');

// document.addEventListener('click', function (e) {

//   const btn = e.target;
//   const card = btn.closest('.card');
//   if (!card) return;

//   const statusInterview = card.querySelector('.status-interview');
//   const statusRejected = card.querySelector('.status-rejected');

//   if (btn.classList.contains('interview-btn-card')) {
//     statusInterview.classList.remove('hidden');
//     statusRejected.classList.add('hidden');
//     interviewSection.appendChild(card);    
//   }

//   if (btn.classList.contains('rejected-btn-card')) {    
//     statusRejected.classList.remove('hidden');
//     statusInterview.classList.add('hidden');    
//     rejectedSection.appendChild(card);    
//   }

// });

