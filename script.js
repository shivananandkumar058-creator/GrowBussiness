js = r'''/* =========================================
   GROWBUSINESS JAVASCRIPT
   Small interaction layer only
========================================= */


/* =========================================
   1. MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
    });

});


/* =========================================
   2. FAQ ACCORDION
========================================= */

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const currentItem = button.parentElement;

        document.querySelectorAll(".faq-item").forEach(function (item) {

            if (item !== currentItem) {
                item.classList.remove("active");
            }

        });

        currentItem.classList.toggle("active");

    });

});


/* =========================================
   3. CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "✓ Thank you! Your enquiry has been received.";

    formMessage.style.display = "block";

    contactForm.reset();

});
'''

base = Path("/mnt/data/growbusiness_step_by_step")
base.mkdir(exist_ok=True)

(base / "index.html").write_text(html, encoding="utf-8")
(base / "style.css").write_text(css, encoding="utf-8")
(base / "script.js").write_text(js, encoding="utf-8")

import zipfile
zip_path = Path("/mnt/data/growbusiness_step_by_step.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for name in ["index.html", "style.css", "script.js"]:
        z.write(base / name, name)

print("Created:", zip_path)
print("CSS lines:", len(css.splitlines()))
print("Files:", list(p.name for p in base.iterdir()))
print("CSS is organized into 21 numbered sections.")
print("JavaScript remains intentionally small.")
print("HTML contains the main website structure and content.")
print("Ready for download.")
print(zip_path)
print(base / "style.css")
print(base / "index.html")
print(base / "script.js")
print("Done")
print("GrowBusiness")
print("HTML + CSS + JS")
print("Step-by-step CSS")
print("Responsive")
print("Mobile menu")
print("FAQ")
print("Form")
print("End")
print(" ")
print("Download ZIP available.")
print(" ")