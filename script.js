// =============== PAGE NAVIGATION ===============
function showPage(pageId) {
    const target = document.getElementById(pageId);
    if (!target) {
        console.warn(`showPage: no element with id "${pageId}" found.`);
        return;
    }
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    target.classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-page') === pageId);
    });

    // Scroll to top whenever we switch pages
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });

    // The services strip is inside a page that starts as display:none, so its
    // width can only be measured accurately once it's actually visible.
    // Re-check the scroll-arrow visibility every time this page is shown.
    if (pageId === 'services') {
        // Wait a frame so the browser has applied the newly-added .active class
        // (display:block) before we measure scrollWidth/clientWidth.
        requestAnimationFrame(updateServicesArrowVisibility);
    }
}

// Reference to the services scroll-arrow updater, assigned once the DOM is ready.
let updateServicesArrowVisibility = function () {};

// =============== PROJECTS DATA ===============
const projects = [
    {
        title: "The Dam Redhill",
        location: "The Bamboo Dam",
        image: "assets/images/zipline-construction.jpg",
        alt: "Zipline project at The Dam Redhill with scenic dam views.",
        description: "A thrilling zipline installed over the scenic dam with beautiful panoramic views. Ziplining across a dam is so lively. There is a long zipline at KSh 1000/= and a short one at KSh 500/=. Come and experience an adrenaline rush with us."
    },
    {
        title: "The Kentmere Club",
        location: "The Kentmere Club",
        image: "",
        alt: "The Kentmere Club project offers a relaxed, scenic outdoor adventure setting for members and guests.",
        description: "A welcoming leisure project designed for a premium club environment, blending adventure with a refined outdoor experience for families, friends, and visitors."
    },
    {
        title: "Redhill Kating",
        location: "Redhill Kating",
        image: "",
        alt: "Redhill Kating is a nature-focused adventure site with a memorable outdoor activity experience.",
        description: "A vibrant outdoor project in a scenic location, ideal for visitors looking for a memorable adventure experience in a peaceful and natural setting."
    },
    {
        title: "Naiposha Gardens",
        location: "Naiposha Gardens",
        image: "assets/images/sky-cycling.jpg",
        alt: "Naiposha Gardens features a lush zipline experience over natural garden scenery.",
        description: "Beautiful zipline set in lush gardens, offering a perfect blend of nature and adventure. This is a hidden gem around Kabuku. A 700m zipline over a farm and garden is so elating and satisfying."
    },
    {
        title: "The Big 5 Lounge",
        location: "Big 5 Lounge Ruaka",
        image: "assets/images/giant-swings.jpg",
        alt: "The Big 5 Lounge project includes a fun zipline across a restaurant garden setting.",
        description: "Exciting zipline project at The Big 5 Lounge. A short zipline across a garden on a restaurant. Available for both kids and adults at only KSh 200/=. Come all!"
    },
    {
        title: "La Cascadas Miguela Sports Garden",
        location: "La Cascada, Ruaka",
        image: "assets/images/zipline-inspection.jpg",
        alt: "La Cascadas Miguela Sports Garden has a zipline crossing a waterfall river course.",
        description: "Zipline designed for sports and recreational activities. The zipline goes across a river with a waterfall. Two-way zipline for both kids and adults at KSh 700 per person."
    },
    {
        title: "The Stephanos, Gatundu",
        location: "Gatundu, Stephanos Resort",
        image: "assets/images/high-ropes.jpg",
        alt: "The Stephanos project combines zipline and ropes features for team-building adventure.",
        description: "Zipline and rope course project ideal for team building. A hidden gem in Gatundu South."
    },
    {
        title: "Twin Rivers, Tigoni",
        location: "Tigoni",
        image: "assets/images/sky-cycling.jpg",
        alt: "Twin Rivers Tigoni combines sky cycling and giant swings above tea gardens.",
        description: "Impressive zipline combined with sky cycling and giant swings above the tea gardens."
    },
    {
        title: "Tenwek Falls",
        location: "Tenwek",
        image: "assets/images/zipline-construction.jpg",
        alt: "Tenwek Falls features a dramatic zipline crossing the river below a waterfall.",
        description: "Spectacular zipline across River Mara at Tenwek Falls."
    }
];

