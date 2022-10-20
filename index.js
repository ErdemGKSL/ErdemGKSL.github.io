const aboutMe = document.getElementById("replacer-0");
aboutMe.textContent = aboutMe.textContent.replace("{0}", ((Date.now() - 1622386800000) / (1000 * 60 * 60 * 24 * 30)).toLocaleString({}, { maximumFractionDigits: 2 }));
