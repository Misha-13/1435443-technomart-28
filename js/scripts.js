var pageIndex = document.querySelector("html[id=html-index]");
var pageCatalog = document.querySelector("html[id=html-catalog]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try { 
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
} catch(err) {
    isStorageSupport = false;
};

if (pageIndex) {
    var writeUsLink = document.querySelector("a[id=index-write-us-link]");
    var writeUsPopup = document.querySelector(".modal-write-us");
    var formWriteUs = writeUsPopup.querySelector(".form-write-us");
    var closeWriteUs = writeUsPopup.querySelector("button[name=close-write-us]");
    var nameWriteUs = writeUsPopup.querySelector("input[name=customer]");
    var emailWriteUs = writeUsPopup.querySelector("input[name=email]");
    var messageWriteUs = writeUsPopup.querySelector("textarea[name=message]");

    var mapLink = document.querySelector(".map");
    var mapPopup = document.querySelector(".modal-map");
    var closeMap = mapPopup.querySelector("button[name=close-map]");

    writeUsLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal-hidden");
        nameWriteUs.value = null;
        emailWriteUs.value = null;
        messageWriteUs.value = null;
        if (storageName) {
            nameWriteUs.value = storageName;
            emailWriteUs.value = storageEmail;
            messageWriteUs.focus();
        } else {
            nameWriteUs.focus();
        }

    });

    closeWriteUs.addEventListener("click", function() {
        writeUsPopup.classList.remove("modal-error");
        writeUsPopup.classList.add("modal-hidden");
    });

    formWriteUs.addEventListener("submit", function(evt) {
        if (!nameWriteUs.value || !emailWriteUs.value || !messageWriteUs.value) {
            evt.preventDefault();
            writeUsPopup.classList.remove("modal-error");
            writeUsPopup.offsetWidth=writeUsPopup.offsetWidth;
            writeUsPopup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("userName", nameWriteUs.value);
                localStorage.setItem("userEmail", emailWriteUs.value);
                writeUsPopup.classList.add("modal-hidden"); //для Firefox
                writeUsPopup.classList.remove("modal-error"); // для Firefox
            }
        }
    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (!writeUsPopup.classList.contains("modal-hidden")) {
                evt.preventDefault();
                writeUsPopup.classList.remove("modal-error");
                writeUsPopup.classList.add("modal-hidden");
            }
        }
    });

    mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-hidden");
    });

    closeMap.addEventListener("click", function() {
        mapPopup.classList.add("modal-hidden");
    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (!mapPopup.classList.contains("modal-hidden")) {
                evt.preventDefault();
                mapPopup.classList.add("modal-hidden");
            }
        }
    });
};

if (pageCatalog) {
    var index
    var buyLinkClick
    var buyPopup = document.querySelector(".modal-buy");
    var buyClose = buyPopup.querySelector(".modal-close");
    var buyProceed = buyPopup.querySelector("button[name=buy-proceed]");

    const buyLinks = document.querySelectorAll(".buy-button");

    buyLinks.forEach((buyLink) => buyLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        buyPopup.classList.remove("modal-hidden");
    }));

    buyClose.addEventListener("click", function() {
        buyPopup.classList.add("modal-hidden");
    });

    buyProceed.addEventListener("click", function() {
        buyPopup.classList.add("modal-hidden");
    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (!buyPopup.classList.contains("modal-hidden")) {
                evt.preventDefault();
                buyPopup.classList.add("modal-hidden");
            }
        }
    });
};