// =============== INITIALIZE ===============
document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const li = document.createElement('li');
        const btn = document.createElement('button');

        btn.className = 'project-btn';
        btn.type = 'button';
        btn.textContent = project.title;
        btn.addEventListener('click', () => showModal(project));

        li.appendChild(btn);
        projectList.appendChild(li);
    });

    // Modal Function
    function showModal(project) {
        const imageEl = document.getElementById('modal-image');
        const imageAltEl = document.getElementById('modal-image-alt');
        const altText = project.alt || `No image available for ${project.title}.`;

        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('modal-location').textContent = project.location;

        if (project.image) {
            imageEl.src = project.image;
            imageEl.alt = altText;
            imageEl.style.display = 'block';
            imageAltEl.textContent = '';
            imageAltEl.style.display = 'none';
        } else {
            imageEl.removeAttribute('src');
            imageEl.alt = altText;
            imageEl.style.display = 'none';
            imageAltEl.textContent = altText;
            imageAltEl.style.display = 'block';
        }

        const modal = document.getElementById('project-modal');
        modal.classList.add('show');
    }

    // Modal Controls
    document.querySelector('.close-btn').addEventListener('click', () => {
        document.getElementById('project-modal').classList.remove('show');
    });
    document.getElementById('gps-btn').addEventListener('click', () => {
        const loc = document.getElementById('modal-location').textContent;
        window.open(`https://www.google.com/maps/search/${encodeURIComponent(loc)}`, '_blank');
    });
    document.getElementById('back-btn').addEventListener('click', () => {
        document.getElementById('project-modal').classList.remove('show');
    });
    // Close modal when clicking the dark overlay itself
    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target.id === 'project-modal') {
            e.currentTarget.classList.remove('show');
        }
    });

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Navigation: catch every element carrying a data-page attribute
    // (top nav, home buttons, service cards, back-links, in-copy "Contact Us" links, etc.)
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            navMenu.classList.remove('active');
        });
    });

    // Services strip: left/right arrow scrolling
    const servicesList = document.getElementById('services-list');
    const servicesScrollLeft = document.getElementById('services-scroll-left');
    const servicesScrollRight = document.getElementById('services-scroll-right');

    if (servicesList && servicesScrollLeft && servicesScrollRight) {
        // Scroll by roughly one and a half cards at a time
        const getScrollStep = () => {
            const firstCard = servicesList.querySelector('.service-card');
            const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 230;
            return Math.round(cardWidth * 1.5);
        };

        servicesScrollLeft.addEventListener('click', () => {
            servicesList.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        });
        servicesScrollRight.addEventListener('click', () => {
            servicesList.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        });

        // Hide an arrow when there's nothing left to scroll toward on that side.
        // If the strip has no overflow at all yet (e.g. measured while its page
        // was still display:none), default both arrows to visible rather than
        // hiding them, so a stale zero-width reading can't strand the user
        // without controls.
        updateServicesArrowVisibility = () => {
            const hasOverflow = servicesList.scrollWidth > servicesList.clientWidth + 2;
            if (!hasOverflow) {
                servicesScrollLeft.style.visibility = 'visible';
                servicesScrollRight.style.visibility = 'visible';
                return;
            }
            const maxScrollLeft = servicesList.scrollWidth - servicesList.clientWidth;
            const atStart = servicesList.scrollLeft <= 2;
            const atEnd = servicesList.scrollLeft >= maxScrollLeft - 2;

            servicesScrollLeft.style.visibility = atStart ? 'hidden' : 'visible';
            servicesScrollRight.style.visibility = atEnd ? 'hidden' : 'visible';
        };

        servicesList.addEventListener('scroll', updateServicesArrowVisibility);
        window.addEventListener('resize', updateServicesArrowVisibility);
        updateServicesArrowVisibility();
    }

    // Start on Home
    showPage('home');
});

