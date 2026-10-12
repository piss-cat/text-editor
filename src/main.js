let text = document.getElementById("text-area");

function boldText() {
    if (text.style.fontWeight === "bold") {
        text.style.fontWeight = "normal";
    } else {
        text.style.fontWeight = "bold";
    }
}

function italicText() {
    if (text.style.fontStyle === "italic") {
        text.style.fontStyle = "normal";
    } else {
        text.style.fontStyle = "italic";
    }
}

function alignTextLeft() {
    text.style.textAlign = "left";
}

function alignTextCenter() {
    if (text.style.textAlign === "center") {
        alignTextLeft();
    } else {
        text.style.textAlign = "center";
    }
}

function alignTextRight() {
    if (text.style.textAlign === "right") {
        alignTextLeft();
    } else {
        text.style.textAlign = "right";
    }
}

function upperText() {
    if (text.style.textTransform === "uppercase") {
        text.style.textTransform = "none";
    } else {
        text.style.textTransform = "uppercase";
    }
}

function lowerText() {
    if (text.style.textTransform === "lowercase") {
        text.style.textTransform = "none";
    } else {
        text.style.textTransform = "lowercase";
    }
}

function capitalizeText() {
    if (text.style.textTransform === "capitalize") {
        text.style.textTransform = "none";
    } else {
        text.style.textTransform = "capitalize";
    }
}

function clearStyle() {
    if (text.style.fontWeight !== "normal") {
        text.style.fontWeight = "normal";
    }
    if (text.style.fontStyle !== "normal") {
        text.style.fontStyle = "normal";
    }
    if (text.style.textAlign !== "left") {
        text.style.textAlign = "left";
    }
    if (text.style.textTransform !== "none") {
        text.style.textTransform = "none";
    }
}

function clearText() {
    text.value = '';
}