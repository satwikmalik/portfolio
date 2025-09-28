// Resume card hover shows info card on same page
const card = document.getElementById('resumeCard');
const mini = document.getElementById('resumeMini');

card.addEventListener('mouseenter', () => {
	mini.style.display = 'flex';
	mini.classList.add('animate-modal');
});
card.addEventListener('mouseleave', () => {
	mini.style.display = 'none';
	mini.classList.remove('animate-modal');
});
mini.addEventListener('click', () => {
	window.open('../../OneDrive/Desktop/RESUME.pdf.pdf', '_blank');
});