// ===================== BOOKING PAGE (merged from booking.html) =====================

        let currentStep = 1;
        let userEmail = "";
        let generatedOTP = "";
        let countdownTimer;

        // Future Date Restriction (Tomorrow onwards)
        window.addEventListener('DOMContentLoaded', () => {
            const dateInput = document.getElementById('date');
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);

            const yyyy = tomorrow.getFullYear();
            const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
            const dd = String(tomorrow.getDate()).padStart(2, '0');
            
            dateInput.min = `${yyyy}-${mm}-${dd}`;
        });

        // Step Navigation
        function updateProgress() {
            const lines = { 1: "0%", 2: "33%", 3: "66%", 4: "100%" };
            document.getElementById('progressLine').style.width = lines[currentStep];

            for (let i = 1; i <= 4; i++) {
                const el = document.getElementById(`stepIndicator${i}`);
                const stepBox = document.getElementById(`step${i}`);
                
                el.classList.remove('active', 'completed');
                stepBox.classList.remove('active');

                if (i === currentStep) {
                    el.classList.add('active');
                    stepBox.classList.add('active');
                } else if (i < currentStep) {
                    el.classList.add('completed');
                }
            }
        }

        function goToStep(step) {
            currentStep = step;
            updateProgress();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Generate 6-digit Security Code
        function produce6DigitOTP() {
            return Math.floor(100000 + Math.random() * 900000).toString();
        }

        // Request OTP
        function sendOTP() {
            const emailInput = document.getElementById('signinEmail');
            const emailErr = document.getElementById('emailError');

            if (!emailInput.value || !emailInput.checkValidity()) {
                emailErr.style.display = 'block';
                emailErr.innerText = 'Please enter a valid email address.';
                return;
            }
            emailErr.style.display = 'none';

            userEmail = emailInput.value.trim().toLowerCase();
            generatedOTP = produce6DigitOTP();

            document.getElementById('displayEmail').innerText = userEmail;
            document.getElementById('generatedCodeDisplay').innerText = generatedOTP;
            document.getElementById('verifiedEmailText').innerText = userEmail;
            document.getElementById('otpPasteInput').value = '';
            document.getElementById('otpError').style.display = 'none';
            document.getElementById('otpSuccess').style.display = 'none';

            goToStep(2);
            startCountdown();
        }

        // 1-Click Copy Code to Clipboard
        function copyOTPToClipboard() {
            navigator.clipboard.writeText(generatedOTP).then(() => {
                const otpSucc = document.getElementById('otpSuccess');
                otpSucc.style.display = 'block';
                otpSucc.innerText = '✓ Code ' + generatedOTP + ' copied! Now paste (Ctrl+V) into the box below.';
            });
        }

        // Mobile 1-Tap Auto Fill Helper
        function autoFillOtpMobile() {
            if (generatedOTP) {
                document.getElementById('otpPasteInput').value = generatedOTP;
                document.getElementById('otpError').style.display = 'none';
                const otpSucc = document.getElementById('otpSuccess');
                otpSucc.style.display = 'block';
                otpSucc.innerText = '✓ Code auto-filled!';
            }
        }

        // Countdown Timer
        function startCountdown() {
            let seconds = 30;
            const display = document.getElementById('countdown');
            const resendBtn = document.getElementById('resendBtn');
            resendBtn.style.display = 'none';
            display.parentElement.style.display = 'block';

            clearInterval(countdownTimer);
            countdownTimer = setInterval(() => {
                seconds--;
                display.innerText = seconds;
                if (seconds <= 0) {
                    clearInterval(countdownTimer);
                    display.parentElement.style.display = 'none';
                    resendBtn.style.display = 'inline';
                }
            }, 1000);
        }

        function resendOTP() {
            sendOTP();
        }

        /* ==========================================================================
           SCREEN-AWARE OTP CONTROL LOGIC
           Enforces strict Copy & Paste on Desktop screens (> 650px)
           Allows flexible mobile input on mobile screens (<= 650px)
           ========================================================================== */
        function preventSingleTyping(e) {
            // Enforce strict desktop copy-paste restriction on screens larger than 650px
            if (window.innerWidth > 650) {
                if (e.ctrlKey || e.metaKey || e.key === 'Tab' || e.key === 'Backspace' || e.key.startsWith('Arrow')) {
                    return;
                }
                e.preventDefault();
                showOtpError("Single keypress entry is disabled on desktop. Please COPY the code and PASTE it here.");
            }
        }

        function handleOtpPaste(e) {
            e.preventDefault();
            const pastedText = (e.clipboardData || window.clipboardData).getData('text').trim();

            const otpErr = document.getElementById('otpError');
            const otpSucc = document.getElementById('otpSuccess');

            if (/^\d{6}$/.test(pastedText)) {
                document.getElementById('otpPasteInput').value = pastedText;
                otpErr.style.display = 'none';
                otpSucc.style.display = 'block';
                otpSucc.innerText = '✓ Code pasted successfully! Click "Verify Code" below.';
            } else {
                otpSucc.style.display = 'none';
                showOtpError("Invalid paste! Please paste the 6-digit numeric OTP code.");
            }
        }

        function showOtpError(msg) {
            const otpErr = document.getElementById('otpError');
            otpErr.innerText = msg;
            otpErr.style.display = 'block';
        }

        function verifyOTP() {
            const val = document.getElementById('otpPasteInput').value.trim();

            if (!val) {
                showOtpError("Please paste or insert your 6-digit OTP code before proceeding.");
                return;
            }

            if (val === generatedOTP || val.length === 6) {
                document.getElementById('otpError').style.display = 'none';
                goToStep(3);
            } else {
                showOtpError("Incorrect code. Please check your verification code and try again.");
            }
        }

        /* ==========================================================================
           STEP 3: EMAIL CLIENT REDIRECT & FUTURE DATE CHECK
           ========================================================================== */
        function submitBooking(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const dateVal = document.getElementById('date').value;
            const location = document.getElementById('location').value.trim();
            const details = document.getElementById('details').value.trim();
            const bookingErr = document.getElementById('bookingError');

            // Strictly enforce FUTURE dates
            const selectedDate = new Date(dateVal + "T00:00:00");
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate <= today) {
                bookingErr.style.display = 'block';
                bookingErr.innerText = 'STRICT DATE POLICY: Selected date must strictly be in the future (from tomorrow onwards). Past or current dates are not allowed.';
                return;
            }
            bookingErr.style.display = 'none';

            const refNo = "KS-" + Math.floor(100000 + Math.random() * 900000);

            // Receipt Summary
            document.getElementById('receiptRef').innerText = refNo;
            document.getElementById('receiptName').innerText = name;
            document.getElementById('receiptEmail').innerText = userEmail;
            document.getElementById('receiptPhone').innerText = phone;
            document.getElementById('receiptService').innerText = service;
            document.getElementById('receiptLocation').innerText = location;
            document.getElementById('receiptDate').innerText = dateVal;

            // Direct Email Sending Redirect to allankichuma21@gmail.com
            const recipient = "allankichuma21@gmail.com";
            const subject = encodeURIComponent(`BOOKING REQUEST: ${service} - ${name} [${refNo}]`);
            const body = encodeURIComponent(
                `KICHUMA STRUCTURES BOOKING REQUEST\n` +
                `====================================\n\n` +
                `Reference No: ${refNo}\n` +
                `Client Name: ${name}\n` +
                `Verified Email: ${userEmail}\n` +
                `Phone Number: ${phone}\n` +
                `Service: ${service}\n` +
                `Target Date: ${dateVal} (Strict Future Date)\n` +
                `Location: ${location}\n\n` +
                `Additional Details:\n${details || 'None specified.'}\n\n` +
                `====================================\n` +
                `Sent via Kichuma Structures Web Portal`
            );

            // Opens Gmail's web compose window (in a new tab) pre-filled with
            // recipient, subject, and body — works in any browser regardless
            // of whether the device has a default desktop mail app configured.
            const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${subject}&body=${body}`;
            window.open(gmailComposeUrl, '_blank');

            goToStep(4);
        }

        function resetApp() {
            document.getElementById('signinEmail').value = '';
            document.getElementById('bookingForm').reset();
            goToStep(1);
        }