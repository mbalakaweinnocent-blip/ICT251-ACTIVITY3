/* ==========================================================================
   ICT251 Web Technologies - Activity 3 Main JavaScript Logic
   Author: Innocent Mbalakawe
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initThemeSwitch();
    initExpandableContent();
    initStudyCalculator();
    initContactFormValidation();
});

/* --------------------------------------------------------------------------
   Feature 1: Theme Switch (Light / Dark Appearance Toggle)
   -------------------------------------------------------------------------- */
function initThemeSwitch() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (!themeBtn) return;

    themeBtn.addEventListener('click', () => {
        // Toggle dark theme class on body
        document.body.classList.toggle('dark-theme');
        
        const isDark = document.body.classList.contains('dark-theme');
        themeBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}

/* --------------------------------------------------------------------------
   Feature 2: Expandable Content (Show/Hide Project Details)
   -------------------------------------------------------------------------- */
function initExpandableContent() {
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetDetails = document.getElementById(targetId);

            if (targetDetails) {
                targetDetails.classList.toggle('hidden');
                const isHidden = targetDetails.classList.contains('hidden');
                button.textContent = isHidden ? 'Show Details' : 'Hide Details';
            }
        });
    });
}

/* --------------------------------------------------------------------------
   Feature 3: Study Hours Calculator
   -------------------------------------------------------------------------- */
function initStudyCalculator() {
    const calcBtn = document.getElementById('calc-btn');
    const resultDiv = document.getElementById('calc-result');

    if (!calcBtn || !resultDiv) return;

    calcBtn.addEventListener('click', () => {
        const hoursInput = document.getElementById('hours-per-day').value.trim();
        const daysInput = document.getElementById('days-per-week').value.trim();

        const hours = parseFloat(hoursInput);
        const days = parseInt(daysInput, 10);

        resultDiv.className = 'result-message';

        // Reject blank, non-numeric, negative, or invalid ranges
        if (hoursInput === '' || daysInput === '' || isNaN(hours) || isNaN(days)) {
            resultDiv.classList.add('error');
            resultDiv.textContent = 'Please enter valid numbers for both hours and days.';
            return;
        }

        if (hours <= 0 || hours > 24) {
            resultDiv.classList.add('error');
            resultDiv.textContent = 'Planned hours per day must be between 1 and 24.';
            return;
        }

        if (days < 1 || days > 7) {
            resultDiv.classList.add('error');
            resultDiv.textContent = 'Days per week must be between 1 and 7.';
            return;
        }

        // Output total weekly hours
        const totalHours = hours * days;
        resultDiv.classList.add('success');
        resultDiv.textContent = `Target Study Plan: ${hours} hrs/day × ${days} days = ${totalHours.toFixed(1)} total study hours per week.`;
    });
}

/* --------------------------------------------------------------------------
   Feature 4: Compulsory Contact Form Validation & Local Preview
   -------------------------------------------------------------------------- */
function initContactFormValidation() {
    const form = document.getElementById('contact-form');
    const summaryBox = document.getElementById('contact-summary');

    if (!form || !summaryBox) return;

    form.addEventListener('submit', (event) => {
        // Prevent default browser form submission reload
        event.preventDefault();

        clearErrors();
        summaryBox.className = 'summary-box hidden';
        summaryBox.textContent = '';

        const nameInput = document.getElementById('contact-name').value.trim();
        const emailInput = document.getElementById('contact-email').value.trim();
        const messageInput = document.getElementById('contact-message').value.trim();

        let isValid = true;

        // Check empty or whitespace-only name
        if (nameInput === '') {
            showError('name-error', 'Name is required and cannot be blank or spaces only.');
            isValid = false;
        }

        // Email regex pattern check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput === '') {
            showError('email-error', 'Email address is required.');
            isValid = false;
        } else if (!emailPattern.test(emailInput)) {
            showError('email-error', 'Please enter a valid email address (e.g. user@example.com).');
            isValid = false;
        }

        // Check empty or whitespace-only message
        if (messageInput === '') {
            showError('message-error', 'Message is required and cannot be blank or spaces only.');
            isValid = false;
        }

        // Render local preview if valid
        if (isValid) {
            summaryBox.classList.remove('hidden');
            summaryBox.classList.add('success');

            const heading = document.createElement('h3');
            heading.textContent = 'Form Submission Validated (Local Preview)';

            const note = document.createElement('p');
            note.textContent = 'Browser demonstration only — no message was sent.';

            const detailsList = document.createElement('ul');

            const nameItem = document.createElement('li');
            nameItem.textContent = `Name: ${nameInput}`;

            const emailItem = document.createElement('li');
            emailItem.textContent = `Email: ${emailInput}`;

            const messageItem = document.createElement('li');
            messageItem.textContent = `Message: ${messageInput}`;

            detailsList.appendChild(nameItem);
            detailsList.appendChild(emailItem);
            detailsList.appendChild(messageItem);

            summaryBox.appendChild(heading);
            summaryBox.appendChild(note);
            summaryBox.appendChild(detailsList);

            form.reset();
        }
    });
}

function showError(elementId, message) {
    const errorSpan = document.getElementById(elementId);
    if (errorSpan) {
        errorSpan.textContent = message;
    }
}

function clearErrors() {
    const errorSpans = document.querySelectorAll('.error-msg');
    errorSpans.forEach(span => {
        span.textContent = '';
    });
}