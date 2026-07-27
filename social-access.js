(() => {
  "use strict";

  const config = window.KB_ACCESS_CONFIG || {};
  const PROFILE_URLS = {
    youtube: "https://youtu.be/h61jM0KFE64?si=SAfRPoHHaYQQuczV",
    whatsapp: "https://whatsapp.com/channel/0029VbBzcChG8l5DwUrmSz0X",
    linkedin: "https://www.linkedin.com/posts/pranati-waghodekar-4249aa361_education-teachersmatter-leadership-activity-7469759190576824321-Qrz1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFoGqMnz-qE"
  };

  let selectedPlatform = "";

  const modal = document.getElementById("socialAccessModal");
  const form = document.getElementById("socialAccessForm");
  const status = document.getElementById("socialAccessStatus");
  const submitButton = document.getElementById("submitSocialAccess");
  const closeButton = document.getElementById("closeSocialAccess");
  const platformName = document.getElementById("selectedPlatformName");
  const visitorName = document.getElementById("visitorName");
  const visitorEmail = document.getElementById("visitorEmail");

  // Some pages do not contain social buttons or the popup.
  if (!modal || !form || !status || !submitButton || !closeButton ||
      !platformName || !visitorName || !visitorEmail) {
    return;
  }

  function endpoint() {
    return String(config.appsScriptUrl || "").trim();
  }

  function setStatus(message = "", type = "info") {
    status.textContent = message;
    status.className = `access-status ${type}`;
  }

  function profileTitle(platform) {
    if (platform === "youtube") return "YouTube";
    if (platform === "whatsapp") return "WhatsApp Channel";
    if (platform === "linkedin") return "LinkedIn";
    return "Profile";
  }

  function openModal(platform) {
    selectedPlatform = platform;
    platformName.textContent = profileTitle(platform);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setStatus("");
    window.setTimeout(() => visitorName.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    setStatus("");
  }

  async function saveAccess(name, email, profile) {
    const url = endpoint();

    if (!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(url)) {
      throw new Error("The Google Apps Script Web App URL is not configured correctly.");
    }

    const body = new URLSearchParams({
      name: name,
      email: email,
      profile: profile
    });

    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: body.toString()
    });
  }

  document.querySelectorAll("[data-secure-social]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const platform = String(link.dataset.secureSocial || "").toLowerCase();

      if (!PROFILE_URLS[platform]) {
        return;
      }

      openModal(platform);
    });
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const name = visitorName.value.trim().replace(/\s+/g, " ");
    const email = visitorEmail.value.trim().toLowerCase();

    if (name.length < 2) {
      setStatus("Please enter your full name.", "error");
      visitorName.focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Please enter a valid email address.", "error");
      visitorEmail.focus();
      return;
    }

    const profileUrl = PROFILE_URLS[selectedPlatform];

    if (!profileUrl) {
      setStatus("The selected profile could not be identified.", "error");
      return;
    }

    // Open immediately so browsers do not block the new tab.
    const profileWindow = window.open("about:blank", "_blank");

    submitButton.disabled = true;
    submitButton.textContent = "Opening…";
    setStatus("Recording your access…", "info");

    try {
      await saveAccess(name, email, selectedPlatform);

      setStatus("Thank you. Opening the selected profile…", "success");

      if (profileWindow) {
        profileWindow.opener = null;
        profileWindow.location.replace(profileUrl);
      } else {
        window.location.assign(profileUrl);
      }

      form.reset();
      window.setTimeout(closeModal, 500);
    } catch (error) {
      console.error(error);

      if (profileWindow) {
        profileWindow.close();
      }

      setStatus(
        "Unable to record access. Please verify the Apps Script deployment and try again.",
        "error"
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Continue to Profile";
    }
  });
})();
