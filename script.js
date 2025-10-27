// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.toggle("active")
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const headerHeight = document.querySelector(".header").offsetHeight
    const sectionTop = section.offsetTop - headerHeight

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    })
  }
}

// FAQ Toggle
function toggleFAQ(button) {
  const faqItem = button.parentElement
  const isActive = faqItem.classList.contains("active")

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active")
  }
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const mobileMenu = document.getElementById("mobileMenu")
  const menuBtn = document.querySelector(".mobile-menu-btn")

  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(event.target) &&
    !menuBtn.contains(event.target)
  ) {
    mobileMenu.classList.remove("active")
  }
})

// Add scroll effect to header
let lastScroll = 0
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)"
  }

  lastScroll = currentScroll
})
