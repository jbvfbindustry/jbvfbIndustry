/* ==========================================================================
   JBV Group Corporate Website - JavaScript Logic
   Domain: jbvfbindustry.in
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Navbar Scroll Effect & Active Link Highlight
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('header, section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy Highlight
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinksMenu = document.getElementById('nav-links');

  mobileToggle.addEventListener('click', () => {
    navLinksMenu.classList.toggle('mobile-active');
  });

  navLinksMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksMenu.classList.remove('mobile-active');
    });
  });

  // 3. Division Detail Data Object
  const divisionDetails = {
    "1": {
      title: "JBV Food & Beverage Industry",
      icon: "🥤",
      category: "Flagship Manufacturing Division",
      description: "JBV Food & Beverage Industry is the premier division of JBV Group, dedicated to manufacturing, processing, and distributing high-quality beverages, packaged food products, and organic natural refreshments.",
      highlights: [
        "FSSAI compliant standards and strict quality inspection",
        "Natural ingredients sourced directly from sustainable farms",
        "Modern bottling and hygienic food processing infrastructure",
        "Distribution network spanning Tamil Nadu and nationwide markets"
      ]
    },
    "2": {
      title: "JBV Creative Products",
      icon: "🎨",
      category: "Design & Lifestyle Crafts",
      description: "JBV Creative Products produces aesthetic, handcrafted, and innovative lifestyle decor, artistic novelties, and custom design solutions for homes and modern commercial spaces.",
      highlights: [
        "Custom artisan designs and bespoke handcrafted merchandise",
        "Sustainable materials and eco-friendly product lines",
        "Ideal for corporate gifting and home aesthetics"
      ]
    },
    "3": {
      title: "JBV Party Supplies",
      icon: "🎉",
      category: "Events & Celebrations",
      description: "JBV Party Supplies provides complete celebration accessories, party favors, themed venue decorations, and event styling essentials for birthdays, weddings, and corporate gatherings.",
      highlights: [
        "Wide variety of vibrant celebration accessories & props",
        "Eco-friendly tableware and decorative items",
        "Customized party kits tailored for all ages"
      ]
    },
    "4": {
      title: "JBV Online Store",
      icon: "🛒",
      category: "Direct E-Commerce Portal",
      description: "JBV Online Store serves as our centralized e-commerce destination allowing consumers worldwide to browse, order, and receive authentic JBV products directly at their doorstep.",
      highlights: [
        "Secure digital checkout & multi-payment gateway integration",
        "Fast nationwide order fulfillment and real-time tracking",
        "Exclusive subscriber discounts and seasonal bundles"
      ]
    },
    "5": {
      title: "JBV Digital Media",
      icon: "🎬",
      category: "Animation & Content Creation",
      description: "JBV Digital Media leads our creative content ecosystem, producing uplifting animated stories, videos, and multimedia content hosted on YouTube (@JBVCARTOON-m1w) and Blogspot.",
      highlights: [
        "Creators of JBV Cartoon animation series",
        "Family-friendly, faith-centered, and moral values-driven storytelling",
        "High-definition digital artwork, audio production, and video editing"
      ]
    },
    "6": {
      title: "JBV Digital Solutions",
      icon: "💻",
      category: "Enterprise Tech & Development",
      description: "JBV Digital Solutions delivers cutting-edge software development, web applications, UI/UX design, cloud architecture, and IT consulting to empower businesses in the digital era.",
      highlights: [
        "Custom web application and mobile app development",
        "SEO optimization, domain management, and digital marketing strategies",
        "Robust enterprise software & API engineering"
      ]
    },
    "7": {
      title: "JBV Academy",
      icon: "🎓",
      category: "Education & Empowerment",
      description: "JBV Academy is committed to transforming lives through skill empowerment, digital literacy bootcamps, career guidance, and value-based educational programs.",
      highlights: [
        "Hands-on technical and creative skills training",
        "Youth mentorship programs focused on integrity & excellence",
        "Community workshops for digital literacy and personal growth"
      ]
    },
    "8": {
      title: "JBV Agri & Farm Solutions",
      icon: "🌾",
      category: "Sustainable Agriculture",
      description: "JBV Agri & Farm Solutions advances eco-friendly agricultural techniques, organic farming inputs, crop management solutions, and agrarian empowerment initiatives.",
      highlights: [
        "Organic farm input guidance and soil enrichment techniques",
        "Support for local farming communities in Thoothukudi & Southern India",
        "Sustainable harvesting and direct farm-to-industry supply chains"
      ]
    }
  };

  // 4. Modal Handler
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-content');

  function openModal(divisionId) {
    const data = divisionDetails[divisionId];
    if (!data) return;

    modalContent.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">${data.icon}</div>
      <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: var(--gold-light); font-weight: 700;">${data.category}</span>
      <h2 style="font-family: 'Cinzel', serif; font-size: 1.8rem; color: var(--text-main); margin: 0.4rem 0 1rem 0;">${data.title}</h2>
      <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; font-size: 1rem;">${data.description}</p>
      
      <h4 style="font-size: 0.95rem; color: var(--gold-light); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.8rem;">Key Capabilities & Features</h4>
      <ul style="list-style: none; margin-bottom: 2rem;">
        ${data.highlights.map(item => `
          <li style="color: var(--text-main); margin-bottom: 0.6rem; display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.95rem;">
            <i class="fa-solid fa-check-circle" style="color: var(--gold-light); margin-top: 0.2rem;"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="#contact" class="btn-primary" onclick="closeModal(); preselectDivision('${data.title}');">
          Inquire About This Division <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  window.closeModal = closeModal;

  window.preselectDivision = function(divisionName) {
    const select = document.getElementById('user-division');
    if (select) {
      for (let option of select.options) {
        if (option.value === divisionName) {
          option.selected = true;
          break;
        }
      }
    }
  };

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Attach Click Handler to Division Cards
  const divisionCards = document.querySelectorAll('.division-card');
  divisionCards.forEach(card => {
    card.addEventListener('click', () => {
      const divId = card.getAttribute('data-id');
      openModal(divId);
    });
  });

  // 5. Search & Category Filter Logic
  const searchInput = document.getElementById('division-search');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function filterDivisions() {
    const query = searchInput.value.toLowerCase().trim();
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');

    divisionCards.forEach(card => {
      const title = card.querySelector('.div-name').textContent.toLowerCase();
      const desc = card.querySelector('.div-desc').textContent.toLowerCase();
      const category = card.getAttribute('data-category');

      const matchesSearch = title.includes(query) || desc.includes(query);
      const matchesCategory = (activeFilter === 'all') || (category === activeFilter);

      if (matchesSearch && matchesCategory) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', filterDivisions);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterDivisions();
    });
  });

  // 6. Contact Form & WhatsApp Integration
  const contactForm = document.getElementById('contact-form');
  const whatsappBtn = document.getElementById('whatsapp-btn');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    const division = document.getElementById('user-division').value;

    alert(`Thank you ${name}! Your inquiry regarding "${division}" has been logged successfully. Proprietor Dr. K. Vinukumar and the JBV team will get back to you shortly!`);
    contactForm.reset();
  });

  whatsappBtn.addEventListener('click', () => {
    const name = document.getElementById('user-name').value || 'Visitor';
    const division = document.getElementById('user-division').value || 'JBV Group';
    const message = document.getElementById('user-message').value || 'Hello, I would like to make an inquiry.';

    const text = encodeURIComponent(`Hello Dr. K. Vinukumar (JBV Group),\n\nName: ${name}\nDivision: ${division}\nMessage: ${message}`);
    window.open(`https://wa.me/917598407598?text=${text}`, '_blank');
  });

});
