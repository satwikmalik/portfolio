.animate-modal {
	animation: popIn 0.4s cubic-bezier(.77,0,.18,1);
}
@keyframes popIn {
	0% { opacity: 0; transform: scale(0.8); }
	80% { opacity: 1; transform: scale(1.05); }
	100% { opacity: 1; transform: scale(1); }
}
.resume-modal {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(108,99,255,0.08);
	align-items: center;
	justify-content: center;
	z-index: 100;
}
.modal-content {
	background: #fff;
	border-radius: 32px;
	box-shadow: 0 8px 48px rgba(108,99,255,0.18);
	padding: 36px 32px;
	min-width: 340px;
	max-width: 90vw;
	font-size: 1.1em;
	color: #222;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	transition: transform 0.2s;
	position: relative;
}
.modal-content:hover {
	transform: scale(1.03);
}
.resume-mini-card {
	width: 110px;
	height: 110px;
	margin: 0 8px;
	border-radius: 24px;
	box-shadow: 0 2px 16px rgba(108,99,255,0.10);
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Space Grotesk', 'Montserrat', Arial, sans-serif;
	font-size: 1.1em;
	color: #6c63ff;
	font-weight: 700;
	cursor: pointer;
	transition: box-shadow 0.3s, transform 0.2s;
	z-index: 10;
}
.resume-mini-card:hover {
	box-shadow: 0 8px 32px rgba(108,99,255,0.22);
	transform: scale(1.08);
}
.circle-card {
	border-radius: 50%;
	background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
	width: 70px;
	height: 70px;
	margin: 0 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 16px rgba(108,99,255,0.13);
}
.gradient-card {
	background: linear-gradient(120deg, #fcb69f 0%, #a1c4fd 100%);
	color: #fff;
	border-radius: 24px;
	width: 110px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 16px rgba(252,182,159,0.13);
}
.mini-card-front {
	text-align: center;
	width: 100%;
}
.resume-mini-card {
	width: 180px;
	height: 110px;
	margin: 32px auto 0 auto;
	border-radius: 24px;
	box-shadow: 0 2px 16px rgba(108,99,255,0.10);
	background: linear-gradient(120deg, #f3f0ff 80%, #e0c3fc 100%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Space Grotesk', 'Montserrat', Arial, sans-serif;
	font-size: 1.1em;
	color: #6c63ff;
	font-weight: 700;
	cursor: pointer;
	transition: box-shadow 0.3s, transform 0.2s;
	z-index: 10;
}
.resume-mini-card:hover {
	box-shadow: 0 8px 32px rgba(108,99,255,0.22);
	transform: scale(1.05);
}
.mini-card-front {
	text-align: center;
}
.resume-modal {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(108,99,255,0.08);
	align-items: center;
	justify-content: center;
	z-index: 100;
	animation: fadeIn 0.4s;
}
.modal-content {
	background: #fff;
	border-radius: 32px;
	box-shadow: 0 8px 48px rgba(108,99,255,0.18);
	padding: 36px 32px;
	min-width: 340px;
	max-width: 90vw;
	font-size: 1.1em;
	color: #222;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	transition: transform 0.2s;
}
.modal-content:hover {
	transform: scale(1.03);
}
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Montserrat:wght@500;700&display=swap');
body {
	font-family: 'Space Grotesk', 'Montserrat', Arial, sans-serif;
	background: linear-gradient(120deg, #f7f7fa 60%, #e0c3fc 100%);
	margin: 0;
	padding: 0;
	color: #222;
	letter-spacing: 0.01em;
}

header {
	background: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);
	padding: 56px 0 32px 0;
	text-align: center;
	border-bottom: 0;
	box-shadow: 0 2px 24px rgba(161,196,253,0.13);
}

.main-title {
	font-size: 3.2rem;
	font-weight: 700;
	letter-spacing: -0.04em;
	color: #6c63ff;
	margin-bottom: 0.3em;
	font-family: 'Space Grotesk', 'Montserrat', Arial, sans-serif;
}
.subtitle {
	font-size: 1.2rem;
	color: #222;
	opacity: 0.8;
	font-weight: 500;
	font-family: 'Montserrat', Arial, sans-serif;
}
.emoji {
	font-size: 1.2em;
	vertical-align: middle;
}

.container {
	max-width: 650px;
	margin: 0 auto;
	padding: 0 24px;
}

section {
	margin: 56px 0;
	background: #fff;
	border-radius: 32px;
	box-shadow: 0 2px 32px rgba(108,99,255,0.09);
	padding: 40px 0;
	transition: box-shadow 0.3s;
}
section:hover {
	box-shadow: 0 8px 48px rgba(108,99,255,0.18);
}

h1, h2, h3 {
	margin: 0 0 22px 0;
	font-family: 'Space Grotesk', 'Montserrat', Arial, sans-serif;
}
h2 {
	font-size: 1.7rem;
	color: #6c63ff;
	font-weight: 700;
}

.project-list {
	display: flex;
	gap: 32px;
	flex-wrap: wrap;
}
.project {
	background: linear-gradient(120deg, #f3f0ff 80%, #e0c3fc 100%);
	border-radius: 24px;
	padding: 24px;
	flex: 1 1 220px;
	box-shadow: 0 2px 16px rgba(108,99,255,0.10);
	transition: transform 0.3s, box-shadow 0.3s;
	font-family: 'Montserrat', Arial, sans-serif;
}
.project:hover {
	transform: translateY(-8px) scale(1.04);
	box-shadow: 0 8px 32px rgba(108,99,255,0.22);
}

#contact-form {
	display: flex;
	flex-direction: column;
	gap: 18px;
	max-width: 360px;
	margin: 0 auto;
}
#contact-form input, #contact-form textarea {
	padding: 14px;
	border: none;
	border-radius: 999px;
	font-size: 1em;
	background: #f7f7fa;
	box-shadow: 0 1px 8px rgba(108,99,255,0.07);
	transition: box-shadow 0.2s;
}
#contact-form input:focus, #contact-form textarea:focus {
	box-shadow: 0 2px 16px #a1c4fd;
	outline: none;
}
#contact-form textarea {
	border-radius: 24px;
	min-height: 80px;
	resize: vertical;
}
.pill-btn {
	background: linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%);
	color: #6c63ff;
	border: none;
	padding: 14px 0;
	border-radius: 999px;
	font-size: 1.1em;
	font-weight: 700;
	cursor: pointer;
	box-shadow: 0 2px 16px rgba(252,182,159,0.13);
	transition: background 0.2s, transform 0.2s;
	position: relative;
	overflow: hidden;
}
.pill-btn:active {
	transform: scale(0.97);
}
.pill-btn::after {
	content: '';
	position: absolute;
	left: 50%;
	top: 50%;
	width: 0;
	height: 0;
	background: rgba(108,99,255,0.15);
	border-radius: 50%;
	transform: translate(-50%, -50%);
	transition: width 0.3s, height 0.3s;
	z-index: 0;
}
.pill-btn:active::after {
	width: 120px;
	height: 120px;
}

footer {
	background: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);
	color: #6c63ff;
	text-align: center;
	padding: 32px 0;
	font-size: 1.1em;
	border-top: 0;
	font-family: 'Montserrat', Arial, sans-serif;
}
.heart {
	color: #ff6b81;
	font-size: 1.2em;
	vertical-align: middle;
	animation: pulse 1.2s infinite;
}
@keyframes pulse {
	0% { transform: scale(1); }
	50% { transform: scale(1.2); }
	100% { transform: scale(1); }
}

.fade-in {
	opacity: 0;
	transform: translateY(30px);
	transition: opacity 0.8s cubic-bezier(.77,0,.18,1), transform 0.8s cubic-bezier(.77,0,.18,1);
}
.fade-in.visible {
	opacity: 1;
	transform: none;
}
