/**
 * ==============================================================================
 * MIST WHEELS — MAIN JAVASCRIPT ENGINE
 * Handles mobile navigation, booking form validation, WhatsApp link generation,
 * FAQ accordions, suburb search, and session configuration.
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", function () {
  const config = window.MIST_CONFIG || {};

  // Check for session-overridden WhatsApp number
  const sessionWhatsApp = localStorage.getItem("mw_session_whatsapp");
  if (sessionWhatsApp && config.contact) {
    config.contact.whatsappNumber = sessionWhatsApp;
    config.contact.displayWhatsApp = `+${sessionWhatsApp}`;
  }

  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
      mobileToggle.innerHTML = isOpen ? "&#x2715;" : "&#9776;";
    });
  }

  // Highlight active page link in nav
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // 2. Helper: Generate WhatsApp URL
  function getWhatsAppDetails(text) {
    const rawNumber = (config.contact && config.contact.whatsappNumber) ? config.contact.whatsappNumber : "";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, "");

    if (cleanNumber.length >= 7) {
      return {
        url: `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`,
        hasNumber: true,
        number: cleanNumber
      };
    }

    return {
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      hasNumber: false,
      number: ""
    };
  }

  // 3. Quick WhatsApp Action Buttons
  document.querySelectorAll(".btn-whatsapp-action").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const topic = this.getAttribute("data-topic") || "General Enquiry";
      const message = `*Hello Mist Wheels!*\n\nI would like to enquire about your mobile vehicle-cleaning and detailing services in Kampala (${topic}). Please provide further information.`;
      const wa = getWhatsAppDetails(message);

      if (!wa.hasNumber && !sessionWhatsApp) {
        e.preventDefault();
        openConfigModal();
        return;
      }

      window.open(wa.url, "_blank", "noopener,noreferrer");
    });
  });

  // 4. Suburb Search Tool
  const suburbInput = document.getElementById("suburbSearchInput");
  const suburbResults = document.getElementById("suburbSearchResults");

  if (suburbInput && suburbResults && config.serviceZones) {
    const allAreas = [];
    config.serviceZones.forEach(zone => {
      zone.neighbourhoods.forEach(suburb => {
        allAreas.push({ suburb: suburb, zone: zone.name, tag: zone.tag });
      });
    });

    suburbInput.addEventListener("input", function () {
      const query = this.value.trim().toLowerCase();
      if (!query) {
        suburbResults.innerHTML = "";
        suburbResults.style.display = "none";
        return;
      }

      const matches = allAreas.filter(item => item.suburb.toLowerCase().includes(query));

      if (matches.length > 0) {
        let html = `<div style="font-size: 0.75rem; color: #38bdf8; font-weight: 700; margin-bottom: 0.5rem;">✓ Serviced in our active launch perimeter:</div>`;
        html += `<div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">`;
        matches.forEach(item => {
          html += `<a href="contact.html?neighbourhood=${encodeURIComponent(item.suburb)}" class="suburb-pill" style="color: #f1f5f9; border-color: #38bdf8; text-decoration: none;">📍 ${item.suburb} (${item.tag})</a>`;
        });
        html += `</div>`;
        suburbResults.innerHTML = html;
        suburbResults.style.display = "block";
      } else {
        suburbResults.innerHTML = `
          <div style="font-size: 0.78rem; color: #94a3b8;">
            No exact match for "${query}". We service the greater metropolitan area by prior arrangement.
            <a href="contact.html?neighbourhood=${encodeURIComponent(query)}" style="color: #38bdf8; text-decoration: underline; margin-left: 0.25rem;">Request quote for ${query} &rarr;</a>
          </div>
        `;
        suburbResults.style.display = "block";
      }
    });
  }

  // 5. FAQ Accordion Toggle
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function () {
      const parent = this.parentElement;
      const isOpen = parent.classList.contains("open");

      // Close all other FAQs
      document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("open"));

      if (!isOpen) {
        parent.classList.add("open");
      }
    });
  });

  // 6. Pre-fill Booking Form from URL parameters
  const params = new URLSearchParams(window.location.search);
  const paramService = params.get("service");
  const paramNeighbourhood = params.get("neighbourhood");
  const paramVehicle = params.get("vehicle");

  if (paramService) {
    const serviceRadio = document.querySelector(`input[name="serviceRequested"][value="${paramService}"]`);
    if (serviceRadio) {
      serviceRadio.checked = true;
      highlightSelectedRadio(serviceRadio);
    }
  }

  if (paramNeighbourhood) {
    const areaInput = document.getElementById("neighbourhoodInput");
    if (areaInput) areaInput.value = paramNeighbourhood;
  }

  if (paramVehicle) {
    const vehicleRadio = document.querySelector(`input[name="vehicleType"][value="${paramVehicle}"]`);
    if (vehicleRadio) {
      vehicleRadio.checked = true;
      highlightSelectedRadio(vehicleRadio);
    }
  }

  // Radio Card Styling Synchronisation
  function highlightSelectedRadio(radio) {
    const name = radio.name;
    document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
      const card = r.closest(".radio-card");
      if (card) {
        if (r.checked) {
          card.classList.add("selected");
        } else {
          card.classList.remove("selected");
        }
      }
    });
  }

  document.querySelectorAll('.radio-card input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", function () {
      highlightSelectedRadio(this);
    });
    if (radio.checked) {
      highlightSelectedRadio(radio);
    }
  });

  // 7. Booking Form Validation & WhatsApp Dispatch
  const bookingForm = document.getElementById("bookingForm");
  const bookingModal = document.getElementById("bookingModal");

  if (bookingForm) {
    // Set min date for date input to today
    const dateInput = document.getElementById("preferredDateInput");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.min = today;
    }

    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      const fullName = document.getElementById("fullNameInput");
      const nameError = document.getElementById("nameError");
      if (!fullName.value.trim() || fullName.value.trim().length < 2) {
        fullName.classList.add("is-invalid");
        if (nameError) nameError.classList.add("visible");
        isValid = false;
      } else {
        fullName.classList.remove("is-invalid");
        if (nameError) nameError.classList.remove("visible");
      }

      // Validate Phone/WhatsApp
      const phoneInput = document.getElementById("phoneInput");
      const phoneError = document.getElementById("phoneError");
      if (!phoneInput.value.trim() || phoneInput.value.trim().length < 7) {
        phoneInput.classList.add("is-invalid");
        if (phoneError) phoneError.classList.add("visible");
        isValid = false;
      } else {
        phoneInput.classList.remove("is-invalid");
        if (phoneError) phoneError.classList.remove("visible");
      }

      // Validate Neighbourhood
      const neighbourhoodInput = document.getElementById("neighbourhoodInput");
      const areaError = document.getElementById("areaError");
      if (!neighbourhoodInput.value.trim()) {
        neighbourhoodInput.classList.add("is-invalid");
        if (areaError) areaError.classList.add("visible");
        isValid = false;
      } else {
        neighbourhoodInput.classList.remove("is-invalid");
        if (areaError) areaError.classList.remove("visible");
      }

      // Validate Vehicle Type
      const selectedVehicle = document.querySelector('input[name="vehicleType"]:checked');
      const vehicleError = document.getElementById("vehicleError");
      if (!selectedVehicle) {
        if (vehicleError) vehicleError.classList.add("visible");
        isValid = false;
      } else {
        if (vehicleError) vehicleError.classList.remove("visible");
      }

      // Validate Service Requested
      const selectedService = document.querySelector('input[name="serviceRequested"]:checked');
      const serviceError = document.getElementById("serviceError");
      if (!selectedService) {
        if (serviceError) serviceError.classList.add("visible");
        isValid = false;
      } else {
        if (serviceError) serviceError.classList.remove("visible");
      }

      // Validate Date
      const dateVal = dateInput ? dateInput.value : "";
      const dateError = document.getElementById("dateError");
      if (!dateVal) {
        if (dateInput) dateInput.classList.add("is-invalid");
        if (dateError) dateError.classList.add("visible");
        isValid = false;
      } else {
        if (dateInput) dateInput.classList.remove("is-invalid");
        if (dateError) dateError.classList.remove("visible");
      }

      // Validate Terms Checkbox
      const termsBox = document.getElementById("confirmTerms");
      const termsError = document.getElementById("termsError");
      if (termsBox && !termsBox.checked) {
        if (termsError) termsError.classList.add("visible");
        isValid = false;
      } else {
        if (termsError) termsError.classList.remove("visible");
      }

      if (!isValid) {
        const firstError = document.querySelector(".is-invalid, .field-error.visible");
        if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      // Build Formatted British English Message
      const emailVal = document.getElementById("emailInput") ? document.getElementById("emailInput").value.trim() : "";
      const landmarkVal = document.getElementById("landmarkInput") ? document.getElementById("landmarkInput").value.trim() : "";
      const timeSlotVal = document.getElementById("timeSlotSelect") ? document.getElementById("timeSlotSelect").value : "Morning (08:00 – 11:00)";
      const notesVal = document.getElementById("notesInput") ? document.getElementById("notesInput").value.trim() : "";

      const vehicleLabel = selectedVehicle ? (selectedVehicle.getAttribute("data-label") || selectedVehicle.value) : "Not specified";
      const serviceLabel = selectedService ? (selectedService.getAttribute("data-label") || selectedService.value) : "Not specified";

      const lines = [
        `*NEW BOOKING REQUEST — MIST WHEELS*`,
        `----------------------------------------`,
        `*Customer:* ${fullName.value.trim()}`,
        `*Contact:* ${phoneInput.value.trim()}`,
        emailVal ? `*Email:* ${emailVal}` : null,
        `*Neighbourhood / Area:* ${neighbourhoodInput.value.trim()}`,
        landmarkVal ? `*Address / Landmark:* ${landmarkVal}` : null,
        `*Vehicle Category:* ${vehicleLabel}`,
        `*Service Requested:* ${serviceLabel}`,
        `*Preferred Date:* ${dateVal}`,
        `*Preferred Time Slot:* ${timeSlotVal}`,
        notesVal ? `*Additional Notes:* ${notesVal}` : `*Additional Notes:* None`,
        `----------------------------------------`,
        `_Submitted via Mist Wheels website. Booking requests are subject to schedule confirmation._`
      ];

      const formattedMessage = lines.filter(Boolean).join("\n");
      const wa = getWhatsAppDetails(formattedMessage);

      // Open Booking Modal
      const modalText = document.getElementById("modalMessagePreview");
      const modalOpenWaBtn = document.getElementById("modalOpenWaBtn");
      const modalConfigNotice = document.getElementById("modalConfigNotice");

      if (modalText) modalText.textContent = formattedMessage;
      if (modalOpenWaBtn) modalOpenWaBtn.setAttribute("href", wa.url);

      if (modalConfigNotice) {
        if (!wa.hasNumber && !sessionWhatsApp) {
          modalConfigNotice.style.display = "block";
        } else {
          modalConfigNotice.style.display = "none";
        }
      }

      if (bookingModal) {
        bookingModal.classList.add("open");
      }

      // If phone number is configured, trigger WhatsApp window directly
      if (wa.hasNumber) {
        window.open(wa.url, "_blank", "noopener,noreferrer");
      }
    });
  }

  // Close modals
  document.querySelectorAll(".modal-close, .modal-close-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
    });
  });

  // Copy Prepared Message to Clipboard
  const copyBtn = document.getElementById("modalCopyBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      const preview = document.getElementById("modalMessagePreview");
      if (preview) {
        navigator.clipboard.writeText(preview.textContent).then(() => {
          const original = copyBtn.innerHTML;
          copyBtn.innerHTML = `✓ Copied to Clipboard!`;
          copyBtn.style.color = "#22c55e";
          setTimeout(() => {
            copyBtn.innerHTML = original;
            copyBtn.style.color = "";
          }, 2500);
        });
      }
    });
  }

  // 8. Owner Configuration Helper Modal
  const configModal = document.getElementById("configModal");
  function openConfigModal() {
    if (configModal) configModal.classList.add("open");
  }

  document.querySelectorAll(".btn-open-config").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openConfigModal();
    });
  });

  const sessionNumberForm = document.getElementById("sessionNumberForm");
  if (sessionNumberForm) {
    const sessionInput = document.getElementById("sessionNumberInput");
    if (sessionInput && config.contact) {
      sessionInput.value = config.contact.whatsappNumber || sessionWhatsApp || "";
    }

    sessionNumberForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const num = sessionInput.value.trim().replace(/[^0-9]/g, "");
      localStorage.setItem("mw_session_whatsapp", num);
      if (config.contact) {
        config.contact.whatsappNumber = num;
        config.contact.displayWhatsApp = num ? `+${num}` : "WhatsApp Line (Pending Setup)";
      }
      alert(`WhatsApp number updated to ${num} for this session! All WhatsApp buttons will now route here.`);
      if (configModal) configModal.classList.remove("open");
    });
  }
});
